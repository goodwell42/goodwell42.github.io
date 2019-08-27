---
title: Data_visualization_in_CSU
date: 2019-07-09 10:45:43
tags: 数据可视分析
toc: true
categories: 
- 实习
- 数据可视分析
---

> 记录在中南大学数据可视分析小组待的那几天，感谢老师与学长们的帮助！<!-- more -->

# DAY1

在中南大学数据可视分析小组待的第一天(2019-07-09)

## 前后台数据交换

使用Ajax技术实现数据的传递，一个标准的用于在前台声明数据传递的代码格式如下：

```javascript
var formData = new FormData();//声明一个存放数据的对象
formData.append("id","requestPlus");//用于前后台交互的ID
formData.append("csrfmiddlewaretoken", token);//安全传输
formData.append("data",data);//将数据添加到fromData对象中
$.ajaxSetup({
data: {csrfmiddlewaretoken: '{{ csrf_token }}' },
});
$.ajax(
{
    url:"/",
    type:"POST",
    data:formData,//注意这里为之前声明的数据
    processData: false,
    contentType: false,
    success:function(data){
    jsonData = $.parseJSON(data);//将后台传回来的json格式转换
},
	error:function(data){
}
});
```

在上面代码中，首先声明了一个用于存放需要进行前后台数据交互的数据对象formData，然后声明一个前后台用于识别当前调用哪个方法的唯一ID，这个ID在后台中将会被识别并执行相应方法。接下来，依次使用append方法将需要传入后台的数据添加到这个对象中，如上面代码中示例的输入参数data，用双引号声明的是参数名称，可以自定义，接下来按照上面代码的格式定义ajax的传输，在success后的function里包含的data即为后台成功执行后返回到前台的json格式的数据，我们需要使用parseJSON方法进行强转。

要注意的是，ajax的使用需要引用jQurey包，所以需要在html文件引用。

前台的部分写完后即可以进行后台的编写，下面一段代码解释了后台如何接收前台数据，进行数据格式的转换，调用相应算法并返回到前台的过程。

```javascript
if request.is_ajax() and request.POST['id'] == 'requestPlus': //根据ID调用对应方法
    data = request.POST.get("data")  //根据数据的名称获取到对应的数据
    data = data.encode("utf-8")//将获得数据转换成utf-8格式，python3中不需要
    data = int(data)//将获得数据转换成int格式
    c = plus(a,b)//调用相应的算法
    result = {
        'c' : c//返回结果 
    }
    return HttpResponse(json.dumps(result))//将结果返回并转换成json格式
    
def plus(data)://加法算法
    data += 1
    return data
```

到这里，我们完成了后台关于数据交互功能的编写.

在数据可视化的项目中，用户在前端通过种种交互，设定了某种目标，前台将这一数据传递到后台，后台调用相应的算法进行计算返回，前台获得经过计算的数据之后进行绘制从而实现交互的功能。



### 疑惑

公用的static 文件这么处理



# DAY2

在中南大学数据可视分析小组待的第二天(2019-07-10)

## 未解决

Ajax后台传回前台数据

csv数据传入Django

数据表如何联动

### Django导入csv

```python
import csv 

with open('import.csv') as csvfile: 
    reader = csv.DictReader(csvfile) 
    for row in reader: 
     # The header row values become your keys 
     suite_name = row['SuiteName'] 
     test_case = row['Test Case'] 
     # etc.... 

     new_revo = Revo(SuiteName=suite_name, TestCase=test_case,...) 
     new_revo.save() 
```

可视化：最重要的是

## D3点击事件

对一个被选择的元素，添加监听操作，代码如下：

```javascript
.on("click", function(){
    	
} )  
```

  常用的事件（event）有：

