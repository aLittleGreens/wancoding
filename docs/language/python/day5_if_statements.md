---
sidebar_position: 5
---
# Python 基础学习 - 第5天：条件语句 (If Statements)

你好！你已经学会了如何用 `for` 循环来重复执行任务。但如果想让程序根据不同的条件执行不同的代码，应该怎么做呢？答案就是使用 `if` 语句。

## 1. 简单的 `if` 语句

`if` 语句的核心是检查一个**条件**是否为 `True`。如果为 `True`，就执行 `if` 后面的缩进代码块；如果为 `False`，就跳过它。

语法结构：
```python
if condition:
    # 如果 condition 为 True，则执行这里的代码
```
`condition` 通常是一个会返回 `True` 或 `False` 的表达式，我们称之为**布尔表达式**。

### 示例：检查年龄
```python
age = 19
if age >= 18:
    print("你已经是成年人了，可以投票！")
```

## 2. 条件测试 (Conditional Tests)

`if` 语句的核心就是条件测试。以下是一些常见的比较运算符：

*   `==` : 等于 (注意是两个等号，一个等号是赋值)
*   `!=` : 不等于
*   `>`  : 大于
*   `<`  : 小于
*   `>=` : 大于或等于
*   `<=` : 小于或等于

```python
car = 'bmw'
print(car == 'bmw') # True

car = 'audi'
print(car == 'bmw') # False
print(car != 'bmw') # True
```
**注意**: 字符串比较是区分大小写的。`'Audi' == 'audi'` 会返回 `False`。如果你想忽略大小写，可以先把字符串转换为统一的大小写，例如 `car.lower() == 'audi'`。

## 3. `if-else` 语句

当你需要在条件不成立时执行另一段代码，可以使用 `if-else` 结构。

```python
age = 17
if age >= 18:
    print("你是成年人。")
else:
    print("你还未成年。")
```

## 4. `if-elif-else` 链

如果你需要检查多个互斥的条件，可以使用 `if-elif-else` 结构。Python会按顺序检查每个条件，一旦找到一个为 `True` 的，就会执行对应的代码块，并跳过余下的所有 `elif` 和 `else`。

```python
age = 12

if age < 4:
    price = 0
elif age < 18:
    price = 25
else:
    price = 40

print(f"你的门票价格是 ${price}.")
```
在这个例子中，因为 `age` 是 12，第一个条件 `age < 4` 是 `False`，所以跳过。第二个条件 `age < 18` 是 `True`，所以 `price` 被赋值为 25，然后整个 `if-elif-else` 结构结束。

## 5. 检查列表

`if` 语句和列表经常一起使用。

### a. 检查特定值是否在列表中

你可以使用关键字 `in` 来检查一个值是否存在于列表中。

```python
banned_users = ['andrew', 'carolina', 'david']
user = 'marie'

if user not in banned_users:
    print(f"{user.title()}, 你可以发布评论。")
```
`not in` 检查一个值是否**不**在列表中。

### b. 检查列表是否为空

处理列表时，一个常见的需求是先检查列表里是否有元素，再进行操作。如果对一个空列表执行 `for` 循环，程序不会报错，但也不会执行任何操作。

```python
requested_toppings = []

if requested_toppings: # 当列表不为空时，这个条件为 True
    for topping in requested_toppings:
        print(f"正在添加 {topping}.")
    print("\n披萨制作完成！")
else:
    print("你确定想要一个光秃秃的披萨吗？")
```
Python中，当列表有元素时，`if` 会把它当作 `True`；当列表为空时，会把它当作 `False`。这是一种非常方便的写法。

---

`if` 语句是控制程序流程的基础。掌握它，你的代码就能应对各种复杂的情况。请通过今天的练习来巩固这些知识吧！ 