<template>
  <a-form
    ref="refRuleForm"
    :model="ruleForm"
    :label-col="layout.labelCol"
    :wrapper-col="layout.wrapperCol"
  >
    <a-row>
      <a-col :span="8">
        <a-form-item label="订单号" name="orderNo">
          <a-input
            v-model:value="ruleForm.orderNo"
            placeholder="请输入订单号"
          />
        </a-form-item>
      </a-col>
      <a-col :span="8">
        <a-form-item label="订单状态" name="orderStatus">
          <a-select
            v-model:value="ruleForm.orderStatus"
            placeholder="请选择订单状态"
          >
            <a-select-option
              v-for="item in OrderStatusDict"
              :key="item.key"
              :value="item.value"
            >
              {{ item.value }}
            </a-select-option>
          </a-select>
        </a-form-item>
      </a-col>
      <template v-if="advanced">
        <a-col :span="8">
          <a-form-item label="订单类型" name="orderType">
            <a-select
              v-model:value="ruleForm.orderType"
              placeholder="请选择订单类型"
            >
              <a-select-option
                v-for="item in OrderTypeDict"
                :key="item.key"
                :value="item.value"
              >
                {{ item.value }}
              </a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
        <a-col :span="8">
          <a-form-item label="工作人员" name="worker">
            <a-input
              v-model:value="ruleForm.worker"
              placeholder="请输入工作人员姓名"
            />
          </a-form-item>
        </a-col>
        <a-col :span="8">
          <a-form-item label="支付渠道" name="orderPayment">
            <a-select
              v-model:value="ruleForm.orderPayment"
              placeholder="请选择支付渠道"
            >
              <a-select-option
                v-for="item in OrderPayMentDict"
                :key="item.key"
                :value="item.value"
              >
                {{ item.value }}
              </a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
      </template>

      <a-col :span="(!advanced && 8) || 24">
        <span
          :style="(advanced && { float: 'right', overflow: 'hidden' }) || {}"
        >
          <a-button type="primary" @click="handleSearch"> 查询 </a-button>
          <a-button style="margin-left: 8px" @click="handleReset">
            重置
          </a-button>
          <a @click="toggleAdvanced" style="margin-left: 8px">
            {{ advanced ? "收起" : "展开" }}
            <UpOutlined v-if="advanced" />
            <DownOutlined v-else />
          </a>
        </span>
      </a-col>
    </a-row>
  </a-form>
</template>

<script setup>
import {
  OrderStatusDict,
  OrderTypeDict,
  OrderPayMentDict,
} from "../../configs/dict";
import { UpOutlined, DownOutlined } from "@ant-design/icons-vue";

class CreateRuleForm {
  constructor() {
    // 订单号
    this.orderNo = "";
    // 订单状态
    this.orderStatus = undefined;
    // 订单类型
    this.orderType = undefined;
    // 工作人员
    this.worker = "";
    // 支付渠道
    this.orderPayment = undefined;
  }
}

import { ref, reactive, defineEmits } from "vue";

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 17 },
};

let ruleForm = ref(new CreateRuleForm());
let advanced = ref(false);

const toggleAdvanced = () => {
  advanced.value = !advanced.value;
};

const emits = defineEmits(["reset", "search"]);
const handleReset = () => {
  ruleForm.value = new CreateRuleForm();
  emits("reset");
};
const handleSearch = () => {
  emits("search", { ...ruleForm.value });
};
</script>

<style lang="less" scoped>
.ant-form-item {
  width: 100%;
}
</style>
