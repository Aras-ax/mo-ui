## 下拉菜单

当页面操作命令过多时，用于收纳操作元素，将动作或菜单折叠到下拉菜单中。

### 按需引用

该组件依赖于`mo-scroll`组件。

```js
import { Base, Scroll, Dropdown } from "@reasy-team/mo-ui";

Vue.use(Scroll);
Vue.use(Dropdown);
Vue.use(Base);
```

### 基础示例

点击下拉菜单按钮，展开更多操作。

:::demo 通过`type`设置下拉菜单类型，默认为`link`。

```html
<mo-dropdown
  ref="dropdown"
  class="dropdown-item"
  label="普通样式"
  :options="options"
  @visible-change="visibleChange"
  @click-item="clickItem"
></mo-dropdown>

<mo-dropdown
  ref="dropdown1"
  class="dropdown-item"
  label="按钮样式"
  type="button"
  :options="options1"
  @visible-change="visibleChange"
  @click-item="clickItem"
></mo-dropdown>

<script>
// 生成假数据
const getOptions = (num, disabledIdxs = [], dividedIdxs = [], hasIcon) => {
  return Array.from(Array(num)).map((item, idx) => {
    const obj = {
      text: `这是选项${idx + 1}`,
      value: `value${idx}`
    };

    if (hasIcon) {
      obj.icon = "v-icon-delete";
    }

    if (disabledIdxs.includes(idx)) {
      obj.disabled = true;
    }

    if (dividedIdxs.includes(idx)) {
      obj.devided = true;
    }

    return obj;
  });
};

export default {
  data() {
    return {
      options: getOptions(7),
      options1: getOptions(7)
    };
  },
  methods: {
    visibleChange(visible) {
      console.log(`current visible value: ${visible}`);
    },
    clickItem(cfg, idx) {
      console.log(`cfg of click-item: `);
      console.log(cfg);
      console.log(`idx of click-item: ${idx}`);
    }
  }
};
</script>
```

:::



### 触发方式

可以配置`click`激活或者`hover`激活。

:::demo 通过`trigger`设置下拉菜单类型，默认为`click`。

```html
<mo-dropdown
  ref="dropdown"
  class="dropdown-item"
  label="点击显示"
  :options="options"
  @visible-change="visibleChange"
  @click-item="clickItem"
></mo-dropdown>

<mo-dropdown
  ref="dropdown1"
  class="dropdown-item"
  label="移入显示"
  trigger="hover"
  :options="options1"
  @visible-change="visibleChange"
  @click-item="clickItem"
></mo-dropdown>

<script>
// 生成假数据
const getOptions = (num, disabledIdxs = [], dividedIdxs = [], hasIcon) => {
  return Array.from(Array(num)).map((item, idx) => {
    const obj = {
      text: `这是选项${idx + 1}`,
      value: `value${idx}`
    };

    if (hasIcon) {
      obj.icon = "v-icon-delete";
    }

    if (disabledIdxs.includes(idx)) {
      obj.disabled = true;
    }

    if (dividedIdxs.includes(idx)) {
      obj.devided = true;
    }

    return obj;
  });
};

export default {
  data() {
    return {
      options: getOptions(7),
      options1: getOptions(7)
    };
  },
  methods: {
    visibleChange(visible) {
      console.log(`current visible value: ${visible}`);
    },
    clickItem(cfg, idx) {
      console.log(`cfg of click-item: `);
      console.log(cfg);
      console.log(`idx of click-item: ${idx}`);
    }
  }
};
</script>
```

:::


### 菜单隐藏方式

:::demo 通过`hide-after-selected`属性来配置，默认值为`true`。

```html
<mo-dropdown
  ref="dropdown"
  class="dropdown-item"
  label="选后关闭"
  :options="options"
  @visible-change="visibleChange"
  @click-item="clickItem"
></mo-dropdown>

<mo-dropdown
  ref="dropdown1"
  class="dropdown-item"
  label="选后不关闭"
  :hide-after-selected="false"
  :options="options1"
  @visible-change="visibleChange"
  @click-item="clickItem"
></mo-dropdown>

<script>
// 生成假数据
const getOptions = (num, disabledIdxs = [], dividedIdxs = [], hasIcon) => {
  return Array.from(Array(num)).map((item, idx) => {
    const obj = {
      text: `这是选项${idx + 1}`,
      value: `value${idx}`
    };

    if (hasIcon) {
      obj.icon = "v-icon-delete";
    }

    if (disabledIdxs.includes(idx)) {
      obj.disabled = true;
    }

    if (dividedIdxs.includes(idx)) {
      obj.devided = true;
    }

    return obj;
  });
};

export default {
  data() {
    return {
      options: getOptions(7),
      options1: getOptions(7)
    };
  },
  methods: {
    visibleChange(visible) {
      console.log(`current visible value: ${visible}`);
    },
    clickItem(cfg, idx) {
      console.log(`cfg of click-item: `);
      console.log(cfg);
      console.log(`idx of click-item: ${idx}`);
    }
  }
};
</script>
```

