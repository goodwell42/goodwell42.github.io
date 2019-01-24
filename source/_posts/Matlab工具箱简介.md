---
title: Matlab工具箱简介
date: 2019-01-21 14:44:01
tags: 数学建模,计算机
toc: true
categories: 
- 计算机
- Matlab
---

# Toolbox工具箱<!-- more -->

## 数学、统计与优化

**1     Symbolic Math Toolbox             符号数学工具箱**

   Symbolic Math Toolbox™ 提供用于求解和推演符号运算表达式以及执行可变精度算术的函数。您可以通过分析执行微分、积分、化简、转换以及方程求解。另外，还可以利用符号运算表达式为 MATLAB®、Simulink® 和 Simscape™ 生成代码。

Symbolic Math Toolbox 包含 MuPAD® 语言，并已针对符号运算表达式的处理和执行进行优化。该工具箱备有 MuPAD 函数库，其中包括普通数学领域的微积分和线性代数，以及专业领域的数论和组合论。此外，还可以使用 MuPAD 语言编写自定义的符号函数和符号库。MuPAD 记事本支持使用嵌入式文本、图形和数学排版格式来记录符号运算推导。您可以采用 HTML 或 PDF 的格式分享带注释的推导。

**2     Partial Differential Euqation Toolbox  偏微分方程工具箱**

偏微分方程工具箱™提供了用于在2D，3D求解偏微分方程（PDE）以及一次使用有限元分析。它可以让你指定和网格二维和三维几何形状和制定边界条件和公式。你能解决静态，时域，频域和特征值问题在几何领域。功能进行后处理和绘图效果使您能够直观地探索解决方案。

你可以用偏微分方程工具箱，以解决从标准问题，如扩散，传热学，结构力学，静电，静磁学，和AC电源电磁学，以及自定义，偏微分方程的耦合系统偏微分方程。

