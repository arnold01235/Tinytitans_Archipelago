# Arnold — Sly 2: Band of Thieves

## What you need

- **Sly 2: Band of Thieves** US ISO (version SCUS-97316) — you need to source this yourself
- **PCSX2 emulator** (version 1.7 or higher): [pcsx2.net/downloads](https://pcsx2.net/downloads/)
- **Archipelago client**: [github.com/ArchipelagoMW/Archipelago/releases](https://github.com/ArchipelagoMW/Archipelago/releases)
- **Sly 2 apworld** file: [github.com/NikolajDanger/APSly2/releases](https://github.com/NikolajDanger/APSly2/releases)

## Step 1 — Install the apworld

1. Download the `.apworld` file from the [APSly2 releases page](https://github.com/NikolajDanger/APSly2/releases)
2. Place it in your Archipelago `lib/worlds/` folder (inside your Archipelago installation)

## Step 2 — Configure PCSX2 (PINE setup)

PINE lets the Archipelago client talk to the emulator — this is required.

1. Open PCSX2
2. Go to **Tools** and enable **Show Advanced Settings**
3. Navigate to **System → Settings → Advanced → PINE Settings**
4. Enable PINE and make sure the slot is set to **28011**

## Step 3 — Configure your YAML

1. Open the Archipelago launcher
2. Go to **Generate Template Settings** and select Sly 2
3. Open the `.yaml` file in a text editor
4. Set `name` to your slot name (e.g. `Arnold`)
5. Adjust any options you want, then send the file to the host

## Step 4 — Connect to the server

1. Launch your Sly 2 ISO in PCSX2
2. Open the Archipelago launcher and start the **Sly 2 client**
3. Connect to the server — enter the server address, slot name (`Arnold`), and password
4. Wait for the **"Press START..."** message in the client to update before starting
5. Start a **new game**

## Optional — Quality of Life

- Skip intro videos: type `/menu` in the client chat
- Skip in-engine cutscenes: apply the [put_down_the_popcorn patch](https://github.com/zzamizz/weed-sheet/blob/main/mods/advantage/sly2/put_down_the_popcorn/07652DD9.put_down_the_popcorn.pnach) (a `.pnach` file for PCSX2)

## Tips

- Completing jobs, collecting treasures, unlocking vaults, and buying from ThiefNet are your checks
- Make sure you're using the **US version** of the ISO (SCUS-97316) — other regions won't work
- If connection drops, verify PINE is still enabled in PCSX2 and reconnect from the client
- Save manually through the Options menu if "save and quit" isn't available
