---
title: 入门课程——2.通讯模块
comments: true
toc: true
donate: true
share: true
cover: image.png
date: 2024-09-09 13:36:41
categories: 
  - 汇川视觉
  - 入门课程
tags:
  - 汇川视觉
  - 入门课程
---

# 通讯模块

## 学习目标

{% asset_img post-image image0.png %}

## 应用说明

### 建立通信

{% asset_img post-image image.png %}

### 通讯状态

{% asset_img post-image image1.png %}

### 数据接收与发送

{% asset_img post-image image2.png %}

### 地址变换

{% asset_img post-image image3.png %}

## 随堂笔记

{% asset_img post-image image4.png %}

## 使用练习

![alt text](image.png)

### 通讯设置

打开菜单栏通讯设置,添加设备,协议选择明文tcp客户端,IP地址填127.0.0.1,端口填7000,断线重连是

{% asset_img post-image image6.png %}

打开网络调试助手,选择TcpServer,端口7000,监听.启用明文协议TCP客户端

{% asset_img post-image image7.png %}

### 界面设计

打开右侧图形管理器,添加文本,椭圆,按钮

{% asset_img post-image image8.png %}

新建工程变量颜色,绿色,红色,选择绿色红色当前值,椭圆绑定颜色变量,填充设为纯色

{% asset_img post-image image9.png %}

### 流程配置

1. 左侧元件管理器拖动添加Python脚本,新增变量P1,P2,P3,P1选择明文tcp客户端的通讯状态,P2选择绿色,p3选择红色,输出变量选择颜色

{% asset_img post-image image10.png %}

右侧文本框填入以下脚本:

```python
O1=P2
if(P1!=1):
    O1=P3
```

2. 接收数据处选择tcp客户端,新增变量本地接收

{% asset_img post-image image11.png %}

3. 发送数据处选择tcp客户端,新增变量本地发送

{% asset_img post-image image12.png %}

4. 地址变量用来更改参数设置,工程运行停止时可通讯配置查看参数设置变化

{% asset_img post-image image13.png %}

### 变量监控

添加本地发送,本地接收用于发送字符串和监测接收的字符串

{% asset_img post-image image14.png %}

### 打开监视器

运行工程,流程正常执行,通讯状态,本地接收发送字符串,参数变换

{% asset_img post-image image15.png %}

## 课后练习

{% asset_img post-image image5.png %}









