const PLAYERS = Object.freeze([
  { player: 'Elias',   game: 'Super Mario 64',          slug: 'sm64',        emoji: '⭐', accent: 0 },
  { player: 'Adrian',  game: 'Inscryption',              slug: 'inscryption', emoji: '🃏', accent: 1 },
  { player: 'Zubayr',  game: 'Borderlands 2',            slug: 'bl2',         emoji: '🔫', accent: 2 },
  { player: 'Matnar',  game: 'Risk of Rain 2',            slug: 'ror2',        emoji: '🌧️', accent: 3 },
  { player: 'Mathias', game: 'Stardew Valley',           slug: 'stardew',     emoji: '🌱', accent: 4 },
  { player: 'Eskil',   game: 'Resident Evil 3',          slug: 're3',         emoji: '🧟', accent: 5 },
  { player: 'Hans',    game: 'Zelda: Ocarina of Time',   slug: 'oot',         emoji: '🎵', accent: 6 },
  { player: 'Arnold',  game: 'Sly 2: Band of Thieves',   slug: 'sly2',        emoji: '🦝', accent: 7 },
  { player: 'John',    game: 'Black Ops 3 (Zombies)',     slug: 'bo3',         emoji: '🧠', accent: 8 },
  { player: 'Anniken', game: 'Sly 3: Honor Among Thieves', slug: 'sly3',      emoji: '🐢', accent: 2 },
]);

const guideCache = {};

document.addEventListener('DOMContentLoaded', () => {
  marked.setOptions({ breaks: true, gfm: true });

  const cardGrid     = document.getElementById('card-grid');
  const modalOverlay = document.getElementById('modal-overlay');
  const modal        = document.getElementById('modal');
  const modalClose   = document.getElementById('modal-close');
  const modalEmoji   = document.getElementById('modal-emoji');
  const modalPlayer  = document.getElementById('modal-player-name');
  const modalGame    = document.getElementById('modal-game-name');
  const modalBody    = document.getElementById('modal-body');

  // ── Prefetch all guides in the background ───────────────────────────────
  const prefetch = () => PLAYERS.forEach(({ slug }) => fetchGuide(slug).catch(() => {}));
  if ('requestIdleCallback' in window) requestIdleCallback(prefetch);
  else setTimeout(prefetch, 200);

  // ── Render cards ────────────────────────────────────────────────────────
  PLAYERS.forEach((entry, i) => {
    const btn = document.createElement('button');
    btn.className = 'card';
    btn.setAttribute('data-accent', entry.accent);
    btn.setAttribute('aria-label', `Open guide for ${entry.player} — ${entry.game}`);
    btn.style.animationDelay = `${i * 60}ms`;
    btn.innerHTML = `
      <span class="card-emoji">${entry.emoji}</span>
      <span class="card-player">${entry.player}</span>
      <span class="card-game">${entry.game}</span>
    `;
    btn.addEventListener('click', () => openGuide(entry));
    cardGrid.appendChild(btn);
  });

  // ── Fetch markdown ───────────────────────────────────────────────────────
  async function fetchGuide(slug) {
    if (guideCache[slug]) return guideCache[slug];
    const res = await fetch(`guides/${slug}.md`);
    if (!res.ok) throw new Error(`Failed to load guide (${res.status})`);
    const text = await res.text();
    guideCache[slug] = text;
    return text;
  }

  // ── Open guide ───────────────────────────────────────────────────────────
  async function openGuide(entry) {
    modalEmoji.textContent  = entry.emoji;
    modalPlayer.textContent = entry.player;
    modalGame.textContent   = entry.game;
    modalBody.innerHTML = `
      <div class="loading-pulse">
        <div class="loading-dots">
          <span></span><span></span><span></span>
        </div>
        Loading guide…
      </div>
    `;
    modal.scrollTop = 0;
    modalOverlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';

    try {
      const markdown = await fetchGuide(entry.slug);
      modalBody.innerHTML = marked.parse(markdown);
      // Open all links in new tab
      modalBody.querySelectorAll('a[href^="http"]').forEach(a => {
        a.setAttribute('target', '_blank');
        a.setAttribute('rel', 'noopener noreferrer');
      });
    } catch (err) {
      modalBody.innerHTML = `<div class="fetch-error">Could not load guide: ${err.message}</div>`;
    }
  }

  // ── Close guide ───────────────────────────────────────────────────────────
  function closeModal() {
    modalOverlay.classList.remove('is-open');
    document.body.style.overflow = '';
    setTimeout(() => { modalBody.innerHTML = ''; }, 200);
  }

  modalClose.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', e => { if (e.target === modalOverlay) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
});
