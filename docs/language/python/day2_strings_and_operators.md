---
sidebar_position: 2
---
# Python 基础学习 - 第2天：字符串与基本运算符

你好！欢迎来到第二天的学习。昨天我们已经接触了变量和基本的数据类型，今天我们将深入探索字符串的更多玩法，并学习如何用Python进行数学计算。

## 1. 字符串操作

字符串是编程中最常处理的数据之一。Python为字符串提供了丰富的功能。

### a. 字符串拼接 (Concatenation)

你可以使用 `+` 号将两个或多个字符串连接成一个新的字符串。

```python
first_name = "张"
last_name = "三"
full_name = first_name + " " + last_name  # 注意中间加了一个空格
print(full_name)  # 输出: 张 三
```

### b. 格式化字符串 (f-string) - 温故知新

我们在昨天的反馈中提到了 f-string，这是拼接字符串（尤其是包含变量时）的最佳方式。它的语法是在字符串前加一个 `f`，然后用 `{}` 将变量名包裹起来。

```python
name = "李四"
age = 25
greeting = f"你好，我叫{name}，我今年{age}岁。"
print(greeting) # 输出: 你好，我叫李四，我今年25岁。
```
f-string 相比 `+` 拼接，可读性更强，也更不容易出错。

### c. 常用字符串方法 (Methods)

"方法"是附加到对象上的函数。你可以通过 `.` 来调用一个变量的方法。字符串有很多有用的内置方法：

*   `.title()`: 将字符串中每个单词的首字母大写。
*   `.upper()`: 将整个字符串转换为大写。
*   `.lower()`: 将整个字符串转换为小写。

```python
message = "hello, python world!"
print(message.title())   # 输出: Hello, Python World!
print(message.upper())   # 输出: HELLO, PYTHON WORLD!
print(message.lower())   # 输出: hello, python world!
```

*   `.strip()`: 去除字符串开头和结尾的空白字符（如空格、换行符、制表符）。
*   `.lstrip()`: 只去除开头的空白。
*   `.rstrip()`: 只去除结尾的空白。

```python
text = "   some spaces   "
print(f"'{text.strip()}'")   # 输出: 'some spaces'
print(f"'{text.lstrip()}'")  # 输出: 'some spaces   '
print(f"'{text.rstrip()}'")  # 输出: '   some spaces'
```

## 2. Python中的基本数学运算

Python可以像计算器一样执行数学运算。

### a. 基本运算符

*   加: `+`
*   减: `-`
*   乘: `*`
*   除: `/` (结果总是浮点数)

```python
print(3 + 2)   # 5
print(5 - 1)   # 4
print(2 * 4)   # 8
print(10 / 2)  # 5.0
```

### b. 特殊运算符

*   **整除 (Floor Division)**: `//`  
    执行除法，但结果会向下取整到最接近的整数。
*   **取余 (Modulo)**: `%`  
    返回除法的余数。这个运算符在判断奇偶数等场景非常有用。
*   **乘方 (Exponentiation)**: `**`  
    计算一个数的幂。

```python
print(10 // 3)  # 结果是 3，小数部分被舍去
print(10 % 3)   # 10除以3等于3余1，所以结果是 1
print(2 ** 3)   # 2的3次方，即 2 * 2 * 2，结果是 8
```

### c. 运算优先级

Python遵循标准的数学运算优先级（PEMDAS/BODMAS）：
1.  括号 `()`
2.  乘方 `**`
3.  乘 `*`、除 `/`、整除 `//`、取余 `%`
4.  加 `+`、减 `-`

当你不确定优先级时，使用括号 `()` 来明确指定运算顺序是一个好习惯。

```python
result = 2 + 3 * 4
print(result) # 输出: 14 (先乘后加)

result_with_parentheses = (2 + 3) * 4
print(result_with_parentheses) # 输出: 20 (先算括号里的)
```

---

今天我们学习了更多处理文本和数字的技巧。这些是构建更复杂程序的基石。请花时间消化这些知识，并通过课后练习来巩固它们。 