:::



### 按钮禁用状态

:::demo 通过`disabled`属性来配置，默认值为`false`。

```html
<mo-dropdown
  ref="dropdown"
  class="dropdown-item"
  label="普通样式"
  :options="options"
  :disabled="true"
  @visible-change="visibleChange"
  @click-item="clickItem"
></mo-dropdown>

<mo-dropdown
  ref="dropdown1"
  class="dropdown-item"
  label="按钮样式"
  type="button"
  :disabled="true"
  :options="options1"
  @visible-change="visibleChange"
  @click-item="clickItem"
></mo-dropdown>

<script>
// 生成假数据
const getOptions = (num, disabledIdxs = [], dividedIdxs = [], hasIcon) => {
  return Array.from(Array(num)).map((item, idx) => {
    const obj = {
      text: `这是选项${idx + 1}`,
      value: `value${idx}`
    };

    if (hasIcon) {
      obj.icon = "v-icon-delete";
    }

    if (disabledIdxs.includes(idx)) {
      obj.disabled = true;
    }

    if (dividedIdxs.includes(idx)) {
      obj.devided = true;
    }

    return obj;
  });
};

export default {
  data() {
    return {
      options: getOptions(7),
      options1: getOptions(7)
    };
  },
  methods: {
    visibleChange(visible) {
      console.log(`current visible value: ${visible}`);
    },
    clickItem(cfg, idx) {
      console.log(`cfg of click-item: `);
      console.log(cfg);
      console.log(`idx of click-item: ${idx}`);
    }
  }
};
</script>
```

:::


### 其他配置

:::demo

```html
<mo-dropdown
  ref="dropdown"
  class="dropdown-item"
  label="带有图标"
  :options="options"
  @visible-change="visibleChange"
  @click-item="clickItem"
></mo-dropdown>

<mo-dropdown
  ref="dropdown1"
  class="dropdown-item"
  label="其他配置"
  :options="options1"
  @visible-change="visibleChange"
  @click-item="clickItem"
></mo-dropdown>

<script>
// 生成假数据
const getOptions = (num, disabledIdxs = [], dividedIdxs = [], hasIcon) => {
  return Array.from(Array(num)).map((item, idx) => {
    const obj = {
      text: `这是选项${idx + 1}`,
      value: `value${idx}`
    };

    if (hasIcon) {
      obj.icon = "v-icon-delete";
    }

    if (disabledIdxs.includes(idx)) {
      obj.disabled = true;
    }

    if (dividedIdxs.includes(idx)) {
      obj.devided = true;
    }

    return obj;
  });
};

export default {
  data() {
    return {
      options: getOptions(7, [], [], true),
      options1: getOptions(7, [2, 5], [3, 4], true)
    };
  },
  methods: {
    visibleChange(visible) {
      console.log(`current visible value: ${visible}`);
    },
    clickItem(cfg, idx) {
      console.log(`cfg of click-item: `);
      console.log(cfg);
      console.log(`idx of click-item: ${idx}`);
    }
  }
};
</script>
```

:::




### 属性 Attributes

| 参数                   | 说明                                                         | 类型           | 可选值      | 默认值   |
| ---------------------- | ------------------------------------------------------------ | -------------- | ----------- | -------- |
| type                   | 下拉菜单类型                                                 | string         | link/button | link     |
| label                  | 下拉菜单标签名称                                             | string         | -           | 下拉菜单 |
| disabled               | 菜单是否禁用                                                 | boolean        | -           | false    |
| trigger                | 触发下拉的行为                                               | string         | hover/click | click    |
| hide-after-selected    | 选择完成后隐藏下拉选项                                       | boolean        | -           | true     |
| display-options-number | 设置可显示选项的数量，如options.length大于该值，则显示滚动条 | number         | -           | 4        |
| options                | 菜单项配置<br />                                             | Array\<object> | -           | -        |
| panel-class                | 下拉菜单项容器的类名                                             | String | -           | -        |-        |


### Options Attributes

| 参数     | 说明                     | 类型                 | 可选值 | 默认值 |
| -------- | ------------------------ | -------------------- | ------ | ------ |
| text     | 显示文本                 | string/number/object | -      | -      |
| value    | 值                       | string/number/object | -      | -      |
| disabled | 禁用                     | boolean              | -      | false  |
| divided  | 显示分割线               | boolean              | -      | false  |
| icon     | 图标类名，不配置则不显示 | string               | -      | -      |


### Events

| 事件名称       | 说明                   | 参数                               |
| -------------- | ---------------------- | ---------------------------------- |
| visible-change | 菜单显示状态改变时触发 | 显示为true，隐藏为false            |
| click-item     | 点击子菜单时触发       | 当前子菜单的值string/number/object |