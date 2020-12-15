<template>
  <r-page>
    <r-h tag="h1" title="滚动条" desc="demo">
      <mo-scroll style="border: 1px solid #eee;" :height="200">
        <div style="  width: 400px; word-break:break-word; padding:  12px;">
          mo-scroll mo-scroll mo-scroll mo-scroll mo-scroll mo-scroll mo-scroll
          mo-scroll mo-scroll mo-scroll mo-scroll mo-scroll mo-scroll mo-scroll
          mo-scroll mo-scroll mo-scroll mo-scroll mo-scroll mo-scroll mo-scroll
          mo-scroll mo-scroll mo-scroll mo-scroll mo-scroll mo-scroll mo-scroll
          mo-scroll mo-scroll mo-scroll mo-scroll mo-scroll mo-scroll mo-scroll
          mo-scroll mo-scroll mo-scroll mo-scroll mo-scroll mo-scroll mo-scroll
          mo-scroll mo-scroll mo-scroll mo-scroll mo-scroll mo-scroll mo-scroll
          mo-scroll mo-scroll mo-scroll mo-scroll mo-scroll mo-scroll mo-scroll
          mo-scroll mo-scroll mo-scroll mo-scroll mo-scroll mo-scroll mo-scroll
          mo-scroll mo-scroll mo-scroll mo-scroll mo-scroll mo-scroll mo-scroll
          mo-scroll mo-scroll mo-scroll mo-scroll mo-scroll mo-scroll mo-scroll
          mo-scroll mo-scroll mo-scroll mo-scroll mo-scroll mo-scroll mo-scroll
          mo-scroll mo-scroll mo-scroll mo-scroll mo-scroll mo-scroll mo-scroll
          mo-scroll mo-scroll mo-scroll mo-scroll mo-scroll mo-scroll mo-scroll
          mo-scroll mo-scroll
        </div>
      </mo-scroll>
    </r-h>

    <r-h tag="h2" title="属性配置">
      <mo-row :gutter="8">
        <mo-col :span="10">
          <div>scrollToX: 100</div>
          <mo-scroll style="border: 1px solid #eee;" :height="200" :toX="100">
            <div style="height: 1000px;  width: 600px">
              scrollToX="100" scrollToX="100" scrollToX="100" scrollToX="100"
              scrollToX="100" scrollToX="100" scrollToX="100" scrollToX="100"
              scrollToX="100" scrollToX="100" scrollToX="100" scrollToX="100"
              scrollToX="100" scrollToX="100" scrollToX="100"
            </div>
          </mo-scroll>
        </mo-col>

        <mo-col :offset="2" :span="10">
          <div>scrollToY: 100</div>
          <mo-scroll
            style="border: 1px solid #eee;"
            :height="200"
            :to-y="100"
            :width="200"
          >
            <div>
              scrollToY="100" scrollToY="100" scrollToY="100" scrollToY="100"
              scrollToY="100" scrollToY="100" scrollToY="100" scrollToY="100"
              scrollToY="100" scrollToY="100" scrollToY="100" scrollToY="100"
              scrollToY="100" scrollToY="100" scrollToY="100" scrollToY="100"
              scrollToY="100" scrollToY="100" scrollToY="100" scrollToY="100"
              scrollToY="100" scrollToY="100" scrollToY="100" scrollToY="100"
              scrollToY="100" scrollToY="100" scrollToY="100" scrollToY="100"
              scrollToY="100" scrollToY="100"
            </div>
          </mo-scroll>
        </mo-col>
      </mo-row>
      <mo-row :gutter="8">
        <mo-col :span="12">
          <div>scrollToIndex: 3</div>
          <mo-scroll style="border: 1px solid #eee;" :height="200" :toIndex="3">
            <ul>
              <li
                v-for="i in 20"
                :key="i"
                style="padding: 12px; border-bottom: 1px solid #eee;"
              >
                第{{ i }}个
              </li>
            </ul>
          </mo-scroll>
        </mo-col>
      </mo-row>
    </r-h>
    <r-h tag="h2" title="Methods">
      <mo-row>
        <mo-col :span="12">
          <div>
            scrollTo(selector)
            <button @click.stop.prevent="toIndex('#selector8')">
              滚动到selector#8
            </button>
          </div>

          <mo-scroll style="border: 1px solid #eee;" :height="200" ref="scroll">
            <ul>
              <li
                v-for="i in 20"
                :id="'selector' + i"
                :key="i"
                style="padding: 12px; border-bottom: 1px solid #eee;"
              >
                selector#{{ i }}
              </li>
            </ul>
          </mo-scroll>
        </mo-col>
      </mo-row>
    </r-h>
    <r-h tag="h1" title="v-x-scroll">
      <mo-row :gutter="12">
        <mo-col :span="12">
          <v-x-scroll :count="count" :width="200">
            <ul>
              <li
                v-for="i in 20"
                :key="i"
                style="padding: 12px; border-bottom: 1px solid #eee;"
              >
                第{{ i }}个
              </li>
            </ul>
          </v-x-scroll>
          <button @click.stop.prevent="changeCount">显示{{ count }}行</button>
        </mo-col>
        <mo-col :span="12">
          <v-x-scroll :count="count1" :width="200">
            <ul>
              <li
                v-for="i in 6"
                :key="i"
                style="padding: 12px; border-bottom: 1px solid #eee;"
              >
                第{{ i }}个
              </li>
            </ul>
          </v-x-scroll>
          <button @click.stop.prevent="changeCount1">切换({{ count1 }})</button>
        </mo-col>
      </mo-row>
    </r-h>
  </r-page>
</template>

<script>
export default {
  data() {
    return {
      count: 7,
      count1: 7
    };
  },
  methods: {
    toIndex(selector) {
      this.$refs.scroll.scrollTo(selector);
    },
    changeCount() {
      this.count = ~~(Math.random() * 20);
    },
    changeCount1() {
      this.count1 = ~~(Math.random() * 20);
    }
  }
};
</script>
