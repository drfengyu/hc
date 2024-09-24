---
title: 随机文章封面图
date: 2024-09-24 23:27:33
categories: 网站搭建
tags:
#sticky:
#cover:
toc: true
excerpt: "为 Kratos : Rebirth 主题添加随机文章封面图效果"
show_in: ("category" | "tag")[]
---

{% alertbar warning "

此处的媒体资源仅用作样例展示，生产环境中请自行更换为您持有使用权的媒体资源，非常感谢。

" %}

## 配置说明

### 引入的新文件

请将下述文件放置于 source 目录中的合适位置，在此处我们使用的是 `others` 目录。

```js random-post-cover.js
(() => {
  // 请设置为您在配置中配置的默认封面路径
  const defaultCoverSrc = "/images/default.webp";
  // 请设置为您的随机文件基础路径（{no} 替代编号，从 1 开始）
  const randomImageSrcTemplate = "https://www.unpkg.com/hexo-theme-kratos-rebirth@2.2.0/source/images/thumb/thumb_{no}.webp";
  // 请设置为您的随机图片文件数量
  const randomImageCount = 20;

  // 初始化暂存目录，使用减员随机来减少连续重复可能导致的糟糕体验
  const usedImages = new Array(randomImageCount);

  // 初始化随机函数
  const generateNewCoverID = () => {
    let remailFailCounts = 2; // 设置最大随机失败介入次数
    let imageNo;
    while (remailFailCounts > 0) {
      // 随机挑选一个
      imageNo = Math.floor(Math.random() * randomImageCount);
      if (!usedImages[imageNo]) {
        // 有效
        break;
      } else {
        // 无效，重试
        remailFailCounts--;
      }
    }

    if (remailFailCounts <= 0) {
      // 随机失败了，寻找最近的未使用元素
      imageNo = -1;
      for (let i = 0; i < randomImageCount; i++) {
        if (!usedImages[i]) {
          // 找到了
          imageNo = i;
          break;
        }
      }
      if (imageNo === -1) {
        // 全都被使用过了，清空重置
        for (let i = 0; i < randomImageCount; i++) {
          usedImages[i] = false;
        }
        // 随机挑选一个
        imageNo = Math.floor(Math.random() * randomImageCount);
      }
    }

    // 标记为已经使用过的
    usedImages[imageNo] = true;

    // 返回 +1 来从 1 开始
    return imageNo + 1;
  }

  // 替换所有使用默认图片的元素
  const randAll = () => {
    const allDefaultImageEls = document.querySelectorAll(`img.kratos-entry-thumb-img[src='${defaultCoverSrc}']`);
    for (const el of allDefaultImageEls) {
      el.setAttribute('src', randomImageSrcTemplate.replace("{no}", generateNewCoverID().toString()));
    }
  }

  // 调用一次
  randAll();
  // 在 PJAX 之后再调用一次
  window.addEventListener('pjax:complete', randAll);
})();
```

### 更新的配置项

需要更新 `additional_injections` ，**加入**以下内容：

```yml
additional_injections:
  after_footer: |
    <script src="/others/random-post-cover.js"></script>
```

假设您把上述的文件放置在 source 目录的 others 目录中，且您的站点配置为根目录模式，那么您应当可以通过上述的路径 `/others/random-post-cover.js` 访问到对应的文件。如果您使用的是其他配置，您需要对应调整这个路径。

当您配置完成后重启 Hexo ，您应当可以看见使用默认图片的文章图片被自动更换。预祝您使用愉快。

为避免让访客感到疑惑，您还可以修改配置项，使用一张「加载中」的图片作为默认的封面路径。