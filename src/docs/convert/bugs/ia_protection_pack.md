# ItemsAdder Protection Pack

When you enable the resource package protection function in ItemsAdder, the converter will not be able to read the pack, which will cause the following error:

```
File name in directory 'assets/_iainternal/models/entity/player/pbody_2.json' and header b'../\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\' differ.
```

To fix this problem, you need to remove the protection pack in ItemsAdder `config.yml`

```yaml
  zip:
    protect-file-from-unzip:
      protection_1: false
      protection_2: false
```