<template>
  <div class="personal-info">
    <a-form
      ref="refRuleForm"
      layout="vertical"
      :model="ruleForm"
      :rules="isEdit ? rules : {}"
      :label-col="layout.labelCol"
      :wrapper-col="layout.wrapperCol"
    >
      <template v-if="isEdit">
        <a-form-item label="昵称" name="nickname">
          <a-input
            v-model:value="ruleForm.nickname"
            placeholder="请输入昵称"
            :maxLength="20"
          />
        </a-form-item>
        <a-form-item label="简介" name="profile">
          <a-textarea
            v-model:value="ruleForm.profile"
            style="height: 100px"
            placeholder="请输入简介"
            :maxLength="500"
          />
        </a-form-item>
        <a-form-item label="邮箱" name="email">
          <a-input
            v-model:value="ruleForm.email"
            placeholder="请输入邮箱"
            :maxLength="150"
          />
        </a-form-item>
      </template>

      <template v-else>
        <a-form-item label="昵称" name="nickname">
          {{ info.nickname }}
        </a-form-item>
        <a-form-item label="简介" name="profile">
          {{ info.profile }}
        </a-form-item>
        <a-form-item label="邮箱" name="email">
          {{ info.email }}
        </a-form-item>
      </template>

      <a-form-item :wrapper-col="{ span: 14, offset: 0 }">
        <template v-if="isEdit">
          <a-button type="primary" @click="onSubmit"> 提交 </a-button>
          <a-button style="margin-left: 10px" @click="onCancel">
            取消
          </a-button>
        </template>

        <template v-else>
          <a-button type="primary" @click="toEdit"> 修改 </a-button>
        </template>
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup lang="ts">
class CreateInfo {
  constructor() {
    this.nickname = "战斗机"; // 昵称
    this.profile = "飞一般的感觉"; // 个人简介
    this.email = "zhandouji12138@qq.com"; // 邮箱
  }
}

class CreateRuleForm {
  constructor() {
    this.nickname = ""; // 昵称
    this.profile = ""; // 个人简介
    this.email = ""; // 邮箱
  }
}

import { ref, useTemplateRef } from "vue";

const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

let checkEmail = (rule, value, callback) => {
  if (!isValidEmail(value)) {
    return callback(new Error("请输入正确的邮箱地址"));
  } else {
    callback();
  }
};

let isEdit = ref(false);
let info = ref(new CreateInfo());
let ruleForm = ref(new CreateRuleForm());
const refRuleForm = useTemplateRef("refRuleForm");
const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 24 },
};
const rules = {
  nickname: [
    {
      required: true,
      message: "请输入昵称",
      trigger: "change",
    },
  ],
  profile: [
    {
      required: true,
      message: "请输入简介",
      trigger: "change",
    },
  ],
  email: [
    {
      validator: checkEmail,
      trigger: "change",
    },
  ],
};

const toEdit = () => {
  isEdit.value = true;
  ruleForm.value = { ...info.value };
};

const onSubmit = () => {
  refRuleForm.value.validate().then(() => {
    isEdit.value = false;
    info.value = { ...ruleForm.value };
  });
};

const onCancel = () => {
  refRuleForm.value.resetFields();
  isEdit.value = false;
  ruleForm.value = { ...info.value };
};
</script>

<style lang="less" scoped>
.personal-info {
  width: 700px;
}
</style>
