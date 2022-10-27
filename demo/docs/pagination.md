## Pagination 分页

有大量内容展现以及数据量过多时可使用分页加载处理来分解数据。采用分页的形式分隔长列表，切换页码浏览数据，每次只加载一个页面，节省加载时间。

### 按需引用

```js
import { Base, Pagination } from "@reasy-team/mo-ui";

Vue.use(Pagination);
Vue.use(Base);
```

### 基本样式

标签页的常用样式。

::: demo

```html
<mo-pagination :total="100" :current-page="5"></mo-pagination>
```

:::

### 简单样式

简洁样式尺寸更小，样式更简洁

::: demo

```html
<mo-pagination :border="false" :total="100" :current-page="6"></mo-pagination>
```

:::

### 更多分页

在页数很多时使用。

::: demo

```html
<mo-row class="page-row">
  <mo-col :span="2" class="page-row__title page-row__border">基础</mo-col>
  <mo-col :span="22">
    <mo-pagination :total="100" :current-page="6"></mo-pagination>
  </mo-col>
</mo-row>
<mo-row class="page-row">
  <mo-col :span="2" class="page-row__title">简洁</mo-col>
  <mo-col :span="22">
    <mo-pagination :border="false" :total="100" :current-page="1"></mo-pagination>
  </mo-col>
</mo-row>
```

:::
### 附加功能

包括总数，跳转，改变三个附加功能，可根据需要自行选择所需功能。

::: demo

```html
<mo-row class="page-row">
  <mo-col :span="2" class="page-row__title page-row__border">基础</mo-col>
  <mo-col :span="22">
    <mo-pagination :total="100" is-show-total is-change-size is-input-page :current-page="8" ></mo-pagination>
  </mo-col>
</mo-row>
<mo-row class="page-row">
  <mo-col :span="2" class="page-row__title">简洁</mo-col>
  <mo-col :span="22">
    <mo-pagination :total="100" is-show-total is-change-size is-input-page :border="false" :current-page="8" :pageSizeOptions="[10,20,50,100]"></mo-pagination>
  </mo-col>
</mo-row>
```

:::

### 禁用

::: demo

```html
<mo-row class="page-row">
  <mo-col :span="2" class="page-row__title page-row__border">基础</mo-col>
  <mo-col :span="22">
    <mo-pagination :total="100" is-show-total is-change-size is-input-page :current-page="2" disabled></mo-pagination>
  </mo-col>
</mo-row>
<mo-row class="page-row">
  <mo-col :span="2" class="page-row__title">简洁</mo-col>
  <mo-col :span="22">
    <mo-pagination :total="100" is-show-total is-change-size is-show-total-page is-input-page :border="false" :current-page="8" disabled></mo-pagination>
  </mo-col>
</mo-row>
```

:::

高级用法

::: demo

```html
<mo-row class="page-row">
  <mo-col :span="3" class="page-row__title page-row__border">显示总页</mo-col>
  <mo-col :span="21">
    <mo-pagination :total="100" is-show-total-page :current-page="3"></mo-pagination>
 </mo-col>
</mo-row>

<mo-row class="page-row">
  <mo-col :span="3" class="page-row__title page-row__border">显示总条数</mo-col>
  <mo-col :span="21">
    <mo-pagination :total="100" is-show-total :current-page="4"></mo-pagination>
 </mo-col>
</mo-row>

<mo-row class="page-row">
  <mo-col :span="3" class="page-row__title">显示完整</mo-col>
  <mo-col :span="21">
    <mo-pagination :total="100" is-show-total is-show-total-page is-change-size is-input-page :border="false" :current-page="5" ></mo-pagination>
  </mo-col>
</mo-row>
```

:::

### mo-pagination Attributes

| 参数               | 说明                         | 类型     | 可选值                          | 默认值                    |
| ------------------ | ---------------------------- | -------- | ------------------------------- | ------------------------- |
| border             | 页码是否有边框               | boolean  | —                               | true                      |
| page-size          | 每页多少条                   | number   | —                               | 10                        |
| total              | 总条目数                     | number   | —                               | —                         |
| pager-count        | 页面按钮的数量，超过时会折叠 | number   | 大于等于 5 且小于等于 13 的奇数 | 9                         |
| current-page       | 当前页                       | number   | —                               | —                         |
| is-show-total      | 是否显示总条目数             | boolean  |                                 | false                     |
| is-show-total-page | 是否显示总页目数             | boolean  |                                 | false                     |
| is-change-size     | 是否支持修改每页条数         | boolean  | —                               | false                     |
| page-size-options  | 每页显示个数选择器的选项设置 | number[] | —                               | [10, 20, 30, 40, 50, 100] |
| is-input-page      | 是否支持手动输入页面         | boolean  | —                               | false                     |
| disabled           | 是否禁用                     | boolean  | —                               | false                     |
| prev-text          | 替代图标显示的上一页文字     | string   | —                               | —                         |
| next-text          | 替代图标显示的下一页文字     | string   | —                               | —                         |

### mo-pagination Events

| 事件名      | 说明                               | 参数     |
| ----------- | ---------------------------------- | -------- |
| change-size | 每页条数改变后触发                 | 每页条数 |
| change-page | 当前页改变时会触发                 | 当前页   |
| click-prev  | 用户点击上一页按钮改变当前页后触发 | 当前页   |
| click-next  | 用户点击下一页按钮改变当前页后触发 | 当前页   |
