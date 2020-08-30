---
title: MySQL初识
date: 2020-08-10 18:26:53
tags: MySQL
toc: true
categories: 
- 数据库
- MySQL

---
特别基础的MySQL语法
<!--more-->
## 数据库介绍

### 数据库的重要性：

- 实现数据持久化
- 使用完整的管理系统统一管理，易于查询

### 相关术语

DB：数据库（database）存储数据的“仓库”，保存了一系列有组织的数据。

DBMS：数据库管理系统（Database Management System）数据库是通过DBMS创建何操作的容器。

SQL：结构化查询语言（Structure Query Language）专门用来与数据库通信的语言。

### SQL的优点：

- 不是某个特定数据库供应商特有的语言，几乎多有的DBMS都支持SQL。
- 简单易学
- 灵活，可以进行非常复杂和高级的数据库操作。

### 数据库的特点：

- 将数据放在表中，表再放在库中
- 每个数据库中可以有多张表。每个表的表名标识自己，具有唯一性
- 表具有一些特性，特性定义了数据再表中如何存储，类似与“类”的设计
- 表由列（字段）组成。所有表都是由一个或者多个列组成，类似“属性”
- 表中的数据按照行来存储，每行类似“对象”

DBMS分为两类：

- 基于共享文件系统（Access）
- 基于C/S客户机-服务器（MySQL，Oracle，SqlServer）

## 关系型数据库MySQL介绍

### MySQL服务启动退出

1. 计算机-右击管理-服务

2. 通过管理员身份运行

   ```commend
   net start 服务名
   net stop 服务名
   ```

### MySQL登录登出

```sql
mysql [-h localhost -P 3306] -u root -p
exit或者ctrl+c
```

### 常见命令：（ Commands end with ; or \g.）

1. 查看当前所有数据库

``` sql
show databases；
```

2. 打开指定的库

```sql
use 库名;
```

3. 查看当前库中的所有表

```sql
show tables;
```

4. 查看其它库中的所有表

```sql
show tables from 库名;
```

5. 创建表

```sql
create table 表名(
	列名 列类型；
    ...
)
```

6. 查看表格式

```sql
desc 表名;
```

7. 查看服务器的版本

```sql
1. 登录mysql服务端
select version();
2. 未登录服务端
mysql --version 或 -V
```

### MySQL的语法规范

- 不区分大小写，但建议关键字大写，表名、列名小写

- 每条命令最好用分号结尾

- 根据需要进行缩进或者换行

- 注释

  单行注释：#注释文字 或者 -- 注释文字

  多行注释：/*注释文字*/

### SQL的语言分类

 - DQL（Data Query Language）：数据查询语言
   select 
 - DML(Data Manipulate Language):数据操作语言
   insert 、update、delete
 - DDL（Data Define Languge）：数据定义语言
   create、drop、alter
 - TCL（Transaction Control Language）：事务控制语言
   commit、rollback

## DQL语言

### 基础查询

格式：

```sql
select 查询列表
from 表
```

特点：

1. 查询列表可以是：表中的字段、常量值、表达式、函数
2. 查询的结果是一个虚拟的表格

```sql
#1. 查询单个字段
SELECT `first_name` FROM `employees`;

#2. 查询多个字段
SELECT `first_name`,`last_name` FROM `employees`;

#3. 查询所有字段
SELECT * FROM `employees`;
SELECT 
  `first_name`,
  `last_name`,
  `email`,
  `phone_number`,
  `job_id`,
  `salary`,
  `commission_pct`,
  `manager_id`,
  `department_id`,
  `hiredate` 
FROM
  `employees` ;
  
#4. 查询常量
SELECT 100;
###字符型和日期型需要用单引号引起来，数值型不需要
SELECT 'goodwell';

#5. 查询函数
SELECT VERSION();

#6. 查询表达式
SELECT 100/22;

#7. 起别名
###①as
###②空格
SELECT `last_name` AS 姓 FROM `employees`;
SELECT `first_name`  名 FROM `employees`;

#8. 去重
SELECT DISTINCT `job_id` FROM`employees`;

#9. +
###作用：做加法运算
SELECT 23+23; #46
SELECT 数值+数值; 直接运算
SELECT 'a'+2; #2
SELECT '11'+11; #22
SELECT 字符+数值;先试图将字符转换成数值，如果转换成功，则继续运算；否则转换成0，再做运算
SELECT NULL+1; #null
SELECT NULL+值;结果都为NULL

10、【补充】CONCAT函数
###功能：拼接字符
SELECT CONCAT(字符1，字符2，字符3,...);

11、【补充】IFNULL函数
###功能：判断某字段或表达式是否为null，如果为null 返回指定的值，否则返回原本的值
SELECT IFNULL(commission_pct,0) FROM employees;

12、【补充】ISNULL函数
###功能：判断某字段或表达式是否为null，如果是，则返回1，否则返回0
```

### 条件查询

格式：

```sql
select 查询列表3
from 表名1
where 筛选条件2;
```

执行顺序：1->2->3

分类：

1. 按条件表达式筛选（> < = != <> >= <=）
2. 按逻辑表达式筛选（&& || ！and or not用于连接条件表达式）
3. 模糊查询（like, between and, in, is null）

```sql
#案例1.查询工资>12000的员工信息
SELECT 
  * 
FROM
  `employees` 
WHERE `salary` > 12000 ;

	
#案例2.查询部门编号不等于90号的员工名和部门编号
SELECT 
  `last_name`,
  `department_id` 
FROM
  `employees` 
WHERE `department_id` <> 90 ;

	
#案例3.查询工资在10000到20000之间的员工名、工资以及奖金
SELECT 
  `last_name`,
  `salary`,
  `commission_pct` 
FROM
  `employees` 
WHERE `salary` <= 20000 
  AND `salary` >= 10000 ;

#案例4.查询部门编号不是在90到110之间，或者工资高于15000的员工信息

```

*模糊查询

1. like（一般与通配符搭配使用）

   通配符：

   % 任意多个字符

   _ 任意单个字符

   转义 escape

   ```sql
   #案例1.查询员工名中第三个字符为n，第五个字符为l的员工名和工资
   SELECT
   	`last_name`,
   	`salary`
   FROM 
   	`employees`
   WHERE
   	`last_name` LIKE '__n_l%';
   	
   #案例2.查询员工名中第二个字符为_的员工名
   SELECT
   	`last_name`
   FROM 
   	`employees`
   WHERE
   	`last_name` LIKE '_$_%' ESCAPE '$';
   ```

2. between and

   ①使用可以提高语言的简洁度

   ②包含临界值（完全等价>=x and <=y）

   ③两个临界值不能调换顺序

   ```sql
   #案例.查询工资在10000到20000之间的员工名、工资以及奖金
   SELECT 
     `last_name`,
     `salary`,
     `commission_pct` 
   FROM
     `employees` 
   WHERE `salary` between 10000 and 20000 ;
   
   ```

3. in（判断某字段的值是否属于in列表中的某一项）

   特点：

   ①相比于or提高了语句简洁度

   ②in列表中的值类型必须一致或兼容

   ③in中不支持通配符

   ```sql
   #案例.查询员工的工种编号是IT_PROG、AD_vp、AD_PRES中的一个的员工名和工种编号
   SELECT
   	`last_name`,
   	`job_id`
   FROM
   	`employees`
   WHERE
   	`job_id` IN('IT_PROG','AD_vp','AD_PRES');
   ```

4. is null/is not null

   =或<>不能用于判断null，所以需要用is null/is not null

   ```sql
   #案例.查询没有奖金的员工名和奖金率
   SELECT
   	`last_name`,
   	`commission_pct`
   FROM
   	`employees`
   WHERE
   	`commission_pct` IS NULL;
   ```

   **安全等于 <=>

   ```sql
   #案例1.查询没有奖金的员工名和奖金率
   SELECT
   	`last_name`,
   	`commission_pct`
   FROM
   	`employees`
   WHERE
   	`commission_pct` <=>NULL;
   
   #案例2.查询奖金为12000的员工名和奖金
   SELECT
   	`last_name`,
   	`salary`
   FROM
   	`employees`
   WHERE
   	`salary` <=> 12000;
   ```

   区别：

   - IS NULL仅仅可以判断NULL值，可读性较高，建议使用
   - <=>既可以判断NULL又可以判断数值

