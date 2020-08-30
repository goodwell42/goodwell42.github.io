---


title: Java_day8
date: 2019-10-04 14:01:56
tags: Java
toc: true
categories: 
- Java
- 集合
---

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

