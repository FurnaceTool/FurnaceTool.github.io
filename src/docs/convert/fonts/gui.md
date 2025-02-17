# Custom Gui
Because GUI in java is a font need offset but bedrock can't offset font, so you need to use **furnace.json** to customize this.

## Convert Gui
!!! note "Example Resourcepack structure"
    ```
    📂pack/
    └── 📂assets/
        └── 📂minecraft/
            ├── 📂font/
            |    └── 📂default.json
            └── 📂textures/
                └── 📂shop/
                    └── 📂gui.png
    ```

!!! note "default.json"
    ```json
    {
        {
            "type": "bitmap",
            "file": "shop/main.png",
            "ascent": 256,
            "height": 256,
            "chars": [
                "\uEE01"
            ]
        }
    }
    ```

```json hl_lines="3-6"
{
    "fonts": {
        "0xEE01": {
            "gui": {
                "offset": [40,21],
                "size": [256,256],
                "row": 54
            }
        }
    }
}
```