### 排序查询

语法:

```sql
select 查询列表
from 表
[where 筛选条件]
order by 排序列表 [asc | desc]
```

特点:

- 缺省asc升序
- order by子句中支持单个字段、多个字段、表达式、函数、别名
- order by子句一般放在查询语句的最后面，limit子句除外

```sql
#1. 案例:查询员工信息，要求工资从高到低排序；
SELECT 
  * 
FROM
  `employees` 
ORDER BY salary DESC ;

#2. 案例:查询部门编号>=90的员工信息，按入职时间的先后顺序进行排序【添加筛选条件】
SELECT 
  * 
FROM
  employees 
WHERE department_id >= 90 
ORDER BY `hiredate` ASC ;

#3. 案例:按年薪的高低显示员工的信息和年薪【按表达式排序】
SELECT 
  *,
  (IFNULL(commission_pct, 0) + 1) * salary * 12 年薪 
FROM
  employees 
ORDER BY 年薪 DESC ;

#4. 案例:按年薪的高低显示员工的信息和年薪【按别名排序】
#5. 案例:按姓名的长度显示员工的姓名和工资【按函数排序】
SELECT 
  last_name,
  salary 
FROM
  employees 
ORDER BY LENGTH(last_name) DESC ;

#6. 案例:查询员工信息，要求先按工资升序，再按员工编号降序【按多个字段排序】
SELECT 
  * 
FROM
  employees 
ORDER BY salary,
  employee_id DESC ;
```

### 常见函数

概念：类似于Java中的方法，将一组逻辑语句封装在方法体中，对外暴露方法名。

好处：

- 隐藏了实现细节
- 提高了代码的重用性

调用:

- 叫什么（函数名）
- 干什么（函数功能）

分类：

- 单行函数（如concat、length、ifnull等）
- 分组函数（做统计使用，又称为统计函数、聚合函数、组函数）（多对一）

**单行函数**

①字符函数

```sql
#1.length 获取参数值的字节个数（汉字为3）
 
SELECT 
  LENGTH('john') ;

 #4
SELECT LENGTH('goodwell古德'); #14

#2.concat 拼接字符串
SELECT CONCAT(last_name,' ',first_name) 姓名 FROM employees;

#3.upper、lower
SELECT UPPER('john'); #JOHN
SELECT LOWER('John'); #john

#4.substr、substring
###PS：索引从1开始
###截取从指定索引处后面所有字符
SELECT SUBSTR('goodwell古德',2) out_put; #oodwell古德
###截取从指定索引处指定字符长度的字符
SELECT SUBSTR('goodwell古德',2,3) out_put; #ood

#案例：姓名中首字母大写，其他字符小写然后用_拼接，显示出来
SELECT CONCAT(UPPER(SUBSTR(last_name,1,1)),'_',LOWER(SUBSTR(last_name,2))) out_put FROM employees;

#5.instr 返回子串第一次出现的索引，如果找不到返回0
SELECT INSTR('goodwell','o') out_put; #2

#6.trim
SELECT LENGTH(TRIM('     goodwell   ')) AS out_put; #8
SELECT TRIM('aa' FROM 'aaaaagoodaaaawellaaaaaaaa'); #agoodaaaawell

#7.lpad 用指定的字符实现左填充成指定长度
SELECT LPAD('goodwell',8,'aa'); #goodwell
SELECT LPAD('goodwell',6,'aa'); #goodwe
SELECT LPAD('goodwell',11,'aa'); #aaagoodwell

#8.lpad 用指定的字符实现右填充成指定长度
SELECT RPAD('goodwell',8,'aa'); #goodwell
SELECT RPAD('goodwell',6,'aa'); #goodwe
SELECT RPAD('goodwell',11,'aa'); #goodwellaaa

#9.replace 替换
SELECT REPLACE('goodgoodwell','good','best'); #bestbestwell
```

②数学函数

```sql
#round 四舍五入
SELECT ROUND(1.45); #1
SELECT ROUND(1.5); #2

#ceil 向上取整，返回>=该参数的的最小整数
SELECT CEIL(1.001); #2
SELECT CEIL(1.000); #1

#floor 向下取整，返回<=该参数的的最大整数
SELECT FLOOR(-1.002); #-2
SELECT FLOOR(-1.000); #-1

#truncate 截断（小数点后）
SELECT TRUNCATE(1.03722,2); #1.03

#mod 取余
/*
  mod(a,b):  a-a/b*b
  mod(-10,-3): -10- (-10)/(-3)*(-3) =-1
*/

#rand 获取随机数，返回0-1之间的小数
```

③日期函数

```sql
#now 返回当前系统日期＋时间
 
select now() ; #2020-08-14 01:11:05

#curdate 只返回当前日期
select curdate(); #2020-08-14

#curtime 只返回当前时间
select curtime(); #01:11:54

#获取指定的部分年、月、日、小时、分钟、秒
SELECT YEAR(NOW()); #2020
SELECT YEAR('2020-01-25'); #2020
SELECT month(NOW()); #8
SELECT monthname(NOW()); #August

#datediff查询两个日期相差天数
select datediff('2020-1-25','2020-1-27'); #-2

#str_to_date 将日期格式的字符转换成指定格式的日期
select str_to_date('3-9-1998','%m-%d-%Y'); #1998-03-09
select str_to_date('3-9-98','%c-%d-%y'); #1998-03-09

#date_format 将日期转换成字符
select date_format('1998-3-9','%y年%m月%d日'); #98年03月09日

#案例：查询有奖金的员工名和入职日期（xx月/xx日 xx年）
select last_name 员工名,date_format(hiredate,'%m/%d %y') 入职日期
from employees
where commission_pct is not null;
```

| 序号 | 格式符 | 功能        |
| :--- | ------ | ----------- |
| 1    | %Y     | 四位的年份  |
| 2    | %y     | 2位的年份   |
| 3    | %m     | 月份(01,02) |
| 4    | %c     | 月份(1,2)   |
| 5    | %d     | 日(01,02)   |
| 6    | %H     | 小时(24h)   |
| 7    | %h     | 小时(12h)   |
| 8    | %i     | 分钟(00,01) |
| 9    | %s     | 秒(00,01)   |

④其他函数

```sql
SELECT VERSION(); #8.0.13
SELECT DATABASE(); #myemployees
SELECT USER(); #root@localhost
SELECT Password('');
SELECT md5('');
```

⑤流程控制函数

```sql
#1.if函数：类似if else
SELECT 
  IF(2 < 4, '是', '否') ;

SELECT last_name,commission_pct,IF(commission_pct IS NULL,'无','有') 备注
FROM employees;

#2.case函数使用1： 类似switch case
/*
  case 要判断的字段或表达式
  when 常量1 then 要显示的值或语句;
  when 常量2 then 要显示的值或语句;
  ...
  else 要显示的值或语句;
  end
*/
#案例：查询员工工资，要求部门号30显示的工资为1.1倍，部门号40显示的工资为1.2倍，部门号50显示的工资为1.3倍，其他部门，显示的工资为原工资
SELECT 
  salary 原始工资,
  department_id,
  CASE
    department_id 
    WHEN 30 
    THEN salary * 1.1 
    WHEN 40 
    THEN salary * 1.2 
    WHEN 50 
    THEN salary * 1.3 
    ELSE salary 
  END AS 工资 
FROM
  employees ;
  
#3.case函数的使用2：类似多重if
/*
  case
  when 条件1 then 要显示的值或语句;
  when 条件2 then 要显示的值或语句;
  ...
  else 要显示的值或语句;
  end
*/
#案例：查询员工工资，如果工资>20000,显示A;如果工资>15000,显示B;如果工资>10000,显示C;否则显示D。
SELECT 
  salary 原始工资,
  department_id,
  CASE
    WHEN salary>20000 
    THEN 'A'
    WHEN salary>15000 
    THEN 'B'
    WHEN salary>10000 
    THEN 'C'
    ELSE 'D'
  END AS 等级
FROM
  employees ;
```

