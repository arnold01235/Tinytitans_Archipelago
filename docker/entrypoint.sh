#!/bin/bash
set -e

if [ "$1" = "generate" ]; then
    echo "Generating multiworld from player YAMLs..."
    python Generate.py --player_files_path players/ --outputpath output/
    echo "Done! Check the output/ folder for the generated .archipelago file."
else
    # Find the most recently generated .archipelago file
    GAME_FILE=$(ls -t output/*.archipelago 2>/dev/null | head -1)

    if [ -z "$GAME_FILE" ]; then
        echo "No .archipelago file found in output/. Run 'generate' first."
        exit 1
    fi

    echo "Starting Archipelago server with $GAME_FILE..."
    python MultiServer.py --port 38281 "$GAME_FILE"
fi
