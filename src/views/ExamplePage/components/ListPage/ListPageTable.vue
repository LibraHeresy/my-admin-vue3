<template>
  <div>
    <div style="margin-bottom: 16px">
      <a-button
        type="primary"
        :icon="h(PlusOutlined)"
        :disabled="hasSelected"
        @click="handleAdd"
      >
        新建
      </a-button>
      <a-popconfirm
        title="你确定要删除选择的订单吗?"
        ok-text="确定"
        cancel-text="取消"
        :disabled="!hasSelected"
        @confirm="handleDelete"
      >
        <a-button
          style="margin-left: 12px"
          danger
          :icon="h(CloseOutlined)"
          :disabled="!hasSelected"
        >
          删除
        </a-button>
      </a-popconfirm>
      <a-button style="margin-left: 12px" @click="handleResetSelected">
        重置选择
      </a-button>
    </div>
    <div style="margin-bottom: 16px">
      <a-alert :message="message" type="info" show-icon />
    </div>
    <a-table
      :row-selection="{
        selectedRowKeys: selectedRowKeys,
        onChange: onSelectChange,
      }"
      :columns="columns"
      :data-source="tableData"
      :loading="isLoading"
      rowKey="orderNo"
    >
      <template #bodyCell="{ column, text, index }">
        <template v-if="column.dataIndex === 'index'">
          <span>
            {{ index + 1 }}
          </span>
        </template>
        <template v-if="column.dataIndex === 'orderNo'">
          <a @click="toDetailPage(record)"> {{ text }} </a>
        </template>
      </template>
    </a-table>

    <AddOrderModal
      ref="refAddOrderModal"
      @submit="
        (value) => {
          tableData.unshift(value);
        }
      "
    />
  </div>
</template>

<script setup>
import { ref, computed, useTemplateRef, h } from "vue";
import { ListPageColumns } from "../../configs/config";
import { ListPageData } from "../../configs/data";
import AddOrderModal from "./AddOrderModal.vue";
import { PlusOutlined, CloseOutlined } from "@ant-design/icons-vue";

let tableData = ref([...ListPageData]);
const columns = ref([...ListPageColumns]);
let selectedRowKeys = ref([]);
let isLoading = ref(false);

const hasSelected = computed(() => selectedRowKeys.value.length > 0);

const message = computed(() => {
  return `${selectedRowKeys.value.length || 0} 条数据已选择`;
});

import { useStore } from "@/store/order";
const { setOrder } = useStore();

const onSelectChange = (tableSelectedRowKeys) => {
  selectedRowKeys.value = tableSelectedRowKeys;
};
const handleResetSelected = () => {
  selectedRowKeys.value = [];
};

const refAddOrderModal = useTemplateRef("refAddOrderModal");
const handleAdd = () => {
  refAddOrderModal.value.showModal();
};
const handleDelete = () => {
  tableData.value = tableData.value.filter(
    (item) => !selectedRowKeys.value.includes(item.orderNo)
  );
  handleResetSelected();
};
const handleSearch = (value) => {
  isLoading.value = true;
  setTimeout(() => {
    Object.keys(value).map((key) => {
      if (value[key]) {
        if (typeof value[key] === "string") {
          tableData.value = tableData.value.filter((item) =>
            item[key].includes(value[key])
          );
        } else if (typeof value[key] === "number") {
          tableData.value = tableData.value.filter(
            (item) => item[key] === value[key]
          );
        }
      }
    });
    isLoading.value = false;
  }, 1000);
};
const handleReset = () => {
  tableData.value = [...ListPageData];
};

defineExpose({
  handleSearch,
  handleReset,
});

import { useRouter } from "vue-router";
const router = useRouter();
const toDetailPage = (order) => {
  setOrder(order);
  router.push({
    name: "DetailPage",
    params: {
      orderNo: order.orderNo,
    },
  });
};
</script>
