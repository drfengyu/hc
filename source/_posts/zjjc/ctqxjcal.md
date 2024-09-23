---
title: 中级教程——7.传统缺陷检测案例
categories:
  - 汇川视觉
  - 中级教程
tags:
  - 汇川视觉
  - 中级教程
cover: image.png
comments: true
toc: true
donate: true
share: true
date: 2024-09-21 16:56:48
---

# 学习目标

![alt text](image.png)

# 应用说明

## 案例背景

![alt text](image-1.png)

## 程序逻辑

![alt text](image-2.png) 

## 定位裁图

设计思路：
第一步：预定位——利用灰度匹配工具，获取产品大致位置，最为后续直线检测的基准位置
第二步：刻蚀线定位——利用产品的刻蚀线特征抓取基准位置，生成裁图ROI
第三步：精确定位——在已经定位裁图的图片上，利用产品区域分界线来抓边，从而生成检测ROI

![alt text](image-3.png)

## 结果分析

设计思路：
第一步：预定义缺陷信息列表
第二步：脚本获取检测结果并分类
第三步：显示检测结果

![alt text](image-4.png)

## 课后总结

![alt text](image-5.png)