**分组函数**

分类：

- sum 求和
- avg 平均值
- max 最大值
- min 最小值
- count 计数

特点：

1. sum、avg一般用于处理数值型

   max、min、count可以处理任何类型

2. 以上都会忽略null值

3. 可以和distinct搭配实现去重的效果

   ```sql
   select count(distinct salary) from employees;
   ```

4. count特殊性（一般使用count(*)用作统计行数）

   效率:

   MYISAM存储引擎下，count(\*)的效率高INNODB存储引擎下，count(\*)和count(1)的效率差不多，比count(*)要高一些

5. 和分组函数一同查询的字段要求是group by后的字段（多对一了）

### 分组查询

语法：

```sql
select 分组函数,列(要求出现在group by的后面)
from 表
[where 筛选条件]
group by 分组的列表
[order by 子句]
```

注意：查询列表必须是分组函数和group by后出现的字段

特点：

1、分组查询中的筛选条件分为两类

| 筛选时刻 | 数据源         | 位置           | 关键字 |
| -------- | -------------- | -------------- | ------ |
| 分组前   | 原始表         | group by子句前 | where  |
| 分组后   | 分组后的结果集 | group by子句后 | having |

①分组函数做条件肯定是放在having子句

②能用分组前筛选的，优先考虑使用分组前筛选

2、group by语句支持单个或者多个字段，（多个字段无顺序要求）还有表达式和函数。

3、也可以添加排序，放在最后。

```sql
#简单的分组查询
#案例1：查询每个工种的最高工资
SELECT MAX(salary),job_id
FROM employees
GROUP BY job_id;

#案例2：查询每个位置上的部门个数
SELECT COUNT(*),location_id
FROM departments
GROUP BY location_id;
```

```sql
#添加分组前的筛选条件
#案例1：查询邮箱中包含a字符的，每个部门的平均工资
SELECT AVG(salary),department_id
FROM employees
WHERE email LIKE '%a%'
GROUP BY department_id;

#案例2：查询有奖金的每个领导手下员工的最高工资
SELECT MAX(salary),manager_id
FROM employees
WHERE commission_pct IS NOT NULL
GROUP BY manager_id;
```

```sql
#添加分组后的筛选条件
#案例1：查询哪个部门的员工个数>2
SELECT COUNT(*),department_id
FROM employees
GROUP BY department_id
HAVING COUNT(*)>2;

#案例2：查询每个工种有奖金的员工的最高工资>12000的工种编号和最高工资
SELECT job_id,MAX(salary)
FROM employees
WHERE commission_pct IS NOT NULL
GROUP BY job_id
HAVING MAX(salary)>12000;

#案例3：查询领导编号>102的每个领导手下的最低工资>5000的领导编号是哪个，以及其最低工资
SELECT manager_id,MIN(salary)
FROM employees
WHERE manager_id>102
GROUP BY manager_id
HAVING MIN(salary)>5000
```

```sql
#按表达式或函数分组
#案例：按员工姓名的长度分组，查询每一组的员工个数，筛选员工个数>5的有哪些
SELECT LENGTH(last_name),COUNT(*)
FROM employees
GROUP BY LENGTH(last_name)
HAVING COUNT(*)>5;

#按多个字段分组
#案例：查询每个部门每个工种的员工的平均工资
SELECT AVG(salary),department_id,job_id
FROM employees
GROUP BY department_id,job_id;

#添加排序
#案例：查询每个部门每个工种的员工的平均工资，并按照薪资排序
SELECT AVG(salary),department_id,job_id
FROM employees
GROUP BY department_id,job_id
ORDER BY AVG(salary) DESC;
```

### 连接查询

含义：又称多表查询，当查询的字段来自于多个表时，就会用到连接查询

- 笛卡尔乘积现象：表1有m行，表2有n行，结果=m*n行
- 发生原因：没有有效的连接条件
- 如何避免：添加有效的连接条件

分类：

- 按年代分类

  ​	sql92标准：仅仅支持内连接

  ​	sql99标准【推荐】：内连接+外连接（左外和右外）+交叉连接

- 按功能分类：

  - 内连接：
    等值连接

    ​	非等值连接

    ​	自连接

  - 外连接：

    ​	左外连接

    ​	右外连接

    ​	全外连接

  - 交叉连接

**sql92标准**

1. 等值连接

   特点：

   ①多表等值连接的结果为多表的交集部分
   ②n表连接，至少需要n-1个连接条件
   ③多表的顺序没有要求
   ④一般需要为表起别名（起别名后只能使用别名）
   ⑤可以搭配前面介绍的所有子句使用，比如排序、分组、筛选

2. 非等值连接（不等于）

3. 自连接（同一张表，一张表作几张表用,起不同别名）

   ```sql
   #案例：查询员工名和上级的名称
   SELECT 
     e.employee_id,
     e.last_name,
     m.employee_id,
     m.last_name 
   FROM
     employees e,
     employees m 
   WHERE e.manager_id = m.employee_id 
   ```

**sql99标准**

语法：

```sql
select 查询列表
from 表1 别名 
[连接类型] join 表2 别名
on 连接条件
[where 筛选条件]
[group by 分组]
[having 分组后筛选条件]
[order by 排序列表]
```

分类：

- 内连接： inner
- 外连接：[outer]
  - 左外：left [outer]
  - 右外：right [outer]
  - 全外：full [outer]
- 交叉连接： cross

1、内连接：交集

​	特点：
​	①添加排序、分组、筛选
​	② Inner可以省略
​	③筛选条件放在 where后面，连接条件放在on后面，提高分离性，便于阅读
​	④ Inner join连接和sq192语法中的等值连接效果是一样的，都是查询多表的交集

2、外连接：一个表中有，一个表中无

​	特点：
​	①外连接的查询结果为主表中的所有记录。
​	 如果从表中有和它匹配的值，则显示匹配的值；若没有则显示null。
​	 外连接查询结果=内连接查询结果＋主表中有而从表中没有的记录
​	②左外连接，left join左边的是主表
​	 右外连接，right join右边的是主表
​	③左外和右外交换两个表的顺序，可以实现相同的效果。
​	④全外连接：内连接结果+表1中有但表2中无+表2中有而表1无

```sql
#案例1：查询哪个部门没有员工
#左外
SELECT d.department_name
FROM departments d
LEFT OUTER JOIN employees e
ON e.`department_id`=d.`department_id`
WHERE e.`department_id` IS NULL;
#右外
SELECT d.department_name
FROM employees e
RIGHT OUTER JOIN departments d
ON e.`department_id`=d.`department_id`
WHERE e.`department_id` IS NULL;
```

3、交叉连接：笛卡尔乘积（eg：表1有11，表2有哦4行，则交叉连接结果为44行）

sql92 VS. sql99

- 功能：sql99支持的较多
- 可读性：sq199实现连接条件和筛选条件的分离，可读性较高

```sql
#查询编号>3的女神的男朋友信息，如果有则列出详细，如果没有，用nu11填充
USE girls;
SELECT b.*,bo.*
FROM beauty b
LEFT JOIN boys bo
ON b.boyfriend_id=bo.id
WHERE b.id>3;

#查询哪个城市没有部门
USE `myemployees`;
SELECT	l.`city`
FROM locations l
LEFT JOIN departments d
ON d.`location_id`= l.`location_id`
WHERE d.`department_id` IS NULL;

#查询部门名为SAL或IT的员工信息
SELECT e.*,d.`department_name`
FROM employees e
JOIN departments d
ON d.`department_id`=e.`department_id`
WHERE d.`department_name` IN('SAL','IT');
```

### 子查询

含义：出现在其他语句中的select语句，称为子查询或内查询；外部的查询语句成为主查询或者外查询。

分类：

- 按子查询出现的位置：

  - select后面：

    ​	仅仅支持标量子查询

  - from后面：

    ​	支持表子查询

  - where或having后面：

    ​	标量子查询

    ​	列子查询

    ​	行子查询

  - exists后面（相关子查询）：

    ​	表子查询

