---
title: LaTeX公式编辑
date: 2019-01-16 00:21:14
tags: 数学建模
toc: true
categories: 
- 数学建模
- LaTeX
---



# $\LaTeX$学习

## 数学公式编辑<!-- more -->

$\LaTeX$

### 数学模式

1. #### 行内数学公式-inline

   - 使用 美元符号引出\$ ... $
   - 使用命令 \\( 和 \\) 
   - 使用环境\begin{math}...\end{math}

2. #### 行间数学公式-display

   - 使用 两个美元符号引出\$\$ ... \$$
   - 使用命令 \\[和 \\] 
   - 使用环境\begin{displaymath}...\end{displaymath}

3. #### 带自动编号的数学公式

   - 单行\begin{equation}...\end{equation}
   - 多行\begin{gather}...\end{gather}
   - 分行multiline
   - 组合cases（带编号numcases）

   ps:\text{}，*，align环境居中&，&，\\\\

### 数学结构

1. 上下标

   - 普通的用^和\_
   - 多数数学算子中的上下标行间出现在正上、下方，行内不变
   - eg: $$\sum_{i=0}^n A_i$$
   - 上下标互不影响

2. 上下划线与花括号

   - \overline和\underline
   - 带箭头的\overleftarrow和单个字母的向量\vec
   - eg: $\overleftarrow{a+b}$，$\vec a$

3. 分式

   - \frac和/的区别（\dfrac和\tfrac）
   - $\frac{a}{b}$,$a/b$

4. 根式

   - \sqrt[]

5. 矩阵

   - 使用矩阵环境

     ![矩阵环境](http://pjvbe4vjy.bkt.clouddn.com//blogmatrices.png)