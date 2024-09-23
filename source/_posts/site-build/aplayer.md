---
title: Aplayer
categories:
  - 网站搭建
  - 播放器
tags:
  - 音乐
comments: true
toc: true
donate: true
share: true
date: 2024-09-23 10:43:13
show_in: ("category" | "tag")[]
---

# APlayer | Kratos : Rebirth

> ## Excerpt
> 为 Kratos : Rebirth 主题添加 APlayer 支持

---
___

## 介绍

使用 APlayer 的 [吸底模式](https://aplayer.js.org/#/zh-Hans/?id=%E5%90%B8%E5%BA%95%E6%A8%A1%E5%BC%8F) 。

## 配置说明

### 引入的新文件

请将下述文件放置于 source 目录中的合适位置，并根据您的需要调整对应的配置参数。在此处我们使用的是 `widgets` 目录。

首先是一个调整 footer 的样式文件。它能稍微抬高一点 footer 以放下歌词组件。

```aplayer.css
#footer {
  padding-bottom: 32px;
}
```
如果您需要直接使用 APlayer ，您可以这样引入初始化配置文件：

```aplayer.js
const ap = new APlayer({
  container: document.getElementById('aplayer'),
  fixed: true,
  audio: [], // 这里加载您的音频配置
});
```

如果您需要使用 [MetingJS](https://github.com/metowolf/MetingJS) ，您不需要引入上面这个文件。

### 更新的配置项

需要更新 `additional_injections` ，**加入**以下内容：

```
additional_injections:
  head: |
    <link rel="stylesheet" href="https://unpkg.com/aplayer@1.10.1/dist/APlayer.min.css">
    <link rel="stylesheet" href="/widgets/aplayer.css">
  after_footer: |
    <script src="https://unpkg.com/aplayer@1.10.1/dist/APlayer.min.js"></script>
```

如果您需要直接使用 APlayer ，您需要引入组件和初始化配置文件：

```
additional_injections:
  footer: |
    <div id="aplayer"></div>
  after_footer: |
    <script src="/widgets/aplayer.js"></script>
```

如果您需要使用 MetingJS ，您可以这样引入（请根据您的需要自行调整对应的配置参数）：

```
additional_injections:
  footer: |
    <meting-js server="netease" type="playlist" id="60198" fixed="true"></meting-js>
  after_footer: |
    <script src="https://unpkg.com/meting@2.0.1/dist/Meting.min.js"></script>
```

假设您把上述的文件放置在 source 目录的 widgets 目录中，且您的站点配置为根目录模式，那么您应当可以通过上述的两个路径 `/widgets/aplayer.css` 和 `/widgets/aplayer.js` 访问到对应的文件。如果您使用的是其他配置，您需要对应调整这两个路径。

当您配置完成后重启 Hexo ，您应当可以看见站点加载了 APlayer 播放器。预祝您使用愉快。

