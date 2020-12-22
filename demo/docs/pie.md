## 环形图

饼图以扇区的形式显示每一个数值相对于总数值的大小。

### 基础示例

饼图的默认配置示例。

:::demo 默认配置要保证组件的外层容器有对应的`高`和`宽`，否则无法渲染图表。

```html
<div style="height: 300px;">
  <mo-chart-pie :series="series" :categories="categories"> </mo-chart-pie>
</div>

<script>
  export default {
    data() {
      return {
        series: [86, 150, 80, 195, 120, 100],
        categories: ["Adele", "Novak", "LiNa", "serena", "Maria", "Victroria"]
      };
    }
  };
</script>
```

:::

### 对内容的自适应

根据文本进行位置自适应调整。

:::demo

```html
<mo-row :gutter="24">
  <mo-col :span="12">
    <mo-chart-pie
      :series="series"
      :height="300"
      legend="square"
      :categories="categories"
    ></mo-chart-pie>
  </mo-col>
  <mo-col :span="12">
    <mo-chart-pie
      :series="series1"
      :height="300"
      :categories="categories"
    ></mo-chart-pie>
  </mo-col>
</mo-row>

<script>
  export default {
    data() {
      return {
        series: [5, 15, 5, 27, 8, 5, 15, 55, 5, 15, 5, 5, 5, 5, 5, 18, 7, 8, 8, 53, 5, 13],
        series1: [15, 5, 9, 100, 7, 12, 5, 10, 15, 5, 25, 5, 15, 5, 15, 5, 150, 8, 18, 8, 15, 23],
        categories: [1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
      };
    }
  };
</script>
```

:::

### 动画

设置环形图的的显示动画的缓存函数名，也可以不设置任何动画。缓动函数名请参考：[缓动函数](https://easings.net/cn#)

:::demo 通过`animation`属性设置动画类型，默认为`easeOutCubic`，为空则不设置任何动画。

```html
<mo-row :gutter="24">
  <mo-col :span="12">
    <mo-chart-pie
      title="缓动函数: easeOutExpo"
      :series="series"
      animation="easeOutExpo"
      :height="300"
      :categories="categories"
    ></mo-chart-pie>
  </mo-col>
  <mo-col :span="12">
    <mo-chart-pie
      title="无动画"
      :series="series"
      :height="300"
      animation=""
      :categories="categories"
    ></mo-chart-pie>
  </mo-col>
</mo-row>

<script>
  export default {
    data() {
      return {
        series: [150, 178, 50, 178, 78, 45],
        categories: ["Jim", "Lucy", "Lily", "HanMeiMei", "LiLei"]
      };
    }
  };
</script>
```

:::

### 附加信息设置

设置环形图的标题和备注信息。

:::demo 通过`title`属性设置标题，显示在左上角。通过`comment`属性设置备注，显示在右下角。

```html
<div>
  <mo-chart-pie
    title="环形图标题"
    comment="注：数据为后台监测数据"
    :height="300"
    :series="series"
    :categories="categories"
  >
  </mo-chart-pie>
</div>

<script>
  export default {
    data() {
      return {
        series: [150, 178, 50, 178, 78, 45],
        categories: ["Jim", "Lucy", "Lily", "HanMeiMei", "LiLei"]
      };
    }
  };
</script>
```

:::

### 事件

定义与环形图的交互逻辑。

:::demo 通过`legendClick`事件进行切换显示图例交互， 参数为被点击的图例索引。通过`click`事件与柱条交互， 参数为柱条数据。

```html
<div>
  <mo-chart-pie
    :height="300"
    :series="series"
    :categories="categories"
    @click="click"
    @legendClick="legendClick"
  >
  </mo-chart-pie>
</div>

<script>
  export default {
    data() {
      return {
        series: [150, 178, 50, 178, 78, 45],
        categories: ["Jim", "Lucy", "Lily", "HanMeiMei", "LiLei"]
      };
    },
    methods: {
      legendClick(index) {
        alert(`点击[${index}]`);
      },
      click(arg) {
        alert(`类别[${arg.category}]，值[${arg.value}]`);
      }
    }
  };
</script>
```

:::

### 其它设置

可以控制环形图上数值是否显示，图例形状，鼠标悬浮是否显示详情等。

:::demo 通过`tip-text`来设置悬浮提示的预设文本，`legend`属性设置图例形状，`show-tip`属性设置是否显示悬浮提示信息。

```html
<mo-row :gutter="24">
  <mo-col :span="12">
    <mo-chart-pie
      title="添加预设文本，legend：circle"
      tip-text="tip预设文本"
      :series="series"
      :height="300"
      :show-value="true"
      :categories="categories"
    ></mo-chart-pie>
  </mo-col>
  <mo-col :span="12">
    <mo-chart-pie
      title="无悬浮提提示，legend：square"
      :series="series"
      legend="square"
      :height="300"
      :show-tip="false"
      :categories="categories"
    ></mo-chart-pie>
  </mo-col>
</mo-row>

<script>
  export default {
    data() {
      return {
        series: [150, 178, 50, 178, 78, 45],
        categories: ["Jim", "Lucy", "Lily", "HanMeiMei", "LiLei"]
      };
    }
  };
</script>
```

:::

### 属性 Attributes

| 参数       | 说明                           | 类型    | 可选值         | 默认值                                                                  |
| ---------- | ------------------------------ | ------- | -------------- | ----------------------------------------------------------------------- |
| colors     | 数据列颜色配置                 | array   | -              | ['#FFCD58','#ACE06F',<br/>'#7EE6F2','#6EBBFF',<br/>'#FF7348','#B792F7'] |
| series     | 数据列                         | array   |                |                                                                         |
| categories | 类别                           | array   | -              | -                                                                       |
| legend     | 图例                           | string  | circle, square | circle                                                                  |
| animation  | 动画效果，空表示不需要动画     | string  | -              | easeOutCubic                                                            |
| width      | 宽，单位 px                    | number  | -              | 外层容器的宽 |
| height     | 高，单位 px                    | number  | -              | 外层容器的高 |
| tip-text   | 鼠标悬浮预留提示信息，独行显示 | string  | -              | -                                                                       |
| show-tip   | 鼠标悬浮显示数据               | boolean | -              | true                                                                    |
| title      | 图表标题                       | string  | -              | -                                                                       |
| comment    | 图表注释                       | string  | -              | -                                                                       |

### 事件 Events

| 方法名      | 说明         | 参数               |
| ----------- | ------------ | ------------------ |
| click       | 图形点击事件 | { <br />value: data.value, <br />category: data.category<br />}  |
| legendClick | 图例点击事件 | 被点击的图例       |
