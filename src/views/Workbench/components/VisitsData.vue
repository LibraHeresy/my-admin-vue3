<template>
  <div class="visits-data">
    <div class="visits-data-chart-wrap">
      <div class="visits-data-title">访问数据</div>
      <div id="visits-data-chart" class="visits-data-chart" ref="refCharts"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import * as echarts from "echarts/core";
import { TooltipComponent, GridComponent } from "echarts/components";
import { BarChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
echarts.use([GridComponent, BarChart, CanvasRenderer, TooltipComponent]);

import { ref, onBeforeUnmount } from "vue";

let myChart = ref<echarts.ECharts>();
let refCharts = ref();
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
.visits-data {
  display: flex;
  justify-content: space-between;

  .visits-data-title {
    color: rgba(0, 0, 0, 0.85);
    font-weight: bold;
    font-size: 14px;
    margin-bottom: 20px;
  }
  .visits-data-chart-wrap {
    flex: 1;

    .visits-data-chart {
      height: 320px;
    }
  }
  .visits-data-ranking-wrap {
    flex-shrink: 0;
    width: 350px;
    margin-left: 60px;
    height: 100%;
  }
}
</style>
