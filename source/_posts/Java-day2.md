---
title: Java_day2
date: 2019-08-16 11:36:14
tags: Java
toc: true
categories: 
- Java
- 概念与语法

---

自用Java笔记（Ⅱ），记录Java基本概念与语法！奋斗ing<!-- more -->

### 基本概念

#### Java语言的特点

1. 面向对象
2. 健壮性
3. 跨平台性

#### Java两种核心机制

- Java虚拟机（Java Virtual Machine）

可以理解为一个以字节码为机器指令的CPU，是解释型

- 垃圾回收机制（Garbage collection）

#### 名词解释

1. JDK(J2SDK) & JRE

   SDK(Software Development kit 软件开发包)

   Java Runtime Environment(Java运行环境)

   ps: 开发需要JDK，用户只需JRE。
   
   - JDK = JRE + 开发工具集（例如Javac编译工具）
   - JRE = JVM + Java SE标准类库
   
2. Java技术体系平台

   Java SE(Java Standard Edition) 标准版

   Java EE(Java Enterprise Edition)企业版

   Java ME(Java Micro Edition)小型版

   Java Card

## 基本语法复习

#### 注释类型

1. 单行注释
2. 多行注释
3. 文档注释

```java
/**
  @author 指定Java程序的作者
  @version 指定源文件的版本
  */
```

> PS:文档注释的内容可以被javadoc所解析，生成一套以网页文件形式体现的该程序的说明文档。
>
> ```
> javadoc -d myXXXdoc -author -version XXX.java
> ```

#### Java API 文档

API (Application Programming Interface, 应用程序编程接口)

1. 一个Java源文件只能有一个类声明public
2. 程序入口是main() 
3. 输出语句：System.out.println() 输出数据再换行 /  System.out.print()
4. 编译会生成（多个）与源文件中类名相同的字节码文件。

#### 关键字与保留字

Java保留字： goto 、const

#### 标识符

各种变量、方法和类（凡是自己起名字的）

- 特点：字母，0-9，_ 或$组成，数字不开头

- 规范：(PS:Java 采用unicode字符集)

  包名：多单词组成所有字母都小写：xxxyyyzz

  类名、接口名：多单词所有单词首字母大写：XxxYyyZzz

  变量名、方法名：第一个首字母小写其余首字母大写：xxxYyyZzz

  常量名：所有字母大写，多单词下划线连接：XXX_YYY_ZZZ

#### 变量

数据类型：

- 基本数据类型(primitive type) 
  - 整数类型（byte, short, int, long）
  - 浮点类型（float, double）
  - 字符类型（char）
  - 布尔型（boolean）
- 引用数据类型(reference type)
  - 类（class）
  - 接口（interface）
  - 数组（string[]）

基本数据类型转换（不包含boolean）：

- 自动类型提升

  **byte、char、short** --> int --> long --> float --> double

- 强制类型转换

  自动类型提升的逆运算，强制转换符()

```java
// 特殊情况1
long l = 123123;//int
//long ll = 123123123123123123;
//float f = 12.3;//int false

// 特殊情况2
//整型常量默认为int，浮点型常量默认为double
byte b = 12;
byte b1 = b + 1;//int false

//char c = '';//false
```

引用数据类型string

string可以和8种基本数据类型进行运算，且只能进行连接运算： +

```java
//String str1 = 123;//false
String str2 = 123 + "";

//int num = str1;//false
//int num = (int)str1;//false
int num = Integer.parseInt(str1);
```

#### 进制

- 二进制(binary)：以0B或0b开头，原码补码反码
- 十进制(decimal)
- 八进制(octal)：以数字0开头
- 十六进制(hex)：以0x或0X开头

#### 运算符

- 算术运算符

- 赋值运算符

- 比较运算符

  （ps: instanceof是否是string）

- 逻辑运算符

  (逻辑& | ! ^ 短路&& ||)

  ps: & 与 && （| 与 ||类似）开发中推荐使用双

  - 相同点：运算结果相同，当左边为true时都执行
  - 不同点：当左边为false时，&继续执行&&短路不执行

- 位运算符

  (<< >>(最高效2*8) >>>无符号右移(都用0补) & | ^(俩数交换) ~取反(补码各位取反))取决于数据类型

- 三元运算符

  (? : )

  ps：可以嵌套使用，凡是?:(运算效率高)都可以改写成if-else，反之不成立

#### 程序流程控制

基本流程结构：

- 顺序结构
- 分支结构
  - if-else
  - switch
- 循环结构
  - while
  - do-while
  - for
  - foreace

#### 引用数据类型变量：数组

- 初始化

  ```java
  // 静态初始化
  int[] ids = new int[]{1,3,5,6};
  
  // 动态初始化
  int[] ids = new int[4];
  int[] ods = new int[3][4];
  // 数组一旦初始化完成，在内存中占有一连串地址，并且长度无法改变。
  ```

  默认初始化值：整型为0，浮点型0.0，char为0或‘\u000’非‘0’，boolean型false，引用类型为null

- 内存结构解析

  栈stack：局部变量

  堆heap：new出来的结构：对象、数组

  方法区

  ​	常量池

  ​	静态域

- Array工具类

  - boolean equals(int[] a, int[] b)
  - String toString(int[] a)
  - void fill(int[] a, int val)
  - void sort(int[] a)
  - int binarySearch(int[] a, int key)

- 数组中常见异常

  角标越界异常：ArrayIndexOutOfBoundsExcetion

  空指针异常：NullPointerException