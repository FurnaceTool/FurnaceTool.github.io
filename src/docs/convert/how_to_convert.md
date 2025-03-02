---
icon: octicons/question-16
---
# How to Convert and Set Up for Geyser
Follow these steps to convert your Java resource pack for use with Geyser.

---

## Step 1: Create a Direct Link for Your Java Resource Pack

To begin, upload your Java resource pack to a file hosting service that allows direct downloads. Here are some recommended platforms:

- **Dropbox**: [dropbox.com](https://www.dropbox.com)
- **Lobfile**: [lobfile.com](https://www.lobfile.com)
- **Google Drive**: [drive.google.com](https://drive.google.com)
- **OneDrive**: [onedrive.live.com](https://onedrive.live.com)

!!! warning "Make sure that any resource pack protection is disabled to allow proper access."
    [:octicons-arrow-right-24: **Detailed Guide**](bugs/ia_protection_pack.md)  

## Step 2: Convert Using the Bot
Utilize the bot's `/convert` command to transform your Java resource pack:

<figure markdown="span">
  ![](https://qu.ax/qxfrY.png){ width="400" }
</figure>

   - **Pack URL**: Enter the direct link to your Java resource pack.
   - **Version (Optionally)**: select the default assets Java pack version.
   - **Bedrock Merge Pack URL (Optionally)**: provide a direct link to a Bedrock pack to merge with the converted pack.

**Receive Converted Pack**: Wait for the bot to process your request. A link to the converted pack will be sent once ready.

<figure markdown="span">
  ![](https://qu.ax/KXCfl.jpeg){ width="800" }
</figure>

## Step 3: Install the Pack into Geyser

To integrate the converted pack into Geyser:

**Prepare the Pack**:

   - Compress the Bedrock resource pack folder into a `.mcpack` file.

<figure markdown="span">
  ![](https://qu.ax/zOvom.jpeg){ width="800" }
</figure>

**Place in Geyser Directory**:

   - Move the `.mcpack` file into the `packs` folder within your Geyser directory.

    <figure markdown="span">
    ![](https://qu.ax/QJgLa.jpeg){ width="800" }
    </figure>

   - Place any mapping files into the `custom_mappings` folder in Geyser.

    <figure markdown="span">
    ![](https://qu.ax/OnqKh.jpeg){ width="800" }
    </figure>

**Restart your server**:

   - That's it! Your resource pack is now ready for use with Geyser.

---