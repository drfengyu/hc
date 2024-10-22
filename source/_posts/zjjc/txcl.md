---
title: 中级教程——5.图像处理
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
date: 2024-09-20 16:58:08
---

# 学习目标

![alt text](image.png)

# 应用说明

## 形态学处理——框架简介

![alt text](image-1.png)

## 形态学处理——参数解析（基础设置）

| 参数名称         | 参数含义                                    | 参数类型     | 默认值               | 参数范围 |
|------------------|---------------------------------------------|--------------|----------------------|----------|
| 输入图像         | 仅支持灰度图                              | Image        | /                    | /        |
| 输出图像         | 仅支持灰度图                              | Image        | /                    | /        |
| 检测区域         | 包含检测目标的旋转矩形                    | RotatedRect  | [100, 100, 200, 200, 0] | /        |
| 检测区域显示     | 是否在视觉窗口显示检测区域                | /            | 显示                 | 显示/不显示 |
| 输出检测区域     | 经过补正量修正过的检测区域                | RotatedRect  | /                    | /        |
| 位置补正         | 检测区域偏移量                            | Offset       | /                    | /        |

## 形态学处理——参数解析（参数设置）

| 参数名称       | 参数含义                          | 参数类型 | 默认值 | 参数范围                                   |
|----------------|-----------------------------------|----------|--------|-------------------------------------------|
| 形态学方法     | 使用的形态学处理算法            | Enum     | 膨胀   | [膨胀、腐蚀、开运算、闭运算、梯度、顶帽、底帽] |
| 核宽度         | 滤波内核宽度                      | Int      | 3      | 3-100                                    |
| 核高度         | 滤波内核高度                      | Int      | 3      | 3-100                                    |
| 核形状         | 滤波内核形状                      | Enum     | 矩形   | [矩形、椭圆、十字]                        |
| 处理次数       | 图像滤波的处理次数                | Int      | 1      | 1-10                                     |
| 填充模式       | roi外区域的填充方式              | Enum     | 黑图填充 | [黑图填充、原图填充]                     |

## 算法原理简介

![alt text](image-2.png)

## 图像增强——框架简介

![alt text](image-3.png)

## 图像增强——参数解析（基础设置）

| 参数名称         | 参数含义                                    | 参数类型     | 默认值                     | 参数范围     |
|------------------|---------------------------------------------|--------------|----------------------------|--------------|
| 输入图像         | 仅支持灰度图                              | Image        | /                          | /            |
| 输出图像         | 仅支持灰度图                              | Image        | /                          | /            |
| 检测区域         | 包含检测目标的旋转矩形                    | RotatedRect  | [100, 100, 200, 200, 0]   | /            |
| 检测区域显示     | 是否在视觉窗口显示检测区域                | /            | 显示                       | 显示/不显示   |
| 输出检测区域     | 经过补正量修正过的检测区域                | RotatedRect  | /                          | /            |
| 位置补正         | 检测区域偏移量                            | Offset       | /                          | /            |

## 图像增强——参数解析（参数设置）

| 参数名称         | 参数含义                          | 参数类型 | 默认值         | 参数范围                 |
|------------------|-----------------------------------|----------|----------------|--------------------------|
| 图像增强类型     | 使用的图像增强处理算法          | Enum     | 对比度增强     | [对比度增强、亮度矫正、锐化] |
| 核宽度           | 滤波内核宽度                     | Int      | 3              | 3-999                    |
| 核高度           | 滤波内核高度                     | Int      | 3              | 3-999                    |
| 灰度增强系数     | 图像滤波的处理次数               | Int      | 1              | 1-100                    |
| 填充模式         | roi外区域的填充方式             | Enum     | 黑图填充       | [黑图填充、原图填充]     |

## 算法原理简介

![alt text](image-4.png)

## 图像滤波——框架简介

![alt text](image-5.png)

## 图像滤波——参数解析（基础设置）

| 参数名称         | 参数含义                                    | 参数类型     | 默认值                     | 参数范围     |
|------------------|---------------------------------------------|--------------|----------------------------|--------------|
| 输入图像         | 仅支持灰度图                              | Image        | /                          | /            |
| 输出图像         | 仅支持灰度图                              | Image        | /                          | /            |
| 检测区域         | 包含检测目标的旋转矩形                    | RotatedRect  | [100, 100, 200, 200, 0]   | /            |
| 检测区域显示     | 是否在视觉窗口显示检测区域                | /            | 显示                       | 显示/不显示   |
| 输出检测区域     | 经过补正量修正过的检测区域                | RotatedRect  | /                          | /            |
| 位置补正         | 检测区域偏移量                            | Offset       | /                          | /            |

## 图像滤波——参数解析（参数设置）

| 参数名称         | 参数含义                          | 参数类型 | 默认值       | 参数范围                    |
|------------------|-----------------------------------|----------|--------------|-----------------------------|
| 滤波方法         | 使用的形态学处理算法            | Enum     | 均值        | [均值、高斯、中值、双边]    |
| 核宽度           | 滤波内核宽度                     | Int      | 3            | 3-1000                     |
| 核高度           | 滤波内核高度                     | Int      | 3            | 3-1000                     |
| 处理次数         | 图像滤波的处理次数               | Int      | 1            | 1-100                      |
| 填充模式         | roi外区域的填充方式              | Enum     | 黑图填充    | [黑图填充、原图填充]       |

## 算法原理简介

![alt text](image-6.png)

# 随堂笔记

![alt text](image-7.png)

# 课后练习

![alt text](image-8.png)

