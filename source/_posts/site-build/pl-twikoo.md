---
title: 评论区-twikoo
categories:
  - 网站搭建
  - 评论
tags:
  - twikoo
comments: true
toc: true
donate: true
share: true
date: 2024-09-23 10:26:03
excerpt: "为 Kratos : Rebirth 主题添加 Twikoo 评论系统支持"
show_in: ("category" | "tag")[]
---

## 官方介绍

简洁、安全、免费

- 开源仓库: https://github.com/twikoojs/twikoo
- 配置文档: https://twikoo.js.org/frontend.html#%E9%80%9A%E8%BF%87-cdn-%E5%BC%95%E5%85%A5

## 配置说明

### 引入的新文件

请将下述文件放置于 source 目录中的合适位置，在此处我们使用的是 `comments` 目录。

```js twikoo.js
(() => {
  const loadComments = async () => {
    if (typeof twikoo === "undefined") {
      setTimeout(loadComments, 100);
    } else {
      const container = document.getElementById('tcomment');
      if (!container) {
        return;
      }
      twikoo.init({
        envId: '<您的环境id>',
        el: '#tcomment',
      });
    }
  };

  window.loadComments = loadComments;
  window.addEventListener('pjax:success', () => {
    window.loadComments = loadComments;
  });
})();
```

需要替换的内容：

- `<您的环境id>` 需要替换成您根据 Twikoo 官方文档中描述的内容创建的环境信息（腾讯云环境填 envId；Vercel 环境填地址（https://xxx.vercel.app））。

### 更新的配置项

需要更新 `comments` ，**设置为**以下内容：

```yml
comments:
  core:
    enable_at:
      - post
      - page
    template:
      _shared: <div class="kr-comments lazy-load"><div id="tcomment"></div></div>
```

需要更新 `additional_injections` ，**加入**以下内容：

```yml
additional_injections:
  after_footer: |
    <script src="https://cdn.jsdelivr.net/npm/twikoo@1.6.39/dist/twikoo.all.min.js"></script>
    <script src="/comments/twikoo.js"></script>
```

假设您把上述的文件放置在 source 目录的 comments 目录中，且您的站点配置为根目录模式，那么您应当可以通过上述的路径 `/comments/twikoo.js` 访问到对应的文件。如果您使用的是其他配置，您需要对应调整这个路径。

当您配置完成后重启 Hexo ，您应当可以看见正在加载的 Twikoo 实例。预祝您使用愉快。
