# Custom Font & GUI
With Furnace Bot, you can use **furnace.json** to customize the **GUI** and **Font**. This file allows you to adjust the position, size, and display properties of the GUI within a resource pack.

---

## Example Resource Pack Structure

Below is an example of a Resource Pack structure that supports GUI customization:

!!! note "Example Resourcepack structure"
    ```
    📂 pack/
    └── 📂 assets/
        ├── 📂 minecraft/
        │   ├── 📂 font/
        │   │   └── default.json
        │   └── 📂 textures/
		│       └── 📂shop/
		│           └── main.png
        ├── 📂 furnace-example/
        │   └── 📂 textures/
        │       └── 📂 ranks/
		│           └── admin.png
        └── furnace.json
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
                "🧨"
            ]
        },
        {
            "type": "bitmap",
            "file": "furnace-example:ranks/admin.png",
            "ascent": 8,
            "height": 9,
            "chars": [
                "ፀ"
            ]
        }
    }
    ```
---

## How to convert gui
You will need to use **furnace.json** to customize this.

Example:

```json
{
	"fonts": {
		"🧨": {
			"ignore": true,
			"gui": {
				"offset": [40,21],
				"row": 54,
            }
		}
	}
}
```
## Guided installation

{% @guideflow/guideflow-embed requestedUrl="https://app.guideflow.com/player/dr96exmsor" fullWidth="true" %}

***

## Explanation of `furnace editor` Elements

### 1. **Font Symbol**
- The `"fonts"` property contains Unicode symbols used for GUI customization.
- Each Unicode character (`"0x662f"`, `"0x5f50"`, etc.) represents a specific GUI element.

### 2. **The `ignore` Property**
- `"ignore": true` means skipping the process of adding GUI textures into the sprite sheets.

### 3. **The `gui` Property**
Contains GUI-related settings:

- **"Gui Offset X"**
  - Increasing the `"offset x"` value will move the GUI to the right.

- **"Gui Offset Y"**
  - Increasing the `"offset x"` value will move the GUI downward.

- **"Gui Width, Height"**
  - Defines the **size** of the GUI.

- **"Gui Small/Large Chest"**
  - If set to `true`, the GUI will use the corresponding **large chest/small chest** interface.
  - Gui raw from `36-54` is a `large chest`, `9-27` is a `small chest`, `5` is a `hopper`.

---
