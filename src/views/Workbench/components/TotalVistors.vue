<template>
  <MyCard title="总访客数">
    <template #number>
      <span>{{ info.totalVistors.toLocaleString() }}</span>
    </template>
    <div id="total-visitors-chart" class="total-visitors-chart"></div>
    <template #desc>
      <span>每日访客数 {{ info.todayVistors.toLocaleString() }}</span>
    </template>
  </MyCard>
</template>

<script setup>
import * as echarts from "echarts/core";
import { GridComponent } from "echarts/components";
import { LineChart } from "echarts/charts";
import { UniversalTransition } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";
echarts.use([GridComponent, LineChart, CanvasRenderer, UniversalTransition]);

import { ref, onBeforeUnmount } from "vue";
import MyCard from "./MyCard.vue";
import moment from "moment";

const props = defineProps({
  info: {
    type: Object,
    default: () => {},
  },
});

let myChart = ref(null);
const today = moment();
const chartOption = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "cross",
    },
  },
  grid: {
    left: "5px", // 距离容器左侧的距离
    right: "5px", // 距离容器右侧的距离
    top: "10px", // 距离容器顶部的距离
    bottom: "0px", // 距离容器底部的距离
  },
  xAxis: {
    type: "category",
    boundaryGap: false,
    data: [
      today.subtract(7, "days").format("YYYY-MM-DD"),
      today.subtract(6, "days").format("YYYY-MM-DD"),
      today.subtract(5, "days").format("YYYY-MM-DD"),
      today.subtract(4, "days").format("YYYY-MM-DD"),
      today.subtract(3, "days").format("YYYY-MM-DD"),
      today.subtract(2, "days").format("YYYY-MM-DD"),
      today.subtract(1, "days").format("YYYY-MM-DD"),
    ],
  },
  yAxis: {
    type: "value",
    splitLine: {
      show: false, // 隐藏网格线
    },
  },
  series: [
    {
      data: [0, 0, 0, 0, 0, 0, 0],
      type: "line",
      smooth: 0.6,
      symbol: "none",
      areaStyle: {},
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
    const chartDom = document.getElementById("total-visitors-chart");
    myChart.value = echarts.init(chartDom);
  }
  chartOption.series[0].data =
    props.info?.past7daysVisitors.map((item) => item.visitors) || [];
  myChart.value.setOption(chartOption);
};

defineExpose({
  renderChart,
});
</script>

<style lang="less" scoped>
.total-visitors-chart {
  height: 57px;
  width: 100%;
}
</style>
