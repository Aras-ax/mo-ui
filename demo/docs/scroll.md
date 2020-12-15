## 滚动条

自定义滚动条，可以使所有浏览器样式统一。与 DOM 出现滚动条的表现基本保持一致。

### 基础示例

:::demo

```html
<mo-scroll :height="200">
  <h3>
    《目送》-龙应台
  </h3>
  <p>
    华安上小学第一天，我和他手牵着手，穿过好几条街，到维多利亚小学。九月初，家家户户院子里的苹果和梨树都缀满了拳头大小的果子，枝丫因为负重而沉沉下垂，越出了树篱，钩到过路行人的头发。
  </p>
  <p>
    很多很多的孩子，在操场上等候上课的第一声铃响。小小的手，圈在爸爸的、妈妈的手心里，怯怯的眼神，打量着周遭。他们是幼儿园的毕业生，但是他们还不知道一个定律：一件事情的毕业，永远是另一件事情的开启。
  </p>
  <p>
    铃声一响，顿时人影错杂，奔往不同方向，但是在那么多穿梭纷乱的人群里，我无比清楚地看着自己孩子的背影──就好像在一百个婴儿同时哭声大作时，你仍旧能够准确听出自己那一个的位置。华安背着一个五颜六色的书包往前走，但是他不断地回头；好像穿越一条无边无际的时空长河，他的视线和我凝望的眼光隔空交会。
  </p>
  <p>
    我看着他瘦小的背影消失在门里。
  </p>
  <p>
    十六岁，他到美国做交换生一年。我送他到机场。告别时，照例拥抱，我的头只能贴到他的胸口，好像抱住了长颈鹿的脚。他很明显地在勉强忍受母亲的深情。
  </p>
  <p>
    他在长长的行列里，等候护照检验；我就站在外面，用眼睛跟着他的背影一寸一寸往前挪。终于轮到他，在海关窗口停留片刻，然后拿回护照，闪入一扇门，倏忽不见。
  </p>
  <p>
    我一直在等候，等候他消失前的回头一瞥。但是他没有，一次都没有。
  </p>
  <p>
    现在他二十一岁，上的大学，正好是我教课的大学。但即使是同路，他也不愿搭我的车。即使同车，他戴上耳机──只有一个人能听的音乐，是一扇紧闭的门。有时他在对街等候公交车，我从高楼的窗口往下看：一个高高瘦瘦的青年，眼睛望向灰色的海；我只能想象，他的内在世界和我的一样波涛深邃，但是，我进不去。一会儿公交车来了，挡住了他的身影。车子开走，一条空荡荡的街，只立着一只邮筒。
  </p>
  <p>
    我慢慢地、慢慢地了解到，所谓父女母子一场，只不过意味着，你和他的缘分就是今生今世不断地在目送他的背影渐行渐远。你站立在小路的这一端，看着他逐渐消失在小路转弯的地方，而且，他用背影默默告诉你：不必追。
  </p>
  <p>
    我慢慢地、慢慢地意识到，我的落寞，仿佛和另一个背影有关。
  </p>
  <p>
    博士学位读完之后，我回台湾教书。到大学报到第一天，父亲用他那辆运送饲料的廉价小货车长途送我。到了我才发觉，他没开到大学正门口，而是停在侧门的窄巷边。卸下行李之后，他爬回车内，准备回去，明明启动了引擎，却又摇下车窗，头伸出来说：“女儿，爸爸觉得很对不起你，这种车子实在不是送大学教授的车子。”
  </p>
  <p>
    我看着他的小货车小心地倒车，然后“噗噗”驶出巷口，留下一团黑烟。直到车子转弯看不见了，我还站在那里，一口皮箱旁。
  </p>
  <p>
    每个礼拜到医院去看他，是十几年后的时光了。推着他的轮椅散步，他的头低垂到胸口。有一次，发现排泄物淋满了他的裤腿，我蹲下来用自己的手帕帮他擦拭，裙子也沾上了粪便，但是我必须就这样赶回台北上班。护士接过他的轮椅，我拎起皮包，看着轮椅的背影，在自动玻璃门前稍停，然后没入门后。
  </p>
  <p>
    我总是在暮色沉沉中奔向机场。
  </p>
  <p>
    火葬场的炉门前，棺木是一只巨大而沉重的抽屉，缓缓往前滑行。没有想到可以站得那么近，距离炉门也不过五米。雨丝被风吹斜，飘进长廊内。我掠开雨湿了前额的头发，深深、深深地凝望，希望记得这最后一次的目送。
  </p>
  <p>
    我慢慢地、慢慢地了解到，所谓父女母子一场，只不过意味着，你和他的缘分就是今生今世不断地在目送他的背影渐行渐远。你站在小路的这一端，看着他逐渐消失在小路转弯的地方，而且，他用背影默默告诉你：不必追。
  </p>
</mo-scroll>
```

