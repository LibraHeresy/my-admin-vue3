<template>
  <div class="sales-data">
    <div class="sales-data-chart-wrap">
      <div class="sales-data-title">访问数据</div>
      <div id="sales-data-chart" class="sales-data-chart" ref="refCharts"></div>
    </div>
  </div>
</template>

<script setup>
import * as echarts from "echarts/core";
import { TooltipComponent, GridComponent } from "echarts/components";
import { BarChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
echarts.use([GridComponent, BarChart, CanvasRenderer, TooltipComponent]);

import { ref, onBeforeUnmount, useTemplateRef } from "vue";

let myChart = ref(null);
let refCharts = useTemplateRef("refCharts");
const chartOption = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
  },
  grid: {
    left: "60px", // 距离容器左侧的距离
    right: "40px", // 距离容器右侧的距离
    top: "10px", // 距离容器顶部的距离
    bottom: "40px", // 距离容器底部的距离
  },
  xAxis: {
    type: "category",
    data: [
      "1月",
      "2月",
      "3月",
      "4月",
      "5月",
      "6月",
      "7月",
      "8月",
      "9月",
      "10月",
      "11月",
      "12月",
    ],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130, 150, 80, 70, 110, 130],
      type: "bar",
    },
  ],
};

onBeforeUnmount(() => {
  // 销毁 echarts
  if (myChart.value != null) {
    myChart.value.dispose();
  }
});

const renderChart = () => {
  if (!myChart.value) {
    const chartDom = refCharts.value;
    myChart.value = echarts.init(chartDom);
  }
  myChart.value.setOption(chartOption);
};

defineExpose({
  renderChart,
});
</script>

<style lang="less" scoped>
.sales-data {
  display: flex;
  justify-content: space-between;

  .sales-data-title {
    color: rgba(0, 0, 0, 0.85);
    font-weight: bold;
    font-size: 14px;
    margin-bottom: 20px;
  }
  .sales-data-chart-wrap {
    flex: 1;

    .sales-data-chart {
      height: 320px;
    }
  }
  .sales-data-ranking-wrap {
    flex-shrink: 0;
    width: 350px;
    margin-left: 60px;
    height: 100%;
  }
}
</style>
