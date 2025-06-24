---
sidebar_position: 13
---
# Python 进阶学习 - 第13天：模块与包

你好！今天我们将学习Python中模块与包的相关知识。

---

## 1. 模块的导入与使用

- 模块是.py文件，可以被导入和复用。
- 使用 import、from ... import ... 导入模块和函数。

```python
import math
print(math.sqrt(16))

from random import randint
print(randint(1, 10))
```

---

## 2. __name__ == "__main__" 的作用

- 每个模块都有一个__name__属性。
- 直接运行模块时，__name__为"__main__"；被导入时为模块名。
- 常用于测试代码块：

```python
def func():
    print("函数被调用")

if __name__ == "__main__":
    func()
```

---

## 3. 包的结构与多级包

- 包是包含__init__.py文件的文件夹。
- 支持多级包（嵌套文件夹）。
- 导入包内模块：from 包名 import 模块名

```python
# 目录结构
# mypackage/
#   __init__.py
#   module1.py
#   subpackage/
#     __init__.py
#     module2.py

from mypackage import module1
from mypackage.subpackage import module2
```

---

## 4. 第三方库的安装与使用（pip）

- pip 是 Python 的包管理工具。
- 安装第三方库：

```bash
pip install requests
```

- 使用第三方库：

```python
import requests
response = requests.get('https://www.example.com')
print(response.status_code)
```

---

## 5. 课后练习

请在 day13_exercises.py 文件中完成以下练习：
- 模块的导入与使用
- __name__ == "__main__" 的测试
- 包的结构与多级包
- pip 安装并使用第三方库

---

模块与包是Python代码组织和复用的基础，请多加练习，理解其思想和用法！ 