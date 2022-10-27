## 单选框

用于一组可选项单项选择。

### 按需引用

```js
import { Base, Radio } from "@reasy-team/mo-ui";

Vue.use(Radio);
Vue.use(Base);
```

### 基础用法

:::demo

```html
<mo-radio v-model="radio1" :options="options"></mo-radio>
<script>
  export default {
    data() {
      return {
        radio1: 1,
        options: [1, 2, 3, 4]
      };
    }
  };
</script>
```

:::

### 禁用

:::demo

```html
<mo-radio v-model="radio1" disabled :options="options1"></mo-radio>
<div>
  <mo-radio v-model="radio2" :options="options2"></mo-radio>
</div>
<script>
  export default {
    data() {
      return {
        radio1: 1,
        options1: [1, 2, 3, 4],
        radio2: 1,
        options2: [
          {
            label: "选项1",
            value: 1
          },
          {
            label: "选项2",
            value: 2
          },
          {
            label: "选项3",
            value: 3,
            disabled: true
          },
          {
            label: "选项4",
            value: 4
          }
        ]
      };
    }
  };
</script>
```

:::

### mo-radio Attributes

| 参数          | 说明                                            | 类型               | 可选值 | 默认值                   |
| ------------- | ----------------------------------------------- | ------------------ | ------ | ------------------------ |
| v-model       | 绑定值                                          | string             | —      | —                        |
| name          | radio 的名称                                    | string             | —      | —                        |
| options       | 下拉选项数组对象                                | Array              | —      | []                       |
| disabled      | 是否禁用                                        | boolean            |        | false                    |
| before-change | 切换选中前的钩子，返回 false 时，不会修改选中项 | function(value) {} | —      | function() {return true} |

**options 选项支持字符串、数字、boolean 或者对象，不为对象时显示的选项文字和值一致**

#### options 属性

| 参数     | 说明         | 类型                      | 可选值 | 默认值 |
| -------- | ------------ | ------------------------- | ------ | ------ |
| label    | 选项文字     | string                    | —      | —      |
| value    | 选项值       | string / boolean / number | —      | —      |
| disabled | 选项是否禁用 | boolean                   | —      | false  |

### mo-radio Events

| 事件名 | 说明           | 参数       |
| ------ | -------------- | ---------- |
| change | 值改变时触发   | 改变后的值 |
| click  | 点击选项时触发 | 选项 value |
