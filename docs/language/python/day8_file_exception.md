---
sidebar_position: 8
---
# Python 进阶学习 - 第8天：文件操作与异常处理

你好！今天我们将学习两个非常实用的Python进阶主题：**文件操作** 和 **异常处理**。

---

## 1. 文件操作

### a. 打开和读取文件

用 open() 打开文件，read() 读取全部内容，readline() 读取一行，readlines() 读取所有行。

```python
# 假设有一个 test.txt 文件，内容为：
# Hello
# World

f = open('test.txt', 'r', encoding='utf-8')  # 'r' 表示只读
content = f.read()
print(content)
f.close()
```

### b. with 语句（推荐）

用 with 可以自动关闭文件，推荐写法：
```python
with open('test.txt', 'r', encoding='utf-8') as f:
    for line in f:
        print(line.strip())
```

### c. 写入和追加文件

- 写入（覆盖原内容）：'w' 模式
- 追加（在原内容后加）：'a' 模式

```python
# 写入
with open('test.txt', 'w', encoding='utf-8') as f:
    f.write('Hello Python!\n')

# 追加
with open('test.txt', 'a', encoding='utf-8') as f:
    f.write('New line!\n')
```

### d. 读取大文件

可以一行一行地读，节省内存：
```python
with open('big.txt', 'r', encoding='utf-8') as f:
    for line in f:
        # 处理每一行
        pass
```

---

## 2. 异常处理

### a. try...except...

当代码出错时，程序会抛出异常。用 try...except... 可以优雅地处理错误。

```python
try:
    f = open('not_exist.txt', 'r')
except FileNotFoundError:
    print('文件未找到！')
```

### b. 捕获多种异常

```python
try:
    num = int(input('请输入一个整数: '))
    result = 10 / num
except ValueError:
    print('输入的不是整数！')
except ZeroDivisionError:
    print('不能除以0！')
except Exception as e:
    print('发生了其他错误：', e)
```

### c. finally 语句

无论是否发生异常，finally 里的代码都会执行，常用于资源释放。

```python
try:
    f = open('test.txt', 'r')
    # 读文件
except Exception as e:
    print('出错了:', e)
finally:
    print('无论如何都会执行')
```

### d. 主动抛出异常 raise

你可以用 raise 主动抛出异常。

```python
def divide(a, b):
    if b == 0:
        raise ValueError('除数不能为0')
    return a / b

try:
    divide(10, 0)
except ValueError as e:
    print('捕获到异常:', e)
```

---

文件操作和异常处理是实际开发中必不可少的技能。请多加练习，理解它们的用法和意义！ 