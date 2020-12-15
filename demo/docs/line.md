## 折线图

表征分类型变量 vs 数值型变量的关系。

### 基础示例

折线图的默认配置示例。

:::demo 默认配置要保证组件的外层容器有对应的`高`和`宽`，否则无法渲染图表。
```html
<div style="height: 300px;">
  <mo-chart-line
    :series="series"
    :categories="categories"
  >
  </mo-chart-line>
</div>

<script>
export default {
  data(){
    return {
      series: [
        {
          name: "KPI",
          data: [180, 80, 38, 144, 89]
        },
        {
          name: "NPM",
          data: [150, 178.34, 50, 178, 78]
        },
        {
          name: "ICU",
          data: [99, 56, 76, 28, 140]
        },
        {
          name: "GDP",
          data: [28, 90, 96, 96, 145]
        },
        {
          name: "PDD",
          data: [62, 24, 156, 60, 89]
        },
        {
          name: "KFF",
          data: [80, 98, 134, 96, 78]
        }
      ],
      categories: ["Jim", "Lucy", "Lily", "Adele", "Novak"]
    }
  }
}
</script>
```
:::

### 对文本的自适应

根据文本进行位置自适应调整。

:::demo 
```html
<mo-row :gutter="24">
  <mo-col :span="10">
    <mo-chart-line
      :series="series"
      :height="300"
      :categories="categories"
    ></mo-chart-line>
  </mo-col>
  <mo-col :span="14">
    <mo-chart-line
      :series="series"
      :height="300"
      :categories="categories"
    ></mo-chart-line>
  </mo-col>
</mo-row>

<script>
export default {
  data(){
    return {
      series: [
        {
          name: "KPI",
          data: [180, 80, 38, 144, 89]
        },
        {
          name: "NPM",
          data: [150, 178.34, 50, 178, 78]
        },
        {
          name: "ICU",
          data: [99, 56, 76, 28, 140]
        },
        {
          name: "GDP",
          data: [28, 90, 96, 96, 145]
        },
        {
          name: "PDD",
          data: [62, 24, 156, 60, 89]
        },
        {
          name: "KFF",
          data: [80, 98, 134, 96, 78]
        }
      ],
      categories: ["Novak Djokovic", "maria sharapova", "Serena Williams", "Victória Azárenka", "Petra Kvitová"]
    }
  }
}
</script>
```
:::

### 折线类型
提供曲线和直线两种样式的折线图。同时可以设置从坐标原点进行折线图的绘制，或者从坐标原点后面开始绘制。

:::demo 通过`type`设置折线图的样式，其中`1`为直线，`2`为曲线，默认为曲线`2`。
```html
<mo-row :gutter="24">
  <mo-col :span="12">
    <mo-chart-line
      title="直线"
      :series="series"
      :height="300"
      :type="1"
      :categories="categories"
    ></mo-chart-line>
  </mo-col>
  <mo-col :span="12">
    <mo-chart-line
      title="曲线且从坐标原点开始绘制"
      :series="series"
      :height="300"
      :type="2"
      :isOffset="false"
      :categories="categories"
    ></mo-chart-line>
  </mo-col>
</mo-row>
      
<script>
export default {
  data(){
    return {
      series: [
        {
          name: "KPI",
          data: [180, 80, 38, 144, 89]
        },
        {
          name: "NPM",
          data: [150, 178.34, 50, 178, 78]
        },
        {
          name: "ICU",
          data: [99, 56, 76, 28, 140]
        },
        {
          name: "GDP",
          data: [28, 90, 96, 96, 145]
        },
        {
          name: "PDD",
          data: [62, 24, 156, 60, 89]
        },
        {
          name: "KFF",
          data: [80, 98, 134, 96, 78]
        }
      ],
      categories: ["Jim", "Lucy", "Lily", "Adele", "Novak"]
    }
  }
}
</script>
```
:::

### 附加信息设置
设置折线图的标题和备注信息。

