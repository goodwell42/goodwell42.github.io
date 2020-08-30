---
title: Java_day6
date: 2019-09-25 20:38:08
tags: Java
toc: true
categories: 
- Java
- 常用类
---

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

