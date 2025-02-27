<template>
  <MyCard title="完成进度">
    <template #number>
      <span>{{ info.totalProgress }}%</span>
    </template>
    <a-progress
      style="margin-bottom: 10px"
      :percent="info.totalProgress"
      :show-info="false"
      strokeColor="#748EDE"
    />
    <template #desc>
      <span>今日进度 {{ info.todayProcess }}%</span>
    </template>
  </MyCard>
</template>

<script setup>
import MyCard from "./MyCard.vue";

const props = defineProps({
  info: {
    type: Object,
    default: () => {},
  },
});
</script>

<style lang="less" scoped></style>
