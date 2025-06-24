---
sidebar_position: 10
---
# Python 进阶学习 - 第10天：类的进阶

你好！今天我们将学习Python面向对象编程的进阶内容。

---

## 1. 类属性和实例属性

- **类属性**：属于类本身，所有对象共享。
- **实例属性**：属于每个对象实例，互不影响。

```python
class Animal:
    species = "动物"  # 类属性
    def __init__(self, name):
        self.name = name  # 实例属性

cat = Animal("小猫")
dog = Animal("小狗")
print(cat.species, cat.name)
print(dog.species, dog.name)
```

---

## 2. 类方法（@classmethod）

- 类方法用 @classmethod 装饰，第一个参数是 cls，代表类本身。
- 类方法可以访问和修改类属性。

```python
class Animal:
    species = "动物"
    @classmethod
    def getSpecies(cls):
        return cls.species

print(Animal.getSpecies())
```

---

## 3. 静态方法（@staticmethod）

- 静态方法用 @staticmethod 装饰，无需 self 或 cls 参数。
- 静态方法通常与类相关，但不访问类属性和实例属性。

```python
class Animal:
    @staticmethod
    def sayHello():
        print("Hello, Animal!")

Animal.sayHello()
```

---

## 4. 继承与多态

- **继承**：子类可以继承父类的属性和方法。
- **多态**：不同类的对象可以通过相同的方法名表现出不同的行为。

```python
class Animal:
    def speak(self):
        print("动物叫")

class Dog(Animal):
    def speak(self):
        print("狗叫：汪汪！")

def animalSpeak(animal):
    animal.speak()

animalSpeak(Animal())
animalSpeak(Dog())
```

---

## 5. 魔术方法 __str__ 和 __repr__

- `__str__`：定义 print(对象) 时的字符串表现，更加友好。
- `__repr__`：定义直接输出对象或在解释器中显示对象时的表现，通常用于调试。

```python
class Animal:
    def __init__(self, name):
        self.name = name
    def __str__(self):
        return f"动物：{self.name}"
    def __repr__(self):
        return f"Animal(name='{self.name}')"

cat = Animal("小猫")
print(cat)      # 调用 __str__
cat             # 调用 __repr__
```

---

## 6. 课后练习

请在 day10_exercises.py 文件中完成以下练习：

- 类属性和实例属性
- 类方法
- 静态方法
- 继承与多态
- 魔术方法 __str__ 和 __repr__

---

面向对象的进阶内容是编写高质量Python代码的基础，请多加练习，理解其思想和用法！
