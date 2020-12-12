# mo-chart

# 接口
## 栅格布局

### mo-row Attributes

| 参数   | 说明              | 类型   | 可选值 | 默认值 |
| ------ | ----------------- | ------ | ------ | ------ |
| gutter | 列间隔，单位px    | number | -      | 0      |
| tag    | 自定义row元素标签 | string |        | div    |

### mo-col Attribute

| 参数    | 说明                             | 类型   | 可选值 | 默认值 |
| ------- | -------------------------------- | ------ | ------ | ------ |
| span    | 栅格占据的列数(一行总共分为24列) | number | -      | 24     |
| tag     | 自定义col元素标签                | string | -      | div    |
| offset  | 栅格左侧的间隔格数               | number | -      | 0      |
| padding | 栅格内垂直方向上padding，单位px  | number | -      | 0      |

### slot

| name    | 说明     |
| ------- | -------- |
| default | 内容区域 |

> mo-row和mo-col内都有默认的slot承载内容


## mo-chart-line

### 属性 Attributes

| 参数       | 说明              | 类型    | 可选值          | 默认值 |
| ---------- | ----------------- | ------- | --------------- | ------ |
| colors     | 数据列颜色配置    | array   | -               | ['#FFCD58','#ACE06F',<br/>'#7EE6F2','#6EBBFF',<br/>'#FF7348','#B792F7'] |
| series     | 数据列            | array   |                 |        |
| categories | 类别，对应x轴描述 | array   | -               | -      |
| legend     | 图例              | string  | circle, square  | circle |
| animation  | 动画效果          | boolean | -               | true   |
| width      | 宽，单位px           | number  | -               | 外层容器的宽 |
| height     | 高，单位px           | number  | -               | 外层容器的高 |
| type       | 折线类型          | number  | 1: 直线 2: 曲线 | 2     |
| tip-text   | 鼠标悬浮预留提示信息，独行显示  | string | -   | -       |
| show-tip   | 鼠标悬浮显示数据  | boolean | -               | true   |
| title      | 图表标题          | string  | -               | -      |
| comment    | 图表注释          | string  | -               | -      |
| show-point | 是否显示曲线坐标点 | boolean | - | false |
|  |  |  |  |  |

**series数据项属性**

| 参数 | 说明     | 类型   | 可选值 | 默认值 |
| ---- | -------- | ------ | ------ | ------ |
| name | 系列名称 | string | -      | -      |
| data | 系列数据 | array  | -      | -      |

### 事件Events

| 方法名      | 说明         | 参数               |
| ----------- | ------------ | ------------------ |
| legendClick | 图例点击事件 | 被点击的图例索引   |



## mo-chart-bar

### 属性 Attributes

| 参数       | 说明              | 类型    | 可选值         | 默认值 |
| ---------- | ----------------- | ------- | -------------- | ------ |
| colors     | 数据列颜色配置    | array   | -              | ['#FFCD58','#ACE06F',<br/>'#7EE6F2','#6EBBFF',<br/>'#FF7348','#B792F7'] |
| series     | 数据列            | array   |                |        |
| categories | 类别，对应x轴描述 | array   | -              | -      |
| legend     | 图例              | string  | circle, square | circle |
| animation  | 动画效果          | Boolean | -              | true   |
| width      | 宽，单位px           | number  | -              | 外层容器的宽 |
| height     | 高，单位px           | number  | -              | 外层容器的高 |
| tip-text   | 鼠标悬浮预留提示信息，独行显示  | string | -   | -       |
| show-tip   | 鼠标悬浮显示数据  | boolean | -               | true   |
| title      | 图表标题          | string  | -               | -      |
| comment    | 图表注释          | string  | -               | -      |
| show-value | 是否在柱条上显示数值 | boolean | - | false |

**series数据项属性**

| 参数 | 说明     | 类型   | 可选值 | 默认值 |
| ---- | -------- | ------ | ------ | ------ |
| name | 系列名称 | string | -      | -      |
| data | 系列数据 | array  | -      | -      |

### 事件Events

| 方法名      | 说明         | 参数                                                         |
| ----------- | ------------ | ------------------------------------------------------------ |
| click       | 柱子点击事件 | { <br />value: data.value, <br />legend: data.legend, <br />category: data.category<br />} |
| legendClick | 图例点击事件 | 被点击的图例索引                                             |



## mo-chart-pie

### 属性 Attributes

| 参数       | 说明           | 类型    | 可选值          | 默认值 |
| ---------- | -------------- | ------- | --------------- | ------ |
| colors     | 数据列颜色配置 | array   | -               | ['#FFCD58','#ACE06F',<br/>'#7EE6F2','#6EBBFF',<br/>'#FF7348','#B792F7'] |
| series     | 数据列         | array   |                 |        |
| categories | 类别           | array   | -               | -      |
| legend     | 图例           | string  | circle, square  | circle |
| animation  | 动画效果       | Boolean | -               | true   |
| width      | 宽，单位px        | number  | -               | 外层容器的宽 |
| height     | 高，单位px        | number  | -               | 外层容器的高 |
| tip-text   | 鼠标悬浮预留提示信息，独行显示  | string | -   | -       |
| show-tip   | 鼠标悬浮显示数据  | boolean | -               | true   |
| title      | 图表标题          | string  | -               | -      |
| comment    | 图表注释          | string  | -               | -      |



