<template>
  <MyCard title="销售总额">
    <template #number>
      <span>￥{{ info.totalSales.toLocaleString() }}</span>
    </template>
    <div style="margin-bottom: 10px; display: flex">
      <div>
        <span style="font-size: 14px"> 新增 {{ salesIncreasePercent }}% </span>
        <CaretUpOutlined style="color: red; font-size: 14px" />
      </div>
      <div style="margin-left: 24px">
        <span style="font-size: 14px"> 下降 {{ salesIncreasePercent }}% </span>
        <CaretDownOutlined style="color: green; font-size: 14px" />
      </div>
    </div>
    <template #desc>
      <span>每日销售额 ￥{{ info.todaySales.toLocaleString() }}</span>
    </template>
  </MyCard>
</template>

<script setup>
import MyCard from "./MyCard.vue";
import { computed } from "vue";
import { CaretUpOutlined, CaretDownOutlined } from "@ant-design/icons-vue";

const props = defineProps({
  info: {
    type: Object,
    default: () => {},
  },
});

const salesIncreasePercent = computed(() => {
  return ((props.info.todaySales / props.info.totalSales) * 100).toFixed(2);
});
</script>

<style lang="less" scoped></style>
