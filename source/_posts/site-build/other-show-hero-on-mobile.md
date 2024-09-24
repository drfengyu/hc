---
title: 在移动端展示顶端大图
date: 2024-09-24 16:48:23
categories: 网站搭建
tags:
#sticky:
#cover:
toc: false
show_in: ("category" | "tag")[]
---

主题默认的配置中，为避免造成视觉干扰，移动端是隐藏了顶部的大图的。但我们可以通过引入自定义的样式表来去除这个限制。
<!-- more -->
## 配置说明

### 引入的新文件

请将下述文件放置于 source 目录中的合适位置，在此处我们使用的是 `others` 目录。

```css mobile-hero.css
@media (max-width: 768px) {
    .kratos-start {
        height: unset !important;
    }
    .kratos-cover.kratos-cover-2.text-center {
        display: block;
    }
}
```

### 更新的配置项

需要更新 `additional_injections` ，**加入**以下内容：

```yml
additional_injections:
  head: |
    <link rel="stylesheet" href="/others/mobile-hero.css" />
```

假设您把上述的文件放置在 source 目录的 others 目录中，且您的站点配置为根目录模式，那么您应当可以通过上述的路径 `/others/mobile-hero.css` 访问到对应的文件。如果您使用的是其他配置，您需要对应调整这个路径。

当您配置完成后重启 Hexo ，您应当可以看见移动端不再隐藏顶部图片。预祝您使用愉快。