- **click**  ： 鼠标单击某元素时，相当于 mousedown 和 mouseup 组合在一起
- **mouseover**  ： 鼠标移到某元素上
- **mouseout**  ： 鼠标从某元素移开
- **mousemove** ： 鼠标被移动
- **mousedown :** 鼠标按钮被按下
- **mouseup :** 鼠标按钮被松开
- **dblclick**  ：  鼠标双击

## AJAX

### 特点

1. 异步交互
2. 局部刷新

[Ajax+Django 前后端数据交互笔记](https://www.cnblogs.com/wj-1314/p/10539203.html)

data:JSON.stringify(data_list)



# DAY3

在中南大学数据可视分析小组待的第三天(2019-07-11)

> 《精通D3.js》吕之华著

可视化最重要的不在编程，技术需要就去找就行。

## 地图的数据

数据获取：[Natural Earth主页](https://www.naturalearthdata.com/)

从shp文件中提取需要的地理信息，并保存为JSON格式。

工具：

​	ogr2ogr: 可提取shp文件的地理信息，以及转换为JSON格式。命令行操作。

​	ogr2gui： 基于ogr2ogr开发的图形化软件，[下载地址](http://www.ogr2gui.ca/en/index.php)

shibai



由于 GeoJSON 文件中的地图数据，都是经度和纬度的信息。它们都是三维的，而要在网页上显示的是二维的，所以要设定一个投影函数来转换经度纬度。

## 投影函数

```javascript
var projection = d3.geoMercator()
    .center([107, 31])
    .scale(850)
    .translate([width/2, height/2]);
```

可以参考： https://github.com/mbostock/d3/wiki/Geo-Projections

第 2 行：center() 设定地图的中心位置，[107,31] 指的是经度和纬度。

第 3 行：scale() 设定放大的比例。

第 4 行：translate() 设定平移。

## 地理路径生成器

为了根据地图的地理数据生成 SVG 中 path 元素的路径值，需要用到 d3.geo.path()，我称它为地理路径生成器。

```javascript
var path = d3.geoPath()
    .projection(projection);
```

projection() 是设定生成器的投影函数，把上面定义的投影传入即可。以后，当使用此生成器计算路径时，会自己加入投影的影响。

## 向服务器请求文件并绘制地图

```javascript
d3.json("china.json", function(error, root) {

    if (error) 
        return console.error(error);
    console.log(root.features);

    svg.selectAll("path")
        .data( root.features )
        .enter()
        .append("path")
        .attr("stroke","#000")
        .attr("stroke-width",1)
        .attr("fill", function(d,i){
            return color(i);
        })
        .attr("d", path )   //使用地理路径生成器
        .on("mouseover",function(d,i){
                    d3.select(this)
                       .attr("fill","yellow");
                })
                .on("mouseout",function(d,i){
                    d3.select(this)
                       .attr("fill",color(i));
                });
});
```

接下来，就是给 svg 中添加 path 元素。本例中，每一个 path 表示一个省。要注意 attr(“d”,path) 这一行代码，它相当于：

```javascript
.attr("d",funtion(d){
    return path(d);
})
```

### 文献

**计算机视觉领域世界三大顶级会议分别为CVPR、ICCV和ECCV。**

三大期刊三大会议《nature》《science》《cell》

先去[浙大可视小组的论文集](http://www.cad.zju.edu.cn/home/vagblog/)里找，然后去scholar.google.cn找

近3年关于“动态图”（英文：dynamic diagram 或者dynamic graph）

动态图综述



# DAY4

在中南大学数据可视分析小组待的第四天(2019-07-12)

## dynamic diagram / dynamic graph

![1562911299156](C:\Users\goodwell\AppData\Roaming\Typora\typora-user-images\1562911299156.png)

![1562912473175](C:\Users\goodwell\AppData\Roaming\Typora\typora-user-images\1562912473175.png)

### bootstrap4

 <link rel="stylesheet" href="https://cdn.staticfile.org/twitter-bootstrap/4.1.0/css/bootstrap.min.css">

<script src="https://cdn.staticfile.org/jquery/3.2.1/jquery.min.js"></script>
<script src="https://cdn.staticfile.org/popper.js/1.12.5/umd/popper.min.js"></script>
<script src="https://cdn.staticfile.org/twitter-bootstrap/4.1.0/js/bootstrap.min.js"></script>
### 这两天相关安排：

1. 快速了解可视化需要的相关技术方法，不用全很熟，搞清楚框架和流程，到时候用到谁再细化学习；
2. 搜集动态图可视化和张量分解在动态图可视化中应用相关的文献；
3. 讨论动态图中运用张量分解进行可视分析的思路和存在的问题。



### Note

矩阵分解有三个很明显的用途:

- 降维处理
- 缺失数据填补（或者说成“稀疏数据填补”）
- 隐性关系挖掘，



张量（tensor）

| 阶   | 实例                |      |
| ---- | ------------------- | ---- |
| 0    | 纯量（只有方向）    |      |
| 1    | 向量（大小和方向）  |      |
| 2    | 矩阵（数据表）      |      |
| 3    | 3阶张量（数据立方） |      |
| n    |                     |      |

1. **rank**：number of dimensions
2. **shape**: number of rows and columns
3. **type**: data type of tensor's elements



## **延伸阅读：Tucker分解与CP分解的比较**

前面，我们提到了CP分解可认为是Tucker分解的特例，那么，如何理解两者之间的异同呢？我们先写出两种分解的数学表达式。

- Tucker分解：![[公式]](https://www.zhihu.com/equation?tex=%7B%5Cmathcal%7BX%7D%7D%5Capprox+%7B%5Cmathcal%7BG%7D%7D%5Ctimes+_%7B1%7DU%5Ctimes+_%7B2%7DV%5Ctimes+_%7B3%7DW)
- CP分解：![[公式]](https://www.zhihu.com/equation?tex=%7B%5Cmathcal%7BX%7D%7D%5Capprox+%5Csum_%7Bp%3D1%7D%5E%7Br%7D%7B%5Clambda_%7Bp%7DF%5Cleft%28%3A%2Cp+%5Cright%29+%5Ccirc+S%5Cleft%28%3A%2Cp%5Cright%29%5Ccirc+T%5Cleft%28%3A%2Cp%5Cright%29%7D)

其中，张量![[公式]](https://www.zhihu.com/equation?tex=%7B%5Cmathcal%7BX%7D%7D)的大小为![[公式]](https://www.zhihu.com/equation?tex=n_1%5Ctimes+n_2%5Ctimes+n_3)，在Tucker分解中，核心张量![[公式]](https://www.zhihu.com/equation?tex=%7B%5Cmathcal%7BG%7D%7D)的大小为![[公式]](https://www.zhihu.com/equation?tex=r_%7B1%7D%5Ctimes+r_2%5Ctimes+r_3)，矩阵![[公式]](https://www.zhihu.com/equation?tex=U)、![[公式]](https://www.zhihu.com/equation?tex=V)、![[公式]](https://www.zhihu.com/equation?tex=W)的大小分别是![[公式]](https://www.zhihu.com/equation?tex=n_1+%5Ctimes+r_1)、![[公式]](https://www.zhihu.com/equation?tex=n_2+%5Ctimes+r_2)、![[公式]](https://www.zhihu.com/equation?tex=n_3+%5Ctimes+r_3)；在CP分解中，矩阵![[公式]](https://www.zhihu.com/equation?tex=F)、![[公式]](https://www.zhihu.com/equation?tex=S)、![[公式]](https://www.zhihu.com/equation?tex=T)大小分别为![[公式]](https://www.zhihu.com/equation?tex=n_1%5Ctimes+r)、![[公式]](https://www.zhihu.com/equation?tex=n_2%5Ctimes+r)、![[公式]](https://www.zhihu.com/equation?tex=n_3%5Ctimes+r)，运算符号“![[公式]](https://www.zhihu.com/equation?tex=%5Ccirc+)”表示外积（outer product），如向量![[公式]](https://www.zhihu.com/equation?tex=a%3D%5Cleft%28+1%2C2+%5Cright%29+%5E%7BT%7D+)，向量![[公式]](https://www.zhihu.com/equation?tex=b%3D%5Cleft%28+3%2C4+%5Cright%29+%5E%7BT%7D+)，则![[公式]](https://www.zhihu.com/equation?tex=a%5Ccirc+b%3Dab%5E%7BT%7D%3D%5Cleft%5B+%5Cbegin%7Barray%7D%7Bcc%7D+3+%26+4+%5C%5C+6+%26+8+%5C%5C+%5Cend%7Barray%7D+%5Cright%5D)。

张量![[公式]](https://www.zhihu.com/equation?tex=%7B%5Cmathcal%7BX%7D%7D)在位置索引![[公式]](https://www.zhihu.com/equation?tex=%5Cleft%28+i%2Cj%2Ck+%5Cright%29+)上对应的元素为

- Tucker分解：![[公式]](https://www.zhihu.com/equation?tex=x_%7Bijk%7D%5Capprox+%5Csum+_%7Bm%3D1%7D%5E%7Br_1%7D%7B%5Csum+_%7Bn%3D1%7D%5E%7Br_2%7D%7B%5Csum_%7Bl%3D1%7D%5E%7Br_3%7D%7D%7D%7B%5Cleft%28g_%7Bmnl%7D%5Ccdot+u_%7Bim%7D%5Ccdot+v_%7Bjn%7D+%5Ccdot+w_%7Bkl%7D%5Cright%29%7D)
- CP分解：![[公式]](https://www.zhihu.com/equation?tex=x_%7Bijk%7D%5Capprox+%5Csum_%7Bp%3D1%7D%5E%7Br%7D%7B%5Clambda_%7Bp%7D%5Ccdot+f_%7Bip%7D%5Ccdot+s_%7Bjp%7D%5Ccdot+t_%7Bkp%7D%7D)

从这两个数学表达式不难看出，CP分解中![[公式]](https://www.zhihu.com/equation?tex=%5Clambda_%7Bp%7D)构成的向量替换了Tucker分解中![[公式]](https://www.zhihu.com/equation?tex=g_%7Bmnl%7D)构成的核心张量（如图1所示），即CP分解是Tucker分解的特例，CP分解过程相对于Tucker分解更为简便，但CP分解中![[公式]](https://www.zhihu.com/equation?tex=r)的选取会遇到很多复杂的问题，如张量的秩的求解是一个NP-hard问题等，这里不做深入讨论。

![img](https://pic3.zhimg.com/80/v2-5a411a19c024276108104674a299af3a_hd.png)

图1 CP分解过程（图片来源：[Low-Rank Tensor Networks for Dimensionality ...](http://xueshu.baidu.com/s?wd=paperuri%3A(b7fd924e51c6a1febd3173a1a0a9e24e)&filter=sc_long_sign&tn=SE_xueshusource_2kduw22v&sc_vurl=http%3A%2F%2Farxiv.org%2Fpdf%2F1609.00893&ie=utf-8&sc_us=5709486074605317721)）





### 今天相关安排：

1、搜集动态图可视化和张量分解在动态图可视化中应用相关的文献；
2、讨论动态图中运用张量分解进行可视分析的思路和存在的问题。

### 明天安排：

1、开始尝试设计时空数据可视化界面，先把几个视图设计好（可以参考其他的做时空数据可视化的页面布局）。 



# DAY5

在中南大学数据可视分析小组待的第五天(2019-07-13)

## 设计

![1562912473175](C:\Users\goodwell\AppData\Roaming\Typora\typora-user-images\1562912473175.png)

![1562911299156](C:\Users\goodwell\AppData\Roaming\Typora\typora-user-images\1562911299156.png)





