---
title: 分享平台
date: 2024-09-24 10:22:36
categories: 网站搭建
tags:
#sticky:
#cover:
toc: false
excerpt: "为 Kratos : Rebirth 主题添加自定义分享平台支持"
show_in: ("category" | "tag")[]
---

{% alertbar info "

以下内容均为主题配置段 share 的 platforms 里对应每个平台的 link 链接模板样例，您可自行使用变量调整格式，其他信息（如 name icon color ）请自行配置。

" %}

{% collapse 可用的配置变量 %}

- `$URL` 链接
- `$TITLE` 标题
- `$SUMMARY` 内容摘要
- `$SITE` 站点名称

{% endcollapse %}

```yml QQ 好友或群组
https://connect.qq.com/widget/shareqq/index.html?url=$URL&title=$TITLE&desc=&summary=$SUMMARY&site=$SITE
```

```yml QQ 空间
https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=$URL&title=$TITLE&desc=&summary=$SUMMARY&site=$SITE
```

```yml 微博
https://service.weibo.com/share/share.php?url=$URL&title=$TITLE
```

```yml Twitter (X)
https://x.com/intent/tweet?text=$TITLE&url=$URL
```

```yml Facebook
https://www.facebook.com/sharer/sharer.php?u=$URL
```

```yml Mastodon / Misskey
https://<实例域名>/share?text=%3E%20$TITLE%0A%3E%0A%3E%20$SUMMARY%0A----%20$SITE%0A%0A$URL
```