### 事件Events

| 方法名      | 说明         | 参数               |
| ----------- | ------------ | ------------------ |
| click       | 图形点击事件 | 被点击的数据和索引 |
| legendClick | 图例点击事件 | 被点击的图例       |



## mo-chart-percent 

### 属性 Attributes

| 参数        | 说明             | 类型   | 可选值          | 默认值 |
| ----------- | ---------------- | ------ | --------------- | ------ |
| type        | 类型             | number | circle、line | circle      |
| value       | 值               | number | -               | -      |
| colors      | 区间对应的颜色值 | array  | -               | ['#ACE06F'] |
| color-value | 颜色对应的值区间 | array  | -               | [1] |
| back-color | 与colors对应的底色值 | array  | -            | ['#F5F5F5'] |

### Slot

| name    | 说明           |
| ------- | -------------- |
| default | 默认显示百分比，在圆环内或者在直线上 |
| left | 进度条左侧内容，当type为`line`时才生效 |
| right | 进度条右侧内容，当type为`line`时才生效 |
| bottom | 进度条底部内容，当type为`line`时才生效 |



## mo-collapse 

### 属性 Attributes

| 参数            | 说明     | 类型    | 可选值 | 默认值 |
| --------------- | -------- | ------- | ------ | ------ |
| title           | 内容     | string  | -      | -      |
| text            | 内容     | string  | -      | -      |
| actived/v-model | 展开状态 | boolean | -      | false  |
| disabled        | 禁用     | boolean | -      | false  |

### Slot

| name    | 说明                   |
| ------- | ---------------------- |
| default | 内容区，优先级高于text |
| title   | 标题区                 |

### 方法 Methods

| 方法名 | 说明             | 参数          |
| ------ | ---------------- | ------------- |
| switch | 展开收起状态切换 | actived属性值 |


## mo-scroll 滚动条

| 参数          | 说明                           | 类型   | 可选值 | 默认值 |
| ------------- | ------------------------------ | ------ | ------ | ------ |
| height        | 最大高度，超出出现滚动条，必填 | number | -      | 外层容器高度 |
| width         | 最大宽度，超出出现滚动条，必填 | number | -      | 外层容器宽度 |
| to-x   | 滚动到X轴的具体位置，单位px | number | - | 0 |
| to-y   | 滚动到Y轴的具体位置，单位px | number | - | 0 |
| to-index | 滚动到第几个元素               | number | - | - |

> 不设置`height`和`width`时，要保证外层容器可以取得高或者宽
>
> `to-index `默认会选中当前slot的最外层元素的第`index`个子元素，优先级高于`scroll-to-y`

### method

| 方法                 | 说明                                               | 参数                                    |
| -------------------- | -------------------------------------------------- | --------------------------------------- |
| scrollTo(selector)   | 滚动到某个`dom`元素                                | `dom`的唯一选择器，可以精确定位当前元素 |
| update()             | 滚动条内部内容修改后，需要调用该方法手动更新滚动条 | -                                       |
| scrollToX(to)        | 水平滚动条滚动到to位置                             | 滚动到的位置，单位px                    |
| scrollToY(to)        | 垂直滚动条滚动到to位置                             | 滚动到的位置，单位px                    |
| scrollToIndex(index) | 滚动到第几个元素                                   | 元素索引，从1开始                       |

### slot

| name    | 说明                                   |
| ------- | -------------------------------------- |
| default | 内容区域，只能有一个最外层元素包裹内容 |



## mo-x-scroll 滚动条

| 参数     | 说明                           | 类型   | 可选值 | 默认值       |
| -------- | ------------------------------ | ------ | ------ | ------------ |
| height   | 最大高度，超出出现滚动条，必填 | number | -      | 外层容器高度 |
| width    | 最大宽度，超出出现滚动条，必填 | number | -      | 外层容器宽度 |
| to-x     | 滚动到X轴的具体位置，单位px    | number | -      | 0            |
| to-y     | 滚动到Y轴的具体位置，单位px    | number | -      | 0            |
| to-index | 滚动到第几个元素               | number | -      | -            |
| count    | 最多显示行数                   | number | -      | 5            |

> 不设置`height`和`width`时，要保证外层容器可以取得高或者宽
>
> `to-index `默认会选中当前slot的最外层元素的第`index`个子元素，优先级高于`scroll-to-y`

### slot

| name    | 说明                                   |
| ------- | -------------------------------------- |
| default | 内容区域，只能有一个最外层元素包裹内容 |
