## 🚀 Java 编程语言
- Lambda 表达式
- Method Reference
- 接口新增 default 方法
- Type Annotations & Redpeating Annotations

### Lambda 表达式(匿名函数)
- 表达式 `(args ...) -> {}`
```java
// 随机提供一个布尔值
Supplier<Boolean> b = () -> new Random().nextBoolean();

//打印问好
Consumer<String> hello = s -> System.out.print("hello " + s);

//连接两个字符串
BiFunction<String, String, String> concat = (s1, s2) -> s1.concat(s2); 
```
当参数只有一个可以省略括号，当执行代码只有一行时可以胜率大括号(返回语句return也可以省略)
### Method Reference (方法引用)
- 表达式 `::`
```java
//构造函数引用
Supplier<Random> randomFactory = Random::new; 

//方法引用
Supplier<Boolean> b = randomFactory.get()::nextBoolean;
```
### 接口 Default 方法
接口中可以直接定义默认方法，一些具有共性的代码可以放在default方法中，
省略了再定义一个抽象实现类的步骤

### 类型注解 和 重复注解
- 类型注解
```java
myString = (@NonNull String) str;
```
类型注解被用来支持在Java的程序中做强类型检查。配合第三方插件工具Checker Framework，可以在编译的时候检测出runtime error。
- 重复注解
```java
@interface Hints {
    Hint[] value();
}

@Repeatable(Hints.class)
@interface Hint {
    String value();
}

@Hints({@Hint("hint1"), @Hint("hint2")})
class Person {}

@Hint("hint1")
@Hint("hint2")
class Person {}
```

## Collections
- Stream API (java.util.stream)
- HashMap 增强

## IO & NIO
## Concurrency

## HotSpot VM
- 删除永久代 (PermGen)
![java heap](https://picbed.howiewant.top/20221116153557.png)
java8之前永久代和年轻代，老年代都是用堆内存，java8后将永久代移除转为元空间 (MetaSpace) 使用本地内存，`不在受限于堆内存大小`