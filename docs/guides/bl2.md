# Zubayr — Borderlands 2

## What you need

- **Borderlands 2** installed via Steam
- The **Archipelago client** installed: [github.com/ArchipelagoMW/Archipelago/releases](https://github.com/ArchipelagoMW/Archipelago/releases)
- The **Bouncy Loot God** mod: [github.com/EdricY/Bouncy-Loot-God/releases](https://github.com/EdricY/Bouncy-Loot-God/releases)
- **BL2 Mod Manager** v3.7+
- **Coroutines mod** v1.1+ (required dependency — linked in the mod's README)

## Step 1 — Install the mod

1. Download `BouncyLootGod.sdkmod` from the [Bouncy Loot God releases page](https://github.com/EdricY/Bouncy-Loot-God/releases)
2. Place it in your BL2 `sdk_mods` folder
3. Download `borderlands2.apworld` from the same releases page
4. Place it in your Archipelago `custom_worlds` folder
5. Make sure the **Coroutines mod** is also installed (see the mod's README for the link)

## Step 2 — Configure your YAML

1. Download a pre-made YAML from the [sample-yamls folder](https://github.com/EdricY/Bouncy-Loot-God/tree/main/sample-yamls) — `basegame-med.yaml` is a good starting point (~8 hours)
2. Open it in a text editor and set `name` to `Zubayr`
3. Send the `.yaml` file to the host

## Step 3 — Connect to the server

1. Launch **Borderlands 2 Client** from the Archipelago launcher (not the Text Client)
2. Connect to the server: `129.151.222.194:38281`
3. Launch Borderlands 2, enable the mod in-game, and load your character

## Tips

- **Disable the mod before any non-randomizer play** — always re-enable it from the Esc menu after loading a character
- If you see a browser window open when enabling the mod, the Coroutines dependency is missing
- If you can't deal damage at the start, add `Melee: 1` to your starting inventory in your YAML
- If the game crashes on character load: disable the mod, load, then re-enable from Esc
