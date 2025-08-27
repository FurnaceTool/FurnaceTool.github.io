---
icon: octicons/book-16
---
# About furnace.json
The `furnace.json` file is a JSON file that contains the configuration for the furnace converter. If anyone has ever used java2bedrock.sh, then `furnace.json` is the same as `sprites.json`

---

## Editor For furnace.json
We have made a tool to write furnace.json simpler and avoid json syntax errors
> [Furnace Editor](https://furnacetool.github.io)

## Example furnace.json
```json
{
    "material": "entity_alphatest_one_sided",
    "blockmaterial": "alpha_test",
    "modelengine": {
        "namespace": "modelengine",
        "genrate_model": "modelengine3",
        "item": "leather_horse_armor"
    },
    "rename_model_files": true,
    "fonts": {
        "E779": {
            "ignore": true,
            "gui": {
                "offset": [0,0],
                "row": 54
            }
        }
    },
    "items": {
        "minecraft:leather_armor": {
            "custom_model_data": {
                "2200039": {
                    "armor_layer": {
                        "type": "chestplate",
                        "texture": "assets/minecraft/optifine/cit/ia_generated_armors/245b84_1.png",
                        "auto_copy_texture": true
                    }
                }
            }
        },
        "minecraft:arrow": {
            "custom_model_data": {
                "83650": {
                    "unbreakable": true,
                    "allow_offhand": true,
                    "icon": "textures/icon"
                }
            }
        }
    }
}
```

## Where to put `furnace.json` in your resourcepack
You need to put `furnace.json` in the root of your resourcepack
Example:

```
📂pack.zip/
├── 📂assets/
├── 📂pack.mcmeta
└── 📂furnace.json
```

---