# Custom Armor
Because armor has many ways to be displayed in Minecraft Java, it can only be manually converted.

---

!!! note "Auto Generate Custom Armor"
	We have made a tool to be able to automatically export armor from the config of ItemsAdder and some other plugins to **furnace.json** and texture armor to the folder to merge with the resourcepack after conversion.

	[Auto Generate Custom Armor](https://github.com/FurnaceTool/ArmorExtract)

## How to convert armor
You will need to use **furnace.json** to customize this. You will need to have an armor layer in your Java Edition resourcepack [(or you can add it after converting)](#auto-copy-armor-texture).

!!! note "Example Resourcepack structure"
	```
	📂pack/
	└── 📂assets/
		├── 📂minecraft/
		│   └── 📂optifine/
		│       └── 📂cit/
		│           └── 📂ia_generated_armors/
		│               └── 📁000000_2.png
		└── 📂furnace-example/
			├── 📂models
			└── 📂textures
	```

!!! note "Layer use for armor"
	For helmet, chestplate, boots layer use is layer 1, leggings layer use is layer 2

``` json hl_lines="6-10"
{
	"items": {
		"minecraft:leather_helmet": {
			"custom_model_data": {
				"1000": {
					"armor_layer": {
						"type": "leggings",
						"texture": "assets/minecraft/optifine/cit/ia_generated_armors/000000_2.png",
						"auto_copy_texture": true
					}
				}
			}
		}
	}
}
```

## Armor type
Types: helmet, chestplate, leggings, boots

## Auto Copy Armor Texture
If this option is enabled, the converter will automatically copy the armor texture from the Java Edition resource pack to the Bedrock Edition resource pack (Even if there is no texture to convert, the custom armor will still be created but the armor texture will be left blank).
If it is disabled, the texture you enter will be used for the attachables of the armor in the Bedrock Edition resource pack.

!!! note "Example 1: Enable auto_copy_texture"
    If you enter `assets/furnace/textures/armor_layer.png`, it will be converted to `textures/models/armor/furnace/{iditem}.png`
!!! note "Example 2: Disable auto_copy_texture"
    If you enter `textures/armor_layer.png`, it will remain unchanged when added to the Bedrock attachables
---