- 按结果集的行列数不同：

  - 标量子查询（结果集只有一行一列）
  - 列子查询（结果集只有一列多行）
  - 行子查询（结果集只有一行多列）
  - 表子查询（结果集一般为多行多列）

**1、where或having后面**

特点：
①子查询放在小括号内
②子查询一般放在条件的右侧
③标量子查询，一般搭配着单行操作符使用
<>=<==<>
列子查询，一般搭配着多行操作符使用in、any/some、all
④子查询的执行优先于主查询执行，主查询的条件用到了子查询的结果

**标量子查询**

返回标量（单行单列），搭配单行操作符<、>=、<=、=、<>

```sql
#案例1：谁的工资比Abe1高？
SELECT 
  * 
FROM
  employees 
WHERE salary > 
  (SELECT 
    salary 
  FROM
    employees 
  WHERE last_name = 'Abel') ;

 
#案例2：返回job_id与141号员工相同，salary比143号员工多的员工姓名，job_id和工资
SELECT 
  last_name,
  job_id,
  salary 
FROM
  employees 
WHERE job_id = (
  SELECT 
    job_id 
  FROM
    employees 
  WHERE employee_id = 141
  ) AND salary > (
  SELECT 
    salary 
  FROM
    employees 
  WHERE employee_id = 143
  ) ;

#案例3：返回公司工资最少的员工的1ast name, Job id和sa1axy
SELECT last_name,job_id,salary
FROM employees
WHERE salary=(
  SELECT MIN(salary)
  FROM employees
);

#案例4：查询最低工资大于50号部门最低工资的部门和其最低工资
SELECT 
  department_id,
  MIN(salary) 
FROM
  employees 
GROUP BY department_id 
HAVING MIN(salary) > 
  (SELECT 
    MIN(salary) 
  FROM
    employees 
  WHERE department_id = 50) ;
  
#非法使用子查询情况：查询结果多行用于一行的（多对一）；子查询结果无
```

**列子查询**（多行子查询）

返回多行，使用多行比较操作符

- IN / NOT IN ：等于列表中的任意一个
- ANY / SOME ：和子查询返回的某个值比较
- ALL ：和子查询返回的所有值比较

```sql
#案例1：返回1ocation id是1400或1700的部门中的所有员工姓名
SELECT 
  last_name 
FROM
  employees 
WHERE department_id IN 
  (SELECT DISTINCT 
    department_id 
  FROM
    departments 
  WHERE location_id IN (1400, 1700)) ;

#案例2：返回其它部门中比job_id为'IT_PROG'部门任一工资低的员工的员工号、姓名、 job id以及sa1ary
SELECT employee_id,last_name,job_id,salary
FROM employees
WHERE salary < (
SELECT MAX(salary)
FROM employees
WHERE job_id='IT_PROG'
) AND job_id<>'IT_PROG';

#案例3：返回其它部门中比job_id为'IT_PROG'部门所有工资低的员工的员工号、姓名、 job id以及sa1ary
SELECT employee_id,last_name,job_id,salary
FROM employees
WHERE salary < (
SELECT MIN(salary)
FROM employees
WHERE job_id='IT_PROG'
);
```

**行子查询**（一行多列或者多行多列）

```sql
#案例：查询员工编号最小并且工资最高的员工信息
#普通
SELECT *
FROM employees
WHERE employee_id=(
  SELECT MIN(employee_id) 
  FROM employees
) AND salary=(
  SELECT MAX(salary)
  FROM employees
)
#一行多列
SELECT *
FROM employees
WHERE (employee_id,salary)=(
  SELECT MIN(employee_id) ,MAX(salary)
  FROM employees
)
```

**2、select后面**（仅仅支持标量查询）

```sql
#????案例：查询每个部门的员工个数
###错误的方法：（不知道咋整）
SELECT d.*,COUNT(*)
FROM departments d
LEFT JOIN employees e
ON d.`department_id`=e.`department_id`
GROUP BY d.department_id

###改进后容易错的方法：（不知道咋整）
SELECT d.*,COUNT(e.`employee_id`)
FROM departments d
LEFT JOIN employees e
ON d.`department_id`=e.`department_id`
GROUP BY d.department_id

###select子查询方法
SELECT d.*,(
  SELECT COUNT(*)
  FROM employees e
  WHERE d.`department_id`=e.`department_id`
) 个数
FROM departments d;


#案例2：查询员工号=102的部门名
SELECT department_name
FROM departments
WHERE department_id=(
  SELECT department_id
  FROM employees
  WHERE employee_id=102
);
###select那种子查询真变扭，不是很会
```

**3、from后面**

将子查询结果充当一张表，要求必须起别名

**4、exists后面**（相关子查询）

ps：感觉像个监测是否存在的布尔型函数，误

语法：

```sql
exists(完整的语句)
#结果为1 或者 0
#前面记得加where
```

能有exists的都能用in解决

```sql
#案例1：查询有员工的部门名
SELECT department_name
FROM departments d
WHERE EXISTS(
  SELECT *
  FROM employees e
  WHERE d.`department_id`=e.`department_id`
);
###（记得加where）用in
SELECT department_name
FROM departments d
WHERE d.`department_id` IN(
  SELECT e.`department_id`
  FROM employees e
);
```

### 分页查询

应用场景：当要显示的数据，一页显示不全，需要分页提交sql请求

语法：

```sql
select 查询列表
from 表
[Join type] join 表2
[on 连接条件]
[where 筛选条件]
[group by 分组字段]
[having 分组后的筛选]
[order by 排序的字段]
limit [offset,] size;

# offset 要显示条目的起始素引（起始索引从0开始）缺省为0开始
# size要显示的条目个数
```

特点：

- limit放在查询语句最后，也是最后在执行

- 公式

  要显示的页数 page，煤业的条目数 size

  limit (page-1)*size,size;

```sql
#案例1：查询前五条员工信息
SELECT 
  * 
FROM
  employees 
LIMIT 0, 5 ;

#案例2：查询第1条一第25条
SELECT 
  * 
FROM
  employees 
LIMIT 10, 15 ;

#案例3：有奖金的员工信息，并且工资较高的前10名显示出来
SELECT 
  * 
FROM
  employees 
WHERE commission_pct IS NOT NULL 
ORDER BY salary * (1+ IFNULL(commission_pct, 0)) DESC 
LIMIT 10 ;
```

### 联合查询

union：将多条查询语句的结果合并成一个结果

语法：

```sql
查询语句1
union
查询语句2
union
...
```

应用场景：

要查询的结果来自多个表，且多个表之间没有直接的连接关系，但查询的信息一致时。

特点：

- 要求多条查询语句查询的列数一致
- 多条查询语句查询的顺序是一致的
- union会去重，不需要去重时使用UNION all

### 查询总结



## DML语言

数据操作语言：

- 插入：insert
- 修改：update
- 删除：delete

### 插入

语法：

```sql
#方式一：
insert into 表名(列名,...) values(值1,...),values(值2,...);
```

特点：

1. 插入的值类型必须与列的类型一致或者兼容
2. 不可以为null的列必须插入值，可以为null的列可以填null或者在列名列表中不写对应的列名。
3. 列的顺序可以调换，但是必须一一对应
4. 列数与值的个数必须一致
5. 列名缺省代表默认列顺序与表的顺序一致

```sql
#方式二：
insert into 表名
set 列名=值,列名=值,...;
```

区别：

- 方式一支持插入多行，二不支持
- 方式一支持子查询，二不支持

### 修改

语法：

```sql
#1.修改单表的记录
update 表名					#1
set 列名=新值,列=新值,...		 #3
where 筛选条件;				   #2


#2.修改夺标的记录
#sql92语法
update 表1 别名, 表2 别名
set 列=值
where 连接条件
and 筛选条件;

#sql99语法
update 表1 别名
[连接类型] join 表2 别名
on 连接条件
set 列=值,...
where 筛选条件;
```

### 删除

语法：