:::

### 高度设置

通过给属性`height`设置不同的值来适配不同的使用场景。高度值可以为`数值`、`inherit`、`auto`三者中的任意一种，默认值为`inherit`，其中：

- 数值：具体的高度数值(单位为`px`)，内容超给定的高度就会出现滚动条。
- inherit：继承自父元素的高度，内容超出父元素的高度就会出现滚动条，前提是父元素有设置高度，如果父元素是自适应的话，很可能不会出现滚动条。
- auto：自动撑开，垂直方向上一直不会出现滚动条。

#### inherit

:::demo

```html
<div style="height: 200px;">
  <mo-scroll>
    <h3>《目送》-龙应台</h3>
    <p>
      我慢慢地、慢慢地意识到，我的落寞，仿佛和另一个背影有关。
      博士学位读完之后，我回台湾教书。到大学报到第一天，父亲用他那辆运送饲料的廉价小货车长途送我。到了我才发觉，他没开到大学正门口，而是停在侧门的窄巷边。卸下行李之后，他爬回车内，准备回去，明明启动了引擎，却又摇下车窗，头伸出来说：“女儿，爸爸觉得很对不起你，这种车子实在不是送大学教授的车子。”
      我看着他的小货车小心地倒车，然后“噗噗”驶出巷口，留下一团黑烟。直到车子转弯看不见了，我还站在那里，一口皮箱旁。
      每个礼拜到医院去看他，是十几年后的时光了。推着他的轮椅散步，他的头低垂到胸口。有一次，发现排泄物淋满了他的裤腿，我蹲下来用自己的手帕帮他擦拭，裙子也沾上了粪便，但是我必须就这样赶回台北上班。护士接过他的轮椅，我拎起皮包，看着轮椅的背影，在自动玻璃门前稍停，然后没入门后。
      我总是在暮色沉沉中奔向机场。
      火葬场的炉门前，棺木是一只巨大而沉重的抽屉，缓缓往前滑行。没有想到可以站得那么近，距离炉门也不过五米。雨丝被风吹斜，飘进长廊内。我掠开雨湿了前额的头发，深深、深深地凝望，希望记得这最后一次的目送。
      我慢慢地、慢慢地了解到，所谓父女母子一场，只不过意味着，你和他的缘分就是今生今世不断地在目送他的背影渐行渐远。你站在小路的这一端，看着他逐渐消失在小路转弯的地方，而且，他用背影默默告诉你：不必追。
    </p>
  </mo-scroll>
</div>
```

:::

#### auto

:::demo

```html
<mo-scroll height="auto">
  <h3>《目送》-龙应台</h3>
  <p>
    我慢慢地、慢慢地意识到，我的落寞，仿佛和另一个背影有关。
    博士学位读完之后，我回台湾教书。到大学报到第一天，父亲用他那辆运送饲料的廉价小货车长途送我。到了我才发觉，他没开到大学正门口，而是停在侧门的窄巷边。卸下行李之后，他爬回车内，准备回去，明明启动了引擎，却又摇下车窗，头伸出来说：“女儿，爸爸觉得很对不起你，这种车子实在不是送大学教授的车子。”
    我看着他的小货车小心地倒车，然后“噗噗”驶出巷口，留下一团黑烟。直到车子转弯看不见了，我还站在那里，一口皮箱旁。
    每个礼拜到医院去看他，是十几年后的时光了。推着他的轮椅散步，他的头低垂到胸口。有一次，发现排泄物淋满了他的裤腿，我蹲下来用自己的手帕帮他擦拭，裙子也沾上了粪便，但是我必须就这样赶回台北上班。护士接过他的轮椅，我拎起皮包，看着轮椅的背影，在自动玻璃门前稍停，然后没入门后。
    我总是在暮色沉沉中奔向机场。
    火葬场的炉门前，棺木是一只巨大而沉重的抽屉，缓缓往前滑行。没有想到可以站得那么近，距离炉门也不过五米。雨丝被风吹斜，飘进长廊内。我掠开雨湿了前额的头发，深深、深深地凝望，希望记得这最后一次的目送。
    我慢慢地、慢慢地了解到，所谓父女母子一场，只不过意味着，你和他的缘分就是今生今世不断地在目送他的背影渐行渐远。你站在小路的这一端，看着他逐渐消失在小路转弯的地方，而且，他用背影默默告诉你：不必追。
  </p>
</mo-scroll>
```

