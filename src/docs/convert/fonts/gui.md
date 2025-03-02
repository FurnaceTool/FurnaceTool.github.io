---
icon: octicons/image-16
---
# Custom Gui
Because GUI in java is a font need offset but bedrock can't offset font, so you need to use **furnace.json** to customize this.

---
## Guided installation

<div style="position: relative; padding-bottom:calc(46.09720176730486% + 50px); height: 0;">
<iframe id="9r2m6zxazk" src="https://app.guideflow.com/embed/9r2m6zxazk" width="100%" height="100%" style="overflow:hidden;position:absolute;border:none" scrolling="no" allow="clipboard-read; clipboard-write" webkitallowfullscreen mozallowfullscreen allowfullscreen allowtransparency="true"></iframe>
<script src="https://app.guideflow.com/assets/opt.js" data-iframe-id="9r2m6zxazk"></script>
</div>

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

## Installation Guide for furnace.json

### Structure `furnace.json`

!!! note "furnace.json"
    ```json hl_lines="4-7"
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

- You need to place the `furnace.json` file inside **`generated.zip`** according to the [specific structure](http://furnacetool.xyz/docs/convert/furnacejson/#where-to-put-furnacejson-in-your-resourcepack).

---