```sql
##方式一：delete
#1.单表的删除
delete from 表名 where 筛选条件

#2.多表的删除
#sql92语法
delete 表1的表名,表2的别名
from 表1 别名,表2 别名
where 连接条件
and 筛选条件;

#sql99语法
delete 表1的表名,表2的别名
from 表1 别名
[连接类型] join 表2 别名
on 连接条件
where 筛选条件;


##方式二：truncate
truncate table 表名;
```

区别：delete VS. truncate

- delete可以加 where条件， truncate不能加
- truncate删除，效率高一丢丢
- 假如要删除的表中有自增长列，如果用delete删除后，再插入数据，自增长列的值从断点开始，而 truncate删除后，再插入数据，自增长列的值从1开始
- truncate删除没有返回值，delete删除有返回值
- truncate删除不能回滚，delete删除可以回滚

## DDL语言

数据定义语言：库和表的管理

创建：create

修改：alter

删除：drop

### 库的管理

#1.库的创建

语法：

```sql
create database [if not exists] 库名;
```

#2.库的修改

```sql
#更改库的字符集
alter database 库名 character set 字符集;
```

#3.库的删除

```sql
drop database [if exists] 库名;

#desc databases;
```

### 表的管理

#1.表的创建

语法：

```sql
create table [if not exists] 表名(
	列名 列的类型 [长度 约束],
	列名 列的类型 [长度 约束],
    ...
	列名 列的类型 [长度 约束]
);
```

#2.表的修改

```sql
alter table 表名 [类型关键词] column 列名 [列类型 约束];

#①修改列名
alter table 表名 change column 列名 新列名 [新类型];

#②修改列的类型或约束
alter table 表名 modify column 列名 新类型;

#③添加新列
alter table 表名 add column 新列名 新类型 [first | after 字段名];

#④删除列
alter table 表名 drop column [if exists] 列名;

#⑤修改表名
alter table 表名 rename to 新表名;
```

#3.表的删除

```sql
drop table [if exists] 表名;

#show tables;
```

通用写法：

```sql
drop database if exists 旧库名;
create database 新库名;

drop table if exists 旧表名;
create table 新表名();
```

#4. 表的复制

```sql
#1.仅仅复制表的结构
create table 新表名 like 源表名;

#2.复制表的结构和数据
create table 新表名 
select * from 源表名;

#3.复制表的部分数据
create table 新表名 
select 列名 
from 源表名
where 筛选条件;

#4.仅仅复制表的某些字段（不包含数据）
create table 新表名 
select 列名 
from 源表名
where 0;
```

### 数据类型

- 数值型：
  - 整型
  - 小数：
    - 定点数
    - 浮点数
- 字符型：
  - 较短的文本：char、 varchar
  - 较长的文本：text、blob（较长的二进制数据）
- 日期型

选择原则：所选择的类型越简单越好，能保存数值的类型越小越好。

1、整型：

| tinyint | smallint | mediumint | int/integer | bigint |
| ------- | -------- | --------- | ----------- | ------ |
| 1       | 2        | 3         | 4           | 8      |

​	特点：

- 缺省有符号，若设置无符号须在int后加unsigned关键字
- 若插入数值超出整型范围，会报out of range异常，并且插入临界值
- 若不设置长度，会有默认的长度。长度代表显示的最大宽度，若不够0在左边填充，但必须搭配关键字zerofill，且会默认成unsigned

2、小数

​	分类：

  1. 浮点型：float(M,D) 4byte; double(M,D) 8byte

  2. 定点型：dec(M,D)  /  decimal(M,D)


​	特点：

	1. M整数+小数的位数；D代表效数部位。超出范围则插入临界值。

   	2. M和D都可以省略，但如果是decimal默认(M,D)为(10,0);如果是float和double，则会根据插入的数值的精度来决定精度.
   	3. 定点型的精确度较高，如果要求插入数值的精度较高如货币运算等则考虑使用

3、字符型（串数据）

​	较短的文本：char、 varchar较长的文本；text、blob（较长的二进制数据）;bit(M)位类型;binary和varbinary包含二进制字符串;Enum类型，要求插入的值必须属于列表中指定的值之一；set类型保存集合，类型一次可以选取多个成员，而Enum只能选一个。

| 写法       | M的意思                | 特点           | 空间的耗费 | 效率 |
| ---------- | ---------------------- | -------------- | ---------- | ---- |
| char(M)    | 最大的字符数，缺省为1  | 固定长度的字符 | 比较耗费   | 高   |
| varchar(M) | 最大的字符数，不可省略 | 可变长度的字符 | 比较节省   | 低   |

4、日期型

​	分类：

- date只保存日期
- time只保存时间
- year只保存年
- datetime保存日期+时间
- timestamp保存日期+时间

​	特点：

|           | 字节 | 范围      | 时区等的影响 |
| --------- | ---- | --------- | ------------ |
| datetime  | 8    | 1000-9999 | 不受         |
| timestamp | 4    | 1970-2038 | 受           |

### 常见的约束

含义：一种限制，用于限制表中的数据，为了保证表中的数据的准确性和可靠性。

分类：六大约束

- NOT NULL：非空，用于保证该字段的值不能为空，比如姓名、学号等
- DEFAULT：默认，用于保证该字段有默认值，比如性别
- PRIMARY KEY：主键，用于保证该字段的值具有唯一性，并且非空，比如学号、员工编号等
- UNIQUE：唯一，用于保证该字段的值具有唯一性，可以为空，比如座位号
- CHECK：检查约束【mysql中不支持】，比如年龄、性别
- FOREIGN KEY：外键，用于限制两个表的关系，用于保证该字段的值必须来自于主表的关联列的值，在从表添加外键约束，用于引用主表中某列的值，比如学生表的专业编号，员工表的部门编号，员工表的工种编号

| 主键 VS. 唯一 | 唯一性 | 支持组合键  | 存在个数     | 是否允许为空             |
| ------------- | ------ | ----------- | ------------ | ------------------------ |
| 主键          | √      | √（不推荐） | 至多1个      | 不允许                   |
| 唯一          | √      | √（不推荐） | 可以有很多个 | 可以（null只能出现一次） |

外键：

1. 要求在从表设置外键关系
2. 从表的外键列的类型和主表的关联列的类型要求一致或兼容，名称无要求
3. 主表的关联列必须是一个key（一般是主键或唯一）
4. 插入数据时，先插入主表，再插入从表删除数据时，先删除从表，再删除主表

可以通过以下两种方式来删除主表的记录

```sql
#方式一：级联删除(删除从表内容，主表也删除)
ALTER TABLE stuinfo ADD CONSTRAINT fk_stu_major FOREIGN KEY(majorid) REFERENCES major(id) ON DELETE CASCADE;

#方式二：级联置空(删除从表内容，主表相关内容置空)
ALTER TABLE stuinfo ADD CONSTRAINT fk_stu_major FOREIGN KEY(majorid) REFERENCES major(id) ON DELETE SET NULL;
```

格式：

```sql
create table 表名(
	字段名 字段类型 not null,		 #非空
	字段名 字段类型 primary key,	 #主键
	字段名 字段类型 unique,		 #唯一
	字段名 字段类型 default 值,		 #默认
	constraint 约束名 foreign key(字段名) references 主表(被引用列)
)


#通用的写法：
CREATE TABLE IF not EXISTS stuinfo(
	id INT PRIMARY KEY,
    stuname VARCHAR(20) NOT NULL,
    sex CHAR(1), 
    age INT DEFAULT 18,
    seat INT UNIQUE,
    majoris INT, 
    CONSTRAINT fk_stuinfo_major FOREIGN KEY(majorid) REFERENCES major(id)
);
```

约束的添加分类：

- 列级约束：
  六大约束语法上都支持，但外键约束没有效果

- 表级约束：
  除了非空、默认，其他的都支持

|   区别   | 位置         | 支持的约束类型                 | 是否可以起约束名     |
| :------: | :----------- | ------------------------------ | -------------------- |
| 列级约束 | 列的后面     | 语法都支持，但**外键**没有效果 | 不可以               |
| 表级约束 | 所有列的下面 | **默认和非空**不支持，其他支持 | 可以（主键没有效果） |

添加约束的时机：

1. 创建表时
2. 修改表时

一、创建表时添加约束

