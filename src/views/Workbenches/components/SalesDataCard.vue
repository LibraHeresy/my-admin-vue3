<template>
  <a-card
    style="width: 100%; border-radius: 10px"
    :tab-list="tabList"
    :active-tab-key="tab"
    @tabChange="(key) => onTabChange(key)"
  >
    <SalesData ref="refSalesData" v-if="tab === 'sales'" />
    <VisitsData ref="refSalesData" v-if="tab === 'visits'" />

    <template #tabBarExtraContent>
      <a
        v-for="item in dateList"
        :key="item.key"
        class="mr20"
        href="#"
        @click="() => handleDateClick(item.key)"
      >
        {{ item.value }}
      </a>
      <a-range-picker v-model:value="dateRange" :format="dateFormat" />
    </template>
  </a-card>
</template>

<script setup>
import SalesData from "./SalesData.vue";
import VisitsData from "./VisitsData.vue";
import moment from "moment";
import { ref, reactive, useTemplateRef } from "vue";

const tabList = [
  {
    key: "sales",
    tab: "销售",
  },
  {
    key: "visits",
    tab: "访问",
  },
];

let tab = ref("sales");

const dateList = [
  {
    key: "前6月",
    value: "前6月",
  },
  {
    key: "前3月",
    value: "前3月",
  },
  {
    key: "前30天",
    value: "前30天",
  },
  {
    key: "前7天",
    value: "前7天",
  },
];

let dateRange = reactive([]);
let dateFormat = "YYYY-MM-DD";
const refSalesData = useTemplateRef("refSalesData");
const onTabChange = (key) => {
  tab.value = key;

  setTimeout(() => {
    refSalesData.value.renderChart();
  });
};
onTabChange(tab.value);

const handleDateClick = (key) => {
  dateRange[1] = moment().format(dateFormat);

  switch (key) {
    case "前6月":
      dateRange[0] = moment().subtract(6, "months").format(dateFormat);
      break;
    case "前3月":
      dateRange[0] = moment().subtract(3, "months").format(dateFormat);
      break;
    case "前30天":
      dateRange[0] = moment().subtract(30, "days").format(dateFormat);
      break;
    case "前7天":
      dateRange[0] = moment().subtract(7, "days").format(dateFormat);
      break;
    default:
      break;
  }
};
</script>

<style lang="less" scoped>
.mr20 {
  margin-right: 20px;
}
</style>
