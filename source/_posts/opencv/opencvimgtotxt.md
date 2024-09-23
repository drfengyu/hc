---
title: 使用python+opencv解析图像和文本数据
comments: true
toc: true
donate: true
share: true
cover: https://demo-cloudflare-imgbed.pages.dev/file/63ebbcf5394c2ae647e1f.png
date: 2024-09-04 10:01:20
categories:
  - opencv 
  - python
tags: [python, opencv, 图像处理]
show_in: ("category" | "tag")[]
---

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

```powershell
pip install matplotlib Pillow
```

## 4. 使用opencv获取图像信息

```python
import cv2
import numpy
import numpy as np
import pylab
import PIL.Image as Image
import matplotlib.pyplot as plt

imgfile = input("请输入图片名：")
txtfile = input("请输入存储文本文件名：")

img = cv2.imread(imgfile, cv2.IMREAD_COLOR)

print("图像的形状,返回一个图像的(行数,列数,通道数):", img.shape)
print("图像的像素数目:", img.size)
print("图像的数据类型:", img.dtype)

print("img:",img[0][0][1])

```

### 代码解释

1. **导入库**：
   - `import cv2`: 导入 OpenCV 库，用于计算机视觉任务。
   - `import numpy`: 导入 NumPy 库，支持大规模的多维数组和矩阵运算。
   - `import numpy as np`: 将 NumPy 库重命名为 `np`，以便后续使用。
   - `import pylab`: 导入 pylab（通常用于绘图），不过在这段代码中并未使用。
   - `import PIL.Image as Image`: 导入 PIL 库的 Image 模块，用于处理图像，尽管在这段代码中并未使用。
   - `import matplotlib.pyplot as plt`: 导入 Matplotlib 库，用于绘图，但在这段代码中也未被使用。

2. **用户输入**：
   - `imgfile = input("请输入图片名：")`: 提示用户输入要读取的图片文件名。
   - `txtfile = input("请输入存储文本文件名：")`: 提示用户输入要保存像素数据的文本文件名。

3. **读取图像**：
   - `img = cv2.imread(imgfile, cv2.IMREAD_COLOR)`: 使用 OpenCV 读取指定的图像文件，`cv2.IMREAD_COLOR` 表示以彩色模式读取图像。

4. **输出图像信息**：
   - `img.shape`: 返回图像的形状，包含行数（高度）、列数（宽度）和通道数（通常为 3，表示 RGB）。
   - `img.size`: 返回图像的总像素数。
   - `img.dtype`: 返回图像的数据类型（如 `uint8`）。

### 总结

这段代码主要用于读取图像的基本信息，包括图像的形状、像素数目和数据类型。它使用 OpenCV 库来读取图像，并输出这些信息。请注意，在实际应用中，可能还需要进行其他图像处理操作，如调整大小、裁剪、转换颜色空间等。

## 5. 将图像数据写入文本

```python
fname = open(txtfile, 'w')

Xlenth = img.shape[1]  
Ylenth = img.shape[0]  
k = 3  

for i in range(Ylenth):
    for j in range(Xlenth):
        for h in range(k):
            fname.write(str(img[i][j][h]) + ' ')
fname.close()
```

这段代码的目的是将图像数据写入一个文本文件。下面是代码的逐行解释：

1. **打开文件**:
   ```python
   fname = open(txtfile, 'w')
   ```
   这行代码打开一个名为 `txtfile` 的文本文件，并以写入模式 (`'w'`) 打开。如果文件不存在，将会创建一个新文件。

2. **获取图像的维度**:
   ```python
   Xlenth = img.shape[1]  
   Ylenth = img.shape[0]  
   k = 3  
   ```
   这里使用 `img.shape` 来获取图像的维度。`img.shape[1]` 返回图像的宽度（X方向的长度），`img.shape[0]` 返回图像的高度（Y方向的长度）。变量 `k` 被设置为 3，通常表示图像的颜色通道数（例如，RGB图像有红、绿、蓝三个通道）。

3. **嵌套循环遍历图像数据**:
   ```python
   for i in range(Ylenth):
       for j in range(Xlenth):
           for h in range(k):
   ```
   这部分代码使用三个嵌套的循环来遍历图像的每一个像素和对应的颜色通道：
   - 外层循环 `for i` 遍历每一行（高度）。
   - 中间循环 `for j` 遍历每一列（宽度）。
   - 内层循环 `for h` 遍历每个像素的颜色通道（红、绿、蓝）。

