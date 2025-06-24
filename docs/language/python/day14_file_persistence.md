---
sidebar_position: 14
---
# Python 进阶学习 - 第14天：文件与数据持久化进阶

你好！今天我们将学习Python文件与数据持久化的进阶内容。

---

## 1. JSON 文件读写

- JSON 是常用的数据交换格式。
- 用 json 模块进行序列化（写入）和反序列化（读取）。

```python
import json
# 写入 JSON 文件
with open('data.json', 'w', encoding='utf-8') as f:
    json.dump({'name': 'Tom', 'age': 20}, f, ensure_ascii=False)
# 读取 JSON 文件
with open('data.json', 'r', encoding='utf-8') as f:
    data = json.load(f)
    print(data)
```

---

## 2. CSV 文件读写

- CSV 是常用的表格数据格式。
- 用 csv 模块读写 CSV 文件。

```python
import csv
# 写入 CSV 文件
with open('data.csv', 'w', newline='', encoding='utf-8') as f:
    writer = csv.writer(f)
    writer.writerow(['name', 'age'])
    writer.writerow(['Tom', 20])
# 读取 CSV 文件
with open('data.csv', 'r', encoding='utf-8') as f:
    reader = csv.reader(f)
    for row in reader:
        print(row)
```

---

## 3. pickle 序列化与反序列化

- pickle 可将 Python 对象保存到文件，也可从文件还原。

```python
import pickle
# 序列化
with open('data.pkl', 'wb') as f:
    pickle.dump({'name': 'Tom', 'age': 20}, f)
# 反序列化
with open('data.pkl', 'rb') as f:
    data = pickle.load(f)
    print(data)
```

---

## 4. with 多文件操作

- 可以同时打开多个文件，with 支持逗号分隔。

```python
with open('a.txt', 'r') as f1, open('b.txt', 'w') as f2:
    for line in f1:
        f2.write(line)
```

---

## 5. 实战：数据导入导出

- 结合多种文件格式，实现数据的保存与读取。

---

## 6. 课后练习

请在 day14_exercises.py 文件中完成以下练习：
- JSON 文件读写
- CSV 文件读写
- pickle 序列化与反序列化
- with 多文件操作
- 数据导入导出实战

---

文件与数据持久化是数据分析和工程开发的基础，请多加练习，理解其思想和用法！ 