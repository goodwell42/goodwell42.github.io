---
title: Java_day7
date: 2019-09-28 15:43:55
tags: Java
toc: true
categories: 
- Java
- 枚举类
---

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

-  示例三： 跟踪 代码依赖性，实现替代配置文件功能

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

