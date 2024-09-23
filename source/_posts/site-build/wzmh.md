---
title: 站点离开提示
categories: 
  - 网站搭建
  - 站点特效
tags:
comments: true
toc: true
donate: true
share: true
date: 2024-09-23 11:13:49
excerpt: "为 Kratos : Rebirth 主题添加失去焦点时调整标签页内容的功能"
show_in: ("category" | "tag")[]
---

## 配置说明

### 引入的新文件

请将下述文件放置于 source 目录中的合适位置，并根据您的需要调整对应的配置参数。在此处我们使用的是 `effects` 目录。

```js leave-event.js
(() => {
  // 配置部分
  const leaveDelay = 30; // 触发事件的延迟，单位为秒
  const leaveFavicon = null; // 触发事件后的图标路径，设置为 null 表示不替换图标
  const leaveTitle = "{{{(>_<)}}}哦哟，崩溃啦~"; // 触发事件后的标题
  const returnTitle = "(*´∇｀*)欸，又好啦~"; // 回归之后的标题

  // 代码部分
  let originTitle = "";
  const saveTitle = () => {
    originTitle = document.title;
  };

  let inactiveTimeout = null;
  const siteFavicon = document.querySelector('[rel="icon"]');
  const originFaviconUrl = siteFavicon.getAttribute("href");
  document.addEventListener("visibilitychange", (ev) => {
    if (ev.target.hidden) {
      // 触发离开事件，开始计时
      inactiveTimeout = setTimeout(() => {
        document.title = leaveTitle;
        if (leaveFavicon) {
          siteFavicon.setAttribute("href", leaveFavicon);
        }
        inactiveTimeout = null;
      }, leaveDelay * 1000);
    } else {
      // 触发回归事件
      if (inactiveTimeout !== null) {
        // 还在计时，（假装）无事发生
        clearTimeout(inactiveTimeout);
        inactiveTimeout = null;
      } else {
        // 回归了，庆祝一下
        document.title = returnTitle;
        if (leaveFavicon) {
          siteFavicon.setAttribute("href", originFaviconUrl);
        }

        // 稍等一等再把标题改回来
        setTimeout(() => {
          document.title = originTitle;
        }, 2000);
      }
    }
  });


  // 保存标题
  saveTitle();
  // 在 PJAX 之后再保存标题
  window.addEventListener('pjax:complete', saveTitle);
})();
```

### 更新的配置项

需要更新 `additional_injections` ，**加入**以下内容：

```yml
additional_injections:
  after_footer: |
    <script src="/effects/leave-event.js"></script>
```

假设您把上述的文件放置在 source 目录的 effect 目录中，且您的站点配置为根目录模式，那么您应当可以通过上述的路径 `/effect/leave-event.js` 访问到对应的文件。如果您使用的是其他配置，您需要对应调整这个路径。

当您配置完成后重启 Hexo ，您应当可以看见效果生效。