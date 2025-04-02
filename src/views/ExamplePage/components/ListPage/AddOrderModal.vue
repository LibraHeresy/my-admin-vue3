<template>
  <a-modal width="800px" v-model:open="visible" title="新增订单">
    <div>
      <a-form
        ref="refRuleForm"
        layout="vertical"
        :model="ruleForm"
        :rules="rules"
        :label-col="layout.labelCol"
        :wrapper-col="layout.wrapperCol"
      >
        <a-form-item label="订单金额" name="orderAmount">
          <a-input
            v-model:value="ruleForm.orderAmount"
            placeholder="请输入订单金额"
            type="number"
          />
        </a-form-item>
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
        <a-form-item label="工作人员" name="worker">
          <a-input
            v-model:value="ruleForm.worker"
            placeholder="请输入工作人员姓名"
          />
        </a-form-item>
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
        <a-form-item label="备注" name="desc">
          <MyEditor v-model="ruleForm.desc" />
        </a-form-item>
      </a-form>
    </div>
    <template #footer>
      <a-button key="back" @click="handleCancel"> 关闭 </a-button>
      <a-button
        key="submit"
        type="primary"
        :loading="isLoading"
        @click="handleSubmit"
      >
        提交
      </a-button>
    </template>
  </a-modal>
</template>

<script setup lang="ts">
class CreateRuleForm {
  orderAmount: number | undefined;
  orderType: number | undefined;
  worker: string;
  orderPayment: number | undefined;
  desc: string;
  orderStatus: string;
  orderDate: string;
  orderNo: string;

  constructor() {
    // 订单金额
    this.orderAmount = undefined;
    // 订单类型
    this.orderType = undefined;
    // 工作人员
    this.worker = "";
    // 支付渠道
    this.orderPayment = undefined;
    // 备注
    this.desc = "";
    // 订单状态
    this.orderStatus = "";
    // 订单日期
    this.orderDate = "";
    // 订单编号
    this.orderNo = "";
  }
}

import { OrderTypeDict, OrderPayMentDict } from "../../configs/dict";
import MyEditor from "@/components/MyEditor.vue";
import moment from "moment";
import { ref, defineExpose, defineEmits } from "vue";

const emits = defineEmits(["submit"]);

const refRuleForm = ref();
const visible = ref(false);
const isLoading = ref(false);
const ruleForm = ref(new CreateRuleForm());
const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 24 },
};
const rules = {
  orderAmount: [
    {
      required: true,
      message: "请输入订单金额",
      trigger: "change",
    },
  ],
  orderType: [
    {
      required: true,
      message: "请选择订单类型",
      trigger: "change",
    },
  ],
  worker: [
    {
      required: true,
      message: "请输入工作人员姓名",
      trigger: "change",
    },
  ],
  orderPayment: [
    {
      required: true,
      message: "请选择支付渠道",
      trigger: "change",
    },
  ],
  desc: [
    {
      required: true,
      message: "请输入备注",
      trigger: "change",
    },
  ],
};

const showModal = () => {
  visible.value = true;
};

const handleSubmit = () => {
  refRuleForm.value.validate().then(() => {
    isLoading.value = true;
    setTimeout(() => {
      isLoading.value = false;
      visible.value = false;
      ruleForm.value.orderStatus = "待支付";
      ruleForm.value.orderAmount = Number(
        Number(ruleForm.value.orderAmount).toFixed(2)
      );
      ruleForm.value.orderDate = moment().format("YYYY-MM-DD");
      ruleForm.value.orderNo = `${moment().format("YYYYMMDD")}-${Math.floor(
        Math.random() * 7000 + 1000
      )}`;
      emits("submit", { ...ruleForm.value });
      ruleForm.value = new CreateRuleForm();
    }, 1000);
  });
};

const handleCancel = () => {
  visible.value = false;
  ruleForm.value = new CreateRuleForm();
};

defineExpose({
  showModal,
});
</script>
