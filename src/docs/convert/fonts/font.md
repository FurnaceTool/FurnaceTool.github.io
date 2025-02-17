# Font Convert

## Learn custom font in bedrock

To learn more about custom font in bedrock, you can visit the [Bedrock Wiki](https://wiki.bedrock.dev/concepts/emojis#custom-emojis)

## Auto convert in furnace

!!! warning "Limitation"
    - Only support bitmap font
    - Only support font in file `default.json` (`assets/minecraft/font/default.json`)
    - Can't be exactly the same as Java

### Ignore auto convert font
To ignore auto convert font, you can add the following to the `furnace.json` file:

```json
{
    "fonts": {
        "0xEE00": {
            "ignore": true
        }
    }
}
```