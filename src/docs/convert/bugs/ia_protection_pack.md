---
icon: octicons/bug-16
---
# ItemsAdder Protection Pack

When you enable the resource pack protection feature in ItemsAdder, the converter will not be able to read the pack, which may cause the following errors:

---

```
File name in directory 'assets/_iainternal/models/entity/player/pbody_2.json' and header b'../\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' differ.
```
```
cannot identify image file 'convert/pack/assets/elitecreatures/textures/japanese_furniture_v4/sign_2.png'
```

To fix this problem, disable the protection pack in ItemsAdder `config.yml`

```yaml
  zip:
    protect-file-from-unzip:
      protection_1: false
      protection_2: false
      protection_3: false # Updated since v4.0.12
```

Alternatively, you can disable obfuscation in Nexo’s `settings.yml`

```yaml
Pack:
  obfuscation:
    type: NONE
    cache: true
```

---