1.添加列级约束
语法：
直接在字段名和类型后面追加约束类型即可，只支持：默认、非空、主键、唯一键

```sql
USE students;
CREATE TABLE stuinfo( 
    Id INT PRIMARY KEY,									#主键
    stuName vARCHAR（20） NOT NULL,						#非空
    gender CHAR(1) CHECK(gender=男 OR gender=女！),		 #检查
    seat INT UNIQUE,									#唯一
    age INT DEFAULT 18,									#默认约束
    majorId INT REFERENCES major(Id)					 #外键(无用)
);
```

```sql
###PS:查看索引（包括主键、外键和唯一）
SHOW INDEX FROM 表名
```

2.添加表级约束

语法：
在各个字段的最下面添加 constraint 约束名 约束类型(字段名)

```sql
DROP TABLE IF EXISTS stuinfo;
CREATE TABLE stuinfo(
	id INT, stuname VARCHAR(20),
    gender CHAR(1),
    seat INT, 
    age INT, 
    majoris INT, 
    CONSTRAINT pk PRIMARY KEY(id),										#主键
    CONSTRAINT uq UNIQUE(seat),											#唯一键
    CONSTRAINT CK CHECK(gender='男' OR gender='女'),						#检查
    constraint fk stuinfo_major FOREIGN KEY(majorid) REFERENCES major(id) 	#外键
);
```

二、修改表时添加约束

1、添加列级约束

```sql
alter table 表名 modify column 字段名 字段类型 新约束;
```

2、添加表级约束

```sql
alter table 表名 add [constraint 约束名] 约束类型(字段名) [REFERENCES 被引用列];
```

```sql
DROP TABLE IF EXISTS stuinfo;
CREATE TABLE stuinfo(
	id INT, 
    stuname VARCHAR(20),
    gender CHAR(1),
    seat INT,
    age INT, 
    majorid INT
);

#1.添加非空约束
ALTER TABLE stuinfo MODIFY COLUMN stuname VARCHAR(20) NOT NULL;

#2.添加默认约束
ALTER TABLE stuinfo MODIFY COlUMN age INT DEFAULT 18;

#3.添加主键
##①列级约束
ALTER TABLE stuinfo MODIFY column id INT PRIMARY KEY;
##②表级约束
ALTER TABLE stuinfo ADD PRIMARY KEY(id);

#4.添加唯一
##①列级约束
ALTER TABLE stuinfo MODIFY COLUMN seat INT UNIQUE;
##②表级约束
ALTER TABLE stuinfo ADD UNIQUE(seat);

#5.添加外键
ALTER TABLE stuinfo ADD CONSTRAINT fk_stuinfo_major FOREIGN KEY(majorid) REFERENCES major(id);

###非空和默认只有alter modify；外键只有add
```

三、修改表时删除约束

```sql
#1.删除非空约束
ALTER TABLE stuinfo MODIFY COlUMN stuname VARCHAR(20) NULL;

#2.删除默认约束
ALTER TABLE stuinfo MODIFY Column age INT;

#3.删除主键
ALTER TABLE stuinfo DROP PRIMARY KEY;

#4.删除唯一
ALTER TABLE stuinfo drop index 索引名;

#5.删除外键
ALTER TABLE stuinfo DROP FOREIGN KEY fk_stuinfo_major;

###非空和默认只有alter modify；其他用drop
```

**标识列 **  (又称为自增长列)

含义：可以不用手动的插入值，系统提供默认的序列值

特点：
1、标识列不一定和主键搭配，但要求是一个key
2、一个表至多一个标识列
3、标识列的类型只能是数值型
4、标识列可以通过 SET auto_increment_increment=3;设置步长。可以通过手动插入值，设置起始值。

一、创建表时设置标识列

```sql
/*
create table 表(
	字段名 字段类型 约束 auto_increment
);
*/
DROP TABLE IF EXISTS tab_identity;
CREATE TABLE tab_identity(
	Id INT PRIMARY KEY AUTO_INCREMENT NAME VARCHAR(20)
);
```

二、修改表时设置标识列

```sql
#alter table 表 modify column 字段名 字段类型 约束 auto_increment

ALTER TABlE tab_identity MOdIFY column id INT PRIMARY KEY AUTO_increment;
```

三、修改表时删除标识列

```sql
#alter table 表 modify column 字段名 字段类型 约束;

ALTER TABLE tab_identity MODIFY column id INT;
```

## TCL语言

transaction control language 事务控制语言 

### 事务

事务：一个或一组sql语句组成一个执行单位，这个执行单位要么全部执行，要么全部不执行。（事务：事务由单独单元的一个或多个QL语句组成，在这个单元中，每个MSQL语句是相互依赖的。而整个单独单元作为一个不可分割的整体，如果单元中某条SQL语句且执行失败或产生错误整个单元将会回滚。所有受到影响的数据捋返回到事物开始以前的状态；如果单元中的所有SQL语句均执行成功，则事物被顺利执行。）

存储引擎：数据用各种不同的技术存储在文件（或内存）中。在MySQL中用的最多的存储引擎有:innodb,myisam,memory等，其中innodb支持事务，另外两种不支持。可以通过show engines来查看MySQL支持的存储引擎。

事务的ACID(acid)属性

1. 原子性（Atomicity）

   事务是一个不可分割的工作单位，事务中的操作要么都发生，要么不发生。

2. 一致性（Consistency）

   事务必须使数据库从一个一致性状态变换到另一个一致性状态

3. 隔离性（Isolation）

   一个事务的执行不能被其他事务干扰，即一个事务内部的操作及使用的数据对并发的其他事务是隔离的，并发执行的各个事务之间不能互相干扰

4. 持久性（Durability）

   事务一旦提交，它对数据库中数据的改变就是永久性的，接下来的其他操作和数据库故障不应该对其有任何影响

事务的创建

- 隐式事务：事务没有明显的开启和结束的标记，比如 insert、 update、de1ete语句

- 显式事务：事务具有明显的开启和结束的标记，前提：必须先设置自动提交功能为禁用set autocommit=0；

  ```sql
  #步骤1：开启事务
  set autocommit=0; 
  start transaction; #可选的
  
  #步骤2：编写事务中的sq1语句（select insert update delete）
  
  步骤3：结束事务
  commit; 		#提交事务
  rollback;		#回滚事务
  
  ##演示事务的使用步骤
  #开启事务
  SEt autocommit=0;
  START TRANSACTION;
  #编写一组事务的语句
  UPDATE account set ba1ance=500 WHERE username='张无忌';
  UPDATE account set balance 1500 WHERE username='赵敏';
  #结束事务
  commit; 
  ```

事务的并发问题：

多个事务 同时 操作 同一个 数据库的相同数据时。

对于同时运行的多个事务，当这些事务访问数据库中相同的数据时，如果没有采取必要的隔离机制，就会导致各种并发问题：

- 脏读：对于两个事务T1，T2，T1读取了已经被T2更新但还没有被提交的字段之后，若T2回滚，T1读取的内容就是临时且无效的**（一个事物读取了其他事务还没有提交的“更新”数据）**
- 不可重复读：对于两个事务T1，T2，T1读取了一个字段，然后T2更新了该字段之后，T1再次读取同一个字段，值就不同了**（一个事务多次读取，结果不一致）**
- 幻读：对于两个事务T1，T2，T1从一个表中读取了一个字段然后T2在该表中插入了一些新的行。之后，如果T1再次读取同一个表，就会多出几行**（一个事物读取了其他事务还没有提交的“插入”数据）**

 一个事务与其他事务隔离的程度称为隔离级别。数据库规定了多种事务隔离级别，不同隔离级别对应不同的干扰程度隔离级别越高，数据一致性就越好，但并发性越弱。

事务的隔离级别：

| 事务的隔离级别： | 脏读 | 不可重复读 | 幻读 |
| ---------------- | ---- | ---------- | ---- |
| read uncommitted | √    | √          | √    |
| read committed   | ×    | √          | √    |
| repeatable read  | ×    | ×          | √    |
| serializable     | ×    | ×          | ×    |

MySQL中默认repeatable read

Oracle默认read committed

