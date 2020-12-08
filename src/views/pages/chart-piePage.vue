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
            :series="[5, 5, 15, 5, 5, 5, 25, 5, 5, 5, 35, 5, 5, 5, 25, 5]"
            :categories="[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]"
          ></mo-chart-pie>
        </mo-col>
      </mo-row>
    </r-h>
    <r-h tag="h2" title="demo">
      <mo-row :gutter="4">
        <mo-col :span="12">
          <mo-chart-pie
            class="border"
            title="图表标题"
            comment="注：数据为后台监测数据"
            :height="300"
            :series="[
              5,
              5,
              5,
              5,
              30,
              5,
              5,
              5,
              5,
              50,
              5,
              5,
              35,
              5,
              5,
              5,
              5,
              5,
              5,
              5,
              5
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
              8,
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
              20
            ]"
          ></mo-chart-pie>
        </mo-col>
        <mo-col :span="12">
          <mo-chart-pie
            class="border"
            title="图表标题"
            comment="注：数据为后台监测数据"
            :height="300"
            :series="[100, 10, 10, 10, 10, 10, 10, 10, 10, 10]"
            :categories="categories"
          ></mo-chart-pie>
        </mo-col>
      </mo-row>
    </r-h>
  </r-page>
</template>

<script>
import { CHART_DATA_SERIES_PIE, CHART_DATA_CATEGORIES_PIE } from "./chart-data";

export default {
  data() {
    return {
      series: CHART_DATA_SERIES_PIE,
      categories: CHART_DATA_CATEGORIES_PIE
    };
  }
};
</script>

<style lang="scss" scoped>
.border {
  border: 1px solid $border-color;
  border-radius: 4px;
}

.mo-row {
  margin: 4px 0;
}
</style>