4. **写入像素值**:
   ```python
   fname.write(str(img[i][j][h]) + ' ')
   ```
   这行代码将当前像素在第 `i` 行、第 `j` 列的第 `h` 个颜色通道的值（通常是一个整数，表示颜色的强度）转换为字符串，并写入文件。每个值后面跟一个空格，以便在读取时区分不同的值。

5. **关闭文件**:
   ```python
   fname.close()
   ```
   最后，关闭文件以确保所有数据都被写入，并释放系统资源。

### 总结
这段代码的功能是将图像的每个像素的RGB值按行写入到一个文本文件中，每个值之间用空格分隔。这种格式可以方便后续的数据处理或分析。

## 6. 从文本中读取图像数据

```python
blist = []
split_char = ' '
with open(txtfile, 'r') as bf:
    blist = [b.strip().split(split_char) for b in bf]

array_len = Ylenth * Xlenth * 3
print("blist:", (blist[0][array_len - 1]))

for i in range(1):
    for j in range(array_len - 1):
        blist[i][j] = int(blist[i][j])

new_blist = np.zeros((img.shape)).astype("uint8")
i = 0
for j in range(Ylenth):
    for k in range(Xlenth):
        for l in range(3):
            new_blist[j][k][l] = blist[0][i]
            i = i + 1
            if (i >= array_len):
                break

print("new_blist:", (new_blist[0][0][1]))

# # 因为ov的存储图像的方式是BGR顺序，所以要将其转变成RGB输出的话才能得到正确的图像

B = new_blist[:, :, 0]
G = new_blist[:, :, 1]
R = new_blist[:, :, 2]

src_new = np.zeros((img.shape)).astype("uint8")
src_new[:, :, 0] = R
src_new[:, :, 1] = G
src_new[:, :, 2] = B

tlist = numpy.array(src_new)

```

这段代码的功能是从一个文本文件中读取数据，处理这些数据，然后将其转换为一个图像数组。下面是代码的逐步解释：

1. **初始化和读取文件**:
    ```python
    blist = []
    split_char = ' '
    with open(txtfile, 'r') as bf:
        blist = [b.strip().split(split_char) for b in bf]
    ```
   - `blist` 是一个空列表，用于存储从文件中读取的数据。
   - `split_char` 定义了分隔符，默认为空格。
   - 通过 `with open(...)` 打开一个名为 `txtfile` 的文本文件，逐行读取文件内容，去掉每行的空白字符，然后按 `split_char` 分隔。最终，每行的数据以列表形式存储在 `blist` 中。

2. **计算数组长度**:
    ```python
    array_len = Ylenth * Xlenth * 3
    print("blist:", (blist[0][array_len - 1]))
    ```
   - `array_len` 计算图像数据的总长度，假设图像的高度为 `Ylenth`，宽度为 `Xlenth`，且每个像素有三个颜色通道（RGB）。
   - 打印 `blist` 中的某个值，通常是为了调试。

3. **数据转换**:
    ```python
    for i in range(1):
        for j in range(array_len - 1):
            blist[i][j] = int(blist[i][j])
    ```
   - 将 `blist` 中的字符串数据转换为整数，通常表示像素的颜色值。

4. **创建新数组**:
    ```python
    new_blist = np.zeros((img.shape)).astype("uint8")
    i = 0
    for j in range(Ylenth):
        for k in range(Xlenth):
            for l in range(3):
                new_blist[j][k][l] = blist[0][i]
                i = i + 1
                if (i >= array_len):
                    break
    ```
   - 创建一个新的零数组 `new_blist`，其形状与原图像 `img` 相同，数据类型为无符号8位整数。
   - 使用三个嵌套循环遍历图像的每个像素。在每个像素的 RGB 通道中填充对应的颜色值。

5. **打印新数组的值**:
    ```python
    print("new_blist:", (new_blist[0][0][1]))
    ```
   - 打印 `new_blist` 中的某个值，通常是为了验证数据是否正确。

6. **分离颜色通道**:
    ```python
    B = new_blist[:, :, 0]
    G = new_blist[:, :, 1]
    R = new_blist[:, :, 2]
    ```
   - 将 `new_blist` 中的颜色通道分离到单独的变量 `B`（蓝色）、`G`（绿色）和 `R`（红色）。

