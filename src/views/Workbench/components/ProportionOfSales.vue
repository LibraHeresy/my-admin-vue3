<template>
  <div class="proportion-of-sales">
    <a-card title="销售渠道占比" style="width: 100%; border-radius: 10px">
      <div>
        <div
          id="proportion-of-sales-chart"
          class="proportion-of-sales-chart"
        ></div>
      </div>
    </a-card>
  </div>
</template>

<script setup>
import * as echarts from "echarts/core";
import { TooltipComponent, LegendComponent } from "echarts/components";
import { PieChart } from "echarts/charts";
import { LabelLayout } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";
echarts.use([
  TooltipComponent,
  LegendComponent,
  PieChart,
  CanvasRenderer,
  LabelLayout,
]);

import { ref, onMounted, onBeforeUnmount } from "vue";

let myChart = ref(null);
const chartOption = {
  tooltip: {
    trigger: "item",
  },
  legend: {
    top: "5%",
    left: "center",
  },
  series: [
    {
      name: "Access From",
      type: "pie",
      radius: ["40%", "70%"],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: "#fff",
        borderWidth: 2,
      },
      label: {
        show: false,
        position: "center",
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 40,
          fontWeight: "bold",
        },
      },
      labelLine: {
        show: false,
      },
      data: [
        { value: 1048, name: "搜索引擎" },
        { value: 735, name: "门户" },
        { value: 580, name: "邮箱" },
        { value: 484, name: "渠道广告" },
        { value: 300, name: "视频广告" },
      ],
    },
  ],
};

onMounted(() => {
  setTimeout(() => {
    renderChart();
  });
});

onBeforeUnmount(() => {
  // 销毁 echarts
  if (myChart.value != null) {
    myChart.value.dispose();
  }
});

const renderChart = () => {
  if (!myChart.value) {
    const chartDom = document.getElementById("proportion-of-sales-chart");
    myChart.value = echarts.init(chartDom);
  }
  myChart.value.setOption(chartOption);
};
</script>

<style lang="less" scoped>
.proportion-of-sales {
  .proportion-of-sales-chart {
    height: 460px;
  }
}
</style>
