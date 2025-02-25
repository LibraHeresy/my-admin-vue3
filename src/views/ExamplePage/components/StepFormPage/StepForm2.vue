<template>
  <a-form
    ref="refRuleForm"
    :model="ruleForm"
    :rules="rules"
    :label-col="layout.labelCol"
    :wrapper-col="layout.wrapperCol"
  >
    <a-form-item label="付款账户" name="paymentAccount">
      <span>{{ transferInfo.paymentAccount }}</span>
    </a-form-item>
    <a-form-item label="收款账户" name="receiverAccount">
      <span>{{ transferInfo.receiverAccount }}</span>
    </a-form-item>
    <a-form-item label="收款人姓名" name="receiver">
      <span>{{ transferInfo.receiver }}</span>
    </a-form-item>
    <a-form-item label="转账金额" name="transferAmount">
      <span>{{ transferInfo.transferAmount }}</span>
    </a-form-item>
    <a-form-item label="支付密码" name="paySecret">
      <a-input
        v-model:value="ruleForm.paySecret"
        type="password"
        :maxLength="20"
      />
    </a-form-item>
    <a-form-item :wrapper-col="{ span: 14, offset: 6 }">
      <a-button type="default" @click="prevStep"> 上一步 </a-button>
      <a-button style="margin-left: 10px" type="primary" @click="onSubmit">
        下一步
      </a-button>
    </a-form-item>
  </a-form>
</template>

<script setup>
class CreateRuleForm {
  constructor() {
    // 付款账户
    this.paySecret = "123456";
  }
}

import { useTemplateRef, ref } from "vue";

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 },
};

const ruleForm = ref(new CreateRuleForm());
const rules = {
  paySecret: [
    {
      required: true,
      message: "请输入支付密码",
      trigger: "change",
    },
  ],
};

import { storeToRefs } from "pinia";
import { useStore } from "@/store/step";
const stepStore = useStore();
const { step, transferInfo } = storeToRefs(stepStore);

const refRuleForm = useTemplateRef("refRuleForm");
const onSubmit = () => {
  refRuleForm.value.validate().then(() => {
    stepStore.setStep(step.value + 1);
  });
};

const resetForm = () => {
  refRuleForm.value.resetFields();
};
const prevStep = () => {
  stepStore.setStep(step.value - 1);
};
</script>
