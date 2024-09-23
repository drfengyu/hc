---
title: 入门课程——1.睛麟软件介绍
comments: true
toc: true
donate: true
share: true
cover: https://imgdb.drfengling.online/file/ffdb83e1409372830957e.png
date: 2024-09-07 16:14:49
categories: 
  - 汇川视觉
  - 入门课程
tags:
  - 汇川视觉
  - 入门课程
---

## 软件介绍

### 1. 产品简介

睛麟视觉检测与控制软件，集成了相机与通讯交互、流程与命令控制和自研的图像处理算法库，无需编程即可灵活构建机器视觉检测方案，适用于多种场景。
软件平台具备强大的开放性与可拓展性，以“分体式”的独特设计，将编辑、运行和监控进行了分离，搭配支持深度编辑的运行界面，可实现“定制专机”的开发。



### 2. 安装卸载

![image.png](https://imgdb.drfengling.online/file/ffdb83e1409372830957e.png)

### 3. Editor

![image-1.png](https://imgdb.drfengling.online/file/a2f92190ae5cbad215274.png)

![image-2.png](https://imgdb.drfengling.online/file/dca876954eedefa1efa5b.png)

![image-3.png](https://imgdb.drfengling.online/file/71102c9315f2f754cd5cf.png)

### 4. Monitor

- 图、图层、图元素关系

![image-4.png](https://imgdb.drfengling.online/file/7e67d490b6d3a030e4cc1.png)

- 通过基础图元素，可实现页面自定义布局
- 通过交互元素搭配事件与命令，在运行界面上即可实现交互或控制的操作
- 通过命令的组合，Monitor上也可实现画面的切换、元素的切换以及弹窗等操作
- 菜单栏上功能与Editor上对应保持一致

![image-5.png](https://imgdb.drfengling.online/file/02a13f18bec7b3d62fc1a.png)

### 5. Runner

Runner是软件的后端，由Runnermanager控制，无界面。

### 6. 文件目录介绍

![image-6.png](https://imgdb.drfengling.online/file/06093db2fbe68692f0eea.png)

## Editor工程建立及结果监控

### 1. 如何新建、运行、保存一个工程

![image.png](https://imgdb.drfengling.online/file/54d8bbcddbbcb7451ef1a.png)

### 2. 如何添加变量-以添加图像变量为例

1. 在变量管理器中选择任务变量，点击“+”，选择“图像”
2. 点击类型下拉菜单，选择图片

![1.png](https://imgdb.drfengling.online/file/945d838fe2d4dab369daf.png)

### 3. 序列搭建-如何使用信源实现任务执行与阻塞

![图片1.png](https://imgdb.drfengling.online/file/101eea0160720b30fa574.png)

目的：在配置检测流程时，“轮询”的使用（比如持续跑空分支）是应该尽量避免的，因为这会造成不必要的资源占用，并且会导致记录无用的日志信息。利用信源的“阻塞”特性，搭配上分支的使用，可规避部分“轮询”。
举例说明：通过设定引用变量的默认值，使默认执行分支1，此时任务就会阻塞在信元接收节点，当接收到信源后，紧接着的变量计算节点会给分支引用的变量赋值，使下一次执行时，就会执行分支2中的节点。其实，分支2中的节点是我们真正的检测流程。发送信源的时机即可理解为是检测流程的触发时机。

### 4. 如何实现变量监控

将变量添加至变量监控后，可点击变量值实时修改变量当前值，其中布尔和枚举类型变量，只需输入索引值即可修改当前值，超出索引范围会出现报错提示

![图片2.png](https://imgdb.drfengling.online/file/63fe6951c10404c5a109a.png)

## Monitor界面编辑

### 1. 如何编辑Monitor运行界面，图/图层/图元素概念及关系

菜单栏->图形中即为目前支持添加的所有类型的图元素，可发挥创造力设计出精美的软件界面。

![图片3.png](https://imgdb.drfengling.online/file/3cae9ae82263aba2ef505.png)

### 2. 如何编辑Monitor运行界面

- 属性编辑：在图、图层和图元素的属性面板上可直接进行属性值的修改，但这种修改是“静态”的，修改完后即已固定，并无法满足实际使用需要。为实现动态调整，绝大部分的属性均支持引用变量或事件进行动态编辑。

![image-1.png](https://imgdb.drfengling.online/file/1b2976ff8fad523996714.png)

- 事件编辑：图和图元素也可以“主动”发布一些事件，触发命令的执行，进而实现我们所需要的功能。

![image-2.png](https://imgdb.drfengling.online/file/e4ede53c9b41f05726da4.png)

权限：将设置的用户名、工号、权限等级输出引用到工程变量-属性变量-当前角色中，在图上可通过引用当前角色这个变量显示用户设置的权限信息。

![image-3.png](https://imgdb.drfengling.online/file/9eaac228ec2595dfe88fa.png)

## 特殊功能讲解及异常排查

- 如何使用归档功能实现换型

切换产品型号时，对应的检测参数、检测流程以及监控界面都需要对应进行变化。睛麟软件内，灵活运用“变量+事件+命令”的体系，可有效实现“换型”功能。“换型”的操作需要在Monitor上（生产过程中）进行，因此需要归档的配合
元件的输入参数、输出结果、检测区域，乃至模板、外设的使用信息都可以抽象成变量，切换不同的归档文件，即更改了变量的值，也就实现了参数的切换。

归档配置】可进行归档文件的管理，切换启用不同的归档文件后，被检测参数引用的变量值、【直线检测】元件的ROI位置、【形状匹配】的模板信息都会随之改变。想要创建新的归档或修改当前归档值时，在完成变量调整后，需要点击【归档】（类似于保存工程）。

- 如何使用全局事件

可以预先设置“自定义事件”、“通讯事件”等，用来执行【全局触发】中预先配置的比如元件执行、任务失活等流程上的控制命令。同样地，也可实现图元素上比如是否显示、显示样式等属性的更改，进而实现界面显示效果的切换。而“变量值改变”就是这些“事件”的发生条件之一，即通过更改变量值就可同时实现参数修改、流程控制、显示界面切换。

- 错误提示-错误码含义

image type error——图像类型错误
invalid image——图像数据错误
image size error——图像尺寸错误
invalid roi——roi无效
invalid mask——掩膜无效
handle nor initialized——句柄未初始化
handle duplicate initialized——句柄重复初始化
numeric param invalid or out of range——数值参数越界或未定义
string param invalid——字符串参数无效
array param invalid——数组参数无效
lack of memory——内存不足
lack of gpu memory——显存不足
read or write file failed——文件读取失败

- 日志（系统）

当应用程序异常闪退时，系统日志里可能会抓到异常的dll。这个不仅可以定位Runner闪退，Editor和Monitor也同理。右键我的电脑->管理->事件查看器->Windows日志->应用程序，闪退一般都是错误记录。一些系统性问题（电脑黑屏、重启等）也可以关注系统中日志

![图片4.png](https://imgdb.drfengling.online/file/9a87b971bef6f11e12514.png)

## 随堂笔记

![image-4.png](https://imgdb.drfengling.online/file/25e3e9085d6d9695eb0f8.png)

### 软件使用

1. 安装环境包

2. 安装JINOVISION Installer V1R05C010_Windows.exe

3. 桌面打开Editor编辑器图标

4. 连接127.0.0.1

{% asset_img post-image image1.png %}

5. 新建空白项目

{% asset_img post-image image2.png %}

{% asset_img post-image image3.png %}

6. 流程配置

依次从左侧元件工具箱拖动开关分支,信源接收,本地脚本,拍摄II,如下所示

{% asset_img post-image image4.png %}

7. 配置元件

- 开关分支

点击开关分支,在分支路由下拉框选择,新增变量,在变量值输入框输入1,点击确定

{% asset_img post-image image5.png %}

分支序号为1的分支,点击编辑,在变量值输入框输入1,点击确定

{% asset_img post-image image6.png %}

- 信源接收

新建一个工程变量1

{% asset_img post-image image7.png %}

- 本地脚本

新建输出变量,选择引用变量1,设置Int类型,右侧框输入O0=2,点击下方运行查看测试结果.

{% asset_img post-image image8.png %}

- 拍摄II

选择相机配置,添加一个全局相机,设备列表选择虚拟相机

{% asset_img post-image image9.png %}

{% asset_img post-image image10.png %}

拍摄II相机变量选择全局相机,输出图像点击新增变量

{% asset_img post-image image11.png %}

下方缩略图处选择本地图片路径

{% asset_img post-image image12.png %}

设置自增

{% asset_img post-image image13.png %}

- 运行

点击拍摄II,循环运行,发现图像不切换

{% asset_img post-image image14.png %}

- 右侧工程管理器,新建任务2,添加信源发送元件,选择工程变量1

{% asset_img post-image image15.png %}

- 任务配置

选择任务1,任务2

{% asset_img post-image image16.png %}

- 单次运行任务,给信源赋值

{% asset_img post-image image17.png %}

- 循环运行

图片正常切换

{% asset_img post-image image18.png %}

8. 变量监测

添加要监测的变量

{% asset_img post-image image19.png %}

{% asset_img post-image image20.png %}

9. 运行时对应变量在变量监测区看到发生了变化

{% asset_img post-image image21.png %}

10. 界面配置

在右侧图形管理器,新建一个图层,选择图层0,添加视觉窗口,内容绑定任务1的拍摄II

{% asset_img post-image image22.png %}

11. 监视器设置

选择显示菜单栏

{% asset_img post-image image23.png %} 

12. 打开监视器,运行工程

切换回任务1,点击菜单栏打开监视器,在监视器菜单栏点击运行工程,可以在监视器界面看到图像的变化

{% asset_img post-image image24.png %} 

## 课后练习

一、任选图中一组直线，求交点，并记录交点信息。
二、在题一的基础上，编辑一个运行界面，包含图像显示、参数修改、模板学习、归档配置、按钮的禁用/启用、图层的显示/隐藏、弹窗、工程运行/停止功能。

![图片5.png](https://imgdb.drfengling.online/file/307313f2ddc63a63f8fe3.png)



