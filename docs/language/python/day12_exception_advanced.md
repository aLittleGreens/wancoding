---
sidebar_position: 12
---
# Python 进阶学习 - 第12天：异常进阶

你好！今天我们将学习Python异常处理的进阶内容。

---

## 1. 异常链与多级捕获

- 可以在 except 语句中捕获多种不同类型的异常，分别处理。
- 可以在 except 语句中嵌套 try...except，实现多级捕获。

```python
try:
    # 可能出错的代码
    pass
except ValueError:
    print("捕获到 ValueError")
except (TypeError, ZeroDivisionError):
    print("捕获到 TypeError 或 ZeroDivisionError")
except Exception as e:
    print("其他异常：", e)
```

---

## 2. 自定义异常类

- 通过继承 Exception 类可以自定义异常。

```python
class MyError(Exception):
    pass

try:
    raise MyError("自定义异常信息")
except MyError as e:
    print("捕获到自定义异常：", e)
```

---

## 3. raise 的高级用法

- 可以在 except 块中再次抛出异常（异常链）。
- raise ... from ... 可以保留原始异常信息。

```python
def func():
    try:
        1 / 0
    except ZeroDivisionError as e:
        raise ValueError("新的异常") from e

try:
    func()
except Exception as e:
    print(e)
    print(e.__cause__)
```

---

## 4. finally 的实际应用

- finally 块常用于资源释放、文件关闭、网络断开等场景，无论是否发生异常都会执行。

```python
try:
    f = open('test.txt', 'r')
    # 读文件
except Exception as e:
    print('出错了:', e)
finally:
    print('无论如何都会执行')
```

---

## 5. 实战：编写健壮的异常处理代码

- 结合 try...except...finally，处理多种异常，保证程序健壮运行。
- 日志记录异常信息。

---

## 6. 课后练习

请在 day12_exercises.py 文件中完成以下练习：
- 多级异常捕获
- 自定义异常类
- raise 的高级用法
- finally 的实际应用
- 综合异常处理实战

---

异常处理是编写健壮Python程序的关键，请多加练习，理解其思想和用法！ 