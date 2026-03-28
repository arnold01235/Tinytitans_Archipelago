# John — Call of Duty: Black Ops III (Zombies)

> **Note:** This mod is for **Zombies mode only**, not the campaign or multiplayer.

## What you need

- **Call of Duty: Black Ops III** installed via Steam
- The **Archipelago client**: [github.com/ArchipelagoMW/Archipelago/releases](https://github.com/ArchipelagoMW/Archipelago/releases)
- The **BO3 Archipelago mod + apworld**: [github.com/colin969/bo3_archipelago/releases](https://github.com/colin969/bo3_archipelago/releases)

## Supported Maps

- Shadows of Evil
- The Giant
- Der Eisendrache
- Zetsubou No Shima
- Gorod Krovi
- Revelations

## Step 1 — Downgrade the game

The mod requires an older version of BO3. To downgrade:

1. Open Steam and go to the console via `steam://open/console` in your browser address bar
2. In the Steam console, run:
   ```
   download_depot 311210 311211 9084453472036406216
   ```
3. Once downloaded, copy the old executable into your main BO3 game folder (overwrite the existing one)

## Step 2 — Install the mod

1. Download `BO3APMod.zip` from the [releases page](https://github.com/colin969/bo3_archipelago/releases)
2. If it doesn't exist, create a `mods` folder inside your BO3 directory:
   - `Call of Duty Black Ops III\mods\`
3. Extract the zip so the folder ends up at:
   - `Call of Duty Black Ops III\mods\bo3_archipelago\`

## Step 3 — Install the apworld

1. Download `cod-bo3.apworld` from the [releases page](https://github.com/colin969/bo3_archipelago/releases)
2. Place it in your Archipelago `lib/worlds/` folder

## Step 4 — Configure your YAML

1. Open the Archipelago launcher
2. Go to **Generate Template Settings** and select Black Ops 3
3. Open the `.yaml` file in a text editor
4. Set `name` to your slot name (e.g. `John`)
5. Choose your map, victory condition (Easter egg, round target, weapon quest), and other options
6. Send the `.yaml` file to the host

## Step 5 — Connect to the server

1. Launch Black Ops 3 and load the **bo3_archipelago** mod from the in-game mod menu
2. Start a Zombies game on your chosen map
3. Enter your server address, slot name (`John`), and password when prompted
4. Confirm the connection and start playing

## Tips

- Perk machines, Pack-a-Punch, and special weapons are locked behind items — you'll receive them from the multiworld
- Use the save/restore system if you need to switch maps mid-session
- If you get stuck, open the console (`~`) — debug commands like `/ap_send_location` and `/ap_trigger_item` can help
- DeathLink is available if the group wants to enable it (dying sends a death to everyone)
