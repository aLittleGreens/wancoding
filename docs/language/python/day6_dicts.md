---
sidebar_position: 6
---
# Python 基础学习 - 第6天：字典（dict）基础

你好！今天我们将学习 Python 最重要的数据结构之一：**字典（dictionary，简称 dict）**。

字典是一种"键-值对"结构，非常适合描述现实世界中的对象和关系。例如：学生信息（学号-姓名）、商品价格（商品名-价格）、用户属性（用户名-年龄）等。

---

## 1. 字典的创建与访问

字典用大括号 `{}` 表示，里面包含一组"键:值"对，键和值之间用冒号 `:` 分隔，不同的键值对之间用逗号 `,` 分隔。

```python
# 创建一个简单的字典
person = {"name": "张三", "age": 20, "city": "北京"}

# 访问字典中的值
print(person["name"])  # 输出: 张三
print(person["age"])   # 输出: 20
```

- **键（key）**：通常是字符串，也可以是数字或元组，但最常用的是字符串。
- **值（value）**：可以是任意类型的数据。

---

## 2. 添加、修改和删除键值对

### a. 添加新键值对
```python
person["gender"] = "男"
print(person)  # {'name': '张三', 'age': 20, 'city': '北京', 'gender': '男'}
```

### b. 修改已有的值
```python
person["age"] = 21
print(person)  # {'name': '张三', 'age': 21, 'city': '北京', 'gender': '男'}
```

### c. 删除键值对
```python
del person["city"]
print(person)  # {'name': '张三', 'age': 21, 'gender': '男'}
```

---

## 3. 遍历字典

字典支持多种遍历方式：

### a. 遍历所有键值对
```python
for key, value in person.items():
    print(f"键: {key}, 值: {value}")
```

### b. 遍历所有键
```python
for key in person.keys():
    print(f"键: {key}")
```

### c. 遍历所有值
```python
for value in person.values():
    print(f"值: {value}")
```

---

## 4. 嵌套字典和字典中的列表

字典的值可以是列表、字典等任意类型，这样可以表达更复杂的数据结构。

### a. 字典中嵌套列表
```python
student = {
    "name": "李四",
    "courses": ["数学", "英语", "编程"]
}
print(student["courses"])  # 输出: ['数学', '英语', '编程']
```

### b. 字典中嵌套字典
```python
users = {
    "alice": {"age": 18, "city": "上海"},
    "bob": {"age": 20, "city": "北京"}
}
print(users["alice"]["city"])  # 输出: 上海
```

---

## 5. 字典的常用方法

- `get(key, default)`：安全地获取键对应的值，如果键不存在返回默认值。
- `pop(key)`：删除指定键并返回其值。
- `clear()`：清空整个字典。

```python
score = person.get("score", 0)  # 如果没有 'score' 键，返回 0
print(score)
```

---

字典是 Python 处理结构化数据的核心工具。请多加练习，理解它的灵活性和强大之处！ 