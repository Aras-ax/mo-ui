## 百分比图

用于表示在一个内容中占该内容整体的百分之多少。

### 基础示例

柱状图的默认配置示例。

:::demo 默认配置要保证组件的外层容器有对应的`高`和`宽`，否则无法渲染图表。

```html
<div style="height: 200px;">
  <mo-chart-percent
    :value=".7"
  ></mo-chart-percent>
</div>
```

:::




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