:::demo 通过`title`属性设置标题，显示在左上角。通过`comment`属性设置备注，显示在右下角。
```html
<div>
  <mo-chart-line
    title="折线图标题"
    comment="注：数据为后台监测数据"
    :height="300"
    :series="series"
    :categories="categories"
  >
  </mo-chart-line>
</div>

<script>
export default {
  data(){
    return {
      series: [
        {
          name: "KPI",
          data: [180, 80, 38, 144, 89]
        },
        {
          name: "NPM",
          data: [150, 178.34, 50, 178, 78]
        },
        {
          name: "ICU",
          data: [99, 56, 76, 28, 140]
        },
        {
          name: "GDP",
          data: [28, 90, 96, 96, 145]
        },
        {
          name: "PDD",
          data: [62, 24, 156, 60, 89]
        },
        {
          name: "KFF",
          data: [80, 98, 134, 96, 78]
        }
      ],
      categories: ["Jim", "Lucy", "Lily", "Adele", "Novak"]
    }
  }
}
</script>
```
:::






### 其它设置

可以控制折线图上坐标点是否显示，是否有动画，鼠标悬浮是否显示详情等。

:::demo 通过`is-offset`来设置折线图的绘制起点。
```html
<mo-row :gutter="24">
  <mo-col :span="12">
    <mo-chart-line
      title="显示折线图坐标点"
      :series="series"
      :height="300"
      :show-point="true"
      :categories="categories"
    ></mo-chart-line>
  </mo-col>
  <mo-col :span="12">
    <mo-chart-line
      :series="series"
      :height="300"
      :categories="categories"
    ></mo-chart-line>
  </mo-col>
</mo-row>
      
<script>
export default {
  data(){
    return {
      series: [
        {
          name: "KPI",
          data: [180, 80, 38, 144, 89]
        },
        {
          name: "NPM",
          data: [150, 178.34, 50, 178, 78]
        },
        {
          name: "ICU",
          data: [99, 56, 76, 28, 140]
        },
        {
          name: "GDP",
          data: [28, 90, 96, 96, 145]
        },
        {
          name: "PDD",
          data: [62, 24, 156, 60, 89]
        },
        {
          name: "KFF",
          data: [80, 98, 134, 96, 78]
        }
      ],
      categories: ["Jim", "Lucy", "Lily", "Adele", "Novak"]
    }
  }
}
</script>
```
:::


### 属性 Attributes

| 参数       | 说明                           | 类型    | 可选值          | 默认值                                                       |
| ---------- | ----------------------------- | ------- | --------------- | ----------------- |
| colors     | 数据列颜色配置                 | array   | -  | ['#FFCD58','#ACE06F',<br/>'#7EE6F2','#6EBBFF',<br/>'#FF7348','#B792F7'] |
| series     | 数据列，必填                        | array   |                 |                                                              |
| categories | 类别，对应x轴描述，必填              | array   | -               | -                                                            |
| legend     | 图例                           | string  | circle, square  | circle         |
| animation  | 是否显示动画效果                       | boolean | -               | true           |
| width      | 宽，单位px                     | number  | -               | 外层容器的宽    |
| height     | 高，单位px                     | number  | -               | 外层容器的高    |
| type       | 折线类型                       | number  | 1: 直线 2: 曲线 | 2     |
| tip-text   | 鼠标悬浮预留提示信息，独行显示 | string  | -               | -     |
| show-tip   | 鼠标悬浮显示数据               | boolean | -               | true         |
| title      | 图表标题                       | string  | -               | -          |
| comment    | 图表注释                       | string  | -               | -           |
| is-offset  | 是否从坐标原点后面开始绘制      | boolean  | -               | true          |
| show-point | 是否显示曲线坐标点             | boolean | -               | false             |

**series数据项属性**

| 参数 | 说明     | 类型   | 可选值 | 默认值 |
| ---- | -------- | ------ | ------ | ------ |
| name | 系列名称 | string | -      | -      |
| data | 系列数据 | array  | -      | -      |

## 事件Events

| 方法名      | 说明         | 参数             |
| ----------- | ------------ | ---------------- |
| legendClick | 图例点击事件 | 被点击的图例索引 |

