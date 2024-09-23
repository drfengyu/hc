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
---

# Twikoo | Kratos : Rebirth

> ## Excerpt
> 为 Kratos : Rebirth 主题添加 Twikoo 评论系统支持

---

简洁、安全、免费

-   开源仓库: [https://github.com/twikoojs/twikoo](https://github.com/twikoojs/twikoo)
-   配置文档: [https://twikoo.js.org/frontend.html#%E9%80%9A%E8%BF%87-cdn-%E5%BC%95%E5%85%A5](https://twikoo.js.org/frontend.html#%E9%80%9A%E8%BF%87-cdn-%E5%BC%95%E5%85%A5)

## 配置说明

### 引入的新文件

请将下述文件放置于 source 目录中的合适位置，在此处我们使用的是 `comments` 目录。

twikoo.js

<table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br><span>4</span><br><span>5</span><br><span>6</span><br><span>7</span><br><span>8</span><br><span>9</span><br><span>10</span><br><span>11</span><br><span>12</span><br><span>13</span><br><span>14</span><br><span>15</span><br><span>16</span><br><span>17</span><br><span>18</span><br><span>19</span><br><span>20</span><br><span>21</span><br></pre></td><td><pre><span>(<span>() =&gt;</span> {</span><br><span>  <span>const</span> <span>loadComments</span> = <span>async</span> (<span></span>) =&gt; {</span><br><span>    <span>if</span> (<span>typeof</span> twikoo === <span>"undefined"</span>) {</span><br><span>      <span>setTimeout</span>(loadComments, <span>100</span>);</span><br><span>    } <span>else</span> {</span><br><span>      <span>const</span> container = <span>document</span>.<span>getElementById</span>(<span>'tcomment'</span>);</span><br><span>      <span>if</span> (!container) {</span><br><span>        <span>return</span>;</span><br><span>      }</span><br><span>      twikoo.<span>init</span>({</span><br><span>        <span>envId</span>: <span>'&lt;您的环境id&gt;'</span>,</span><br><span>        <span>el</span>: <span>'#tcomment'</span>,</span><br><span>      });</span><br><span>    }</span><br><span>  };</span><br><span></span><br><span>  <span>window</span>.<span>loadComments</span> = loadComments;</span><br><span>  <span>window</span>.<span>addEventListener</span>(<span>'pjax:success'</span>, <span>() =&gt;</span> {</span><br><span>    <span>window</span>.<span>loadComments</span> = loadComments;</span><br><span>  });</span><br><span>})();</span><br></pre></td></tr></tbody></table>

需要替换的内容：

-   `<您的环境id>` 需要替换成您根据 Twikoo 官方文档中描述的内容创建的环境信息（腾讯云环境填 envId；Vercel 环境填地址（[https://xxx.vercel.app））。](https://xxx.vercel.app))./)

### [](https://eco.krt.moe/posts/comment-twikoo/#%E6%9B%B4%E6%96%B0%E7%9A%84%E9%85%8D%E7%BD%AE%E9%A1%B9 "更新的配置项")更新的配置项

需要更新 `comments` ，**设置为**以下内容：

<table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br><span>4</span><br><span>5</span><br><span>6</span><br><span>7</span><br></pre></td><td><pre><span><span>comments:</span></span><br><span>  <span>core:</span></span><br><span>    <span>enable_at:</span></span><br><span>      <span>-</span> <span>post</span></span><br><span>      <span>-</span> <span>page</span></span><br><span>    <span>template:</span></span><br><span>      <span>_shared:</span> <span>&lt;div</span> <span>class="kr-comments</span> <span>lazy-load"&gt;&lt;div</span> <span>id="tcomment"&gt;&lt;/div&gt;&lt;/div&gt;</span></span><br></pre></td></tr></tbody></table>

需要更新 `additional_injections` ，**加入**以下内容：

<table><tbody><tr><td><pre><span>1</span><br><span>2</span><br><span>3</span><br><span>4</span><br></pre></td><td><pre><span><span>additional_injections:</span></span><br><span>  <span>after_footer:</span> <span>|</span></span><br><span><span>    &lt;script src="https://cdn.jsdelivr.net/npm/twikoo@1.6.39/dist/twikoo.all.min.js"&gt;&lt;/script&gt;</span></span><br><span><span>    &lt;script src="/comments/twikoo.js"&gt;&lt;/script&gt;</span></span><br></pre></td></tr></tbody></table>

假设您把上述的文件放置在 source 目录的 comments 目录中，且您的站点配置为根目录模式，那么您应当可以通过上述的路径 `/comments/twikoo.js` 访问到对应的文件。如果您使用的是其他配置，您需要对应调整这个路径。

当您配置完成后重启 Hexo ，您应当可以看见正在加载的 Twikoo 实例。预祝您使用愉快。