:::

### overflow

设定哪个方向上允许出现滚动条，默认水平和垂直方向上都会出现滚动条。

:::demo

```html
<mo-row :gutter="24">
  <mo-col :span="8">
    overflow: x
    <mo-scroll class="scroll-demo" overflow="x" :height="200">
      <ul style="width: 400px;">
        <li v-for="i in 20" :key="i" class="scroll-item">
          overflow:x #{{ i }}
        </li>
      </ul>
    </mo-scroll>
  </mo-col>
  <mo-col :span="8">
    overflow: y
    <mo-scroll class="scroll-demo" overflow="y" :height="200">
      <ul>
        <li v-for="i in 20" :key="i" class="scroll-item">
          overflow:y #{{ i }}
        </li>
      </ul>
    </mo-scroll>
  </mo-col>
  <mo-col :span="8">
    overflow: hidden
    <mo-scroll class="scroll-demo" overflow="hidden" :height="200">
      <ul>
        <li v-for="i in 20" :key="i" class="scroll-item">
          overflow:hidden #{{ i }}
        </li>
      </ul>
    </mo-scroll>
  </mo-col>
</mo-row>

<style>
  .scroll-demo {
    border: 1px solid #eee;
  }
  .scroll-item {
    padding: 16px;
    border-bottom: 1px solid #eee;
  }
</style>
```

:::

### 滚动到指定的位置

:::demo

```html
<mo-row :gutter="24">
  <mo-col :span="8">
    to-x: 100
    <mo-scroll class="scroll-demo" :toX="100" :height="200">
      <ul style="width: 400px;">
        <li v-for="i in 20" :key="i" class="scroll-item">
          overflow:x #{{ i }}
        </li>
      </ul>
    </mo-scroll>
  </mo-col>
  <mo-col :span="8">
    to-y: 100
    <mo-scroll class="scroll-demo" :toY="100" :height="200">
      <ul>
        <li v-for="i in 20" :key="i" class="scroll-item">
          overflow:y #{{ i }}
        </li>
      </ul>
    </mo-scroll>
  </mo-col>
  <mo-col :span="8">
    to-index: 6
    <mo-scroll class="scroll-demo" :toIndex="6" :height="200">
      <ul>
        <li v-for="i in 20" :key="i" class="scroll-item">
          overflow:hidden #{{ i }}
        </li>
      </ul>
    </mo-scroll>
  </mo-col>
</mo-row>

<style>
  .scroll-demo {
    border: 1px solid #eee;
  }
  .scroll-item {
    padding: 16px;
    border-bottom: 1px solid #eee;
  }
</style>
```

:::

### Methods

:::demo

