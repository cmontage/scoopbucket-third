<p align="center"><img src="https://gcore.jsdelivr.net/gh/cmontage/scoopbucket@main/bin/scoop.png" alt="Scoop Logo" ></p>

<h1 align="center">Third Bucket All In One</h1>

将 Scoop 第三方库整合成一个 Bucket，每日同步，便于使用。

## 介绍

包含了我觉得自己用得到的 Scoop 第三方库：

    ivaquero/scoopet
    scoopcn/scoopcn
    kkzzhizhou/scoop-apps
    anderlli0053/DEV-tools
    akirco/aki-apps

本应用库每天自动更新一次。

## 安装 Scoop

- [PowerShell](https://learn.microsoft.com/zh-cn/powershell/) 版本在 5.1 或以上这条不用看了，如果没有 PowerShell 大于 5.1 版本，可以下载安装 [PowerShell Core](https://github.com/PowerShell/PowerShell)。运行以下命令查看：

```powershell
$PSVersionTable.PSVersion.Major # should be >= 5.1
```

- 之后请根据 [官方教程](https://github.com/ScoopInstaller/Install#readme) 安装 Scoop，建议自定义安装目录，以下为我建议的配置。

```powershell
# 设置 PowerShell 执行策略
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser

# 下载安装脚本到本地
irm https://mirror.ghproxy.com/raw.githubusercontent.com/lzwme/scoop-proxy-cn/master/install.ps1 -outfile 'install.ps1'

# 自定义 Scoop 安装目录，以下是我的路径例子，你可以自己根据情况修改
.\install.ps1 -ScoopDir 'D:\Scoop\ScoopApps' -ScoopGlobalDir 'D:\Scoop\ScoopApps-G' -NoProxy

# Scoop 换镜像源
scoop config SCOOP_REPO https://mirror.ghproxy.com/github.com/ScoopInstaller/Scoop

# Main Bucket 换镜像源
scoop bucket rm main
scoop bucket add main https://mirror.ghproxy.com/github.com/ScoopInstaller/Main
```

## 添加仓库

> [!CAUTION]
> 确保你已经安装了 Scoop ！
>
> 输入 scoop -V 命令查看 Scoop 版本

1. 添加本仓库，运行命令

    ```powershell
    scoop bucket add third https://mirror.ghproxy.com/github.com/cmontage/scoopbucket-third

    # 如果需要移除本仓库
    scoop bucket rm third
    ```

2. 下载几个基本的应用，注意使用代理最好不要用aria2

    ```powershell
    # 下载 7zip git sudo dark innounp ...
    scoop install main/7zip main/git main/aria2 main/sudo main/dark main/innounp 
    ```

3. 使用替换自带的 scoop search，因为自带的比较慢

    ```powershell
    scoop install main/scoop-search

    # 使用 scoop-search ，例如
    scoop-search 7zip
    ```

4. 如果你之前添加过其他 bucket 并下载过应用，你希望他们都使用本仓库来进行更新。那么你需要在每个 app 安装后的 apps\current 路径下的 install.json 的 bucket 项的值改为 scoop。然后运行 scoop list 来检查是否替换成功。如果要批量修改，直接 vscode 搜索替换大法。

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
