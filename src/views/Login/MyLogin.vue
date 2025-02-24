<template>
  <div class="my-login">
    <div class="login-form">
      <div class="title">My-Admin-Vue2</div>
      <a-tabs default-active-key="1" size="large" centered>
        <a-tab-pane key="1" tab="账号登录">
          <a-form
            ref="refRuleForm"
            :model="ruleForm"
            :rules="rules"
            :label-col="layout.labelCol"
            :wrapper-col="layout.wrapperCol"
          >
            <a-form-item has-feedback name="account">
              <a-input
                v-model:value="ruleForm.account"
                size="large"
                type="text"
                autocomplete="off"
                :maxLength="20"
                placeholder="admin"
              >
                <template #prefix>
                  <UserOutlined />
                </template>
              </a-input>
            </a-form-item>
            <a-form-item has-feedback name="password">
              <a-input
                v-model:value="ruleForm.password"
                size="large"
                type="password"
                autocomplete="off"
                :maxLength="20"
                placeholder="123456"
              >
                <template #prefix>
                  <LockOutlined />
                </template>
              </a-input>
            </a-form-item>
          </a-form>
        </a-tab-pane>
      </a-tabs>
      <a-button
        class="login-button"
        type="primary"
        size="large"
        @click="() => submitForm()"
      >
        登录
      </a-button>
    </div>

    <context-holder />
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";
import { message } from 'ant-design-vue';
const [messageApi, contextHolder] = message.useMessage();
import { useRouter } from "vue-router";

class CreateRuleForm {
  constructor() {
    this.account = "";
    this.password = "";
  }
}

const layout = {
  labelCol: { span: 0 },
  wrapperCol: { span: 24 },
};

const rules = {
  account: [
    {
      max: 20,
      required: true,
      message: "请输入账号",
      trigger: "change",
    },
  ],
  password: [
    {
      max: 20,
      required: true,
      message: "请输入密码",
      trigger: "change",
    },
  ],
};

const router = useRouter();
let ruleForm = reactive(new CreateRuleForm());
const refRuleForm = ref();
const submitForm = () => {
  refRuleForm.value
    .validate()
    .then(() => {
      if (ruleForm.account === "admin" && ruleForm.password === "123456") {
        messageApi.success("登录成功");

        localStorage.setItem("token", "token");
        router.push({
          path: "/",
        });
      } else {
        messageApi.error("账号或密码错误");
      }
    })
};
</script>

<style lang="less" scoped>
.my-login {
  height: 100vh;
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
  background-color: #f0f2f5;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 200px;
  background: url("../../assets/background.svg");

  .title {
    font-size: 33px;
    color: rgba(0, 0, 0, 0.85);
    font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
    font-weight: 600;
    position: relative;
    top: 2px;
    text-align: center;
  }
  .login-form {
    height: max-content;
    width: 450px;
    background-color: #ffffff;
    padding: 40px 40px 60px 40px;
    border-radius: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

    .login-button {
      width: 100%;
    }
  }
}
</style>