- READ UNCOMMITTED（读未提交数据）

  允许事务读取未被其他事物提交的变更脏读，不可重复读和幻读的问题都会出现

- READ COMMITED（读已提交数据）

  只允许事务读取已经被其它事务提交的变更可以避免脏读，但不可重复读和幻读问题仍然可能出现

- REPEATABLE READ（可重复读）

  确保事务可以多次从一个字段中读取相同的值在这个事务持续期问，禁止其他事物
  对这个字段进行更新可以避免脏读和不可重复读，但幻读的问题仍然存在

- SERIALIZABLE（串行化）

  确保事务可以从一个表中读取相同的行在这个事务持续期间，禁止其他事务对该表执行插入，更新和删除操作所有并发问题都可以避免，但性能十分低下

```sql
#查看隔离级别
select @@tx_isolation;

#设置隔离级别
set session|global transacion isolation level 等级名称
```

PS:每启动一个MySQL程序，就会获得一个单独的数据库连接，每个数据库连接都有一个全局变量@@tx_isolation，表示当前的事务隔离级别。

```sql
#2.演示事务对于 delete和 truncate的处理的区别
SeT autocommit=0;
START TRANSACTION; 
DELETE FROM account;
ROLLBACK;

#3，演示 savepoint的使用
SET autocommit=0;
START TRANSACTION;
DELETE FROM account WHERE id=25;
SAVEPOINT a;	 #设置保存点
DELETE FROM account WhErE id=28;
ROLLBACK to a;	 #回滚到保存点
```

## 其他

### 视图

含义：虚拟表，和普通表一样使用，通过表动态生成的数据（只保存了sql逻辑，不保存查询结果），临时性的。

```sql
create view v1
as
select stuname,majorname
from stuinfo s
inner join major m on s.majorid = m.id;

select * from v1 where stuname like '张%';
```

使用场景：

- 多个地方用到相同的查询结构
- 该查询结果使用的sql语句较复杂

好处：

- 重用sql语句
- 简化复杂的sql操作，不必知道它的查询细节
- 保护基表的数据，提高安全性

视图 VS. 表

| 关键字       | 物理空间        | 使用           |
| ------------ | --------------- | -------------- |
| create view  | 只保存了sql逻辑 | 一般不能增删改 |
| create table | 保存了数据      | 增删改查       |

创建视图：

```sql
#语法
create view 视图名
as
查询语句;
```

修改视图：

```sql
#方式一
create or replace view 视图名
as
查询语句;

#方式二
alter view 视图名
as
查询语句;
```

删除视图：

```sql
drop view 视图名,视图名,...;
```

查看视图：

```sql
desc 视图名;

show create view 视图名;
```

视图的更新

```sql
#正常的增删改
```

视图的可更新性和视图中查询的定义有关系，以下类型的视图是不能更新的。（视图更新表也会更新）

- 包含以下关键字的sql语句：分组函数、 distinct、 group by、 having、 union或者 union all
- 常量视图
- Select包含子查询
- join from一个不能更新的视图
- where子句的子查询引用了fom子句中的表

### 变量

- 系统变量
  - 全局变量
  - 会话变量
- 自定义变量
  - 用户变量
  - 局部变量

PS:如果是全局级别，则需要加 GLOBA，如果是会话级别，则需要加 SESSION，如果不写，则默认 SESSION

#一、系统变量

说明：变量由系统提供的，不是用户定义，属于服务器层面使用的语法：

```sql
#1、查看所有的系统变量
show global | [session] variables

#2、查看满足条件的部分系统变量
show global | [session] variab1es like '%char%';

#3、查看指定的某个系统变量的值
select @@g1oba1 | [session].系统变量名;

#4、为某个系统变量赋值
##方式一：
set global | [session] 系统变量名=值；

##方式二：
set @@global | [session].系统变量名=值
```

- 全局变量作用域：服务器每次启动将为所有的全局变量赋初始值，针对于所有的会话（连接）有效，但不能跨重启。
- 会话变量作用域：仅仅针对于当前会话（连接）有效

#二、自定义变量

说明：变量是用户自定义的，不是由系统

使用步骤：

- 声明
- 赋值
- 使用（查看、比较、运算等）

用户变量作用域：针对于当前会话（连接），同于会话变量的作用域。应用在任何地方，也就是 begin end里面或 begin end外面

```sql
#赋值的操作符：=或:=
#①声明并初始化
SET 用户变量名=值;
SET 用户变量名:=值;
SELECT 用户变量名:=值;

#②赋值（更新用户变量的值）
##方式一：通过SET或 SELECT 
SET 用户变量名=值;
SET 用户变量名:=值;
SELECT 用户变量名:=值;
##方式二：通过 SELECT INTO 
SELECT 字段 INTO @变量名
FROM 表;

#③使用（查看用户变量的值）
SELECT 用户变量名;
```

局部变量

作用域：仅仅在定义它的 begin end中有效，**而且只能在 begin end中的第一句话**

```sql
#①声明
DECLARE 变量名 类型;
DECLARE 变量名 类型 DEFAULT 值;

#②赋值
##方式一：通过SET 或 SELECT
SET 局部变量名=值;
SET 局部变量名:=值;
SELECT @局部变量名:=值;
##方式二：通过 SELECT INTO 
SELECT 字段 into 局部变量名
FROM 表;

#③使用
SELECT 局部变量名;
```

用户变量 VS. 局部变量

|          | 作用域      | 定义和使用的位置                 | 语法                          |
| -------- | ----------- | -------------------------------- | ----------------------------- |
| 用户变量 | 当前会话    | 会话中的任何地方                 | 必须加@符号，不用限定类型     |
| 局部变量 | BEGIN END中 | 只能在 BEGIN END中，且为第一句话 | 一般不用加@符号，需要限定类型 |

```sql
#案例：声明两个变量并赋初值，求和并打印
#1、用户变量
set @m=1;
set @n=2;
set @sum = @m + @n;
select @sum;

#2、局部变量
begin
declare m int default 1;
declare n int default 2;
declare sum int;
set sum=m+n;
select sum;
...
end
```

### 存储过程和函数

类似于java中的方法

好处：

1. 提高代码的重用性
2. 简化操作

**存储过程**

含义：一组预先编译好的sα语句的集合，理解成批处理语句

1、提高代码的重用性

2、简化操作

3、减少了编译次数并且减少了和数据库服务器的连接次数，提高了效率

#一、创建语法

```sql
create procedure 存储过程名(参数列表)
begin
	存储过程体#（一组合法的SQL语句）
end
```

PS：

1、参数列表包含三部分：

参数模式 参数名 参数类型

eg： IN stuname varchar(20)

参数模式：

- IN：该参数可以作为输入，也就是该参数需要调用方传入值
- OUT：该参数可以作为输出，也就是该参数可以作为返回值
- INOUT：该参数既可以作为输入又可以作为输出，也就是该参数既需要传入值，又可以返回值

2、如果存储过程体仅仅只有一句话， BEGIN END可以省略。存储过程体中的每条s语句的结尾要求必须加分号存储过程的结尾可以使用 DELIMITER重新设置

语法 DELIMITER 结束标记

DELIMITER $

#二、调用语法

```sql
call 存储过程名(实参列表);
```

```sql
#1.空参列表
#案例：插入到admin表中五条记录
delimiter $
create procedure myp1()
begin
	insert into admin(username,password) values('goodwell','0000'),values('goodwell','0000'),values('goodwell','0000'),values('goodwell','0000'),values('goodwell','0000')
end $

#调用
call myp1()$
```

```sql
#2.创建带in模式参数的存储过程
#案例1：创建存储过程实现根据女神名，查询对应的男神信息
create procedure myp2(in beautyName varcher(20))
begin
	select bo.*
	from boys bo
	right join beauty b
	on bo.id = b.boyfriend_id
	where b.name=beautyName;
end $

#调用
CALL myp2('gowd')$

#案例2：创建存储过程实现，用户是否登录成功
create procedure myp3(in username varcher(20),in passsword varchar(20))
begin
	declare result int default 0;
	select count(*) int result
	from admin
	where username=admin.username
	and password=admin.password;
	select if(result>0,'yes','no');
end $
```

