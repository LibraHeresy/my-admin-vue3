<template>
  <a-form
    ref="refRuleForm"
    :model="ruleForm"
    :rules="rules"
    :label-col="layout.labelCol"
    :wrapper-col="layout.wrapperCol"
  >
    <a-form-item label="付款账户" name="paymentAccount">
      <a-select
        v-model:value="ruleForm.paymentAccount"
        placeholder="my-admin-vue2@alipay.com"
      >
        <a-select-option value="my-admin-vue2@alipay.com">
          my-admin-vue2@alipay.com
        </a-select-option>
      </a-select>
    </a-form-item>
    <a-form-item label="收款账户" name="receiverAccount">
      <a-input v-model:value="ruleForm.receiverAccount" maxLength="50" />
    </a-form-item>
    <a-form-item label="收款人姓名" name="receiver">
      <a-input v-model:value="ruleForm.receiver" :maxLength="20" />
    </a-form-item>
    <a-form-item label="转账金额" name="transferAmount">
      <a-input
        v-model:value="ruleForm.transferAmount"
        type="number"
        :maxLength="20"
      />
    </a-form-item>
    <a-form-item :wrapper-col="{ span: 14, offset: 6 }">
      <a-button type="primary" @click="onSubmit"> 下一步 </a-button>
    </a-form-item>
  </a-form>
</template>

<script setup>
class CreateRuleForm {
  constructor() {
    // 付款账户
    this.paymentAccount = undefined;
    // 收款账户
    this.receiverAccount = "test@example.com";
    // 收款人姓名
    this.receiver = "Alex";
    // 转账金额
    this.transferAmount = "100.00";
  }
}

import { ref, onMounted, useTemplateRef } from "vue";
import { storeToRefs } from "pinia";
import { useStore } from "@/store/step";

const refRuleForm = useTemplateRef("refRuleForm");
const stepStore = useStore();
const { step, transferInfo } = storeToRefs(stepStore);
const ruleForm = ref(new CreateRuleForm());
const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 },
};
const rules = {
  paymentAccount: [
    {
      required: true,
      message: "请选择付款账户",
      trigger: "change",
    },
  ],
  receiverAccount: [
    {
      required: true,
      message: "请选择收款账户",
      trigger: "change",
    },
  ],
  receiver: [
    {
      required: true,
      message: "请输入收款人姓名",
      trigger: "change",
    },
  ],
  transferAmount: [
    {
      required: true,
      message: "请输入转账金额",
      trigger: "change",
    },
  ],
};


onMounted(() => {
  if (transferInfo.value) {
    ruleForm.value = transferInfo.value;
  }
});

const onSubmit = () => {
  refRuleForm.value.validate().then(() => {
    stepStore.setTransferInfo({ ...ruleForm.value });
    stepStore.setStep(step.value + 1);
  });
};

const resetForm = () => {
  refRuleForm.value.resetFields();
};
</script>
