## 复选框组

适应于支持选择多个选项

### 按需引用

```js
import { Base, Checkbox } from "@reasy-team/mo-ui";

Vue.use(Checkbox);
Vue.use(Base);
```

### 基本用法

::: demo

```html
<mo-checkbox-group v-model="checked" :options="options"></mo-checkbox-group>
<script>
  export default {
    data() {
      return {
        checked: [],
        options: [
          {
            label: "选项一",
            value: 1
          },
          {
            label: "选项二",
            value: 2
          },
          {
            label: "选项三",
            value: 3
          },
          {
            label: "选项四",
            value: 4
          }
        ]
      };
    }
  };
</script>
```

:::

如果选项和值一致时，options 选项可简化为具体的值

::: demo

```html
<mo-checkbox-group v-model="checked" :options="options"></mo-checkbox-group>
<script>
  export default {
    data() {
      return {
        checked: [],
        options: [1, 2, 3, 4]
      };
    }
  };
</script>
```

:::

### 支持全选

`is-select-all` 配置支持全选

::: demo

```html
<mo-checkbox-group
  is-select-all
  v-model="checked"
  :options="options"
></mo-checkbox-group>
<script>
  export default {
    data() {
      return {
        checked: [],
        options: [
          {
            label: "选项一",
            value: 1
          },
          {
            label: "选项二",
            value: 2
          },
          {
            label: "选项三",
            value: 3
          },
          {
            label: "选项四",
            value: 4
          }
        ]
      };
    }
  };
</script>
```

:::

自定义全选文字

`slect-text`配置全选的文字

::: demo

```html
<mo-checkbox-group
  is-select-all
  select-text="选中所有"
  v-model="checked"
  :options="options"
></mo-checkbox-group>
<script>
  export default {
    data() {
      return {
        checked: [],
        options: [
          {
            label: "选项一",
            value: 1
          },
          {
            label: "选项二",
            value: 2
          },
          {
            label: "选项三",
            value: 3
          },
          {
            label: "选项四",
            value: 4
          }
        ]
      };
    }
  };
</script>
```

:::

### 禁用

全部选项禁用

::: demo

```html
<mo-checkbox-group
  is-select-all
  disabled
  v-model="selected"
  :options="options"
></mo-checkbox-group>
<mo-checkbox-group
  is-select-all
  disabled
  v-model="checked"
  :options="options"
></mo-checkbox-group>
<script>
  export default {
    data() {
      return {
        checked: [],
        selected:[1, 3],
        options: [
          {
            label: "选项一",
            value: 1
          },
          {
            label: "选项二",
            value: 2
          },
          {
            label: "选项三",
            value: 3
          },
          {
            label: "选项四",
            value: 4
          }
        ]
      };
    }
  };
</script>
```

:::

部分选项禁用

::: demo

```html
<mo-checkbox-group v-model="checked" :options="options"></mo-checkbox-group>
<script>
  export default {
    data() {
      return {
        checked: [1,3],
        options: [
          {
            label: "选项一",
            value: 1
          },
          {
            label: "选项二",
            value: 2
          },
          {
            label: "选项三",
            value: 3,
            disabled: true
          },
          {
            label: "选项四",
            value: 4,
            disabled: true
          }
        ]
      };
    }
  };
</script>
```

:::

### 选项范围

支持`min`和`max`，配置选项的最少选择个数和最大选择个数

::: demo

```html
<mo-checkbox-group
  :min="2"
  :max="4"
  v-model="checked"
  :options="options"
></mo-checkbox-group>
<script>
  export default {
    data() {
      return {
        checked: [1, 2, 3],
        options: [
          {
            label: "选项一",
            value: 1
          },
          {
            label: "选项二",
            value: 2
          },
          {
            label: "选项三",
            value: 3
          },
          {
            label: "选项四",
            value: 4
          },
          {
            label: "选项五",
            value: 5
          },
          {
            label: "选项六",
            value: 6
          }
        ]
      };
    }
  };
</script>
```

:::

### mo-checkbox-group Attributes

| 参数               | 说明                                                                                                                              | 类型    | 可选值 | 默认值 |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------- | ------- | ------ | ------ |
| value / v-model    | 绑定值                                                                                                                            | Arrray  | —      | []     |
| name               | checkbox 的名称                                                                                                                   | string  | —      |        |
| disabled           | 是否禁用全部复选框，包括全选复选框                                                                                                | boolean | —      | false  |
| disabled-check-all | 是否仅禁用全选复选框。特殊情况下使用(一般配合options中的disabled，在多个checkbox组之间修改交互而使用)                             | boolean | —      | false  |
| options            | 选项数组对象[{label: 显示文字，<br /> value：值，disabled: 是否禁用此项}]                                                         | Array   | —      | []     |
| is-select-all      | 是否支持全选                                                                                                                      | boolean | —      | false  |
| select-text        | 全部选中的文字描述                                                                                                                | string  | —      | 全选   |
| min                | 最小支持选项                                                                                                                      | number  | —      | 0      |
| max                | 最大支持选项，最大为选项的个数                                                                                                    | number  | —      | —      |
| tooltip            | 文字提示，配置参考mo-tooltip指令。提示内容默认为options项中的label值。若配置了content值，那么所有的复选框的提示内容都为content值 | object  | —      | —      |

### options 选项

| 参数     | 说明                         | 类型                      | 可选值 | 默认值 |
| -------- | ---------------------------- | ------------------------- | ------ | ------ |
| label    | 选项框描述文字               | string                    |        |        |
| value    | 选项框值，各选项的值不能一样 | string / number / boolean |        |        |
| disabled | 该选项是否禁用               | boolean                   |        | false  |

## mo-checkbox-group Events

| 事件名 | 说明           | 参数       |
| ------ | -------------- | ---------- |
| change | 值改变时触发   | 改变后的值 |
| click  | 点击选项时触发 | 选项 value |
