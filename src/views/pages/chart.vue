<template>
  <r-page>
    <r-h tag="h1" title="饼图"></r-h>
    <r-h tag="h2" title="demo">
      <mo-row>
        <mo-col :span="24">
          <mo-chart-pie
            class="border"
            title="图表标题"
            comment="注：数据为后台监测数据"
            :height="300"
            :series="[
              15,
              25,
              45,
              75,
              35,
              55,
              15,
              55,
              15,
              55,
              25,
              35,
              15,
              45,
              25,
              15,
              78,
              18,
              28,
              38,
              25,
              33
            ]"
            :categories="[
              0,
              1,
              2,
              3,
              4,
              5,
              6,
              7,
              9,
              10,
              11,
              12,
              13,
              14,
              15,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ]"
          ></mo-chart-pie>
        </mo-col>
      </mo-row>
    </r-h>

    <r-h tag="h2" title="demo">
      <mo-row :gutter="4">
        <mo-col :span="12">
          <mo-chart-pie
            tip-text="预留"
            class="border"
            title="图表标题"
            comment="注：数据为后台监测数据"
            :height="300"
            :series="[5, 5, 5, 35, 5, 5, 5, 5, 5, 25, 5, 5, 5, 5, 5, 50]"
            :categories="[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]"
          ></mo-chart-pie>
        </mo-col>
        <mo-col :span="12">
          <mo-chart-pie
            class="border"
            title="图表标题"
            comment="注：数据为后台监测数据"
            :height="300"
            :show-tip="false"
            :series="[5, 5, 15, 5, 5, 5, 25, 5, 5, 5, 35, 5, 5, 5, 25, 5]"
            :categories="[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]"
          ></mo-chart-pie>
        </mo-col>
      </mo-row>
    </r-h>

    <r-h tag="h1" title="柱状图"> </r-h>
    <r-h
      tag="h2"
      title="使用"
      desc="使用图形的长度、宽度、位置、面积和颜色来比较数值的大小，通常用于展示不同分类间的数值对比。"
    >
      <mo-row :gutter="4">
        <mo-col :span="24">
          <mo-chart-bar
            class="border"
            title="图表标题"
            comment="注：数据为后台监测数据"
            :series="CHART_DATA_SERIES1"
            :height="400"
            :showValue="true"
            :categories="CHART_DATA_CATEGORIES_LONG"
            @click="log"
          ></mo-chart-bar>
        </mo-col>
      </mo-row>
      <mo-row :gutter="4">
        <mo-col :span="9">
          <mo-chart-bar
            class="border"
            title="图表标题"
            comment="注：数据为后台监测数据"
            :series="CHART_DATA_SERIES"
            :height="300"
            :show-tip="false"
            :categories="CHART_DATA_CATEGORIES"
          ></mo-chart-bar>
        </mo-col>
        <mo-col :span="15">
          <mo-chart-bar
            class="border"
            title="图表标题"
            comment="注：数据为后台监测数据"
            :series="CHART_DATA_SERIES1"
            :height="300"
            :tipText="'tip-text'"
            :categories="CHART_DATA_CATEGORIES_LONG"
          ></mo-chart-bar>
        </mo-col>
      </mo-row>
    </r-h>

    <r-h tag="h1" title="折线图">
      <mo-row :gutter="4">
        <mo-col :span="12">
          <mo-chart-line
            class="border"
            title="图表标题"
            comment="注：数据为后台监测数据"
            :series="CHART_DATA_SERIES"
            :height="300"
            :showPoint="true"
            :type="1"
            :categories="CHART_DATA_CATEGORIES_LONG"
          ></mo-chart-line>
        </mo-col>
        <mo-col :span="12">
          <mo-chart-line
            class="border"
            title="图表标题"
            comment="注：数据为后台监测数据"
            :series="CHART_DATA_SERIES1"
            :height="300"
            :isOffset="false"
            :show-tip="false"
            :type="2"
            :categories="CHART_DATA_CATEGORIES_LONG"
          ></mo-chart-line>
        </mo-col>
      </mo-row>
    </r-h>

    <r-h tag="h1" title="百分比图">
      <mo-row :gutter="4">
        <mo-col :span="8">
          <mo-chart-percent
            :height="200"
            :value="val"
            :colors="[
              '#6ebbff',
              '#7ee6f2',
              '#ace06f',
              '#ffcd58',
              '#b792f7',
              '#ff7348'
            ]"
            :color-value="[0.2, 0.4, 0.5, 0.7, 0.85, 1]"
          ></mo-chart-percent>
        </mo-col>
        <mo-col :span="8">
          <mo-chart-percent
            title="圆环"
            :height="200"
            :value="val1"
            :colors="['#ACE06F', '#FFCD58', '#FF7348']"
            :color-value="[0.4, 0.6, 1]"
          ></mo-chart-percent>
        </mo-col>
        <mo-col :span="8">
          <mo-chart-percent
            :height="200"
            :value="val2"
            :colors="['#ACE06F', '#FFCD58', '#FF7348']"
            :color-value="[0.4, 0.6, 1]"
          ></mo-chart-percent>
        </mo-col>
      </mo-row>
    </r-h>
  </r-page>
</template>

<script>
import {
  CHART_DATA_SERIES,
  CHART_DATA_CATEGORIES,
  CHART_DATA_CATEGORIES_LONG,
  CHART_DATA_SERIES1
} from "./chart-data";
export default {
  data() {
    return {
      CHART_DATA_SERIES,
      CHART_DATA_SERIES1,
      CHART_DATA_CATEGORIES,
      CHART_DATA_CATEGORIES_LONG
    };
  },
  methods: {
    log(e) {
      console.log(e);
    }
  }
};
</script>

<style lang="scss">
.border {
  border: 1px solid $border-color;
  border-radius: 4px;
}

.mo-row {
  margin: 4px 0;
}
</style>
