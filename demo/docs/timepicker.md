## 时间选择器

输入或选择时间的控件，支持时、分、秒。

### 按需引用

该组件依赖于`mo-scroll`组件。

```js
import { Base, Scroll, Timepicker, Input, Button, Layout } from "@reasy-team/mo-ui";

Vue.use(Scroll);
Vue.use(Timepicker);
Vue.use(Input);
Vue.use(Button);
Vue.use(Layout);
Vue.use(Base);
```

### 基本用法

::: demo

```html
<mo-timepicker v-model="time"></mo-timepicker>
<script>
  export default {
    data() {
      return {
        time: ""
      };
    }
  };
</script>
```

:::

### 禁用

::: demo

```html
<mo-timepicker disabled v-model="time"></mo-timepicker>
<script>
  export default {
    data() {
      return {
        time: "12:23"
      };
    }
  };
</script>
```

:::

### 支持秒钟

`format`中存在`ss`时，支持秒钟显示

::: demo

```html
<mo-timepicker format="hh:mm:ss" is-clear v-model="time"></mo-timepicker>
<script>
  export default {
    data() {
      return {
        time: "12:11:00"
      };
    }
  };
</script>
```

:::

### 支持 24 小时

`is-all-day`配置是否支持 24 小时显示

::: demo

```html
<mo-timepicker format="hh:mm:ss" is-all-day v-model="time"></mo-timepicker>
<script>
  export default {
    data() {
      return {
        time: "12:11:00"
      };
    }
  };
</script>
```
:::

### 配置间隔

`minute-interval`配置分钟间隔，`second-interval`配置秒钟间隔

::: demo

```html
<mo-timepicker
  :minute-interval="5"
  :second-interval="10"
  format="hh:mm:ss"
  is-clear
  v-model="time"
></mo-timepicker>
<script>
  export default {
    data() {
      return {
        time: "09:15:40"
      };
    }
  };
</script>
```

:::

### 自定义时间格式

`format`配置时间格式，`hh`表示小时，`mm`表示分钟，`ss`表示秒

**当配置 format 时，对应的`min`和`max`必须满足 format 格式**

::: demo

```html
<mo-timepicker v-model="time" format="hh%mm-ss"></mo-timepicker>
<script>
  export default {
    data() {
      return {
        time: "11%12-11"
      };
    }
  };
</script>
```

:::

### 可选时间区域

配置最大和最小的可选时间

`min`和`max`配置可选时间的区域

::: demo

```html
<mo-timepicker v-model="time" min="12:00" max="18:00"></mo-timepicker>
<script>
  export default {
    data() {
      return {
        time: "13:30"
      };
    }
  };
</script>
```
:::

### 支持时间范围

`is-range`支持时间范围配置

**`v-model`值必须为数组**

::: demo

```html
<mo-timepicker is-range v-model="time"></mo-timepicker>
<script>
  export default {
    data() {
      return {
        time: ["12:11", "23:23"]
      };
    }
  };
</script>
```

:::

`placeholder`和`end-placeholder`分别显示开始时间和结束时间的占位符

::: demo

```html
<mo-timepicker
  is-range
  placeholder="开始时间"
  end-placeholder="结束时间"
  v-model="time"
></mo-timepicker>
<script>
  export default {
    data() {
      return {
        time: []
      };
    }
  };
</script>
```

:::

### 支持跨天选择

`is-cross-day`配置是否支持 跨天选择，也就是不限定起始和结束时间的大小

::: demo

```html
<mo-timepicker format="hh:mm:ss" is-range is-cross-day v-model="time"></mo-timepicker>
<script>
  export default {
    data() {
      return {
        time: ["22:11:00", "12:11:00"]
      };
    }
  };
</script>
```
:::

### mo-timepicker Attributes

| 参数            | 说明                                                                             | 类型            | 可选值 | 默认值                                               |
| --------------- | -------------------------------------------------------------------------------- | --------------- | ------ | ---------------------------------------------------- |
| value / v-model | 绑定值                                                                           | string          | —      | —                                                    |
| name            | 时间框名称                                                                       | string          | —      | —                                                    |
| disabled        | 是否禁用                                                                         | boolean         | —      | false                                                |
| width           | 时间选择器宽度                                                                   | string / number | —      | —                                                    |
| is-clear        | 是否支持清除                                                                     | boolean         | —      | true                                                 |
| is-range        | 是否支持范围选择                                                                 | boolean         | —      | false                                                |
| is-cross-day           | 是否支持跨天选择                                                          |boolean          | —      | false                                                   |
| placeholder     | 占位内容，支持范围选择时为开始时间的占位符<br />不支持范围时为时间选择框的占位符 | string          | —      | `is-range`为真时，默认是开始时间，其他默认是选择时间 |
| end-placeholder | 支持范围选择时结束时间的占位符                                                   | string          |        | 结束时间                                             |
| format          | 时间格式，支持 hh、mm、ss 与任意字符组合，小时 hh 为必填项                       | string          | —      | hh:mm                                                |
| min             | 最小时间                                                                         | string          | —      | —                                                    |
| max             | 最大时间                                                                         | string          | —      | —                                                    |
| minute-interval | 分钟间隔                                                                         | number          | —      | 1                                                    |
| second-interval | 秒间隔                                                                           | number          | —      | 1                                                    |
| is-all-day      | 是否支持 24 小时显示                                                             | Boolean         |        | false                                                |

### mo-timepicker Events

| 事件名 | 说明         | 参数       |
| ------ | ------------ | ---------- |
| change | 值改变时执行 | 改变后的值 |
