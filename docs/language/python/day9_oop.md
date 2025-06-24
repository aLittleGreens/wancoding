---
sidebar_position: 9
---
# Python 进阶学习 - 第9天：面向对象编程（OOP）基础

你好！今天我们将学习Python面向对象编程（OOP）的基础内容。

---

## 1. 什么是面向对象编程（OOP）

面向对象是一种编程思想，把数据和操作数据的方法封装到对象中。现实世界中的"事物"都可以用对象来描述。

---

## 2. 类和对象

- **类（Class）**：对象的模板或蓝图。
- **对象（Object）**：类的实例。

### 定义类和创建对象
```python
class Dog:
    pass

dog1 = Dog()  # 创建对象
```

---

## 3. 构造方法 __init__

构造方法用于初始化对象的属性。
```python
class Dog:
    def __init__(self, name, age):
        self.name = name
        self.age = age
```

---

## 4. 实例属性和方法

```python
class Dog:
    def __init__(self, name):
        self.name = name
    def bark(self):
        print(f"{self.name}：汪汪！")
```

---

## 5. self 关键字

- self 代表对象本身，必须作为实例方法的第一个参数。

---

## 6. 课后练习

### 练习1：定义类和创建对象
1. 定义一个 Student 类，包含姓名和年龄两个属性。
2. 创建两个学生对象，并打印他们的属性。

### 练习2：添加方法
1. 给 Student 类添加一个 introduce 方法，打印"大家好，我是XX，今年XX岁。"
2. 调用每个学生对象的 introduce 方法。

### 练习3：理解 self
1. 在 Student 类中添加一个 isAdult 方法，判断学生是否成年（18岁及以上），返回布尔值。
2. 测试该方法。

---

面向对象编程是Python进阶的重要内容，请多加练习，理解其思想和用法！ 