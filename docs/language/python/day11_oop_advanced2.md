---
sidebar_position: 11
---
# Python 进阶学习 - 第11天：面向对象进阶（二）

你好！今天我们将继续学习Python面向对象编程的进阶内容。

---

## 1. 属性的封装与私有化

- 单下划线 _xxx：约定为"受保护"属性，建议只在类及子类中访问。
- 双下划线 __xxx：私有属性，只能在类内部访问，外部无法直接访问。

```python
class Person:
    def __init__(self, name, age):
        self._name = name      # 受保护属性
        self.__age = age      # 私有属性
```

---

## 2. 属性的 getter 和 setter（@property）

- 用 @property 可以把方法变成属性调用。
- 用 @属性名.setter 可以设置属性值，实现安全控制。

```python
class Person:
    def __init__(self, name):
        self._name = name
    @property
    def name(self):
        return self._name
    @name.setter
    def name(self, value):
        self._name = value
```

---

## 3. 类的多重继承

- Python 支持多重继承，一个类可以继承多个父类。

```python
class A:
    def foo(self):
        print("A.foo")
class B:
    def bar(self):
        print("B.bar")
class C(A, B):
    pass
c = C()
c.foo()
c.bar()
```

---

## 4. super() 的用法

- super() 用于调用父类的方法，常用于多重继承和子类扩展父类方法。

```python
class Parent:
    def hello(self):
        print("Hello from Parent")
class Child(Parent):
    def hello(self):
        super().hello()
        print("Hello from Child")
```

---

## 5. isinstance 和 issubclass

- isinstance(obj, Class)：判断对象是否是某个类或其子类的实例。
- issubclass(Sub, Super)：判断一个类是否是另一个类的子类。

```python
class Animal: pass
class Dog(Animal): pass

d = Dog()
print(isinstance(d, Dog))      # True
print(isinstance(d, Animal))   # True
print(issubclass(Dog, Animal)) # True
```

---

## 6. 课后练习

请在 day11_exercises.py 文件中完成以下练习：
- 属性的封装与私有化
- 属性的 getter 和 setter
- 多重继承
- super() 的用法
- isinstance 和 issubclass

---

面向对象的封装、继承和多态是Python编程的核心，请多加练习，理解其思想和用法！ 