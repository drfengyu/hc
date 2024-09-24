---
title: 下雪
date: 2024-09-24 13:24:55
categories: 
  - 网站搭建
  - 站点特效
tags:
#sticky:
#cover:
toc: true
excerpt: "为 Kratos : Rebirth 主题添加站点下雪功能支持"
show_in: ("category" | "tag")[]
---

{% alertbar warning "

站点下雪是一个比较耗费资源的特效，可能会导致您的站点占用资源提升，或是引发响应卡顿等问题。

Use at your own risk.

" %}

## 配置说明

### 引入的新文件

请将下述文件放置于 source 目录中的合适位置，在此处我们使用的是 `effects` 目录。

```css snow.css
#snow {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99999;
  pointer-events: none;
  background: rgba(225, 225, 225, .05);
}
```

```js snow.js
(()=>{
    // 设置雪花参数
    const snowConf = {
        flakeCount: 100,
        minDist: 150,
        color: "255, 255, 255",
        size: 2,
        speed: 0.5,
        opacity: 0.3,
        stepsize: .5,
    };

    // 记录下雪状态
    let isSnowing = true;

    const requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function(callback){window.setTimeout(callback, 1000/60);};
    window.requestAnimationFrame = requestAnimationFrame;
    const canvas = document.getElementById("snow");
    const ctx = canvas.getContext("2d");
    const flakeCount = snowConf.flakeCount;
    let mX = -100, mY = -100;
    let flakes = [];
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const snow = () => {
        if (!isSnowing) {
            return; // 结束
        }

        // 清空画布
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const minDist = snowConf.minDist;
        for (let i = 0; i < flakeCount; i++){
            let flake = flakes[i];
            const x = mX, y = mY;
            const x2 = flake.x, y2 = flake.y;
            const dist = Math.sqrt((x - x2)*(x - x2) + (y - y2)*(y - y2));
            if (dist < minDist) {
                const force  = minDist / (dist*dist);
                const xcomp  = (x - x2) / dist;
                const ycomp  = (y - y2) / dist;
                const deltaV = force / 2;
                flake.velX -= deltaV * xcomp;
                flake.velY -= deltaV * ycomp;
             } else {
                flake.velX *= 0.98;
                if (flake.velY < flake.speed && (flake.speed - flake.velY > .01)) {
                    flake.velY += (flake.speed - flake.velY) * .01;
                }
                flake.velX += Math.cos(flake.step += .05) * flake.stepSize;
            }
            ctx.fillStyle = "rgba(" + snowConf.color + ", " + flake.opacity + ")";
            flake.y += flake.velY;
            flake.x += flake.velX;
            if(flake.y >= canvas.height || flake.y <= 0){
                reset(flake);
            }
            if(flake.x >= canvas.width || flake.x <= 0){
                reset(flake);
            }
            ctx.beginPath();
            ctx.arc(flake.x, flake.y, flake.size, 0, Math.PI*2);
            ctx.fill();
        }
        requestAnimationFrame(snow);
    };
    const reset = (flake)=>{
        flake.x       = Math.floor(Math.random()*canvas.width);
        flake.y       = 0;
        flake.size    = (Math.random()*3)+2;
        flake.speed   = (Math.random()*1)+0.5;
        flake.velY    = flake.speed;
        flake.velX    = 0;
        flake.opacity = (Math.random()*0.5)+0.3;
    };
    const startSnow = () => {
        // 生成初始雪花
        for (let i = 0; i < flakeCount; i++) {
            const x       = Math.floor(Math.random()*canvas.width);
            const y       = Math.floor(Math.random()*canvas.height);
            const size    = (Math.random()*3) + snowConf.size;
            const speed   = (Math.random()*1) + snowConf.speed;
            const opacity = (Math.random()*0.5) + snowConf.opacity;
            flakes.push({
                speed: speed,
                velX: 0, velY: speed,
                x: x, y: y,
                size: size,
                stepSize: (Math.random()) / 30 * snowConf.stepsize,
                step: 0,
                angle: 180,
                opacity: opacity
            });
        }
        // 开始下雪
        snow();
    };
    // 雪花避让鼠标
    document.addEventListener("mousemove", (e)=>{mX = e.clientX, mY = e.clientY});
    // 窗口大小调整
    window.addEventListener("resize",()=>{canvas.width = window.innerWidth; canvas.height = window.innerHeight;});

    // 初始化
    startSnow();
})();
```

### 更新的配置项

需要更新 `additional_injections` ，**加入**以下内容：

```yml
additional_injections:
  head: |
    <link rel="stylesheet" href="/effects/snow.css" />
  footer: |
    <canvas id="snow"></canvas>
  after_footer: |
    <script src="/effects/snow.js"></script>
```

假设您把上述的两个文件放置在 source 目录的 effects 目录中，且您的站点配置为根目录模式，那么您应当可以通过上述的两个路径 `/effects/snow.css` 和 `/effects/snow.js` 访问到对应的文件。如果您使用的是其他配置，您需要对应调整这两个路径。

当您配置完成后重启 Hexo ，您应当可以看见站点开始下雪。预祝您使用愉快。