```sql
#3、创建带out模式的存储过程
#案例1：根据女神名，返回对应的男神名
create procedure myp5(in beautyName varcher(20),out boyName varchar(20))
begin
	select bo.boyName into boyName
	from boys bo
	right join beauty b
	on bo.id = b.boyfriend_id
	where b.name=beautyName;
end $

#调用
call myp5('godw',@bName) $
select @bName
```

```sql
#4.创建带 anout模式参数的存储过程
#案例1：传入a和b两个值，最终a和b都翻倍并返回
create procedure myp5(inout a int,inout b int)
begin
	 set a=a*2;
	 set b=b*2;
end $
```

#三、删除存储过程语法

```sql
drop procedure 存储过程名
```

#四、查看存储过程的信息

```sql
desc 存储过程名#×

show create procedure 存储过程名;
```

**函数**

**与存储过程的区别：**

存储过程：可以有0个或者多个返回，**适合做批量插入、更新**

函数：有且只有一个返回，**适合做处理数据后返回一个结果**

#一、创建语法

```sql
create function 函数名(参数列表) returns 返回类型
begin
	函数体
end
```

注意：
1.参数列表包含两部分：
		参数名 参数类型
2.函数体：
	肯定会有 return语句，如果没有会报错
	如果 return语句没有放在函数体的最后也不报错，但不建议return值
3.函数体中仅有一句话，则可以省略 begin end
4.使用delimiter语句设置结束标记delimiter $

#二、调用语法

```sql
select 函数名(参数);
```

```sql
#1.无参有返回
#案例：返回公司的员工个数
CREATE FUNCTION myf1() RETURNS INT 
BEGIN 
	DECLARE C INT DEFAULT 0;#定义变量
	SELECT COUNT(*) into c #赋值
	FROM employees; 
	RETURN C;
END $ 

SELECT myf1() $
```

```sql
#2.有参有返回
#案例1：根据员工名，返回它的工资
CREATE FUNCTION myf2(empName VARCHAR(20)) RETURNS DOUBLE
BEGIN 
	sET8sa1=0；#定义用户变量
	SELECT Salary INTO sa1 #赋值
	FROM employees WHERE last_name=empName; 
	return sa1;
END $ 
	
SELECT myf2()

#案例2：根据部门名，返回该部门的平均工资
CREATE FUNCTION myf3(deptName VARCHAR(20)) RETURNS DOUBLE 
BEGIN 
	DECLARE sal DOUBlE; 
	SELECT AVG（salary） INTo sal FROM employees e 
	JOIN departments d 
	on e.department_id= d.department_id 
	WHERE d.department_name=deptName;
	RETURN sal;
END $

SELECT myf3('IT') $
```

#三、查看函数

```sql
SHOW CREATE FUNCTION 函数名;
```

#四、删除函数

```sql
DROP FUNCTION 函数名;
```

### 流程控制结构

- 顺序结构：程序从上往下依次执行
- 分支结构：程序从两条或多条路径中选择一条去执行
- 循环结构：程序在满足一定条件的基础上，重复执行一段代码

#一、分支结构
#1.if

函数功能：实现简单的双分支

语法：

```sql
if(表达式1,表达式2,表达式3);
```

执行顺序：
如果表达式1成立，则if函数返回表达式2的值，否则返回表达式3的值

作用：任何地方

#2.case结构

情况1：类似于java中的 switch语句，一般用于实现等值判断

语法：

```sql
CASE 变量表达式/字段
WHEN 要判断的值 THEN 返回的值1或语句1;
WHEN 要判断的值 THEN 返回的值2或语句2;
ELSE 要返回的值n或语句n;
END CASE;
```

情况2：类似于java中的多重if语句，一般用于实现区间判断

语法：

```sql
CASE 
WHEN 要判断的条件 THEN 返回的值1或语句1;
WHEN 要判断的条件 THEN 返回的值2或语句2;
ELSE 要返回的值n或语句n;
END CASE;
```

特点：

- 可以作为**表达式**，嵌套在其他语句中使用，可以放在任何地方， BEGIN END中或 BEGIN END的外面

- 可以作为**独立的语句**去使用，只能放在 BEGIN END中
- 如果WHEN中的值满足或条件成立，则执行对应的THEN后面的语句，并且结束 CASE；如果都不满足，则执行ELSE中的语句或值
- ELSE可以省略，如果ELSE省略了，并且所有WEN条件都不满足，则返回NULL

```sql
#案例创建存储过程，根据传入的成绩，来显示等级，比如传入的成绩：90-100，显示λ，80-90，显示B，60-80，显示c，否则，显示D 
CREATE PROCEDURE test_case(IN score INT)
BEGIN 
    CASE When score>=90 And score<=100 THEN SELECT 'A';
    WheN score>=80 THEN SELECT 'B';
    WHEN score>=60 THEN SElECT 'C';
    ELSE SELECT 'D';
    END CASE 
END $ 
CALI test case(95) $
```

#3.if结构

功能：实现多重分支

语法：

```sql
if 条件1 then 语句1;
e1se if 条件2 then 语句2;
[e1se 语句n;]
end if;
```


应用在 begin end中

```sql
#案例1：根据传入的成绩，来显示等级，比如传入的成绩：90-100，返回A，80-90，返回B，60-80，返回c，否则，返回D 
CREATE FUNCTION test_if(score INT) RETURNS CHAR 
    BEGIN IF score>=90 AND score<=100 THEN RETURN 'A';
    ELSE IF score>=80 THEN RETURN 'B';
    ELSE IF score>=60 THEN RETURN 'C';
    ELSE RETURN 'D'; 
	end if;
END $
```

#二、循环结构分类：
**while、loop、 repeat**

- **iterate**类似于 continue，结束本次循环，继续下一次
- **leave**类似于 break，跳出，结束当前所在的循环

#1.while 语法：

```sql
[标签:] while 循环条件 do
	循环体;
end while [标签];
/*联想：
while(循环条件){
	循环体;
}
*/
```

#2.loop 语法：

```sql
[标签:] loop 
	循环体;
end loop [标签];
```

可以用来模拟简单的死循环

#3.repeat 语法：

```sql
[标签:] repeat 
	循环体;
until 结束循环的条件
end repeat [标签];

##类似do-while
```

```sql
#没有添加循环控制语句普案例：
#批量插入，根据次数插入到 admin表中多条记录
CREATE PROCEDURE pro_whilel(IN insertcount INT)
BEGIN
	DECLARE i INT DEFAULT 1;
	WHILE i<=insertcount Do 
		INSERT INTo admin(username, password) VALUES (concat('Rose',1),666);
        SET i=i+1; 
    END WHILE;
END $
   
CALL pro_whilel(100) $
```

```sql
#2.添加leave语句
#案例：批量插入，根据次数插入到 admin表中多条记录，如果次数>20则停止
CREATE PROCEDURE test_whilel(IN insertcount INT)
BEGIN 
	DECLARE i INT DEFAULT 1;
	a:WHILE i<=insertcount Do 
		INSERT INTO admin(username, password) VALUES (CONCAT('xiaohua'，1)，0000)
		IF i>=20 THEN LEAVE a;
		END IF;
		SET i=i+1; 
	END WHILE a;
END $
CALL test_whilel(100) $
```

```sql
#3.添加 iterate语句
#案例：批量插入，根据次数插入到 admin表中多条记录，只插入偶数次
CREATE PROCEDURE test_whilel(IN insertcount INT)
BEGIN 
	DECLARE i INT DEFAULT 1;
	a:WHILE i<=insertcount Do 
		INSERT INTO admin(username, password) VALUES (CONCAT('xiaohua'，1)，0000)
		SET i=i+1; 
		IF mod(i,2) THEN iterate a;
		END IF;
	END WHILE a;
END $
CALL test_whilel(100) $
```

对比：

①这三种循环都可以省略名称，但如果循环中添加了循环控制语句（ leave或 iterate）则必须添加名称。

②loop一般用于实现简单的死循环；while先判断后执行；repeat先执行后判断，无条件至少执行一次。