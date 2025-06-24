---
sidebar_position: 7
---
# Python 基础学习 - 第7天：函数与模块

你好！今天我们将学习 Python 编程中最重要的内容之一：**函数（function）**。

函数可以让你把一段代码"打包"，实现复用、结构清晰、易于维护。模块则是多个函数和变量的集合，是组织大型项目的基础。

---

## 1. 函数的定义与调用

### a. 定义函数
使用 `def` 关键字来定义一个函数，后面跟上函数名和括号，括号里可以有参数。

```python
def greet():
    print("你好，欢迎学习Python！")
```

### b. 调用函数
只需写上函数名加括号即可：
```python
greet()  # 输出: 你好，欢迎学习Python！
```

---

## 2. 带参数的函数

你可以给函数定义参数，让它能处理不同的数据。

```python
def greet_user(name):
    print(f"你好，{name}！")

greet_user("张三")  # 输出: 你好，张三！
```

可以定义多个参数：
```python
def describe_pet(animal_type, pet_name):
    print(f"我有一只{animal_type}，它的名字叫{pet_name}。")

describe_pet("狗", "旺财")
```

---

## 3. 返回值

函数可以用 `return` 语句返回一个值。

```python
def get_full_name(first, last):
    full_name = f"{first} {last}"
    return full_name

name = get_full_name("张", "三")
print(name)  # 输出: 张 三
```

---

## 4. 关键字参数与默认值

你可以在调用函数时用"参数名=值"的方式传参，也可以为参数设置默认值。

```python
def describe_pet(pet_name, animal_type="狗"):
    print(f"我有一只{animal_type}，它的名字叫{pet_name}。")

describe_pet("旺财")  # animal_type 使用默认值

describe_pet("咪咪", animal_type="猫")
```

---

## 5. 作用域与局部变量

在函数内部定义的变量，只能在函数内部使用，称为**局部变量**。在函数外部定义的变量，称为**全局变量**。

```python
def test_scope():
    x = 10  # 局部变量
    print(x)

test_scope()
# print(x)  # 这行会报错，因为x只在函数内部有效
```

---

## 6. 文档字符串（docstring）

在函数定义下方用三引号写说明文字，可以为函数添加文档说明。

```python
def add(a, b):
    """返回两个数的和"""
    return a + b

print(add.__doc__)  # 输出: 返回两个数的和
```

---

## 7. 模块的导入与使用

如果你有很多函数，可以把它们写在一个 `.py` 文件里，这个文件就叫做**模块**。你可以在另一个文件中用 `import` 导入它。

```python
# 假设有一个 my_utils.py 文件，内容如下：
def say_hello():
    print("Hello!")

# 在另一个文件中：
import my_utils
my_utils.say_hello()
```

你也可以只导入某个函数：
```python
from my_utils import say_hello
say_hello()
```

---

函数和模块是编写高质量、可维护代码的基础。请多加练习，理解它们的强大之处！ 