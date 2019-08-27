---
title: Django初识
date: 2019-06-26 15:28:10
tags: Django python
toc: true
categories: 
- python
- Django
---

`以一个极简的博客网站为例，领略Diango。`

本笔记提炼自[慕课网教程](https://www.imooc.com/learn/790)

*项目代码托管于我的*[Github](https://github.com/goodwell42/DjangoTest)

<!-- more -->

### 创建项目

#### 步骤

在工作目录打开命令行，输入

```shell
django-admin.py startproject project_name

eg:  django-admin.py startproject myblog
```

#### 项目目录结构树

manage.py

./myblog

--\_init\_.py

--settings.py

--urls.py

--wsgi.py

#### 介绍

| 文件              | 作用                                      |
| ----------------- | ----------------------------------------- |
| urls.py           | 用于配置URL                               |
| wsgi.py           | WSGI(Python Web Server Gateway Interface) |
| settings.py       | settings.py 配置文件                      |
| _init\_.py python | 声明模块文件（为空）                      |

### 创建应用

#### 步骤

在项目 *manage.py* 同级目录下打开命令行中，输入

```shell
python manage.py startapp blog
```

添加应用名到 *settings.py* 中的 **INSTALLED_APPS** 里

#### 应用目录结构树

./migrations

--\_init\_.py

\_init\_.py

admin.py

apps.py

models.py

tests.py

views.py

#### 介绍

| 文件         | 作用                                           |
| ------------ | ---------------------------------------------- |
| migrations： | 数据迁移模块（自动生成）                       |
| admin.py：   | 应用的后台管理系统配置                         |
| apps.py：    | 应用的一些配置                                 |
| models.py：  | 数据模块，使用ORM                              |
| test.py：    | 自动测试模块                                   |
| views.py：   | 执行响应的代码所在模块，代码逻辑处理的主要地点 |

### 创建第一个页面（响应）

1. 编辑blog.view

   每一个响应对应一个函数，函数必须返回一个响应

   函数必须接收一个参数，一般约定为request

   每一个响应函数对应一个URL

   ```python
   # view.py
   from django.shortcuts import render
   from django.http import HttpResponse
   # Create your views here.
   
   def index(request):
       return HttpResponse('hello,goodwell')
   ```

2. 编辑urls.py配置URL

   url函数放在urlpatterns列表中

   包含三个参数： URL，对应方法，名称

3. 关于页面聚合的改进：包含其他URL

   在app目录下创建urls.py文件

   ```python
   from django.urls import path
   
   from . import views
   
   urlpatterns = [
       path('', views.index),
   ]
   ```

   在根urls.py 中引入 include，将第二个参数改为include('blog.urls') //其为总路径

   ```python
   from django.contrib import admin
   from django.urls import path, include
   
   
   urlpatterns = [
       path('admin/', admin.site.urls),
       path('blog/', include('blog.urls')),
   ]
   ```
   
4. 模板如下
   
   views.py文件用于编写前后台的交互，以及需要的python算法：
   
   一个标准的views.py文件可以按照下面的模板来写：
   
   
   ```python
   from django.shortcuts import render
   from django.shortcuts import render_to_response, RequestContext
   from django.http import HttpResponse
   import json
   
   # Create your views here.
   def home(request):
   	if request.method == 'POST':
   		#add funtions here
   		return HttpResponse(json.dumps({'message': "error"}))
   	return render_to_response('home.html',{'handler': []}, context_instance=RequestContext(request))
   ```
   
   
   url文件修改成如下代码：
   
   ```python
   from django.conf.urls import patterns, include, url
   from django.conf import settings
   from django.contrib import admin
   from django.conf.urls.static import static
   
   urlpatterns = [
   url(r'^$', '**testApp.views.home**', name='home'), 
   url(r'^admin/', include(admin.site.urls)),
   ]
   ```
### static文件

1. 修改setting文件，建立static文件夹。

打开settings.py文件，在

```python
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__))
```

后面加上如下的代码，确定静态文件的位置。

```python
#Absolute path to the directory static files should be collected to.
#Don't put anything in this directory yourself; store your static files
#in apps' "static/" subdirectories and in STATICFILES_DIRS.
#Example: "/var/www/example.com/static/"
STATIC_ROOT = ''
#URL prefix for static files.
#Example: "http://example.com/static/", "http://static.example.com/"
STATIC_URL = '/static/'
```

接下来在项目文件夹中建立一个static文件夹用于存放项目中的css，js以及其他文件。

2. 加载静态文件

在html文件的<head>中添加如下代码用于加载静态文件：

```html
{% load staticfiles %}
<script> token= '{{ csrf_token }}';</script>
```
在html文件中引入css文件和script文件的方法如下代码：
```
<link rel="stylesheet" type="text/css" href="{%static 'css/scatter.css'%}">
<script src = "{%static 'lib/d3.min.js' %}"></script>
```
### Templates

HTML文件，使用了Django模板语言（Django Template Language, DTL），可以使用第三方模板

#### 步骤

1. 在app的根目录下创建 Templates 的目录
2. 在该目录下创建HTML文件
3. 在views.py中返回render()  //渲染

#### DTL

render() 函数三个参数

- request
- ‘index.html’
- dict类型参数

该字典是后台传递到模板的参数，键为参数名

在模板中使用{{ 参数名 }} 来直接使用

#### 注意事项

查找Templa按照INSTALLED_APPS 中添加的顺序查找

不同app下Templates 目录下的同名 .html文件会造成冲突

解决方法：在app的Templates 的目录创建app名的目录，将HTML放在其中

### Models

通常，一个**Models**对应数据库的一张**数据表**，Django中Models以**类**的形式表现，包含一些基本字段和数据的一些行为。（ORM）

#### 生成数据表步骤

1. 在应用根目录下的models.py引入models模板，创建类，继承**models.Model**，该类即是一张数据表。

2. 在类中创建字段

3. 生成数据表：命令行进入manage.py 同级目录，执行

   ```shell
   python manage.py makemigrations app名（可选）
   
   python manage.py migrate
   ```

#### 字段创建

字段即类中的属性（变量）,eg:

```python
# models.py
from django.db import models


class Article(models.Model):
    title = models.CharField(max_length=32, default='Title')
    content = models.TextField(null=True)
```

#### 数据库查看

自动在app/migrations/目录下生成移植文件，执行

```shell
python manage.py sqlmigrate 应用名 文件id
```

- 查看SQL语句，默认sqlite3 的数据库在项目根目录下db.sqlite3
- 查看并编辑db.sqlite3,使用第三方软件： SQLite Expert Personal (免费，轻量级)

#### 页面呈现数据

后台步骤： views.py 中import models

```python
# views.py
from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

from . import models


def index(request):
    article = models.Article.objects.get(pk=1)
    return render(request, 'blog/index.html', {'article': article})
```

前端步骤： 模板可以直接使用对象以及对象的“.” 操作

```html
    <h1>{{ article.title }}</h1>
    <h3>{{ article.content }}</h3>
```

### Admin

是Django自带的一个功能强大的**自动化数据管理界面**（后台），被授权的用户可以直接在Admin中**管理数据库**，提供了定制功能。

#### 配置

1. 创建用户（超级用户）： 命令行输入

   ```shell
   python manage.py createsuperuser
   ```

   Admin入口： localhost:8000/admin/

   修改settings.py 中LANGUAGE_CODE = 'zh-Hans'

2. 配置应用：

   在应用下**admin,py** 中引入**自身的models**模块（或里面的模型类）

   编辑admin.py： admin.site.register(models.Article)

   ```python
   # admin.py
   from django.contrib import admin
   
   from .models import Article
   
   admin.site.register(Article)
   ```

3. 修改数据默认显示名称

   在Article类下添加一个方法,python3选择\_\_str\_\_(self)  // 注意双下划线，然后return self.title

   ```python
   # models.py
   from django.db import models
   
   
   class Article(models.Model):
       title = models.CharField(max_length=32, default='Title')
       content = models.TextField(null=True)
   
       def __str__(self):
           return self.title
   
   ```

### 补充内容

#### Template过滤器

```
{{ value | filter }}

eg:可叠加：{{ list_nums | length }}
```

#### Django Shell

自动引入项目环境，命令行输入

```shell
python manage.py shell
```

可以来进行调试，可以用于测试未知的方法

```shell
from blog.models import Article
Article.objects.all()
```

#### Admin增强

1. 创建admin配置类

   ```
   class ArticleAdmin(admin.ModelAdmin)
   
   注册: admin.site.register(Article, ArticleAdmin)
   ```

2. 显示其他字段

   ```python
   list_display = ('title', 'content')
   ```

3. 过滤器

   ```
   list_filter = ('pub_time',)
   ```