**3     Statistics Toolbox                 统计学工具箱**

   Statistics and Machine Learning Toolbox 提供运用统计与[机器学习](http://cn.mathworks.com/solutions/machine-learning/)来描述、分析数据和对数据建模的函数和[应用程序](http://cn.mathworks.com/products/statistics/apps.html)。您可以使用用于探查数据分析的描述性统计和绘图，使用[概率分布](http://cn.mathworks.com/discovery/probability-distributions.html)拟合数据，生成用于 Monte Carlo 仿真的[随机数](http://cn.mathworks.com/discovery/random-number.html)，以及执行假设检验。回归和分类算法用于依据数据执行推理并构建预测模型。

对于分析多维数据，Statistics and Machine Learning Toolbox 可让您通过序列[特征选择](http://cn.mathworks.com/discovery/feature-selection.html)、逐步回归、主成份分析、规则化和其他降维方法确定影响您的模型的主要变量或特征。该工具箱提供了[受监督](http://cn.mathworks.com/discovery/supervised-learning.html)和[不受监督](http://cn.mathworks.com/discovery/unsupervised-learning.html)机器学习算法，包括[支持向量机](http://cn.mathworks.com/discovery/support-vector-machine.html) (SVM)、促进式 (boosted) 和袋装 (bagged) 决策树、k-最近邻、k-均值、k-中心点、分层聚类、高斯混合模型和隐马尔可夫模型。

**4     Curve Fitting Toolbox          曲线拟合工具箱**

Curve Fitting Toolbox™ 提供了用于拟合曲线和曲面数据的应用程序和函数。使用该工具箱可以执行探索性数据分析，预处理和后处理数据，比较候选模型，删除偏值。您可以使用随带的线性和非线性模型库进行回归分析，也可以指定您自行定义的方程式。该库提供了优化的解算参数和起始条件，以提高拟合质量。该工具箱还提供非参数建模方法，比如样条、插值和平滑。

在创建一个拟合之后，您可以运用多种后处理方法进行绘图、插值和外推，估计置信区间，计算积分和导数。

**5     Optimization Toolbox         优化工具箱**

​       Optimization Toolbox™ 提供了寻找最小化或最大化目标并同时满足限制条件的函数。工具箱中包括了线性规划、混合整型线性规划、二次规划、非线性优化、非线性最小二乘的求解器。您可以使用这些求解器寻找连续与离散优化问题的解决方案、执行折衷分析、以及将优化的方法结合到其算法和应用程序中。

**6     Global Optimization Toolbox   全局优化工具箱**

Global Optimization Toolbox 所提供的方法可为包含多个极大值或极小值的问题搜索全局解。它包含全局搜索、多初始点、模式搜索、遗传算法和模拟退火求解器。对于目标函数或约束函数连续、不连续、随机、导数不存在以及包含未确定参数的仿真模型或黑箱函数的优化问题，都可使用这些求解器来求解。

遗传算法和模式搜索求解器都支持算法定制。你可以修改初始种群和适应度尺度变换选项、定义亲本选配、交叉和变异函数，创建自定义的遗传算法。还可通过定义轮询、搜索和其它函数来自定义模式搜索。

**7     Neural Network Toolbox          神经网络工具箱**

神经网络工具箱™提供的功能和应用服务建模是不容易建模与封闭形式方程复杂的非线性系统。神经网络工具箱支持监督学习与前馈，径向基和动态网络。它也支持无监督学习与自组织地图和有竞争力的层。有了你可以设计，培训，可视化和模拟神经网络工具箱。可以使用神经网络工具箱等应用数据拟合，模式识别，聚类，时间序列预测，和动态系统建模和控制。

要加快培养和处理大型数据集，您可以在多核处理器，GPU和计算机集群使用并行计算工具箱™分发计算和数据。

**8     Model-Based Calibration Toolbox 基于模型矫正工具箱**

​       基于模型矫正工具箱™提供的应用程序和设计工具优化校准复杂的发动机和动力总成子系统。您可以定义最佳的测试计划，自动适应的统计模型，并生成校准和查找表的高自由度复杂的引擎，将使用传统的方法，否则需要详尽的测试。校准可以在各个工作点或以上驱动周期进行优化，以确定发动机的燃油经济性，性能和排放的最佳平衡。使用的应用程序或MATLAB®功能，可以自动校准过程相似类型的发动机。

与基于模型的标定工具箱创建的模型可以导出到Simulink®的支持控制设计，硬件在环测试，和整个动力总成设计团队的动力系统模拟活动。校准表可以导出到ETAS INCA和ATI愿景。



## 信号处理与通信        

**9     Signal Processing Toolbox 信号处理工具箱**

​         Signal Processing Toolbox™ 提供了用来生成、测量、变换、过滤和可视化信号的函数和应用程序。该工具箱包括用于重新采样、平滑和同步信号、设计和分析滤波器、估算功率谱以及测量峰值、带宽和失真的算法。该工具箱还包括参数化和线性预测建模算法。您可以使用 Signal Processing Toolbox 分析和比较时域、频域和时频域中的信号，识别规律和趋势，提取特征，开发和验证自定义算法，从而洞察您的数据。

**10  DSP System Toolbox         DSP系统工具箱**

DSP System Toolbox 提供用于 MATLAB® 和 Simulink® 中[流信号](http://cn.mathworks.com/discovery/stream-processing.html)处理的算法、滤波器、设计工具和应用程序。这些功能以 MATLAB 函数、MATLAB 系统对象和 Simulink 模块的形式提供。您可以为音频、通信、医疗以及其他实时信号处理和物联网 (IoT) 应用场合创建并测试系统。

使用 DSP System Toolbox 可以[设计和分析 FIR](http://cn.mathworks.com/discovery/filter-design.html)、IIR、多速率、多级和自适应滤波器。您可以从[音频设备](http://cn.mathworks.com/hardware-support/audio-dst.html)、文件和网络传输信号流来支持系统开发和验证。[示波器](http://cn.mathworks.com/discovery/oscilloscope-software.html)、[频谱分析仪](http://cn.mathworks.com/discovery/spectrum-analyzer-software.html)和[逻辑分析仪](http://cn.mathworks.com/discovery/logic-analyzer.html)工具可用于对流信号进行动态可视化和测量。对于桌面原型建立并部署至嵌入式处理器（包括[ARM® Cortex®](http://cn.mathworks.com/hardware-support/arm-cortex-m-cmsis.html)），该系统工具箱支持 C/C++ 代码生成和定点建模，还支持为 FFT 和 IFFT 等算法生成 HDL 代码。

**11  Communications System Toolbox  通信系统工具箱**

​    Communications System Toolbox 提供用于在 MATLAB® 与 Simulink® 中对通信系统进行分析、设计、端到端仿真和验证的算法和应用程序。工具箱算法（包括信道编码、调制、MIMO 和 OFDM）使您可以组建系统的物理层模型。您可以仿真模型以测量性能。

该系统工具箱提供星座图和眼图、误码率以及其他分析工具和示波器以验证设计。这些工具可用于分析信号，实现信道特征可视化和获取误差矢量幅度 (EVM) 等性能指标。信道和 RF 损伤模型和补偿算法（包括载波和符号定时同步器）使您可以对链路级设计规范进行真实建模并补偿信道衰落效应。

通过使用 Communications System Toolbox 硬件支持包，您可以将发射机和接收机模型连接到外部无线电设备并使用无线测试验证设计。该系统工具箱支持定点运算和 C 或 HDL 代码生成。

算法可作为 MATLAB 函数、系统对象和 Simulink 模块。

**12  Wavelet Toolbox                  小波工具箱**

​         小波工具箱™提供的功能和开发基于小波变换的算法进行分析，综合，去噪和压缩的信号和图像的应用程序。

该工具箱让您探索小波特性和应用，如语音和音频处理，图像与视频处理，生物医学成像和1-D以及通信和地球物理学2-D应用。

**13  Fixed-Point Toolbox            定点运算工具箱**

​         Fixed-Point Designer 提供了使用 MATLAB® 代码、Simulink® 模型和 Stateflow® 图开发定点算法的数据类型与工具。它会自动建议定点数据类型和字长等属性。您还可以手动指定取整模式和溢出操作等属性。您可以执行加速的比特级一致性仿真来观察有限范围与精度的影响。

Fixed-Point Designer 使您能够将浮点算法转换为定点算法。您可以创建符合您的数值精度要求和目标硬件约束的定点数据类型并进行优化。您可以仿真您的设计并分析结果以获得取值范围信息。Fixed-Point Designer 使用此信息来建议适用于您的定点算法的字长和定标，并让您能够将定点结果与浮点基线进行比较。

Fixed-Point Designer 支持 C、HDL 和 PLC 代码生成。

**14  RF Toolbox               射频工具箱**

射频工具箱™提供功能和用于设计，建模，分析和可视化射频（RF）元件的网络的应用程序。您可以使用射频工具箱软件工作在无线通信，雷达和信号完整性的项目。

**15  Phased Array System Toolbox  相控阵系统工具箱**

​         相控阵系统工具箱™提供的算法和应用的传感器阵列系统的设计，仿真和分析，雷达，声纳，无线通信，医学成像应用。该系统工具箱包括脉冲和连续波形和波束形成的信号处理算法，匹配滤波，到货即损（DOA）估计的方向和目标探测。它还包括发射机和接收机，传播，目标，干扰器，和杂波模型。

​         该系统工具箱可以让你模拟地面，空中，或舰载多功能雷达系统的动力学与移动目标和平台。可以设计端至端的相控阵系统和分析下使用合成或获得的数据不同的情况的性能。该工具箱的应用程序，让你探索传感器阵列和波形的特点，进行链路预算分析。在副产物实施例提供了一个起点实现自定义相控阵系统。

​         工具箱算法可作为MATLAB®系统对象™和Simulink®的块。



## 控制系统设计与分析     

**16  Control system Toolbox            控制系统工具箱**

​         Control System Toolbox™ 为系统地分析、设计和调节线性控制系统提供[行业标准算法](http://cn.mathworks.com/help/control/functionlist.html)和应用程序。您可以将您的系统指定为传递函数、状态空间、零极点增益 或频率响应 模型。通过应用程序和函数（如阶跃响应图和波特图），您可以实现时域和频域中系统行为的可视化效果。可以使用[自动 PID 控制器调节、](http://cn.mathworks.com/discovery/pid-tuning.html)波特回路整形、根轨迹方法、LQR/LQG 设计及其他交互式和自动化方法来调节补偿器参数。您可以通过校验上 升时间、超调量、稳定时间、增益和相位裕度及其他要求来验证您的设计。

**17  System Indentification Toolbox     系统辨识工具箱**

**18  Fuzzy Logic Toolbox            模糊逻辑工具箱**

**19  Robust Control Toolbox            鲁棒控制工具箱**

**20  Model Predictive Control Toolbox模型预测控制工具箱**

**21  Aerospace Toolbox              航空航天工具箱**



## 图像处理与计算机视觉        

**22  Image Processing Toolbox 图像处理工具箱**

​         Image Processing Toolbox™ 提供了一套全方位的参照标准[算法、函数](http://cn.mathworks.com/help/images/functionlist.html)和[应用程序](http://cn.mathworks.com/products/image/apps.html)，用于进行图像处理、分析、可视化和算法开发。您可进行图像分析、[图像分割](http://cn.mathworks.com/discovery/image-segmentation.html)、[图像增强](http://cn.mathworks.com/discovery/image-enhancement.html)、 降噪、几何变换和图像配准。工具箱中许多函数均支持多核处理器、GPU 和 C 代码生成。

Image Processing Toolbox 支持一组多样化的[图像类型](http://cn.mathworks.com/help/matlab/ref/imread.html#f25-713745)，包括[高动态范围](http://cn.mathworks.com/help/images/working-with-high-dynamic-range-images.html?searchHighlight=hdr)、千兆像素 分辨率、嵌入式 ICC 剖面图和层析成像。可视化函数和应用程序可用于探查图像与视频、检查像素区域、调节颜色与对比度、创建轮廓或柱状图以及操作[感兴趣区域](http://cn.mathworks.com/help/images/specifying-a-region-of-interest-roi.html#brcwzcj-1_1) (ROI)。工具箱支持用于处理、显示和[浏览大图像的](http://cn.mathworks.com/help/images/exploring-very-large-images.html)工作流程。

**23  Computer Vision System Toolbox 计算机视觉工具箱**

​         计算机视觉系统工具箱™提供的算法，功能和应用程序的设计和模拟计算机视觉和视频处理系统。您可以执行特征检测，提取和匹配;物体检测和跟踪;运动估计;和视频处理。对于3-D计算机视觉系统工具箱支持摄像机标定，立体视觉，三维重建和三维点云处理。随着基于机器学习的框架，你可以训练目标检测，物体识别和图像检索系统。算法可作为MATLAB®功能，系统对象™和Simulink®的块。

​         快速原型和嵌入式系统设计，系统工具箱支持定点运算和C代码生成。

**24  Image Acquisition Toolbox       图像采集工具箱**

​         图像采集工具箱™技术可以采集从相机和图像采集卡的图像和视频直接进入MATLAB®和Simulink®的。可以自动检测硬件和配置硬件属性。先进的工作流程，让你触发采集，同时处理的非循环，执行后台采集，并在多个多设备同步采样。随着多个硬件厂商和行业标准的支持，可以使用成像设备，从便宜的网络摄像头，以满足低光，高速和其它具有挑战性的需求的高端的科学和工业设备。

**25  Mapping Toolbox                 地图工具箱**

​         地图工具箱™提供算法，功能，和用于分析的地理数据，并在MATLAB®创建地图显示的应用程序。您可以从多种文件格式和网络地图服务器导入矢量和栅格数据。该工具箱，您可以子集，并使用自定义修剪，插值，重采样数据，坐标变换和其他技术。地理空间数据可以从一个单一的地图显示多个来源的基础地图图层合并。您可以在文件格式，如shape文件，GeoTIFF文件和KML导出数据。通过将映射函数到MATLAB程序，可以自动在你的地理信息工作流程频繁的任务。



## 测试与测量   

**26  Data Acquisition Toolbox   数据采集工具箱**

​         数据采集工具箱™提供了用于连接MATLAB®数据采集硬件。该工具箱支持多种数据采集硬件，包括USB，PCI，PCI-EXPRESS®，PXI和PXI-Express设备，从美国国家仪器，测量计算，研华，数据转换，和其他供应商。

随着工具箱，您可以配置数据采集硬件和数据读入MATLAB和Simulink®中进行实时分析。您还可以发送出的数据通过模拟和数据采集硬件提供的数字输出通道。该工具箱的数据采集软件包括用于控制模拟输入，模拟输出，计数器/定时器和DAQ设备的数字I / O子系统的功能。您可以访问特定于设备的功能和同步多个设备采集的数据。

当你得到它或将它保存为后期处理，你可以分析数据。您还可以自动检测并进行迭代更新，根据分析结果测试设置。包括在工具箱中的Simulink模块让你直接传输实时数据到Simulink模型，使您能够验证和确认您的模型对现场测得的数据为您的设计验证过程的一部分。

**27  Instrument Control Toolbox    仪表控制工具箱**

**28  Image Acquisition Toolbox       图像采集工具箱**

​         图像采集工具箱™技术可以采集从相机和图像采集卡的图像和视频直接进入MATLAB®和Simulink®的。可以自动检测硬件和配置硬件属性。先进的工作流程，让你触发采集，同时处理的非循环，执行后台采集，并在多个多设备同步采样。随着多个硬件厂商和行业标准的支持，可以使用成像设备，从便宜的网络摄像头，以满足低光，高速和其它具有挑战性的需求的高端的科学和工业设备。

**29  OPC Toolbox                   OPC开发工具**

**30  Vehicle Network Toolbox         车载网络工具箱**

 

## 计算金融       

**31  Financial Toolbox   金融工具箱**

**32  Econometrics Toolbox 计算经济学工具箱**

**33  Datafeed Toolbox  数据输入工具箱**

**34  Fixed-Income Toolbox 固定收益工具箱**

**35  Financial Derivatives Toolbox  衍生金融工具箱**

 

## 计算生物       

**33  Bioinformatics Toolbox      生物信息工具箱**

**34  SimBiology 生物学工具箱**



## 并行计算       

**35  Parallel Computing Toolbox     并行计算工具箱**

**36  MATLAB Distributed Computing Server    MATLAB分布式计算服务器**

 

## 数据库访问与报告   

**37  Database Toolbox  数据库工具箱**

​         数据库工具箱™提供了一个应用程序和功能的交换关系数据库和MATLAB®之间的数据。您可以使用SQL命令来读取和写入数据，或使用数据库资源管理器应用程序与数据库进行交互，而无需使用SQL。

该工具箱支持ODBC兼容和JDBC兼容数据库，包括的Oracle®，SAS®，MySQL®，访问Sybase®，Microsoft®SQLServer®上，微软Access®的，和PostgreSQL®。您可以应用简单和高级的条件，从MATLAB数据库查询。该工具箱允许您访问在一个单一的MATLAB进程同时进行多个数据库，能够实现大型数据集分段导入。

**38  MATLAB Report Generator     MATLAB报告生成**

 

## MATLAB代码生成    

**39  MATLAB Coder       MATLAB代码生成**

​         MATLAB Coder™ 可从 MATLAB® 代码生成可读且可移植的 C 和 C++ 代码。它支持大多数 MATLAB 语言和广泛的工具箱。您可以将生成的代码作为源代码、静态库或动态库集成到您的项目。还可以在 MATLAB 环境中使用生成的代码，加快 MATLAB 代码的计算量密集部分的速度。使用 MATLAB Coder，您可以将现有 C 代码合并到 MATLAB 算法和生成的代码中。

通过联合使用 MATLAB Coder 和 Embedded Coder®，您可以进一步优化代码的效率和自定义生成的代码。然后可以使用软件在环 (SIL) 和处理器在环 (PIL) 执行程序验证生成代码的数字行为。

**40  Filter Design HDL Coder     滤波器设计HDL代码生成**

​         滤波器设计HDL编码器™产品增加了硬件实现能力MATLAB®。它可以让你产生有效的，综合的，而便携VHDL和Verilog代码，其设计与DSP系统工具箱™软件，用于ASIC或FPGA实现定点滤波器。它还可以自动快速仿真，测试和验证所生成的代码创建VHDL和Verilog测试平台。



## MATLAB应用发布       

**41  MATLAB Compiler  MATLAB编译器　混合编程**

**42  MATLAB Builder NE     for Microsoft.Net Framework**

**43  MATLAB Builder JA       for Java Language**

**44  MATLAB Builder EX      for Microsoft Excel**

**45  Spreadsheet Link EX    for Microsoft Excel**

 



# Simulink模块

## 信号处理与通信

1       DSP System Toolbox                 DSP系统工具箱

2       Communications System Toolbox   通信系统工具箱

3       Computer Vision System Toolbox  计算机视觉工具箱

4       SimRF       RF 模块集功能

 

## 控制系统设计与分析    

5       Simulink Control Design  Simulink 控制器设计

6       Simulink Design Optimization        Simulink 设计优化

7       Aerospace Blockset                 航空航天模块

 

## 物理建模        

8       Simscape 物理模型仿真模块组

9       SimMechanics 机构动态仿真模块组

10    SimDriveline    传动系统系统仿真模块组

11    SimHydraulics 液压仿真模块组

12    SimRF               RF仿真模块组

13    SimElectronics 电子仿真模块组

14    SimPowerSystems  动力系统仿真模块组

 

## 基于事件的建模    

15    Stateflow 

16    SimEvents

​         

## 快速原型和硬件再回路仿真        

17    xPC Target        

18    xPC Target Embedded Option 

19    Real-Time Windows Target

​         

## 仿真绘图与报告    

20    Simulink 3D Animation    

21    Gauges Blockset      

22    Simulink Report Generator

​         

## 验证、确认和测试        

23    Simulink Verfication and Validation        

24    Simulink Design Verifier  

25    System Test     

26    EDA Simulator Link 

27    Simulink Code Inspector 

 

## 定点建模        

28    Simulink Fixed Point

​         

## 代码生成        

29    Simulink Coder        

30    Embedded Coder    

31    Simulink HDL Coder 

32    Simulink PLC Coder 

33    Do Qualification Kit for DO-178

34    IEC Certification Kit for ISO 26262 and IEC 61508