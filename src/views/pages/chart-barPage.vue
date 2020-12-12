<template>
  <r-page>
    <r-h
      tag="h1"
      title="柱状图 mo-chart-bar"
      desc="表征分类型变量 vs 数值型变量的关系。"
    >
    </r-h>
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
            :categories="CHART_DATA_CATEGORIES_LONG"
          ></mo-chart-bar>
        </mo-col>
      </mo-row>
      <mo-row :gutter="4">
        <mo-col :span="14">
          <mo-chart-bar
            class="border"
            title="图表标题"
            comment="注：数据为后台监测数据"
            :series="CHART_DATA_SERIES"
            :height="300"
            :categories="CHART_DATA_CATEGORIES_LONG"
          ></mo-chart-bar>
        </mo-col>
        <mo-col :span="10">
          <mo-chart-bar
            class="border"
            title="图表标题"
            comment="注：数据为后台监测数据"
            :series="CHART_DATA_SERIES1"
            :height="300"
            :categories="CHART_DATA_CATEGORIES_LONG"
          ></mo-chart-bar>
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
