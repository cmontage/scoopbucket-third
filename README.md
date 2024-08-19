<p align="center"><img src="https://gcore.jsdelivr.net/gh/cmontage/scoopbucket@main/bin/scoop.png" alt="Scoop Logo" ></p>

<h1 align="center">Third Bucket All In One</h1>

将 Scoop 第三方库整合成一个 Bucket，每日同步，主要用于我的 [Scoop 官方整合库](https://github.com/cmontage/scoopbucket)的拓展，安装应用时便于分辨官方源与第三方源。

## 介绍

包含了我觉得自己用得到的 Scoop 第三方库：

    ivaquero/scoopet
    scoopcn/scoopcn
    kkzzhizhou/scoop-apps
    anderlli0053/DEV-tools
    akirco/aki-apps

本应用库每天自动更新一次。

## 安装 Scoop

请看[这里](https://github.com/cmontage/scoopbucket?tab=readme-ov-file#%E5%AE%89%E8%A3%85-scoop)，或者[官方文档](https://github.com/ScoopInstaller/Install#readme)

## 添加仓库

> [!CAUTION]
> 确保你已经安装了 Scoop ！
>
> 建议与我的 Scoop 官方整合库一起使用
>
> 输入 scoop -V 命令查看 Scoop 版本

添加本仓库，运行命令

    ```powershell
    scoop bucket add third https://mirror.ghproxy.com/github.com/cmontage/scoopbucket-third

    # 如果需要移除本仓库
    scoop bucket rm third
    ```

> [!TIP] 
>
> 如果你之前添加过其他 bucket 并下载过应用，你希望他们全部或者部分使用本仓库来进行更新。那么你需要在 app 安装后的 apps\current 路径下的 install.json 的 bucket 项的值改为 third。然后运行 scoop list 来检查是否替换成功。
> 
> 如果要批量修改，直接 vscode 搜索替换大法。

## 安装应用

搜索应用：

```powershell
scoop-search APPNAME
```

安装应用：

```powershell
scoop install third/APPNAME
```

## 查看帮助

要了解 Scoop 的更多用法，请查看 [Scoop Wiki](https://github.com/ScoopInstaller/Scoop/wiki)。或运行命令查看简要的帮助：

```powershell
scoop help
```
