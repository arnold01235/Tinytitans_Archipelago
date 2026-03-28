# Anniken — Sly 3: Honor Among Thieves

## What you need

- **Sly 3: Honor Among Thieves** US ISO (version SCUS-97464) — you need to source this yourself
- **PCSX2 emulator** (version 1.7 or higher): [pcsx2.net/downloads](https://pcsx2.net/downloads/)
- **Archipelago client**: [github.com/ArchipelagoMW/Archipelago/releases](https://github.com/ArchipelagoMW/Archipelago/releases)
- **Sly 3 apworld** file: [github.com/NikolajDanger/ApSly3/releases](https://github.com/NikolajDanger/ApSly3/releases)

## Step 1 — Install the apworld

1. Download the `.apworld` file from the [ApSly3 releases page](https://github.com/NikolajDanger/ApSly3/releases)
2. Place it in your Archipelago `lib/worlds/` folder

## Step 2 — Configure PCSX2 (PINE setup)

PINE lets the Archipelago client talk to the emulator — this is required.

1. Open PCSX2
2. Go to **Tools** and enable **Show Advanced Settings**
3. Navigate to **System → Settings → Advanced → PINE Settings**
4. Enable PINE and make sure the slot is set to **28011**

> **Note:** If you have Sly 2 also installed, they use the same PINE slot — only run one at a time.

## Step 3 — Configure your YAML

1. Open the Archipelago launcher
2. Go to **Generate Template Settings** and select Sly 3
3. Open the `.yaml` file in a text editor
4. Set `name` to your slot name (e.g. `Anniken`)
5. Adjust any options you want, then send the file to the host

## Step 4 — Connect to the server

1. Launch your Sly 3 ISO in PCSX2
2. Open the Archipelago launcher and start the **Sly 3 client**
3. Connect to the server — enter the server address, slot name (`Anniken`), and password
4. Wait for the **"Press START..."** message in the client to update before starting
5. Start a **new game**

## Tips

- Must use the **US version** of the ISO (SCUS-97464) — other regions won't work
- Completing jobs, master thief challenges, and ThiefNet purchases are your checks
- Press **X** during cutscenes to skip them
- Save manually through the Options menu if "save and quit" isn't available
- If connection drops, verify PINE is still enabled in PCSX2 and reconnect from the client
