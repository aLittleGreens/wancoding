---
sidebar_position: 3
---
# Python 基础学习 - 第3天：列表(Lists)入门

太棒了！你已经掌握了处理单个数据（如字符串和数字）的方法。从今天开始，我们将学习如何处理一组数据。**列表 (List)** 就是你将学到的第一个"数据容器"。

## 1. 什么是列表？

列表是一个有序的集合，你可以向其中添加或删除元素。简单来说，它就像一个购物清单，你可以把所有要买的东西按顺序放进去。

在Python中，我们用方括号 `[]` 来表示列表，并用逗号 `,` 分隔其中的元素。

```python
# 一个包含多种数据类型的列表
my_list = ["apple", 30, 3.14, "banana"]

# 一个存储朋友名字的列表
friends = ["张三", "李四", "王五"]
print(friends)
```

列表中的元素可以是任何数据类型，甚至可以是另一个列表。

## 2. 访问列表元素

列表中的每个元素都有一个位置，我们称之为**索引 (index)**。Python的索引是从 **0** 开始的。

*   要访问第一个元素，使用索引 `[0]`。
*   要访问第二个元素，使用索引 `[1]`，依此类推。

```python
fruits = ["apple", "banana", "cherry"]
print(fruits[0])  # 输出: apple
print(fruits[2])  # 输出: cherry

# 你还可以将访问到的元素与其他字符串结合
message = f"我最喜欢的水果是 {fruits[0].title()}."
print(message) # 输出: 我最喜欢的水果是 Apple.
```

Python还有一个特别的索引方式：使用负数索引可以从列表末尾开始访问。
*   `[-1]` 表示最后一个元素。
*   `[-2]` 表示倒数第二个元素。

```python
print(fruits[-1]) # 输出: cherry
print(fruits[-2]) # 输出: banana
```

## 3. 修改、添加和删除元素

### a. 修改元素

你可以通过索引直接给列表中的某个位置赋一个新的值。

```python
motorcycles = ['honda', 'yamaha', 'suzuki']
print(motorcycles)

motorcycles[0] = 'ducati' # 将第一个元素 'honda' 修改为 'ducati'
print(motorcycles) # 输出: ['ducati', 'yamaha', 'suzuki']
```

### b. 添加元素

*   **在列表末尾添加**: 使用 `.append()` 方法。
    ```python
    motorcycles.append('honda')
    print(motorcycles) # 输出: ['ducati', 'yamaha', 'suzuki', 'honda']
    ```
*   **在指定位置插入**: 使用 `.insert()` 方法。你需要提供两个参数：索引和要插入的元素。
    ```python
    motorcycles.insert(0, 'bmw') # 在索引0的位置插入 'bmw'
    print(motorcycles) # 输出: ['bmw', 'ducati', 'yamaha', 'suzuki', 'honda']
    ```

### c. 删除元素

*   **使用 `del` 语句删除指定位置的元素**: 如果你知道要删除元素的索引。
    ```python
    del motorcycles[0] # 删除第一个元素 'bmw'
    print(motorcycles) # 输出: ['ducati', 'yamaha', 'suzuki', 'honda']
    ```
*   **使用 `.pop()` 方法删除元素**: `.pop()` 会将列表末尾的元素删除，并**返回**它。这意味着你可以保存并使用被删除的那个值。
    ```python
    popped_motorcycle = motorcycles.pop()
    print(motorcycles)       # 输出: ['ducati', 'yamaha', 'suzuki']
    print(popped_motorcycle) # 输出: honda
    ```
    你也可以提供索引来删除并返回指定位置的元素，例如 `motorcycles.pop(0)`。

*   **使用 `.remove()` 方法根据值删除元素**: 如果你不知道元素的位置，但知道它的值。
    ```python
    motorcycles.remove('yamaha') # 删除值为 'yamaha' 的元素
    print(motorcycles) # 输出: ['ducati', 'suzuki']
    ```
    **注意**: `.remove()` 只会删除第一个匹配到的值。如果要删除的值在列表中出现多次，你需要使用循环来处理。

## 4. 获取列表长度

你可以使用 `len()` 函数来快速获取列表包含的元素数量。

```python
cars = ['bmw', 'audi', 'toyota', 'subaru']
print(len(cars)) # 输出: 4
```

---

列表是Python编程的基石之一，请务必花时间练习和理解这些操作。完成今天的练习，你将能熟练地管理一组数据了！ 