```html
<mo-row :gutter="24">
  <mo-col :span="6">
    <mo-scroll class="scroll-demo" :height="200" ref="scroll1">
      <ul style="width: 400px;">
        <li v-for="i in 20" :id="'selector' + i" :key="i" class="scroll-item">
          #selector{{ i }}
        </li>
      </ul>
    </mo-scroll>
    <div class="scroll-btn">
      <button @click="$refs.scroll1.scrollTo('#selector12')" type="secondary">
        scrollTo('#selector12')
      </button>
    </div>
  </mo-col>
  <mo-col :span="6">
    <mo-scroll class="scroll-demo" :height="200" ref="scroll2">
      <ul style="width: 400px;">
        <li v-for="i in 20" :id="'selector' + i" :key="i" class="scroll-item">
          {{ i }}. 我慢慢地、慢慢地了解到，所谓父女母子一场
        </li>
      </ul>
    </mo-scroll>
    <div class="scroll-btn">
      <button @click="$refs.scroll2.scrollToX(100)" type="secondary">
        scrollToX(100)
      </button>
    </div>
  </mo-col>
  <mo-col :span="6">
    <mo-scroll class="scroll-demo" :height="200" ref="scroll3">
      <ul>
        <li v-for="i in 20" :key="i" class="scroll-item">
          {{ i }}. scrollToY
        </li>
      </ul>
    </mo-scroll>
    <div class="scroll-btn">
      <button @click="$refs.scroll3.scrollToY(100)" type="secondary">
        scrollToY(100)
      </button>
    </div>
  </mo-col>
  <mo-col :span="6">
    <mo-scroll class="scroll-demo" :height="200" ref="scroll4">
      <ul>
        <li v-for="i in 20" :key="i" class="scroll-item">
          {{ i }}. scrollToIndex
        </li>
      </ul>
    </mo-scroll>
    <div class="scroll-btn">
      <button @click="$refs.scroll4.scrollToIndex(8)" type="secondary">
        scrollToIndex(8)
      </button>
    </div>
  </mo-col>
</mo-row>

<style>
  .scroll-demo {
    border: 1px solid #eee;
  }
  .scroll-item {
    padding: 16px;
    border-bottom: 1px solid #eee;
  }
</style>
```

:::

### Attributes

| 参数     | 说明                           | 类型           | 可选值              | 默认值       |
| -------- | ------------------------------ | -------------- | ------------------- | ------------ |
| height   | 最大高度，超出出现滚动条，必填 | number，string | 数值，inherit，auto | inherit      |
| width    | 最大宽度，超出出现滚动条，必填 | number         | -                   | 外层容器宽度 |
| overflow | 设置哪个方向出现滚动条         | string         | x，y, auto, hidden  | auto         |
| is-block | 是否是块级元素，占满一行       | boolean        | -                   | true         |
| to-x     | 滚动到 X 轴的具体位置，单位 px | number         | -                   | 0            |
| to-y     | 滚动到 Y 轴的具体位置，单位 px | number         | -                   | 0            |
| to-index | 滚动到第几个元素               | number         | -                   | -            |

- `height`为`inherit`时继承父级容器的高度，要保证外层容器可以取得高。为`auto`时表示不会出现垂直滚动条。
- 不设置`width`时，要保证外层容器可以取得高或者宽
- `to-index`默认会选中当前 slot 的最外层元素的第`index`个子元素，优先级高于`scroll-to-y`

### Methods

| 方法                 | 说明                                               | 参数                                    |
| -------------------- | -------------------------------------------------- | --------------------------------------- |
| scrollTo(selector)   | 滚动到某个`dom`元素                                | `dom`的唯一选择器，可以精确定位当前元素 |
| update()             | 滚动条内部内容修改后，需要调用该方法自行更新滚动条 | -                                       |
| scrollToX(to)        | 水平滚动条滚动到 to 位置                           | 滚动到的位置，单位 px                   |
| scrollToY(to)        | 垂直滚动条滚动到 to 位置                           | 滚动到的位置，单位 px                   |
| scrollToIndex(index) | 滚动到第几个元素                                   | 元素索引，从 1 开始                     |

### Slot

| name    | 说明                                   |
| ------- | -------------------------------------- |
| default | 内容区域，只能有一个最外层元素包裹内容 |

### mo-x-scroll 滚动条

| 参数     | 说明                           | 类型    | 可选值             | 默认值       |
| -------- | ------------------------------ | ------- | ------------------ | ------------ |
| width    | 最大宽度，超出出现滚动条，必填 | number  | -                  | 外层容器宽度 |
| overflow | 设置哪个方向出现滚动条         | string  | x，y, auto, hidden | auto         |
| is-block | 是否是块级元素，占满一行       | boolean | -                  | true         |
| to-x     | 滚动到 X 轴的具体位置，单位 px | number  | -                  | 0            |
| to-y     | 滚动到 Y 轴的具体位置，单位 px | number  | -                  | 0            |
| to-index | 滚动到第几个元素               | number  | -                  | -            |
| count    | 最多显示行数                   | number  | -                  | 5            |

- 不设置`width`时，要保证外层容器可以取得高或者宽
- `to-index`默认会选中当前 slot 的最外层元素的第`index`个子元素，优先级高于`scroll-to-y`

### Slot

| name    | 说明                                   |
| ------- | -------------------------------------- |
| default | 内容区域，只能有一个最外层元素包裹内容 |