7. **创建新的图像数组**:
    ```python
    src_new = np.zeros((img.shape)).astype("uint8")
    src_new[:, :, 0] = R
    src_new[:, :, 1] = G
    src_new[:, :, 2] = B
    ```
   - 创建一个新的零数组 `src_new`，并将分离的颜色通道按顺序填回去，注意颜色的顺序是 R、G、B。

8. **最终输出**:
    ```python
    tlist = numpy.array(src_new)
    ```
   - 最后，将 `src_new` 转换为 NumPy 数组，赋值给 `tlist`，这通常是为了后续的图像处理或显示。

这段代码的整体目的是从文本文件中读取图像数据，并将其转换为可用于图像处理的 NumPy 数组。

## 7. 显示图像

```python
plt.figure()
plt.imshow(tlist)
plt.axis('on')  
pylab.show()

cv2.imshow('image', img)
cv2.waitKey(0)
cv2.destroyAllWindows()

cv2.imwrite('output_image.png', img)
```

这段代码涉及到使用 Python 的 Matplotlib 和 OpenCV 库来处理和显示图像。以下是每一行代码的详细解释：

1. `plt.figure()`:
   - 这行代码创建一个新的图形窗口。`plt` 是 Matplotlib 库的一个常用别名，用于绘图和显示图像。

2. `plt.imshow(tlist)`:
   - 这行代码用来显示图像。`tlist` 应该是一个包含图像数据的数组（例如，二维或三维的 NumPy 数组）。`imshow` 函数会将这个数组作为图像进行渲染。

3. `plt.axis('on')`:
   - 这行代码设置坐标轴的显示状态为“开启”。默认情况下，坐标轴可能是关闭的，调用这个函数后，图像的坐标轴将会显示出来。

4. `pylab.show()`:
   - 这行代码会显示所有打开的图形窗口。`pylab` 是 Matplotlib 的一个模块，提供了一个类似于 MATLAB 的接口。调用 `show()` 会暂停程序的执行，直到所有的图形窗口关闭。

5. `cv2.imshow('image', img)`:
   - 这行代码使用 OpenCV 库显示图像。`imshow` 函数的第一个参数是窗口名称（在这里是 `'image'`），第二个参数是要显示的图像数据（`img`）。这会在一个新的窗口中弹出显示该图像。

6. `cv2.waitKey(0)`:
   - 这行代码等待用户按下任意键。`0` 表示无限期等待，直到用户按下键盘上的任意键。这个函数是必要的，以便保持图像窗口打开。

7. `cv2.destroyAllWindows()`:
   - 这行代码关闭所有由 OpenCV 创建的窗口。它确保在程序结束时，所有图像窗口都被正确关闭，释放系统资源。

8. `cv2.imwrite('output_image.png', img)`:
   - 这行代码将图像数据（`img`）保存到文件中，文件名为 `'output_image.png'`。如果文件已经存在，将会被覆盖。

这段代码组合了 Matplotlib 和 OpenCV 的功能，允许用户在图形窗口中查看图像，同时也可以使用 OpenCV 的功能来显示和保存图像。

## 8. 测试图像解析, 生成图像功能

```powershell
py main.py
```
根据提示输入图片名和存储文本文件名,将图片数据解析到文本

![/python/opencvimgtotxt/image.png](https://demo-cloudflare-imgbed.pages.dev/file/fdca5a4fd6998a7f0c642.png)

图片数据解析成功,获取到了图像的基本信息,并解析到了了文本文件中

![image.png](https://demo-cloudflare-imgbed.pages.dev/file/2a9cb1db6faca9244fa28.png)

随后我们将文本文件中的数据解析到图像中,并显示了出来

![image-1.png](https://demo-cloudflare-imgbed.pages.dev/file/2affbaa5e72bd5e122cc8.png)

稍后使用opencv弹出图像

![image-2.png](https://demo-cloudflare-imgbed.pages.dev/file/bde0e671208930b811980.png)

随后我们将解析到的图像保存到了本地

可以使用其他图片再次测试

![image-3.png](https://demo-cloudflare-imgbed.pages.dev/file/8929363c4044ebc165654.png)

![image-4.png](https://demo-cloudflare-imgbed.pages.dev/file/63ebbcf5394c2ae647e1f.png)

以上就是使用python+opencv解析图像和文本数据的全部流程了.

