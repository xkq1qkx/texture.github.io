# texture.github.io
#### 琦麟文风测试网站 v2.0
## Structure
网站主要有三部分组成
### 1.测评首页
有闪烁的星空、流星等动态元素

用户可以在对话框内输入文字，点击提交进行交互。
### 2.匹配算法
使用了自然语言处理技术，自己到建了一个有4个作家的数据集

使用encoder把用户输入的文字嵌入到向量空间中，与数据集中作家的进行比对

这里使用了下面两个库
@tensorflow/tfjs
@tensorflow-models/universal-sentence-encoder

向量夹角最小的就是最佳匹配作家
### 3.报告界面
