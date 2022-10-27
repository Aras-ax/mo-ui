## 滑块

滑动型输入器，在范围内滑动选择数据。

### 按需引用

```js
// 当显示输入时需要同时引入Input和Button组件
import { Base, Input, Button, Slider } from "@reasy-team/mo-ui";

Vue.use(Slider);
Vue.use(Button);
Vue.use(Input);
Vue.use(Base);
```

### 基本用法

::: demo

```html
<mo-slider v-model="slider"></mo-slider>
<script>
  export default {
    data() {
      return {
        slider: 12
      };
    }
  };
</script>
```

:::

### 自定义范围

::: demo

```html
<mo-slider :min="10" :max="15" v-model="slider"></mo-slider>
<script>
  export default {
    data() {
      return {
        slider: 12
      };
    }
  };
</script>
```

:::

显示范围

::: demo

```html
<mo-slider show-range :min="10" :max="15" v-model="slider"></mo-slider>
<script>
  export default {
    data() {
      return {
        slider: 12
      };
    }
  };
</script>
```

:::

### 显示输入框

::: demo

```html
<mo-slider show-input :min="10" :max="15" v-model="slider"></mo-slider>
<script>
  export default {
    data() {
      return {
        slider: 12
      };
    }
  };
</script>
```

:::

显示输入框控制器

::: demo

```html
<mo-slider
  show-input
  show-input-controls
  :min="10"
  :max="15"
  v-model="slider"
></mo-slider>
<script>
  export default {
    data() {
      return {
        slider: 12
      };
    }
  };
</script>
```

:::

### 精度和步长

::: demo

```html
<mo-slider
  :step="0.1"
  :precision="2"
  show-input
  show-input-controls
  :min="0"
  :max="1"
  v-model="slider"
></mo-slider>
<script>
  export default {
    data() {
      return {
        slider: 0.52
      };
    }
  };
</script>
```

:::

### Tooltip

::: demo

```html
<mo-slider show-tooltip v-model="slider"></mo-slider>
<script>
  export default {
    data() {
      return {
        slider: 12
      };
    }
  };
</script>
```

:::

格式化 toolTip 显示

::: demo

```html
<mo-slider show-tooltip :format="format" v-model="slider"></mo-slider>
<script>
  export default {
    data() {
      return {
        slider: 12
      };
    },
    methods: {
      format(value) {
        return value + "KB/s";
      }
    }
  };
</script>
```

:::

### 禁用

::: demo

```html
<mo-slider
  :step="0.1"
  disabled
  :precision="2"
  show-input
  show-input-controls
  :min="0"
  :max="1"
  v-model="slider"
></mo-slider>
<script>
  export default {
    data() {
      return {
        slider: 0.52
      };
    }
  };
</script>
```

:::

### mo-slider Attributes

| 参数                | 说明                                              | 类型     | 可选值    | 默认值 |
| ------------------- | ------------------------------------------------- | -------- | --------- | ------ |
| v-model             | 绑定值                                            | number   | —         | —      |
| name                | 滑动条 name                                       | string   |           |        |
| min                 | 最小值                                            | number   | —         | 0      |
| max                 | 最大值                                            | number   | —         | 100    |
| disabled            | 是否禁用                                          | boolean  | —         | false  |
| step                | 步长                                              | number   | —         | 1      |
| size                | 输入框大小                                        | string   | S / M / L | M      |
| precision           | 精度，小于步长精度时取步长精度                    | Number   |           |        |
| show-range          | 是否显示范围提示文字                              | boolean  |           | false  |
| show-input          | 是否显示输入框                                    | boolean  | —         | false  |
| show-input-controls | 输入框是否显示加减                                | boolean  |           | false  |
| show-tooltip        | 是否显示 tooltip                                  | boolean  | —         | true   |
| format              | tooltip 显示格式化, function(value){return value} | Function | —         | —      |

### mo-slider Events

| 事件名 | 说明         | 参数       |
| ------ | ------------ | ---------- |
| change | 值改变时执行 | 改变后的值 |
