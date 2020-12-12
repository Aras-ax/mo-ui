<template>
  <r-page>
    <r-h tag="h1" title="折线图" desc="表征分类型变量 vs 数值型变量的关系。">
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
            :type="2"
            :categories="CHART_DATA_CATEGORIES_LONG"
          ></mo-chart-line>
        </mo-col>
      </mo-row>
    </r-h>

    <r-h
      tag="h2"
      title="使用isOffset: true"
      desc="使用图形的长度、宽度、位置、面积和颜色来比较数值的大小，通常用于展示不同分类间的数值对比。"
    >
      <mo-row :gutter="4">
        <mo-col :span="24">
          <mo-chart-line
            class="border"
            title="图表标题"
            comment="注：数据为后台监测数据"
            :series="CHART_DATA_SERIES1"
            :showPoint="true"
            :height="400"
            :categories="CHART_DATA_CATEGORIES_LONG"
          ></mo-chart-line>
        </mo-col>
      </mo-row>
      <mo-row :gutter="4">
        <mo-col :span="9">
          <mo-chart-line
            class="border"
            title="图表标题"
            comment="注：数据为后台监测数据"
            :series="CHART_DATA_SERIES1"
            :height="300"
            :categories="CHART_DATA_CATEGORIES"
          ></mo-chart-line>
        </mo-col>
        <mo-col :span="15">
          <mo-chart-line
            class="border"
            :type="1"
            title="图表标题"
            comment="注：数据为后台监测数据"
            :showPoint="true"
            :series="CHART_DATA_SERIES1"
            :height="300"
            :categories="CHART_DATA_CATEGORIES_LONG"
          ></mo-chart-line>
        </mo-col>
      </mo-row>
    </r-h>

    <r-h
      tag="h2"
      title="使用isOffset: false"
      desc="使用图形的长度、宽度、位置、面积和颜色来比较数值的大小，通常用于展示不同分类间的数值对比。"
    >
      <mo-row :gutter="4">
        <mo-col :span="11">
          <mo-chart-line
            class="border"
            title="图表标题"
            comment="注：数据为后台监测数据"
            :series="CHART_DATA_SERIES"
            :height="300"
            :isOffset="false"
            :categories="CHART_DATA_CATEGORIES_LONG"
          ></mo-chart-line>
        </mo-col>
        <mo-col :span="8">
          <mo-chart-line
            class="border"
            title="图表标题"
            comment="注：数据为后台监测数据"
            :series="CHART_DATA_SERIES"
            :height="300"
            :type="1"
            :isOffset="false"
            :categories="CHART_DATA_CATEGORIES_LONG"
          ></mo-chart-line>
        </mo-col>
        <mo-col :span="5">
          <mo-chart-line
            class="border"
            title="图表标题"
            comment="注：数据为后台监测数据"
            :series="CHART_DATA_SERIES1"
            :showPoint="true"
            :height="300"
            :isOffset="false"
            :categories="CHART_DATA_CATEGORIES_LONG"
          ></mo-chart-line>
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
  CHART_DATA_SERIES1,
  CHART_DATA_SERIES21,
  CHART_DATA_CATEGORIES11
} from "./chart-data";
export default {
  data() {
    return {
      CHART_DATA_SERIES,
      CHART_DATA_SERIES1,
      CHART_DATA_CATEGORIES,
      CHART_DATA_CATEGORIES_LONG,
      CHART_DATA_SERIES21,
      CHART_DATA_CATEGORIES11
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
