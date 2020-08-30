---
title: Java_day5
date: 2019-09-08 10:26:16
tags: Java
toc: true
categories: 
- Java
- 多线程
---

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





