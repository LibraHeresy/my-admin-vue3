<template>
  <a-card style="border-radius: 10px" :bordered="false">
    <ListPageSearch @search="handleSearch" @reset="handleReset" />
    <ListPageTable ref="refListPageTable" />
  </a-card>
</template>

<script setup lang="ts">
import ListPageSearch from "./components/ListPage/ListPageSearch.vue";
import ListPageTable from "./components/ListPage/ListPageTable.vue";
import { ref } from "vue";

const refListPageTable = ref();

const handleSearch = (value: object) => {
  refListPageTable.value.handleSearch(value);
};

const handleReset = () => {
  refListPageTable.value.handleReset();
};
</script>

<style lang="less" scoped>
.list-page {
  border-radius: 10px;
}
</style>
