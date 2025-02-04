# Custom Armor
Because armor has many ways to be displayed in Minecraft Java, it can only be manually converted.

---

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

``` json hl_lines="6-10"
{
	"items": {
		"minecraft:leather_helmet": {
			"custom_model_data": {
				"1000": {
					"armor_layer": {
						"type": "helmet",
						"texture": "assets/minecraft/optifine/cit/ia_generated_armors/000000_2.png",
						"auto_copy_texture": true
					}
				}
			}
		}
	}
}
```

## Auto Copy Armor Texture
If this option is enabled, the converter will automatically copy the armor texture from the Java Edition resource pack to the Bedrock Edition resource pack (Even if there is no texture to convert, the custom armor will still be created but the armor texture will be left blank).
If it is disabled, the texture you enter will be used for the attachables of the armor in the Bedrock Edition resource pack.

!!! note "Example 1: Enable auto_copy_texture"
    If you enter `assets/furnace/textures/armor_layer.png`, it will be converted to `textures/models/armor/furnace/{iditem}.png`
!!! note "Example 2: Disable auto_copy_texture"
    If you enter `textures/armor_layer.png`, it will remain unchanged when added to the Bedrock attachables
---