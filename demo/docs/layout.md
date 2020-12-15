## 栅格布局

合理的栅格系统可以通过调整布局网格以满足产品和各种设备尺寸的需求。在`8`点网格法中提供多种数量栅格来适配不同宽度屏幕的分辨率，越大的屏幕尺寸适合更大的间距，越多的内容适合更多数量的栅格。将区域分成 24 块栅格，页面中的列会随着页面尺寸的变化而变化。

### 栅格列的说明
响应式设计可以响应的前两点：
- 页面布局具有规律性
- 元素宽高可用百分比代替固定数值

:::demo 通过 row 和 col 组件，并通过 col 组件的 `span` 属性我们就可以自由地组合布局。
```html
<mo-row class="demo-row">
  <mo-col>
    <div class="demo-col">24</div>
  </mo-col>
</mo-row>
<mo-row class="demo-row" :gutter="4">
  <mo-col :span="12">
    <div class="demo-col">12</div>
  </mo-col>
  <mo-col :span="12">
    <div class="demo-col">12</div>
  </mo-col>
</mo-row>
<mo-row class="demo-row" :gutter="4">
  <mo-col :span="8">
    <div class="demo-col">8</div>
  </mo-col>
  <mo-col :span="8">
    <div class="demo-col">8</div>
  </mo-col>
  <mo-col :span="4">
    <div class="demo-col">4</div>
  </mo-col>
  <mo-col :span="4">
    <div class="demo-col">4</div>
  </mo-col>
</mo-row>
<mo-row class="demo-row" :gutter="4">
  <mo-col :span="6">
    <div class="demo-col">6</div>
  </mo-col>
  <mo-col :span="6">
    <div class="demo-col">6</div>
  </mo-col>
  <mo-col :span="6">
    <div class="demo-col">6</div>
  </mo-col>
  <mo-col :span="3">
    <div class="demo-col">3</div>
  </mo-col>
  <mo-col :span="3">
    <div class="demo-col">3</div>
  </mo-col>
</mo-row>
<mo-row class="demo-row" :gutter="4">
  <mo-col :span="4">
    <div class="demo-col">4</div>
  </mo-col>
  <mo-col :span="4">
    <div class="demo-col">4</div>
  </mo-col>
  <mo-col :span="4">
    <div class="demo-col">4</div>
  </mo-col>
  <mo-col :span="2">
    <div class="demo-col">2</div>
  </mo-col>
  <mo-col :span="1">
    <div class="demo-col">1</div>
  </mo-col>
  <mo-col :span="1">
    <div class="demo-col">1</div>
  </mo-col>
  <mo-col :span="4">
    <div class="demo-col">4</div>
  </mo-col>
  <mo-col :span="4">
    <div class="demo-col">4</div>
  </mo-col>
</mo-row>

<style>
.border {
  border: 1px solid #99a9bf;
}

.demo-row {
  border-radius: 4px;
  margin: 20px 0;
}

.demo-col {
  background-color: #99a9bf;
  border-radius: 4px;
  height: 34px;
  line-height: 34px;
  color: #fff;
  text-align: center;
}

.demo-col-1 {
  height: 400px;
}
</style>
```
:::

### 设置列间隔

:::demo 通过 row 组件的 `gutter` 属性我们设置每个栅格列之间的间距。
```html
<mo-row class="demo-row" :gutter="24">
  <mo-col :span="8">
    <div class="demo-col">间距24px</div>
  </mo-col>
  <mo-col :span="8">
    <div class="demo-col">间距24px</div>
  </mo-col>
  <mo-col :span="8">
    <div class="demo-col">间距24px</div>
  </mo-col>
</mo-row>
<mo-row class="demo-row" :gutter="72">
  <mo-col :span="12">
    <div class="demo-col">间距72px</div>
  </mo-col>
  <mo-col :span="12">
    <div class="demo-col">间距72px</div>
  </mo-col>
</mo-row>
```
:::


### 设置列偏移

:::demo 通过 col 组件的 `offset` 属性我们设置每个栅格列之间间隔的列数。
```html
<mo-row class="demo-row" :gutter="24">
  <mo-col :span="8">
    <div class="demo-col"></div>
  </mo-col>
  <mo-col :offset="8" :span="8">
    <div class="demo-col"></div>
  </mo-col>
</mo-row>
<mo-row class="demo-row" :gutter="72">
  <mo-col :offset="4" :span="8">
    <div class="demo-col"></div>
  </mo-col>
  <mo-col :span="8">
    <div class="demo-col"></div>
  </mo-col>
</mo-row>
```
:::


### mo-row Attributes

| 参数   | 说明              | 类型   | 可选值 | 默认值 |
| ------ | ----------------- | ------ | ------ | ------ |
| gutter | 列间隔，单位px    | number | -      | 0      |
| tag    | 自定义row元素标签 | string |        | div    |

### mo-col Attributes

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
