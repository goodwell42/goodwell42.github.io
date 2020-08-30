---
title: Java-summary1
date: 2020-08-31 06:38:38
tags: Java
toc: true
categories: 
- Java
- 小结
---

自用Java小结（Ⅰ）回顾一下之前学的<!-- more -->

# Java体系

1. JDK初步
2. Java Web编程
3. J2EE
4. J2ME
5. 移动增值

# Java培训

> CodeSheep来告诉你编程培训班到底培训什么内容和具体学习路线！

摘自[CodeSheep的B站视频](https://www.bilibili.com/video/av58723057)

## 第一阶段入门进阶

- JAVA基本语法
- OO的编程思想
- 集合
- IO
- 异常
- 泛型
- 反射
- 多线程
- 函数式.

## 第二阶段Web基础和工具

- 前段基础三件套(html/css/js),
- jquery,ajax,jsp,cookie,session,
- http基础
- servlet基础,
- Git,SVN等代码管理工具

## 第三阶段企业级应用框架培训 

- maven/gradle项目管理工具
- Spring全家桶:Spring/Spring MVC/ SpringBoot（比较先进的培训有SpringBoot，而SSH基本不用报）
- 关系型数据库 MySQL,jdbc,MyBatis,Hibernate.
- 非关系数据库 Redis缓存 (也是区别重点)
- 模板技术: thymeleaf,freemarker

## 第四阶段高级应用框架培训

- 搜索引擎 elastic search
- RPC框架/微服务框架: Dubbo,Spring Cloud(区别重点)
- 中间件技术 RabbitMQ,RocketMQ,ActiveMQ,Kafka等.
- 虚拟化技术:Docker容器,k8s容器编排技术等

## 第五阶段高级话题

- JVM优化和排错
- GC分析
- 数据库高级优化等话题

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

自用Java笔记（Ⅲ），主要记录Java面向对象！奋斗ing<!-- more -->

# 面向对象

## Java类及类的成员：属性、方法、构造器；代码块、内部类

### 类与对象

#### 类的成员

- 属性：Field = 域、字段 = 成员变量
- 行为：Method =（成员）方法 = 函数

#### 对象的内存解析

- 堆（Heap）存放对象实例

- 栈（Stack）存储局部变量

- 方法区（Method Area）存储已被虚拟机加载的类信息、变量、静态变量、即时编译器编译后的代码等

#### 理解万事万物皆对象

    1. 在Java语言范畴中，我们将功能，结构等封装到类中，通过类的实例化，来调用具体的功能结构。
    2. 涉及到Java与前端Html、后端的数据库交互时，前后端的结构在Java层面交互时，都体现为类、对象。

  PS：引用类型的变量，只可能储存两类值，null 或 地址值（含变量的类型）

**匿名对象的使用，只能调用一次**

### 属性

#### 属性（成员变量）VS 局部变量

- **相同点**

  定义变量格式相同，先声明后使用，且都有对应的作用域

- **不同点**

  1. 声明的位置不同

     属性：直接定义在类的{}中

     局部变量：声明在方法内、方法形参、代码块内、构造器形参、构造器内部的变量

  2. 权限修饰符的不同

     属性：可以在声明属性时，使用权限修饰符指明其权限

     局部变量：不可以使用

  3. 默认初始化值的情况

     属性：类的属性根据类型都有默认初始化只

     局部变量：无初始化值

  4. 在内存中加载的位置

     属性：堆空间（非static）

     局部变量：栈空间

### 方法

#### 方法重载(overload)

定义：在同一个类中允许存在一个以上的同名方法，只要他们的参数个数或者类型不同即可。

“两同一不同”：同一个类，同一个方法名。参数列表不同。

#### 可变个数的形参

格式：数据类型 ... 变量名， 必须申明在末尾，可传入参数个数为0个及以上

#### 方法参数的值传递机制

变量赋值：

- 基本数据类型：赋值的是变量所保存的数据值
- 引用数据类型：赋值变量所保存数据的地址值

## 面向对象的三个特征：封装性、继承性、多态性、（抽象性）

### 封装与隐藏

#### 体现: 

- 将类的属性XXX私有化private，提供公有化public方法来获取getXXX和设置属性setXXX的值。
- 不对外暴露的私有的方法
- 单例模式（将构造器私有化）
- 如果不希望类在包外被使用可以设置成缺省

#### 目标：高内聚，低耦合

PS：封装性的体现需要权限修饰符来体现。修饰类只能public与缺省

#### 权限修饰符（从小到大）

| 修饰符   | 类内部 | 同一个包 | 不同包的子类 | 同一个工程 |
| -------- | ------ | -------- | ------------ | ---------- |
| private  | √      |          |              |            |
| （缺省） | √      | √        |              |            |
| protect  | √      | √        | √            |            |
| public   | √      | √        | √            | √          |

### 继承性inheritance

#### 好处：

- 减少了代码的多余，提高代码的复用性
- 便于功能的扩展
- 为之后多态性的使用，提供了前提

#### 格式：

```java
class A extends B{}
```

- A:子类、派生类、subclass
- B:父类、超类、superclass

ps：Java只支持单继承和多继承，不允许多重继承，一个子类只能有一个父类。如果没有显式的声明一个类的父类的话，则此类继承于java.lang.Object类。

#### 方法的重写(override/overwrite)

定义：在子类中根据需要对父类中的方法进行改造。

应用：重写以后，当创建子类对象，调用同名方法时调用的是重写的方法。

规定：

1. 子类重写的方法名与形参列表与被重写一样

2. 子类重写的方法的权限修饰符不小于父类被重写的方法的权限修饰符

   ps：特殊情况，子类中不能重写父类中声明为private的方法。

3. 返回类型：

   - 父类被重写方法的返回类型为void，子类重写的方法只能返回void；
   - 父类被重写方法的返回类型为基本类型，子类重写的方法只能返回相同的基本类型；
   - 父类被重写方法的返回类型为A类型，子类重写的方法可以返回A类型或A的子类；

4. 异常类型：子类重写的方法的异常类型不大于父类被重写的方法抛出的异常类型

特别注意：子类和父类的同名同参数的方法要么声明非static（考虑重写），要么都声明为static（不是重写）

#### 类的成员之三：构造器（构造方法constructor）

作用：创建对象；给对象进行初始化

格式：权限修饰符 + 类名(形参列表){}

ps：构造器可重载，且一旦显示定义了类的构造器之后，系统不再提供默认空参构造器。

### 多态性polymorphism

定义：一个事物的多种形态，在Java中的体现：对象的多态性，**父类的引用指向子类的对象**

#### 多态的使用：

在编译期，只能调用父类中声明的方法，在运行期，实际执行的是子类中的重写的方法。

#### 虚拟方法调用（Virtual Method Invocation）

Java引用变量有两种类型：编译时类型和运行时类型。

调用方法时，编译看左边，执行看右边。--动态绑定，多态是运行时行为。重载是编译是就已经确定了，“早绑定”,"静态绑定"。

> Bruce Eckel:"不要犯傻，如果它不是晚绑定，就不是多态。"

#### 多态性的使用前提：

- 类的继承关系
- 方法的重写

ps： **对象的多态性，只适用于方法，不适用于属性（编译和运行都看左边）**

#### 向下转型

编译时只能调用父类声明的属性和方法，如何调用子类特有的属性和方法？ 使用强制类型转换。使用强制转换时，可能出现ClassCastException的异常。

使用instanceof进行检测：

```java
a instanceof A //判断duixa是否是A的实例，如是返回true。
```

## 其他关键字：this、super、static、final、abstract、interface、package、import与相关补充知识

### 重要关键字

#### this：

理解为 当前对象，通常可以省略。可以调用：属性、方法和构造器。

调用本类中指定的构造器 this(形参列表)

ps: import static导入指定类或接口中的静态结构：属性、方法

#### super：

理解为 父类的，可以调用：属性、方法和构造器。

通常可以省略，当子类和父类中定义同名的属性时，需要显式的super

特殊情况， 当子类重写父类的方法时，需要调用父类中的方法时，需要显式的super

super调用父类构造器：在子类构造器中显式的“super(参数列表)”，且**必须声明在子类构造器中的首行**

在类的构造器中，针对“super(参数列表)”和“this(参数列表)”只能二选一，构造器中没有，默认super(空参)

在类的多个构造器中，至少有一个类的构造器使用了super(参数列表)，调用父类的构造器。

#### static：

某些特定的数据在内存中只有一份。eg：每个中国人都共享中国这个国籍。

修饰：属性、方法、代码块、内部类

修饰属性：静态变量

- 属性按是否有static修饰又分为：静态属性 VS 非静态属性（实例变量）
- 实例变量：当创建类的多个对象，每个对象都独立拥有一套类中的非静态属性，当修改某一个对象的静态属性时，不会导致其他对象中同样的属性值的修改。
- 静态属性：创建类的多个对象，每个对象都共享同一个静态属性。当修改某一个对象的静态属性时，会导致其他对象调用此静态变量时，属性值是修改的。
- PS：静态变量随类的加载而加载，且早于对象的加载。因此可以通过”**类.静态变量**“进行调用。由于类只会加载一次 ，则静态变量在内存中也**只会存在一份**。

修饰方法：静态方法

- 可以通过”**类.静态方法**“进行调用
- 静态方法只能调用静态的方法或属性，非静态则都可以。
- 在静态方法中，不能使用this，super关键字

static应用场景：

-  属性是可以被多个对象共享，不会随着对象的不同而改变
-  操作静态属性的方法，设置成static；工具类中的方法，习惯上声明为static

#### final：

可以修饰的结构：类、方法、变量

- 修饰类：此类不能被其他类继承。eg：String类、System类、StringBuffer类。
- 修饰方法：此方法不能被重写。eg：Object类中的getClass()。
- 修饰变量：此“变量”被称为一个常量。
  - 修饰属性，可以考虑的赋值位置有显式初始化、代码块中初始化、构造器中初始化、不可以在方法中赋值。
  - 修饰局部变量：尤其修饰形参时，表明此形参是常量。
- static final 修饰属性：全局常量

#### abstract：抽象类与抽象方法

修饰的结构：类、方法

- 修饰类：抽象类，不可实例化，类中一定要构造器，便于子类实例化时调用（涉及：子类对象实例化的全过程）开发中，都会提供抽象类的子类。让子类对象实例化，完成相关的。
- 修饰方法：抽象方法只有方法的声明，没有方法体。包含抽象方法的类一定是一个抽象类，抽象类中可以没有抽象方法。若子类重写了父类的所有的抽象方法后，此子类方可实例化。若未重写，则该子类也是一个抽象类，需要abstract修饰。
- PS：abstract不可以用来修饰属性、构造器等。abstract不能修饰私有方法、静态方法、final的类与方法。

抽象类的匿名子类

```java
Worker worker = new Worker();
method1(worker);//非匿名的类非匿名对象

method1(new Worker());//非匿名的类匿名的对象

Person p = new Person(){
    @override
    public void eat() { 
    }
    @override
    public void breath() { 
    }
}//匿名子类的对象：p

method1(new Worker(){
    @override
    public void eat() { 
    }
    @override
    public void breath() { 
    }
});//匿名子类的匿名对象
```

#### 接口（interface）

- 与类并列的结构，一定程度解决类的单继承性的缺陷。本质是契约、**规范**、标准。（JDK7及以前）接口是一种特殊的抽象类，这种抽象类只包含常量和方法的定义。

- 继承是一个“是不是”的关系，而接口实现的是“能不能”的关系。

- 接口中的成员：

  - JDK1.7及以前，只能定义全局变量和抽象方法
    - 全局变量：public static final的
    - 抽象方法：public abstract的
  - JDK8，出来定义以上之外，还可以定义静态方法、默认方法。

- 接口中不能定义构造器！意味着**接口不能实例化**

- Java开发中，接口通过让类去实现（**implement**）的方法来使用（面向接口编程），若实现类覆盖了接口的所有的抽象方法后，此实现类方可实例化。若未重写，则该实现类也是一个抽象类。

- Java类可以实现多个接口，弥补类的单继承性的局限性。

  ```java
  //先写extends再写implements
  class AA extends BB implements CC,DD,EE
  ```

- **接口与接口之间可以继承，而且可以多继承。**

- 接口的具体使用，体现了多态性、

接口的应用：

1. 代理模式（Proxy）

   ![代理模式](https://images2017.cnblogs.com/blog/1071931/201801/1071931-20180108134122472-1822105846.png)

   为其他对象提供一种代理以控制对这个对象的访问，[另一个博文](https://www.cnblogs.com/daniels/p/8242592.html)（中介）应用场景：

   - 安全代理

   - 远程代理

   - 延迟加载


   分类：

   - 静态代理（静态定义代理类）
   - 动态代理（动态生存代理类）

2. 工厂模式

Java8中关于接口的改进

1. 接口中定义的静态方法，只能通过接口来调用（像工具类）

2. 通过实现类的对象，可以调用接口中的默认方法。

3. 类优先原则：若子类（或实现类）继承的父类和实现的接口中声明了同名同参数的方法，那么子类在没有重写此方法的情况下，默认调用的是父类的同名同参数的方法。、

4. 接口冲突：若实现类实现了多个接口，而多个接口都定义了同名同参数的默认方法，在实现类没有重写的情况下，报错。因此实现类必须重写此方法。

5. 如何在子类（实现类）的方法中调用父类、接口中被重写的方法：

   ```java
   method();//调用自己重写的方法
   super.method();//调用父类中声明的
   Interface1.super.method();//调用接口中的默认方法
   ```

### 补充

#### 类的成员之四：代码块（初始化块）

就是一对大括号，用来初始化类、对象，若有修饰，只能是static

- 静态代码块
  - 内部可以有输出语句，并随着类的加载而执行，且只执行一次。
  - 若多个静态代码块，按声明顺序依次执行，总优先于非静态代码块
  - 静态代码块内只能静态的属性、方法，不能调用非静态的结构
  - 作用：初始化类的信息
- 非静态代码块
  - 内部可以有输出语句，随着每次对象的创建而执行。
  - 非静态代码块内既能静态的属性、方法，也能调用非静态的结构

#### 属性赋值的相关问题：

可以对属性进行赋值的位置：

1. 默认初始化
2. 显式初始化
3. 构造器中初始化
4. 有对象后，通过“对象.属性”或“对象.方法”的方法进行赋值
5. 在代码块中进行赋值

属性赋值的先后顺序：1 -> 2 / 5 -> 3 -> 4

#### 类的成员之五：内部类

类A声明在类B中，A为内部类

分类：成员内部类 （静态、非静态）  VS  局部内部类（方法、代码块、构造器内）

成员内部类：

- 作为外部类的成员：调用外部类的结构、可以被static修饰、可以被四种权限修饰符修饰
- 作为一个类：内可以定义属性、方法、构造器等，可以被final修饰，可以被abstract修饰
- 相关使用细节：

```Java
//如何实例化成员内部类的对象：
//创建静态成员内部类对象
Person.Dog dog = new Person.Dog();
dog.show();
//创建非静态成员内部类对象
Person p = new Person();
Person.Bird bird = p.new Person.Bird();
bird.show();

//如何在成员内部类中区分调用外部类的结构：
//方法的形参
name
//内部类的形参
this.name
//外部类的形参
Person.this.name

//开发中局部内部类的使用：
//eg：返回一个实现了XXX接口的类的对象
```

#### JavaBean

符合以下标准的Java类：

- 类是公共的
- 有一个无参的公共的构造器
- 有属性，且有对应的get、set方法

#### JUnit单元测试方法

- 选中当前工程 - 右键选择：build path - add libraries - JUnit 4 - 下一步
- 创建Java类（要求：①此类是public ②此类提供公共空参构造器）进行单元测试
- 在此类中声明单元测试方法：要求权限为public，没有返回值且没有形参
- PS：需要声明注释@Test，并导入包import org.junit.Test; 左键双击单元测试方法名，右键：run as - JUnit Test
- 若执行结果无异常为绿色，异常为红。

#### == VS equals()

- == 是运算符，可以用于基本数据与引用类型变量，前者比较保存的数据是否相同（不一定要类型相同，但必须一致），后者比较地址值是否相同，是否引用指向同一个对象
- equals() 是一个方法，只能用于引用数据类型变量的比较，object类中定义的equals() 和 == 的作用是相同的。像String、Date、File、包装类等都重写了Object类中的equals()方法，重写以后比较的是两个对象的实体内容是否相同。若自己定义的类也要有这样的功能，比较对象的实体内容，应该重写equals()方法。

#### toString()方法

- 输出一个引用变量时，实际上输出的是对象的toString()
- 像String、Date、File、包装类等都重写了Object类中的toString()方法，返回“实体内容”信息
- 自定义类也可以重写该方法。

#### main()方法

- 作为程序的入口
- 也是一个普通的静态方法（通过实例化类对象调用普通属性与方法）
- 可以作为与控制台交互的方式（java xxxDemo "str"）

#### 包装类(Wrapper)的使用

- 针对八种基本数据类型定义相应的引用类型-包装类（封装类），有了类的特点，就可以调用类中的方法，实现真正的面向对象。

  | 基本数据类型 | 包装类        |
  | ------------ | ------------- |
  | byte         | Byte          |
  | short        | Short         |
  | int          | **Integer**   |
  | long         | Long          |
  | float        | Float         |
  | double       | Double        |
  | boolean      | Boolean       |
  | char         | **Character** |

- Byte  Short  Integer  Long  Float  Double 父类为Number

- **基本数据类型、包装类、String三者的相互转换**

  1. 包装类 -> 基本数据类型：调用包装类的xxxValue()

  2. 基本数据类型 -> 包装类：调用包装类的构造器

  3. 基本数据类型、包装类 -> String类型：调用String重载的valueOf(Xxx xxx)

     ```java
     int num1 = 10;
     //方式一：连接运算
     String str1 = num1 + "";
     //方式二：调用String重载的valueOf(Xxx xxx)
     String str2 = String.valueOf(num1);
     ```

  4. String类型 -> 基本数据类型、包装类：调用包装类的parseXxx()

     ```java
     String str3 = "1234";
     int num3 = Integer.parseInt(str3);
     ```

- 自动装箱与拆箱(JDK5.0以后)

  ```java
  int num1 = 10;
  Integer in1 = num1; //自动装箱
  
  int num3 = in1;//自动拆箱
  ```

```java
Object o1 = true ? new Integer(1) : new Double(2.0);
System.out.println(o1);

Integer i = new Integer(1);
Integer j = new Integer(1);
System.out.println(i == j);//false

Integer m = 1;
Integer n = 1;
System.out.println(m == n);//true
// Integer内部定义了IntegerCache结构，其中定义了Integer[]
//保存了-128~127,如果使用自动装箱时，直接调用。

Integer x = 128;
Integer y = 128;
System.out.println(x == y);//false
```

### 设计模式

#### 单例(Singleton)设计模式

只能存在一个对象实例，好处减少了系统性能的开销

实现一：饿汉式

1. 私有化类的构造器

2. 内部创建类的对象（private static）

3. 提供公共的方法（static），返回类的对象

   ```java
   private Bank(){
       
   }
   private static Bank instance - new Bank();
   public static Bank getInstance() {
       return instance;
   }
   ```

实现二：懒汉式

1. 私有化类的构造器

2. 声明当前类对象（static），没有初始化

3. 声明public、static的返回当前类对象的方法

   ```java
   private Order(){
       
   }
   private static Order instance - null;
   public static Order getInstance() {
       if(instance == null) {
           instance = new Order();
       }
       return instance;
   }
   ```

饿汉式 VS 懒汉式

区别：懒汉式好处延迟对象的创建，饿汉式坏处，对象加载时间太长，但其是线程安全的

使用场景：

- 网站的计算器、
- 应用程序的日志应用
- 数据库连接池
- 读取配置文件的类
- Application也是单例的典型应用
- Windows的Task Manager（任务管理器）
- Windows中的Recycle Bin（回收站）

#### 模板方法设计模式（TemplateMethod）

抽象类体现的就是一种模板模式的设计，抽象类作为多个子类的通用模板，子类在抽象类的基础上进行拓展、改造，但子类总体上会保留抽象类的行为方式。

解决的问题：

- 当功能内部一部分实现是确定的，一部分实现是不确定的。这是可以把不确定部分暴露出来，让子类去实现。
- 在软件开发中实现一个算法时，整体步骤很确定、通用，这些步骤在父类中写好，但部分易变，可以将该部分抽象出来，供不同子类去实现。

#### MVC设计模式

模型层 model：主要处理数据

- 数据对象封装： model.bean/domain
- 数据库操作类： model.dao
- 数据库： model.db

视图层 view： 显示数据

- 相关工具类： view.utils
- 自定义view： view.ui

控制层 controller： 处理业务逻辑

- 应用界面相关： controller.activity
- 存放fragment： controller.fragment
- 显示列表的适配器： controller.adapter
- 服务相关的： controller.service
- 抽取的基类： controller.base

 自用Java笔记（Ⅳ），主要记录Java异常处理！奋斗ing<!-- more -->

### 异常概述与异常体系结构

开发过程中的语法错误和逻辑错误不是异常。

执行过程中出现的异常分为两类：

- Error：Java虚拟机无法解决的严重问题。eg：StackOverflowError栈溢出和OutOfMemoryError堆溢出。一般不编写针对性的代码进行处理。
- Exception：其他因编程错误或偶然的外在因素导致的一般性问题，可以使用针对性的代码进行处理。又分为编译时异常（受检checked异常） VS 运行时异常（非受检unchecked异常）

### 异常处理机制

关于异常对象的产生：

- 系统自动生成的异常对象
- 手动的生成一个异常对象，并抛出（throw）

#### 抓抛模型：

1. “抛”：程序在正常执行中，一旦出现异常就会在代码处生成一个对应异常类的对象，并抛出。之后的代码不再执行。
2. ‘’抓“：可以理解为异常的处理方式，如下两种方式：

#### try-catch-finally

```java
try{
    //可能会出现异常的代码
} catch(异常类型1 变量名1) {
    //处理异常的方法1
} catch(异常类型2 变量名2) {
    //处理异常的方法2
}
...
finally{
    //一定会执行的代码
}
```

PS：

- catch中的异常类型若五子类父类关系 ，无需考虑声明的先后顺序；若有，子类必须声明在父类的上面，否则报错。
- 在try中声明的变量，在大括号外不能调用。try-catch-finally可以嵌套。
- finally是可选的，其中声明的是一定会执行的代码，即便catch中又出现了异常，try或catch中有return语句等情况。
- **finally**重要应用：像数据库连接、输入输出流、网络编程Socket等资源，JVM是不能自动的回收的，需要收到编写代码进行资源的释放，此时代码就需要编写在finally中。

常用异常对象处理的方式：①String getMessage() ②printStackTrace()

体会：

1. 使用try-catch-finally处理编译时异常，是使得程序在编译时不再报错，但在运行时仍可能报错。“延迟”、
2. 开发中，由于运行时异常比较常见，所以我们通常不针对运行时异常编写try-catch-finally，针对编译时异常，一定要考虑异常的处理。

#### throws + 异常类型

声明在方法的声明处，指明此方法执行时，可能回抛出的异常类型，一旦方法体执行时出现异常，仍会在异常处生成一个异常类的对象。此对象满足throws后的异常

#### 如何选择

- 若父类中被重写的方法没有throws方式处理异常，则子类重写的方法也不能使用throws，意味着若子类重写的方法有异常必须使用try-catch-finally
- 执行的方法a中，先后调用了另外几个方法，这几个方法是递进关系执行的。建议这几个方法使用throws的方式处理，而执行的方法a可以考虑使用try-catch-finally

#### 自定义异常类

1. 继承现有的异常结构：RuntimeException、Exception
2. 提供全局常量：serialVersionUID
3. 提供重载的构造器

#### throw VS throws

- throw表示抛出一个异常类对象，生成异常对象的过程。声明在方法体内。
- throws属于异常处理的一种方式，声明在方法的声明处。

自用Java笔记（Ⅴ），主要记录IDEA的使用与Java多线程！奋斗ing<!-- more -->

## 程序、进程、线程

### 基本概念

- 程序(program)是为完成特定任务、用某种语言编写的一组指令的集合。即指一段静态的代码，静态对象。
- 进程(process)是程序的一次执行过程，或是正在运行的一个程序。是一个动态的过程：有它自身的产生、存在和消亡的过程。——生命周期
  PS：程序是静态的，进程是动态的
  进程作为**资源分配的单位**，系统在运行时会为每个进程分配不同的内存区域。
- 线程(thread)，进程可进一步细化为线程，是一个程序内部的一条执行路径。
  线程作为**调度和执行的单位**，每个线程拥有**独立的运行栈和程序计数器(pc)**，线程切换的开销小。一个进程中的多个线程共享相同的内存单元/内存地址空间。它们从同一堆中分配对象，可以访问相同的变量和对象。这就使得线程间通信更简便、高效。但多个线程操作共享的系统资源可能就会带来安全的隐患。

### 何时需要多线程

- 程序需要同时执行两个或多个任务。
- 程序需要实现一些需要等待的任务时，如用户输入、文件读写
  操作、网络操作、搜索等。
- 需要一些后台运行的程序时。

## 多线程的创建

### 方法一：继承于Thread类

```java
/**
 *多线程的创建，方法一：继承于Thread类
 * 1.创建一个继承于Thread类的子类
 * 2.重写Thread类的run() -> 将此线程执行的操作声明在run()中
 * 3.创建Thread类的子类对象
 * 4.通过此对象调用start(): ①启动当前线程；②调用当前线程的run()
 *
 * PS：  1.不能直接调用run()启动线程
 *       2.要运行多个线程需要造多个对象
 *
 * @author goodwell
 * @create 2019-09-25-9:39
 */
class MyThread extends Thread{
    @Override
    public void run() {
        for (int i = 0; i < 100; i++) {
            if (i % 2 == 0) {
                            System.out.println(System.out.println(Thread.currentThread().getName() + ":" + i););
            }
        }
    }
}

public class ThreadTest{
    public static void main(String[] args) {
        MyThread myThread = new MyThread();
        myThread.start();
    }

}
```

 创建Thread类的匿名子类的方法

```java
new Thread(){
    @Override
    public void run() {
        for (int i = 0; i < 100; i++) {
            if (i % 2 == 0) {
                System.out.println(Thread.currentThread().getName() + ":" + i);
            }
        }
    }
}.start();
```

Thread类中的常用方法：

![1569379673643](C:\Users\goodwell\AppData\Roaming\Typora\typora-user-images\1569379673643.png)

### 方法二：实现Runnable接口

1. 创建一个实现了Runnable接口的类
2. 实现类去实现Runnable中的抽象方法：run()
3. 创建实现类的对象
4. 将此对象作为参数传递到Thread类的构造器中，创建Thread类的对象
5. 通过Thread类的对象调用start()

```java
/**
 * 创建多线程方法二
 *
 * @author goodwell
 * @create 2019-09-25-16:13
 */
class MThread implements Runnable{

    @Override
    public void run() {
        for (int i = 0; i < 100; i++) {
            if(i % 2 == 0) {
                System.out.println(Thread.currentThread().getName() + ":" + i);
            }
        }
    }
}

public class ThreadTest1 {
    public static void main(String[] args) {
        MThread mThread = new MThread();
        Thread t1 = new Thread(mThread);
        t1.start();
    }

}
```

### 两种创建方式的对比

开发中，优先选择实现Runnable接口的方式

- 原因：

  1. 实现的方式没有类的单继承的局限性
  2. 实现的方式更适合处理多个线程有共享数据的情况

- 联系：

  ```java
   public class Thread implements Runnable
  ```

- 相同点：都需要重写run()，将线程执行的逻辑声明在run()中

### 方法三：实现Callable接口

1. 创建一个Callable的实现类
2. 实现call方法，将线程需要执行的操作声明在call()中
3. 创建callable实现类的对象
4. 将此对象传递到FutureTask构造器中，创建FutureTask的对象
5. 将FutureTask的对象作为参数传给Thread的构造器，创建Thread对象，并调用start()
6. 获取Callable中call方法的返回值

### 使用Runnable VS Callable

如何理解与使用Runnable相比， Callable功能更强大些

- 相比run()方法，可以有返回值
- 方法可以抛出异常，被外面操作捕获，得到异常信息
- 支持泛型的返回值
- 需要借助FutureTask类，比如获取返回结果

 Future接口

- 可以对具体Runnable、Callable任务的执行结果进行取消、查询是
  否完成、获取结果等。
- FutrueTask是Futrue接口的唯一的实现类
- FutureTask 同时实现了Runnable, Future接口。它既可以作为Runnable被线程执行，又可以作为Future得到Callable的返回值

```java
// 1. 创建一个Callable的实现类
class NumThread implements Callable {
    //2. 实现call方法，将线程需要执行的操作声明在call()中
    @Override
    public Object call() throws Exception{
        int sum = 0;
        for (int i = 1; i <= 100; i++) {
            if (i % 2 == 0) {
                System.out.println(i);
                sum += i;
            }
        }
        return sum;
    }
}

public class CallTest {
    public static void main(String[] args) {
        // 3. 创建callable实现类的对象
        NumThread numThread = new NumThread();
        // 4. 将此对象传递到FutureTask构造器中，创建FutureTask的对象
        FutureTask futureTask = new FutureTask(numThread);
        // 5. 将FutureTask的对象作为参数传给Thread的构造器，创建Thread对象，并调用start()
        new Thread(futureTask).start();

        Object sum = null;
        try {
            // 6. 获取Callable中call方法的返回值
            sum = futureTask.get();
            System.out.println("总和为:" + sum);
        } catch (InterruptedException e) {
            e.printStackTrace();
        } catch (ExecutionException e) {
            e.printStackTrace();
        }
    }
}
```

### 方法四：使用线程池

背景： 经常创建和销毁、使用量特别大的资源，比如并发情况下的线程，
对性能影响很大。

思路：提前 创建好多个线程，放入线程池中，使用时直接获取，使用完
放回池中。可以避免频繁创建销毁、实现重复利用。类似生活中的公共交
通工具。

步骤：

1. 提供指定线程数量的线程池 
2. 执行指定的线程操作，需要提供实现Runnable、Callable接口实现类的对象
3. 关闭连接池

好处：

- 提高响应速度（减少了创建新线程的时间）
- 降低资源消耗（重复利用线程池中线程，不需要每次都创建）
- 便于线程管理
  - corePoolSize：核心池的大小
  - maximumPoolSize：最大线程数
  - keepAliveTime：线程没有任务时最多保持多长时间后会终止

```java
class NumberThread implements Runnable{
    @Override
    public void run() {
        for (int i = 0; i < 100; i++) {
            if(i % 2 == 0) {
                System.out.println(Thread.currentThread().getName() + ": " + i);
            }
        }
    }
}

public class ThreadPool {

    public static void main(String[] args) {
        // 1. 提供指定线程数量的线程池
        ExecutorService service = Executors.newFixedThreadPool(10);
        //↑是接口，↓是类 System.out.println(service.getClass());
//        ThreadPoolExecutor service1 = (ThreadPoolExecutor) service;
        // 设置线程池的属性
//        service1.setCorePoolSize(15);
//        service1.setKeepAliveTime();

        // 2. 执行指定的线程操作，需要提供实现Runnable、Callable接口实现类的对象
        service.execute(new NumberThread()); // 适用于Runnable
//        service.submit(Callable callable); // 适用于Callable
        // 3. 关闭连接池
        service.shutdown();
    }
}
```

## 线程的生命周期

![线程的生命周期](https://i1.100024.xyz/i/2019/09/25/u6vgy3.png)

## 线程的同步

举例问题：卖票过程中，出现了重票、错票 --> 出现了线程的安全问题，通过同步机制来解决

### 方式一：同步代码块

```java
synchronized(同步监视器){
	//需要同步的代码
}
```

说明：操作共享数据的代码，及需要被同步的代码；共享数据，多个线程共同操作的变量；同步监视器,俗称：锁，任何一个类的对象都可以当锁。（**要求：多个线程必须要共同的一把锁**）

补充：在实现Runnable接口创建多线程的方式中，我们可以考虑使用this充同步监视器；在继承Thread类创建多线程的方式中，慎用this充当同步监视器考虑使用当前类作为锁Xxxx.class

### 同步的优缺点：

- 好处：解决了线程的安全问题
- 局限性：操作同步代码时，只能有一个线程参见，其他线程等等待，效率较低。

### 方法二：同步方法

如操作共享数据的代码完整的声明在一个方法中。

总结：

1. 同步方法仍然涉及到同步监视器，不需要显式的声明。
2. 非静态的同步方法，同步监视器是：this；静态的同步方法，同步监视器是：当前类本身。

线程安全的饿汉式单例模式：

```java
class Bank{
    private Bank(){};
    private static Bank instance = null;
    private static Bank getInstance(){
        //方式一：效率较差
//        synchronized (Bank.class) {
//            if (instance == null) {
//                instance = new Bank();
//            }
//            return instance;
//        }
        //方式二：效率更高
        if (instance == null) {
            synchronized (Bank.class) {
                instance = new Bank();
            }
        }
        return instance;
    }
}
```

### 线程的死锁问题

死锁的理解：

不同的线程分别占用对方需要的同步资源不放弃，都在等待对方放弃自己需要的同步资源，就形成了线程的死锁。

说明：

- 出现死锁后，不会出现异常、提示，只是所有的线程都处于阻塞状态，无法继续
- 使用同步的时候，要避免出现死锁。

### 方式三：lock锁  ---  JDK5.0新增

1. 实例化Reentranlock
2. 调用lock
3. 调用解锁方法：unlock

```java
class Window implements Runnable{

    private int ticket = 100;
    //1.实例化Reentranlock
    private ReentrantLock lock = new ReentrantLock();

    @Override
    public void run() {
        while (true) {
            try {
                //2.调用lock
                lock.lock();

                if (ticket > 0) {
                    try {
                        Thread.sleep(100);
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }

                    System.out.println(Thread.currentThread().getName() + ":" + i);
                    ticket--;
                } else {
                    break;
                }
            } finally {
                //3.调用解锁方法：unlock
                lock.unlock();
            }
        }
    }
}
```

### synchronized VS Lock 异同

- 相同：二者都可以解决线程安全问题
- 不同：synchronized机制在执行完相应的同步代码后，自动释放同步监视器；Lock需要手动的启动同步（Lock()），同时结束同步也需要手动的实现（unlock()）

### 优先使用顺序：

Lock -> 同步代码块（已经进入了方法体，分配了相应资源） -> 同步方法（在方法体之外）

## 线程的通信

相关方法：

wait()：一旦执行，当前线程就进入阻塞状态，并释放同步监视器

notify()：唤醒被wait的一个线程，若有多个线程被wait，就唤醒优先级最高的

notifyAll()：唤醒所有被wait的线程

说明：

1. 此三个方法必须使用在同步代码块中
2. 其调用者必须是同步代码块中的同步监视器，否则会出现IllegalMonitorStateException异常
3. 都是定义在java.lang.Object类中

sleep() VS wait() 异同:

- 同：一旦执行，都可以是当前的线程进入阻塞状态
- 异：
  1. 方法声明的位置不同：Thread类中声明sleep，Object类中声明wait
  2. 调用的要求不同：sleep可以在任何场景下调用，wait必须使用在同步代码块中
  3. 是否释放同步监视器：若都使用在同步代码块或同步方法中，sleep不会释放锁，wait会释放锁



自用Java笔记（Ⅵ），主要记录Java常用类！奋斗ing<!-- more -->

# 字符串相关的类

## String

字符串是常量，用双引号引起来，他们的值在创建后就不能改变。

String对象的字符串内容是存储在资格字符数组final char[] value中。

### 特点

- 实现了Serializable接口，表示字符串支持序列化的；
- 实现了Comparable接口，表示String可以比较大小
- String是一个final类，不可被继承，其代表不可变的字符序列。（不可变性）

体现：

1. 当对字符串重新赋值时，需要重新指定内存区域赋值，不能使用原有的value进行赋值；
2. 当对现有的字符串进行拼接时，也需要重新指定内存区域赋值，不能使用原有的value进行赋值；
3. 当调用String的replace()修改字符串，也需要重新指定内存区域赋值。

![不可变性体现](https://i1.100024.xyz/i/2019/09/26/qxfohl.png)

通过字面量的方式（**区别于new方式**）给一个字符串赋值，此时的字符串值声明在**字符串常量池**中，字符串常量池不会重复储存相同的字符串。

### 实例化的方式

1. 通过字面量定义
2. 通过new + 构造器

![new与字面量区别](https://i1.100024.xyz/i/2019/09/26/r7of7o.png)

面试题：

```java
String s = new String("abc");//此方式创建对象，在内存中创建了几个对象？ 俩：一个堆空间中new结构，另一个是char[]对应的常量池中的数据“abc”
```

```java
public class StringTest {
    @Test
    public void testString(){
        String s1 = "hello";
        String s2 = "goodwell";

        String s3 = "hellogoodwell";
        String s4 = "hello" + "goodwell";
        String s5 = s1 + "goodwell";
        String s6 = "hello" + s2;
        String s7 = s1 + s2;

        System.out.println(s3 == s4);//true
        System.out.println(s3 == s5);//false
        System.out.println(s3 == s6);//false
        System.out.println(s3 == s7);//false
        System.out.println(s5 == s6);//false
        System.out.println(s6 == s7);//false

        String s8 = s5.intern();
        //返回值得到的s8使用的常量值已经存在的“hellogoodwell”
        System.out.println(s3 == s8);//true
        
        final String s9 = "hello";
        String s10 = s9 + "goodwell";
        System.out.println(s3 == s10);//true
    }
```

结论：

- 常量与常量的拼接结果在常量池。且常量池中不会存在相同内容的常量。
- 只要其中有一个是变量，结果就在堆中
- 如果拼接的结果调用intern()方法，返回值就在常量池中

```java
public class StringTest {
    String str = new String("good");
    char[] ch = {'t','e','s','t'};

    public void change(String str, char ch[]) {
        str = "test ok";
        ch[0] = 'b';
    }

    public static void main(String[] args) {
        StringTest ex = new StringTest();
        ex.change(ex.str, ex.ch);
        System.out.println(ex.str);//good
        System.out.println(ex.ch);//best
    }
}
```

### 常用方法

- int length() ：返回字符串的长度： return value.length
- char charAt(int index)： ： 返回某索引处的字符return value[index]
- boolean isEmpty() ：判断是否是空字符串：return value.length == 0
- String toLowerCase() ：使用默认语言环境，将 String 中的所有字符转换为小写
- String toUpperCase() ：使用默认语言环境，将 String 中的所有字符转换为大写
- String trim()： ：返回字符串的副本，忽略前导空白和尾部空白
- boolean equals(Object obj)： ：比较字符串的内容是否相同
- boolean equalsIgnoreCase(String anotherString) ：与equals方法类似，忽略大小写
- String concat(String str) ：将指定字符串连接到此字符串的结尾。 等价于用“+”
- int compareTo(String anotherString)： ：比较两个字符串的大小
- String substring(int beginIndex)： ：返回一个新的字符串，它是此字符串的从beginIndex开始截取到最后的一个子字符串。
- String substring(int beginIndex, int endIndex) ： ：返回一个新字符串，它是此字符串从beginIndex开始截取到endIndex(不包含)的一个子字符串。
- boolean contains(CharSequence s) ：当且仅当此字符串包含指定的 char 值序列时，返回 true
- int indexOf(String str)： ：返回指定子字符串在此字符串中第一次出现处的索引
- int indexOf(String str, int fromIndex)： ：返回指定子字符串在此字符串中第一次出现处的索引，从指定的索引开始
- int lastIndexOf(String str)： ：返回指定子字符串在此字符串中最右边出现处的索引
- int lastIndexOf(String str, int fromIndex)： ：返回指定子字符串在此字符串中最后一次出现处的索引，从指定的索引开始反向搜索
  注：indexOf和lastIndexOf方法如果未找到都是返回-1
- boolean endsWith(String suffix)： ：测试此字符串是否以指定的后缀结束
- boolean startsWith(String prefix)： ：测试此字符串是否以指定的前缀开始
- boolean startsWith(String prefix, int toffset)： ：测试此字符串从指定索引开始的子字符串是否以指定前缀开始
- String replace(char oldChar, char newChar)： ：返回一个新的字符串，它是通过用 newChar 替换此字符串中出现的所有 oldChar 得到的。
- String replace(CharSequence target, CharSequence replacement)： ：使用指定的字面值替换序列替换此字符串所有匹配字面值目标序列的子字符串。
- String replaceAll(String regex, String replacement) ： ： 使 用 给 定 的
  replacement 替换此字符串所有匹配给定的正则表达式的子字符串。
- String replaceFirst(String regex, String replacement) ： ： 使 用 给 定 的replacement 替换此字符串匹配给定的正则表达式的第一个子字符串。
- boolean matches(String regex)： ：告知此字符串是否匹配给定的正则表达式。
- String[] split(String regex)： ：根据给定正则表达式的匹配拆分此字符串。
- String[] split(String regex, int limit)： ：根据匹配给定的正则表达式来拆分此字符串，最多不超过limit个，如果超过了，剩下的全部都放到最后一个元素中。

### 类型转换

String 与 char[] 之间的转换：

- String --> char[]  调用String的toCharArray()

  ```java
  char[] charArray = str1.toCharArray();
  ```

- char[] --> String 调用String的构造器

  ```java
  String str2 = new String(arr);
  ```

String 与 byte[] 之间的转换：

- String --> byte[]  调用String的getBytes()

  ```java
  byte[] bytes = str1.getBytes(); //使用默认的字符集进行编码
  ```

- byte[] --> String 调用String的构造器

  ```java
  String str2 = new String(bytes);//使用默认的字符集进行解码
  //说明：解码时，要求解码使用的字符集必须和编码时使用的字符集一致，否则出现乱码
  ```

## StringBuffer类

 java.lang.StringBuffer代表 可变的字符 序列，JDK1.0中声明，可以对字符
串内容进行增删，此时不会产生新的对象。很多方法与String相同。作为参数传递时，方法内部可以改变值。

StringBuffer类不同于String，**其对象必须使用构造器生成**。有三个构造器：

- StringBuffer() ：初始为 容量为16 的字符串缓冲区
- StringBuffer(int size) ：构造 指定容量的字符串缓冲区
- StringBuffer(String str) ：将内容初始化为指定字符串内容

StringBuffer 类的常用方法

- StringBuffer append(xxx)：提供了很多的append()方法，用于进行字符串拼接
- StringBuffer delete(int start,int end)：删除指定位置的内容
- StringBuffer replace(int start, int end, String str)：把[start,end)位置替换为str
- StringBuffer insert(int offset, xxx)：在指定位置插入xxx
- StringBuffer reverse() ：把当前字符序列逆转

- public int indexOf(String str)
- public String substring(int start,int end)
- public int length()
- public char charAt(int n )
- public void setCharAt(int n ,char ch)

##　StringBuilder类

StringBuilder和StringBuffer 非常类似，均代表可变的字符序列，而且提供相关功能的方法也一样

**对比String 、StringBuffer 、StringBuilder**

- String(JDK1.0)：不可变字符序列

- StringBuffer(JDK1.0)：可变字符序列、效率低、线程安全

- StringBuilder(JDK 5.0)：可变字符序列、效率高、线程不安全，底层都是使用char[] 存储

  注意：作为参数传递的话，方法内部String不会改变其值，StringBuffer和StringBuilder会改变其值。

```java
String str = null;
//System.out.println(str.length());//NullPointerException
StringBuffer sb = new StringBuffer();
sb.append(str);
System.out.println(sb.length());//4
System.out.println(sb);//"null"
//StringBuffer sb1 = new StringBuffer(str);
//System.out.println(sb1);//NullPointerException
```

源码分析

```java
String str = new String();// char[] value = new char[0];
String str1 = new String("abn");// char[] value = new char[]{'a','b','n'};

StringBuffer sb1 = new StringBuffer();// char[] value = new char[16];
sb1.append('a');// value[0] = 'a';
sb1.append('b');// value[1] = 'b';

StringBuffer sb2 = new StringBuffer("abc");// char[] value = new char["abc".length + 16]{'a','b','c's};

//问题一：
System.out.println(sb2.length());// 3
//问题二：
//扩容问题：若添加的数据底层数组装不下，那就需要扩容底层的数组；默认情况下，扩容为原来容量的2倍 + 2，同时将原有数组中的元素复制到新的数组中。
```

指导建议:

​	开发中使用，StringBuffer(int capacity) 或 StringBuilder(int capacity)

对比三者效率：

​	StringBuilder > StringBuffer > String

总结：

- 增：append(xxx)
- 删：delete(int start, int end)
- 改：setCharAt(int n, char ch) / replace(int start, int end, String str)
- 查：charAt(int n)
- 插：insert(int offset, xxx)
- 长度：length()
- *遍历：for() + charAt() / toString()

# 时间相关的类



## JDk8之前的日期和时间的API

![1569513355169](C:\Users\goodwell\AppData\Roaming\Typora\typora-user-images\1569513355169.png)

### java.lang.System类

![1569513341649](C:\Users\goodwell\AppData\Roaming\Typora\typora-user-images\1569513341649.png)时间戳

### java.util.Date (jaca.sql.Date)

2. ![1569513427058](C:\Users\goodwell\AppData\Roaming\Typora\typora-user-images\1569513427058.png)

```java
public class TimeTest {
    //1.System类中的currentTimeMillis()
    @Test
    public void test11(){
        long time = System.currentTimeMillis();
        System.out.println(time);
        //1569513273409返回当前时间与1970年1月1日0时0分0秒之间以毫秒为单位的时间差

    }
    //2.java.util.Date类（java.sql.Date类）
//    ①两个构造器的使用
//        > Date() 创建一个当前时间的Date对象
//        > Date(long) 创建指定毫秒数的Date对象
//    ②两个方法的使用
//        > toString() 显示当前的年、月、日、时、分、秒
//        > getTime() 获取当前Date对象对应的毫秒数（时间戳）
//    ③java.sql.Date类对应着数据库中的日期类型的变量
//        > 如何实例化
//        > util.Date  --getTime()->  sql.Date对象
//        >< sql.Date  -->  util.Date对象(不需要转，学生本身就是人)
    @Test
    public void test22(){
        //构造器一：Date() 创建一个当前时间的Date对象
        Date date1 = new Date();
        System.out.println(date1.toString());//Fri Sep 27 00:50:46 CST 2019
        System.out.println(date1.getTime());//1569516806737
        //构造器二：Date(long) 创建指定毫秒数的Date对象
        Date date2 = new Date(1569516806737L);
        System.out.println(date2.toString());//Fri Sep 27 00:53:26 CST 2019
        //创建java.sql.Date对象
        java.sql.Date date3 = new java.sql.Date(1569516806737L);
        System.out.println(date3);//2019-09-27有无.toString()一样
        //sql.Date  -->  util.Date对象
        Date date8 = date3;
        System.out.println(date8.toString());
        //util.Date  --getTime()->  sql.Date对象
        //情况1
        Date date4 = new java.sql.Date(1569516806737L);
        java.sql.Date date5 = (java.sql.Date) date4;
        //情况2
        Date date6 = new Date();
        java.sql.Date date7 = new java.sql.Date(date6.getTime());
    }
}
```

### SimpleDateFormat类

![1569582874335](C:\Users\goodwell\AppData\Roaming\Typora\typora-user-images\1569582874335.png)

```java
public class DateTimeTesr {
    /*
    SimpleDateFormat的使用：对日期Date类的格式化和解析
    1.两个操作
    - 格式化： 日期 ---> 字符串
    - 解析： 字符串 ---> 日期
    2.SimpleDateFormat的实例化
     */
    @Test
    public void testSimpleDateFormat(){
        //实例化SimpleDateFormat:使用默认构造器
        SimpleDateFormat sdf = new SimpleDateFormat();

        //格式化： 日期 ---> 字符串
        Date date = new Date();
        System.out.println(date);

        String format = sdf.format(date);
        System.out.println(format);

        //解析： 字符串 ---> 日期
        String str = "19-9-27 下午8:12";
        Date date1 = null;
        try {
            date1 = sdf.parse(str);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        System.out.println(date1);

        // 按照指定的方式格式化和解析，调用带参数的构造器
//        SimpleDateFormat sdf1 = new SimpleDateFormat("yyyyy.MMMMM.dd GGG hh:mm aaa");
        SimpleDateFormat sdf1 = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
        //格式化
        String format1 = sdf1.format(date);
        System.out.println(format1);//2019-09-27 08:22:08
        //解析
        Date date2 = null;
        try {
            date2 = sdf1.parse("2019-09-27 08:22:08");
        } catch (ParseException e) {
            e.printStackTrace();
        }
        System.out.println(date2);
    }
}
```

```java
public void test12() throws ParseException {
    /*
    练习一： 字符串“2020-09-08”抓换成java.sql.Date

    练习二： “三天打鱼两天晒网” 1990-01-01 xxxx-xx-xx 打鱼？晒网？
     */
    String birth = "2020-09-08";

    SimpleDateFormat sdf1 = new SimpleDateFormat("yyyy-MM-dd");
    Date date = sdf1.parse(birth);
//        System.out.println(date);
    java.sql.Date birthDate = new java.sql.Date(date.getTime());
    System.out.println(birthDate);
    //思路：总天数％５＝＝？
    //方式一：( date2.getTime() - date1.getTime() ) / (1000 * 60 * 60 * 24) + 1
    //方式二：时间分段整数年加闰年
}
```

### Calendar类

![1569599381096](C:\Users\goodwell\AppData\Roaming\Typora\typora-user-images\1569599381096.png)

```java
/*
Calendar类(抽象类)的使用
 */
@Test
public void testCalendar(){
    // 1.实例化
    // 方式一：创建其子类（GregorianCalendar）的对象
    // 方式二：调用其静态方法getInstance()
    Calendar calendar = Calendar.getInstance();
    System.out.println(calendar.getClass());

    // 2.常用方法
    // get()
    int days = calendar.get(Calendar.DAY_OF_MONTH);
    System.out.println(days);//28
    System.out.println(calendar.get(Calendar.DAY_OF_YEAR));//271

    // set() 可变性
    calendar.set(Calendar.DAY_OF_MONTH,22);
    days = calendar.get(Calendar.DAY_OF_MONTH);
    System.out.println(days);//22

    // add()
    calendar.add(Calendar.DAY_OF_MONTH,22);
    days = calendar.get(Calendar.DAY_OF_MONTH);
    System.out.println(days);//14

    // getTime() 日历类 --> Date
    Date date = calendar.getTime();
    System.out.println(date);

    // setTime() Date --> 日历类
    Date date1 = new Date();
    calendar.setTime(date1);
    days = calendar.get(Calendar.DAY_OF_MONTH);
    System.out.println(days);//28
}
```

## JDK 8中新日期时间API

### java.time

![1569602182284](C:\Users\goodwell\AppData\Roaming\Typora\typora-user-images\1569602182284.png)

```java
/*
LocalDate LocalTime LocalDateTime 的使用 
类似于Calendar() 
 */
@Test
public void testTime(){
    //now()  获取当前时间日期
    LocalDate localDate = LocalDate.now();
    LocalTime localTime = LocalTime.now();
    LocalDateTime localDateTime = LocalDateTime.now();

    System.out.println(localDate);//2019-09-28
    System.out.println(localTime);//09:19:28.307
    System.out.println(localDateTime);//2019-09-28T09:19:28.307

    //of()  设置指定的年月日时分秒，没有偏移量
    LocalDateTime localDateTime1 = LocalDateTime.of(2020, 10, 10, 0, 0, 0);
    System.out.println(localDateTime1);//2020-10-10T00:00

    //getXxx() 获取相关属性
    System.out.println(localDateTime.getDayOfMonth());//28
    System.out.println(localDateTime.getDayOfWeek());//SATURDAY
    System.out.println(localDateTime.getDayOfYear());//271
    System.out.println(localDateTime.getHour());//9
    System.out.println(localDateTime.getMonthValue());//9

    //withXxx()  修改、设置  不同于Calendar() 体现不可变性
    LocalDate localDate1 = localDate.withDayOfMonth(22);
    System.out.println(localDate);//2019-09-28
    System.out.println(localDate1);//2019-09-22

    //plusXxx()  增加
    LocalDateTime localDateTime2 = localDateTime.plusMonths(4);
    System.out.println(localDateTime);//2019-09-28T09:29:43.638
    System.out.println(localDateTime2);//2020-01-28T09:29:43.638

    //minusXxx()  减去
    LocalDateTime localDateTime3 = localDateTime.minusDays(3);
    System.out.println(localDateTime);//2019-09-28T09:32:06.256
    System.out.println(localDateTime3);//2019-09-25T09:32:06.256
}
```

### Instant

![1569634539745](C:\Users\goodwell\AppData\Roaming\Typora\typora-user-images\1569634539745.png)

```java
/*
Instant 的使用
类似于Date
 */
@Test  
public void testInstant(){
    //now() 获取本初子午线对应的标准时间
    Instant instant = Instant.now();  
    System.out.println(instant); //2019-09-28T01:42:23.739Z

    //添加时间的偏移量
    OffsetDateTime offsetDateTime = instant.atOffset(ZoneOffset.ofHours(8));
    System.out.println(offsetDateTime); //2019-09-28T09:42:23.739+08:00

    //toEpochMilli() 获取自1970年1月1日0时0分0秒（UTC）开始的毫秒数 --> Date类的getTime()
    long milli = instant.toEpochMilli();
    System.out.println(milli);//1569638022547

    //ofEpochMilli() 通过给定的毫秒数，获取Instant实例  --> Date(long millis)
    Instant instant1 = Instant.ofEpochMilli(11111111L);
    System.out.println(instant1);//1970-01-01T03:05:11.111Z
}
```

### java.time.format.DateTimeFormatter

![1569645935635](C:\Users\goodwell\AppData\Roaming\Typora\typora-user-images\1569645935635.png)

```java
/*
DateTimeFormatter 格式化或解析日期、时间
类似于SimpleDateFormat
 */
@Test
public void test3(){
    //方式1：预定义的标准格式。如：ISO_LOCAL_DATE_TIME;ISO_LOCAL_DATE;ISO_LOCAL_TIME
    DateTimeFormatter formatter = DateTimeFormatter.ISO_LOCAL_DATE_TIME;
    //格式化： 日期 --> 字符串
    LocalDateTime localDateTime = LocalDateTime.now();
    String str = formatter.format(localDateTime);
    System.out.println(localDateTime);//2019-09-28T14:49:57.682
    System.out.println(str);//2019-09-28T14:49:57.682
    //解析： 字符串 --> 日期
    TemporalAccessor parse = formatter.parse("2019-09-28T14:49:57.682");
    System.out.println(parse);//{},ISO resolved to 2019-09-28T14:49:57.682

    //方式2：本地化相关的格式。如：ofLocalizedDateTime(FormatStyle.LONG)
    //FormatStyle.LONG / FormatStyle.MEDIUM / FormatStyle.SHORT ↑
    DateTimeFormatter formatter1 = DateTimeFormatter.ofLocalizedDateTime(FormatStyle.LONG);
    //格式化
    String str1 = formatter1.format(localDateTime);
    System.out.println(localDateTime);//2019-09-28T15:33:41.802
    System.out.println(str1);//2019年9月28日 下午03时33分41秒
    //ofLocalizedDate()
    DateTimeFormatter formatter2 = DateTimeFormatter.ofLocalizedDate(FormatStyle.FULL);
    //格式化
    String str2 = formatter2.format(LocalDate.now());
    System.out.println(str2);//2019年9月28日 星期六

    //方式3：自定义的格式。如：ofPattern(“yyyy-MM-dd hh:mm:ss”)
    DateTimeFormatter formatter3 = DateTimeFormatter.ofPattern("yyyy-MM-dd hh:mm:ss");
    //格式化
    String str3 = formatter3.format(localDateTime);
    System.out.println(localDateTime);//2019-09-28T15:38:38.889
    System.out.println(str3);//2019-09-28 03:38:38

    //解析
    TemporalAccessor parse1 = formatter3.parse("2019-09-28 03:38:38");
    System.out.println(parse1);//{SecondOfMinute=38, HourOfAmPm=3, MicroOfSecond=0, NanoOfSecond=0, MinuteOfHour=38
}
```

![1569656495836](C:\Users\goodwell\AppData\Roaming\Typora\typora-user-images\1569656495836.png)

![1569656550746](C:\Users\goodwell\AppData\Roaming\Typora\typora-user-images\1569656550746.png)

# Java比较器

对象数组的排序问题，涉及对象之间的比较。Java对象正常情况下，只能进行比较： == 或 != ，不能使用 > 或 < 。Java实现对象排序的方式有两种：

## 自然排序：java.lang.Comparable

Comparable接口的使用举例  自然排序

1. 像String、包装类等实现了Comparable接口，重写了compareTo()方法，给出了比较两个大小的方式

2. 像String、包装类等重写了compareTo()方法以后，进行了从小到大的排序

3. 重写compareTo(obj)的规则：    

   如果当前对象this大于形参对象obj，则返回正整数；    

   如果当前对象this小于形参对象obj，则返回负整数；   

   如果当前对象this等于形参对象obj，则返回零。

4. 对于自定义类，若需要排序，可让自定义类实现Comparable接口，重写compareTo(obj)方法，指明如何排序

```java
@Test
public void test1(){
    String[] arr = new String[]{"AA","CC","KK","MM","GG","JJ","DD"};
    Arrays.sort(arr);
    System.out.println(Arrays.toString(arr));
}
```

![1570070503907](C:\Users\goodwell\AppData\Roaming\Typora\typora-user-images\1570070503907.png)

## 定制排序：java.util.Comparator

1. 背景：

   当元素的类型没有实现Comparable接口而又不方便修改代码；或者实现了Comparable接口的排序规则不适合当前的操作，那么可以考虑使用Comparator的对象来进行排序。

2. 重写compare(Object o1, Object o2)方法，比较o1和o2的大小：

   若方法返回正整数，表示o1大于o2；

   返回0，表示相等；返回负数，表示o1小于o2。

```java
@Test
public void test2(){
    String[] arr = new String[]{"AA","CC","KK","MM","GG","JJ","DD"};
    Arrays.sort(arr,new Comparator(){
        //按照字符串大到小
        @Override
        public int compare(Object o1, Object o2) {
            if(o1 instanceof String && o2 instanceof String){
                String s1 = (String) o1;
                String s2 = (String) o2;
                return -s1.compareTo(s2);
            }
//                return 0;
            throw new RuntimeException("输入的数据类型不一致");
        }
    });
    System.out.println(Arrays.toString(arr));
}
```

Comparable接口与Comparator的使用的对比：

- 前者一旦指定，保证Comparable接口实现类的对象在任何位置都可以比较大小；

- 后者属于临时性的比较。

# 其他类

## System类

- System类代表系统，系统级的很多属性和控制方法都放置在该类的内部。该类位于java.lang包。
- 由于该类的构造器是private的，所以无法创建该类的对象，也就是无法实
  例化该类。其内部的成员变量和成员方法都是static的，所以也可以很方便
  的进行调用。
- 成员变量
  System类内部包含in、out和err三个成员变量，分别代表标准输入流(键盘输入)，标准输出流(显示器)和标准错误输出流(显示器)。
- 成员方法
  - native long currentTimeMillis()：
    该方法的作用是返回当前的计算机时间，时间的表达格式为当前计算机时
    间和GMT时间(格林威治时间)1970年1月1号0时0分0秒所差的毫秒数。
  - void exit(int status)：
    该方法的作用是退出程序。其中status的值为0代表正常退出，非零代表
    异常退出。 使用该方法可以在图形界面编程中实现程序的退出功能等。
  - void gc()：
    该方法的作用是请求系统进行垃圾回收。至于系统是否立刻回收，则
    取决于系统中垃圾回收算法的实现以及系统执行时的情况。
  - String getProperty(String key)：
    该方法的作用是获得系统中属性名为key的属性对应的值。系统中常见
    的属性名以及属性的作用如下表所示：![1570078997249](C:\Users\goodwell\AppData\Roaming\Typora\typora-user-images\1570078997249.png)

```java
@Test
public void test3(){
    String javaVersion = System.getProperty("java.version");
    System.out.println("java的version:" + javaVersion);
    String javaHome = System.getProperty("java.home");
    System.out.println("java的home:" + javaHome);
    String osName = System.getProperty("os.name");
    System.out.println("os的name:" + osName);
    String osVersion = System.getProperty("os.version");
    System.out.println("os的version:" + osVersion);
    String userName = System.getProperty("user.name");
    System.out.println("user的name:" + userName);
    String userHome = System.getProperty("user.home");
    System.out.println("user的home:" + userHome);
    String userDir = System.getProperty("user.dir");
    System.out.println("user的dir:" + userDir);
}
out:
java的version:1.8.0_191
java的home:C:\Program Files\Java\jdk1.8.0_191\jre
os的name:Windows 10
os的version:10.0
user的name:goodwell
user的home:C:\Users\goodwell
user的dir:D:\Codes\IdeaProjects\JavaSenior\Day
```

## Math类

java.lang.Math 提供了一系列静态方法用于 科学 计算。其 方法的参数和返回
为 值类型一般为double 型。
abs 绝对值
acos,asin,atan,cos,sin,tan 三角函数
sqrt 平方根
pow(double a,doble b) a 的b 次幂
log 自然对数
exp e 为底指数
max(double a,double b)
min(double a,double b)
random() 返回0.0 到1.0 的随机数
long round(double a) double 型数据a 转换为long 型（四舍五入）
toDegrees(double angrad) 弧度—> 角度
toRadians(double angdeg) 角度—>弧度

## BigInteger与BigDecimal

### BigInteger类 

 Integer类作为int的包装类，能存储的最大整型值为2 31 -1，Long类也是有限的，
最大为2 63 -1。如果要表示再大的整数，不管是基本数据类型还是他们的包装类
都无能为力，更不用说进行运算了。
 java.math包的BigInteger 可以表示不可变的任意精度的整数。BigInteger 提供
所有 Java 的基本整数操作符的对应物，并提供 java.lang.Math 的所有相关方法。
另外，BigInteger 还提供以下运算：模算术、GCD 计算、质数测试、素数生成、
位操作以及一些其他操作。
 构造器
 BigInteger(String val)：根据字符串构建BigInteger对象

 常用 方法
 public BigInteger abs()：返回此 BigInteger 的绝对值的 BigInteger。
 BigInteger add(BigInteger val) ：返回其值为 (this + val) 的 BigInteger
 BigInteger subtract(BigInteger val) ：返回其值为 (this - val) 的 BigInteger
 BigInteger multiply(BigInteger val) ：返回其值为 (this * val) 的 BigInteger
 BigInteger divide(BigInteger val) ：返回其值为 (this / val) 的 BigInteger。整数
相除只保留整数部分。
 BigInteger remainder(BigInteger val) ：返回其值为 (this % val) 的 BigInteger。
 BigInteger[] divideAndRemainder(BigInteger val)：返回包含 (this / val) 后跟
(this % val) 的两个 BigInteger 的数组。
 BigInteger pow(int exponent) ：返回其值为 (this exponent ) 的 BigInteger。

###　BigDecimal类

 一般的Float类和Double类可以用来做科学计算或工程计算，但在 商业计算中，
到 要求数字精度比较高，故用到java.math.BigDecimal类 类 。
 BigDecimal类支持不可变的、任意精度的有符号十进制定点数。
 构造器
 public BigDecimal(double val)
 public BigDecimal(String val)
 常用方法
 public BigDecimal add(BigDecimal augend)
 public BigDecimal subtract(BigDecimal subtrahend)
 public BigDecimal multiply(BigDecimal multiplicand)
 public BigDecimal divide(BigDecimal divisor, int scale, int roundingMode)

```java
public void testBigInteger() {
    BigInteger bi = new BigInteger("12433241123");
    BigDecimal bd = new BigDecimal("12435.351");
    BigDecimal bd2 = new BigDecimal("11");
    System.out.println(bi);
    // System.out.println(bd.divide(bd2));
    System.out.println(bd.divide(bd2, BigDecimal.ROUND_HALF_UP));
    System.out.println(bd.divide(bd2, 15, BigDecimal.ROUND_HALF_UP));
}
```

自用Java笔记（Ⅶ），主要记录Java枚举类与注解！奋斗ing<!-- more -->

## 枚举类的使用

含义:类的对象只有**有限个**，**确定的**。(当需要定义一组常量时，强烈建议使用枚举类。若枚举类只有一个对象，则可作为单例模式的实现方式。)

如何定义：

- 方式一：jdk5.0之前，自定义枚举类
- 方式二：jdk5.0时，可使用enum关键字定义枚举类

```java
public class enumTest {
    public static void main(String[] args) {
        Season spring = Season.SPRING;
        System.out.println(spring);//Season{seasonName='春天', seasonDesc='春暖花开'}
    }
}

//自定义枚举类
class Season {
    //1.声明season对象的属性： private final修饰
    private final String seasonName;
    private final String seasonDesc;

    //2.私有化类的构造器，并给对象属性赋值
    private Season(String seasonName, String seasonDesc) {
        this.seasonDesc = seasonDesc;
        this.seasonName = seasonName;
    }

    //3.提供当前枚举类的多个对象: public static final修饰
    public static final Season SPRING = new Season("春天", "春暖花开");
    public static final Season SUMMER = new Season("夏天", "夏日炎炎");
    public static final Season AUTUMN = new Season("秋天", "秋高气爽");
    public static final Season WINTER = new Season("冬天", "冬天雪地");

    //4.其他诉求1：获取枚举类对象的属性
    public String getSeasonName() {
        return seasonName;
    }

    public String getSeasonDesc() {
        return seasonDesc;
    }
    //4.其他诉求2：提供toString()

    @Override
    public String toString() {
        return "Season{" +
                "seasonName='" + seasonName + '\'' +
                ", seasonDesc='" + seasonDesc + '\'' +
                '}';
    }
}
```

```java
public class enumTest1 {
    public static void main(String[] args) {
        Season1 summer = Season1.SUMMER;
        System.out.println(summer);//SUMMER

        System.out.println(Season1.class.getSuperclass());//class java.lang.Enum
    }
}

//使用enum关键字定义枚举类
//说明：定义的枚举类默认继承于class java.lang.Enum
enum Season1 {
    //1.提供当前枚举类的多个对象,多个对象之间用","隔开，末尾对象";"结束
    SPRING("春天", "春暖花开"),
    SUMMER("夏天", "夏日炎炎"),
    AUTUMN("秋天", "秋高气爽"),
    WINTER("冬天", "冬天雪地");

    //2.声明season对象的属性： private final修饰
    private final String seasonName;
    private final String seasonDesc;

    //2.私有化类的构造器，并给对象属性赋值
    Season1(String seasonName, String seasonDesc) {
        this.seasonDesc = seasonDesc;
        this.seasonName = seasonName;
    }

    //4.其他诉求1：获取枚举类对象的属性
    public String getSeasonName() {
        return seasonName;
    }

    public String getSeasonDesc() {
        return seasonDesc;
    }
//    //4.其他诉求2：提供toString()
//
//    @Override
//    public String toString() {
//        return "Season1{" +
//                "seasonName='" + seasonName + '\'' +
//                ", seasonDesc='" + seasonDesc + '\'' +
//                '}';
//    }
}
```

### Enum类的主要方法

- values() 方法：返回枚举类型的对象数组。该方法可以很方便地遍历所有的枚举值。
- valueOf(String str)：可以把一个字符串转为对应的枚举类对象。要求字符串必须是枚举类对象的“名字”。如不是，会有运行时异常：IllegalArgumentException。
- toString()：返回当前枚举类对象常量的名称

```java
//values():
Season1[] values = Season1.values();
for (int i = 0; i < values.length; i++) {
    System.out.println(values[i]);
}//SPRING SUMMER AUTUMN WINTER

//valueOf(String objName):返回枚举类中对象名是objName的对象
Season1 winter = Season1.valueOf("WINTER");
System.out.println(winter);//WINTER
```

### 使用enum关键字定义的枚举类实现接口的情况

- 情况一：实现接口，在enum类中实现抽象方法；
- 情况二：让枚举类的对象分别实现接口中的抽象方法（每个都不一样）

```java
SPRING("春天", "春暖花开"){
    @Override
    public void show(){
        System.out.println("春天在哪里");
    }
}
```

## 注解（Annotation）的使用

框架 = 注解 + 反射 + 设计模式。

### 理解Annotation：

- jdk 5.0 新增的功能
- Annotation 其实就是代码里的 特殊标记, 这些标记可以在编译, 类加
  载, 运行时被读取, 并执行相应的处理。通过使用Annotation, 程序员
  可以在不改变原有逻辑的情况下, 在源文件中嵌入一些补充信息。
- 在JavaSE中，注解的使用目的比较简单，例如标记过时的功能，
  忽略警告等。在JavaEE/Android中注解占据了更重要的角色，例如
  用来配置应用程序的任何切面，代替JavaEE旧版中所遗留的繁冗
  代码和XML配置等。

### Annotation的使用示例

- 示例一：生成文档相关的注解

- 示例二： 在编译时进行格式检查(JDK 内置的三个基本注解)

  @Override: 限定重写父类方法, 该注解只能用于方法
  @Deprecated: 用于表示所修饰的元素(类, 方法等)已过时。通常是因为
  所修饰的结构危险或存在更好的选择
  @SuppressWarnings: 抑制编译器警告

- 示例三： 跟踪 代码依赖性，实现替代配置文件功能

### 如何自定义注解

1. 注解声明为：@interface
2. 内部定义成员，通常使用value表示
3. 可以指定成员的默认值，使用default定义
4. 若自定义注解没有成员，表明是一个标识作用

PS: 

- 若注解有成员，在使用注解时，需要指明成员的值
- 自定义注解必须配上注解的信息处理流程（使用反射）才有意义
- 自定义注解通常都会指明两个元注解：Retention、Target

### jdk 提供的4中元注解

元注解：对现有的注解进行解释说明的 注解

- Retention：指定所修饰的 Annotation 的生命周期：SOURCE\CLASS（默认行为）\RUNTIME只有声明为RUNTIME生命周期的注解，才能通过反射获得
- Target：用于指定被修饰的 Annotation 能用于修饰那些程序元素
- Documented：表示所修饰的注解在被javadoc解析时，保留下来
- Inherited：被它修饰的 Annotation 将具有继承性

![1570189190216](C:\Users\goodwell\AppData\Roaming\Typora\typora-user-images\1570189190216.png)

![1570188905189](C:\Users\goodwell\AppData\Roaming\Typora\typora-user-images\1570188905189.png)

自用Java笔记（Ⅷ），主要记录Java集合！奋斗ing<!-- more -->

![1571913060661](C:\Users\goodwell\AppData\Roaming\Typora\typora-user-images\1571913060661.png)

```
一、集合框架的概述* 1. 集合、数组都是对多个数据进行存储操作的结构，简称Java容器。*   说明：此时的存储，主要指的是内存层面的存储，不涉及持久化的存储（.txt,.jpg,.avi,数据库中）*
```

Java集合可以分为Collection和Map两种体系

- Collection接口：单列数据，定义了存取一些对象的方法的集合
  - List：元素有序、可重复的集合
  - Set：元素无序、不可重复的集合
- Map接口：双列数据，保存具有映射关系"key-value对"的集合

### 集合框架

```
|----Collection接口：单列集合，用来存储一个一个的对象
	|----List接口：存储有序的、可重复的数据 --> “动态”数组
		|----ArrayList、LinkedList、Vector
	
	|----Set接口：存储无序的、不可重复的数据 --> 数学中的“集合”
		|----HashSet、LinkedHashSet、TreeSet
	
|----Map接口：双列接口，用来存储一对(key-value)数据 --> y = f(x)
		|----HashMap、LinkedHashMap、TreeMap、Hashtable、Properties
```

Collection常用方法

```java
@Test
    public void test1(){
        Collection coll = new ArrayList();

        //add(Object e): 将元素e添加到集合coll中、
        coll.add("AA");
        coll.add("BB");
        coll.add(123); //自动装箱
        coll.add(new Date());

        //size(): 获取添加的元素的个数
        System.out.println(coll.size());//4

        //addAll(Collection coll1): 将coll1集合中的元素添加到当前的集合中
        Collection coll1 = new ArrayList();
        coll1.add(456);
        coll1.add("cc");
        coll.addAll(coll1);

        System.out.println(coll.size());//6
        System.out.println(coll);//[AA, BB, 123, Thu Oct 31 12:03:02 CST 2019, 456, cc]

        //clear(): 清空集合元素
        coll.clear();

        //isEmpty(): 判断当前集合是否为空
        System.out.println(coll.isEmpty());//true
    }
```

1. contains(Object obj): 判断当前集合中是否包含obj

PS:向Collection接口的实现类的对象中添加数据obj时，要求obj所在类要重写equals()。

```java
@Test
public void test2(){
    Collection coll = new ArrayList();
    coll.add(123);
    coll.add(456);
    Person p = new Person("Jerry1", 20);
    coll.add(p);
    coll.add(new Person("Jerry", 20));
    coll.add(new String("Tom"));
    coll.add(false);

    //1.contains(Object obj): 判断当前集合中是否包含obj
    //我们在判断时会调用obj对象所在类的equals()
    boolean contains = coll.contains(123);
    System.out.println(contains);//true
    System.out.println(coll.contains(new String("Tom")));//true

    System.out.println(coll.contains(new Person("Jerry", 20)));//false
    System.out.println(coll.contains(p));//true
    //PS:向Collection接口的实现类的对象中添加数据obj时，要求obj所在类要重写equals()。
}
```

2. containsAll(Collection coll1): 判断形参coll1中的所有元素都存在于当前集合中。

```java
//2.containsAll(Collection coll1): 判断形参coll1中的所有元素都存在于当前集合中。
Collection coll1 = Arrays.asList(123,4567);
System.out.println(coll.containsAll(coll1));//false
```

3. remove(Object obj): 从当前集合中移除obj元素

```java
@Test
public void test3(){
    Collection coll = new ArrayList();
    coll.add(123);
    coll.add(456);
    coll.add(new Person("Jerry", 20));
    coll.add(new String("Tom"));
    coll.add(false);

    //3.remove(Object obj): 从当前集合中移除obj元素
    coll.remove(123);
    System.out.println(coll);
    //[456, com.good.java.Person@4ee285c6, Tom, false]
    coll.remove(new Person("Jerry", 20));
    System.out.println(coll);
    //[456, com.good.java.Person@4ee285c6, Tom, false]
}
```

4. removeAll(Collection coll1): 差集，从当前集合中移除coll1中所有的元素

```java
//4.removeAll(Collection coll1): 差集，从当前集合中移除coll1中所有的元素
Collection coll1 = Arrays.asList(123,456);
coll.removeAll(coll1);
System.out.println(coll);
//[com.good.java.Person@4ee285c6, Tom, false]
```

5. retainAll(Collection coll1): 交集，获取当前集合和coll1集合的交集

```java
@Test
public void test4() {
    Collection coll = new ArrayList();
    coll.add(123);
    coll.add(456);
    coll.add(new Person("Jerry", 20));
    coll.add(new String("Tom"));
    coll.add(false);

    //5.retainAll(Collection coll1): 交集，获取当前集合和coll1集合的交集
    Collection coll1 = Arrays.asList(123,456,789);
    coll.retainAll(coll1);
    System.out.println(coll);
    //[123, 456]
}
```

6. equals(Object obj)

```java
    Collection coll1 = new ArrayList();
    coll1.add(123);
    coll1.add(456);
//        coll1.add(new Person("Jerry", 20));
    coll1.add(new String("Tom"));
    coll1.add(false);

    //6.equals(Object obj)
    System.out.println(coll.equals(coll1));
```

7. hashCode(): 返回当前对象的哈希值

```java
Collection coll = new ArrayList();
coll.add(123);
coll.add(456);
    coll.add(new Person("Jerry", 20));
coll.add(new String("Tom"));
coll.add(false);

//7.hashCode(): 返回当前对象的哈希值
System.out.println(coll.hashCode());//701070075
```

8. 集合 ---> 数组：toArray()

```java
Object[] arr = coll.toArray();
for (int i = 0; i < arr.length; i++) {
    System.out.println(arr[i]);
}

//拓展：数组 ---> 集合： 调用Arrays类的静态方法asList()
List<String> list = Arrays.asList(new String[]{"aa","bb","cc"});
System.out.println(list);//[aa, bb, cc]

List arr1 = Arrays.asList(new int[]{123,456});
System.out.println(arr1.size());//1

List arr2 = Arrays.asList(new Integer[]{123,456});
System.out.println(arr2.size());//2
```

## 迭代器



![1572503412344](C:\Users\goodwell\AppData\Roaming\Typora\typora-user-images\1572503412344.png)

![1572503469429](C:\Users\goodwell\AppData\Roaming\Typora\typora-user-images\1572503469429.png)

![1572503494900](C:\Users\goodwell\AppData\Roaming\Typora\typora-user-images\1572503494900.png)

![1572503705248](C:\Users\goodwell\AppData\Roaming\Typora\typora-user-images\1572503705248.png)

![1572503758180](C:\Users\goodwell\AppData\Roaming\Typora\typora-user-images\1572503758180.png)

![1572503855013](C:\Users\goodwell\AppData\Roaming\Typora\typora-user-images\1572503855013.png)

![1572503886412](C:\Users\goodwell\AppData\Roaming\Typora\typora-user-images\1572503886412.png)

![1572503911762](C:\Users\goodwell\AppData\Roaming\Typora\typora-user-images\1572503911762.png)

![1572503931523](C:\Users\goodwell\AppData\Roaming\Typora\typora-user-images\1572503931523.png)

![1572503952571](C:\Users\goodwell\AppData\Roaming\Typora\typora-user-images\1572503952571.png)

![1572511884021](C:\Users\goodwell\AppData\Roaming\Typora\typora-user-images\1572511884021.png)

![1572511900541](C:\Users\goodwell\AppData\Roaming\Typora\typora-user-images\1572511900541.png)

![1572511917374](C:\Users\goodwell\AppData\Roaming\Typora\typora-user-images\1572511917374.png)

![1572512273159](C:\Users\goodwell\AppData\Roaming\Typora\typora-user-images\1572512273159.png)

![1572512400210](C:\Users\goodwell\AppData\Roaming\Typora\typora-user-images\1572512400210.png)

![1572512867042](C:\Users\goodwell\AppData\Roaming\Typora\typora-user-images\1572512867042.png)

![1572512954082](C:\Users\goodwell\AppData\Roaming\Typora\typora-user-images\1572512954082.png)



## List

![1572529716384](C:\Users\goodwell\AppData\Roaming\Typora\typora-user-images\1572529716384.png)

![1572530103932](C:\Users\goodwell\AppData\Roaming\Typora\typora-user-images\1572530103932.png)

![1572530405955](C:\Users\goodwell\AppData\Roaming\Typora\typora-user-images\1572530405955.png)

![1572530971664](C:\Users\goodwell\AppData\Roaming\Typora\typora-user-images\1572530971664.png)

![1572531188746](C:\Users\goodwell\AppData\Roaming\Typora\typora-user-images\1572531188746.png)

![1572534505340](C:\Users\goodwell\AppData\Roaming\Typora\typora-user-images\1572534505340.png)

![1572534562473](C:\Users\goodwell\AppData\Roaming\Typora\typora-user-images\1572534562473.png)

![1572534636871](C:\Users\goodwell\AppData\Roaming\Typora\typora-user-images\1572534636871.png)

![1572534731950](C:\Users\goodwell\AppData\Roaming\Typora\typora-user-images\1572534731950.png)

![1572534767934](C:\Users\goodwell\AppData\Roaming\Typora\typora-user-images\1572534767934.png)

![1572534855255](C:\Users\goodwell\AppData\Roaming\Typora\typora-user-images\1572534855255.png)

![1572534899402](C:\Users\goodwell\AppData\Roaming\Typora\typora-user-images\1572534899402.png)

![1572534942071](C:\Users\goodwell\AppData\Roaming\Typora\typora-user-images\1572534942071.png)

![1572535007627](C:\Users\goodwell\AppData\Roaming\Typora\typora-user-images\1572535007627.png)

 ![1572535088172](C:\Users\goodwell\AppData\Roaming\Typora\typora-user-images\1572535088172.png)

![1572535096718](C:\Users\goodwell\AppData\Roaming\Typora\typora-user-images\1572535096718.png)

## Set接口

![1572586657644](C:\Users\goodwell\AppData\Roaming\Typora\typora-user-images\1572586657644.png)

![1572587028171](C:\Users\goodwell\AppData\Roaming\Typora\typora-user-images\1572587028171.png)

![1572587553164](C:\Users\goodwell\AppData\Roaming\Typora\typora-user-images\1572587553164.png)

![1572588058108](C:\Users\goodwell\AppData\Roaming\Typora\typora-user-images\1572588058108.png)

![1572588085433](C:\Users\goodwell\AppData\Roaming\Typora\typora-user-images\1572588085433.png)

![1572589098679](C:\Users\goodwell\AppData\Roaming\Typora\typora-user-images\1572589098679.png)

![1572589169742](C:\Users\goodwell\AppData\Roaming\Typora\typora-user-images\1572589169742.png)

![1572589213748](C:\Users\goodwell\AppData\Roaming\Typora\typora-user-images\1572589213748.png)

![1572591351893](C:\Users\goodwell\AppData\Roaming\Typora\typora-user-images\1572591351893.png)

![1572591432911](C:\Users\goodwell\AppData\Roaming\Typora\typora-user-images\1572591432911.png)

![1572591768166](C:\Users\goodwell\AppData\Roaming\Typora\typora-user-images\1572591768166.png)

![1572591837122](C:\Users\goodwell\AppData\Roaming\Typora\typora-user-images\1572591837122.png)![1572591864203](C:\Users\goodwell\AppData\Roaming\Typora\typora-user-images\1572591864203.png)

![1572591952733](C:\Users\goodwell\AppData\Roaming\Typora\typora-user-images\1572591952733.png)

![1572591969872](C:\Users\goodwell\AppData\Roaming\Typora\typora-user-images\1572591969872.png)

![1572591994812](C:\Users\goodwell\AppData\Roaming\Typora\typora-user-images\1572591994812.png)

![1572592016723](C:\Users\goodwell\AppData\Roaming\Typora\typora-user-images\1572592016723.png)

![1572592160258](C:\Users\goodwell\AppData\Roaming\Typora\typora-user-images\1572592160258.png)

![1572592183064](C:\Users\goodwell\AppData\Roaming\Typora\typora-user-images\1572592183064.png)

## Map接口

![1572594697015](C:\Users\goodwell\AppData\Roaming\Typora\typora-user-images\1572594697015.png)

![1572594828381](C:\Users\goodwell\AppData\Roaming\Typora\typora-user-images\1572594828381.png)

![1572595139438](C:\Users\goodwell\AppData\Roaming\Typora\typora-user-images\1572595139438.png)

![1572595145355](C:\Users\goodwell\AppData\Roaming\Typora\typora-user-images\1572595145355.png)

![1572595182280](C:\Users\goodwell\AppData\Roaming\Typora\typora-user-images\1572595182280.png)

![1572595210220](C:\Users\goodwell\AppData\Roaming\Typora\typora-user-images\1572595210220.png)

![1572595228892](C:\Users\goodwell\AppData\Roaming\Typora\typora-user-images\1572595228892.png)

![1572595279075](C:\Users\goodwell\AppData\Roaming\Typora\typora-user-images\1572595279075.png)

![1572595300735](C:\Users\goodwell\AppData\Roaming\Typora\typora-user-images\1572595300735.png)

![1572597230407](C:\Users\goodwell\AppData\Roaming\Typora\typora-user-images\1572597230407.png)

![1572597193080](C:\Users\goodwell\AppData\Roaming\Typora\typora-user-images\1572597193080.png)

![1572603557083](C:\Users\goodwell\AppData\Roaming\Typora\typora-user-images\1572603557083.png)

![1572603582172](C:\Users\goodwell\AppData\Roaming\Typora\typora-user-images\1572603582172.png)

![1572603606756](C:\Users\goodwell\AppData\Roaming\Typora\typora-user-images\1572603606756.png)

![1572603715512](C:\Users\goodwell\AppData\Roaming\Typora\typora-user-images\1572603715512.png)

![1572604784062](C:\Users\goodwell\AppData\Roaming\Typora\typora-user-images\1572604784062.png)

![1572604831090](C:\Users\goodwell\AppData\Roaming\Typora\typora-user-images\1572604831090.png)

