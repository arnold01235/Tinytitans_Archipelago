# Matnar — Risk of Rain 2

## What you need

- **Risk of Rain 2** installed via Steam
- **r2modman** (mod manager): [Thunderstore Mod Manager](https://www.overwolf.com/app/Thunderstore-Thunderstore_Mod_Manager)
- The **Archipelago client**: [github.com/ArchipelagoMW/Archipelago/releases](https://github.com/ArchipelagoMW/Archipelago/releases)

## Step 1 — Install r2modman

1. Download and install **r2modman** from Thunderstore
2. Open it and select **Risk of Rain 2** as your game

## Step 2 — Install the Archipelago mod

1. In r2modman, go to the **Online** tab and search for `Archipelago`
2. Click **Install** — all dependencies are handled automatically
3. Make sure the mod is enabled

## Step 3 — Configure your YAML

1. Go to the [Risk of Rain 2 options page](https://archipelago.gg/games/Risk%20of%20Rain%202/player-options) to generate your YAML using the graphical interface
2. Set your slot name to `Matnar`
3. Adjust options like item count (10–250), goal, and game mode
4. Download the generated `.yaml` and send it to the host

## Step 4 — Connect to the server

1. Launch Risk of Rain 2 through r2modman — click **Start modded** (top left)
2. In-game, open the Archipelago connection menu
3. Enter:
   - **Slot Name:** Matnar
   - **Server URL:** *(host will provide)*
   - **Server Port:** *(host will provide)*
   - **Password:** *(if set)*
4. Click **Connect to AP**

## How it works

- Opening chests and killing bosses spawns items — these are your checks
- Items you receive from the multiworld appear as in-game pickups
- The number of items needed to trigger a check is configurable in your YAML

## Tips

- Always launch through r2modman, not directly from Steam
- Multiplayer works — you and others can be in the same RoR2 run while connected to Archipelago
