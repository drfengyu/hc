---
title: 使用 OpenCV 和 NumPy 进行图像处理：HSV 范围筛选示例实现PS抠图效果
comments: true
toc: true
donate: true
share: true
cover: https://imgdb.drfengling.online/file/d977cbdc17e730fcd7642.png
date: 2024-09-05 09:27:05
categories:
  - opencv 
  - python
tags: [python, opencv, 图像处理]
show_in: ("category" | "tag")[]
---

# 使用 OpenCV 和 NumPy 进行图像处理：HSV 范围筛选示例实现PS抠图效果

在计算机视觉和图像处理领域，OpenCV 是一个非常强大的库，能够帮助我们执行各种图像操作。在这篇博客中，我们将通过一个简单的示例演示如何使用 OpenCV 和 NumPy 来进行 HSV（色相、饱和度、明度）范围筛选，以提取图像中的特定颜色区域。

## 1. 创建虚拟环境

新建文件夹, 并在文件夹中创建虚拟环境,可以使用Vscode打开文件夹, 然后在终端中输入以下命令:

```powershell
python -m venv venv
```

<!--more-->

## 2. 激活虚拟环境

在终端中输入以下命令:

```powershell
venv\Scripts\activate
```

## 3. 安装依赖

在终端中输入以下命令:

```powershell
pip install opencv-python
```

## 4. 代码实现

首先，我们需要导入所需的库：

```python
import cv2
import numpy as np
```

接下来，我们定义一个函数 `inrange_demo`，该函数接收一幅图像作为参数，并执行以下步骤：

### 1. 将图像从 BGR 转换为 HSV

OpenCV 默认使用 BGR（蓝、绿、红）颜色空间，因此我们首先需要将图像转换为 HSV 颜色空间，以便更容易地进行颜色范围筛选。

```python
hsv = cv2.cvtColor(image, cv2.COLOR_BGR2HSV)
cv2.imshow("hsv", hsv)
cv2.waitKey(0)
```

### 2. 创建 HSV 范围的掩膜

我们使用 `cv2.inRange` 函数来创建一个掩膜，该掩膜只保留在指定 HSV 范围内的像素。这里的范围是 `(35, 43, 46)` 到 `(77, 255, 255)`，这通常对应于绿色的颜色范围。

```python
mask = cv2.inRange(hsv, (35, 43, 46), (77, 255, 255))
cv2.imshow("mask", mask)
cv2.waitKey(0)
```

### 3. 创建黑色背景

我们创建一个与原始图像相同大小的黑色背景，以便后续操作。

```python
redback = np.zeros(image.shape, image.dtype)
```

### 4. 反转掩膜

通过 `cv2.bitwise_not` 函数，我们可以反转掩膜，以便选择不在指定颜色范围内的区域。

```python
mask_inv = cv2.bitwise_not(mask)
cv2.imshow("inverted mask", mask_inv)
cv2.waitKey(0)
```

### 5. 确保掩膜是三通道

为了将掩膜应用于原始图像，我们需要将反转后的掩膜扩展到三通道。

```python
mask_inv_3d = mask_inv[:, :, np.newaxis]
```

### 6. 应用掩膜并显示结果

最后，我们使用 `np.where` 函数将原始图像与黑色背景结合，显示出感兴趣区域。

```python
redback[:] = np.where(mask_inv_3d == 255, image, redback)
cv2.imshow("roi区域", redback)
```

### 示例用法

在函数定义之后，我们可以通过以下代码读取一幅图像并调用 `inrange_demo` 函数：

```python
image = cv2.imread("D:\\images\\1.png")
inrange_demo(image)
cv2.waitKey(0)
cv2.destroyAllWindows()
```

### 图像素材

![1.png](https://imgdb.drfengling.online/file/d977cbdc17e730fcd7642.png)

### 实现效果

在运行代码后，你将看到以下图像：

![image.png](https://imgdb.drfengling.online/file/304b7cd752e5912e4bdfb.png)

![image-1.png](https://imgdb.drfengling.online/file/ff0fd0b938eba444a8e83.png)

![image-2.png](https://imgdb.drfengling.online/file/bbebef46613c957d10bf8.png)

![image-3.png](https://imgdb.drfengling.online/file/1c37a7fc8735d74ab72e0.png)

## 总结

以上代码演示了如何使用 OpenCV 和 NumPy 进行基本的图像处理，特别是 HSV 范围筛选。通过这种方法，我们可以提取图像中感兴趣的颜色区域，并在黑色背景上显示它们。这种技术在物体检测和识别、图像分割等应用中非常有用。

## 扩展

### 使用白色背景显示图像特定区域

```python
import cv2
import numpy as np

def inrange_demo(image):
    # Convert the image from BGR to HSV
    hsv = cv2.cvtColor(image, cv2.COLOR_BGR2HSV)
    cv2.imshow("hsv", hsv)
    cv2.waitKey(0)
    # Create a mask for the specified HSV range
    mask = cv2.inRange(hsv, (35, 43, 46), (77, 255, 255))
    cv2.imshow("mask", mask)
    cv2.waitKey(0)
    # Create a white background
    redback = np.zeros(image.shape, dtype=image.dtype)
    whiteback=redback+255
    # Invert the mask
    mask_inv = cv2.bitwise_not(mask)

    # Show the inverted mask
    cv2.imshow("inverted mask", mask_inv)
    cv2.waitKey(0)
    # Ensure mask_inv is 3-channel by expanding its dimensions
    mask_inv_3d = mask_inv[:, :, np.newaxis]

    # Copy the original image to the background where the mask is applied
    whiteback[:] = np.where(mask_inv_3d == 255, image, whiteback)

    # Show the region of interest
    cv2.imshow("roi区域", whiteback)

# Example usage:
image = cv2.imread("D:\\images\\1.png")
inrange_demo(image)
cv2.waitKey(0)
cv2.destroyAllWindows()

```

### 实现效果

![image-4.png](https://imgdb.drfengling.online/file/0b3b82848bd3b211e5173.png)

这里特别提供一下HSV颜色范围,建议收藏一下:

## HSV 颜色取值范围

![HSV 颜色取值范围](https://imgdb.drfengling.online/file/75477e40a87b2423e309c.png)

希望这篇博客对你理解图像处理有所帮助！