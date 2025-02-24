<template>
  <div class="my-setting">
    <a-menu
      class="menus"
      :default-selected-keys="[menus[0]?.key]"
      :mode="mode"
      :theme="theme"
      :selectedKeys="[activeKey]"
      @click="handleMenuSelect"
    >
      <a-menu-item v-for="item in menus" :key="item.key">
        <component :is="item.icon" />
        {{ item.title }}
      </a-menu-item>
    </a-menu>
    <div class="content">
      <h2>{{ menu.title || "" }}</h2>
      <Component :is="menu.components" />
    </div>
  </div>
</template>

<script setup>
import PersonInfo from "./components/PersonInfo.vue";
import CustomSetting from "./components/CustomSetting.vue";
import { SettingOutlined, UserOutlined } from "@ant-design/icons-vue"

import { ref, computed, h } from "vue";

let mode = ref("inline");
let theme = ref("light");
let activeKey = ref("1");
let menus = [
  {
    key: "1",
    icon: () => h(UserOutlined),
    title: "个人信息",
    components: () => h(PersonInfo),
  },
  {
    key: "2",
    icon: () => h(SettingOutlined),
    title: "自定义设置",
    components: () => h(CustomSetting),
  },
];

const menu = computed(() => {
  return menus.find((item) => item.key === activeKey.value);
});

const handleMenuSelect = (e) => {
  activeKey.value = e.key;
};
</script>

<style lang="less" scoped>
.my-setting {
  background-color: #ffffff;
  padding: 24px 0px;
  border-radius: 10px;
  min-height: 500px;
  display: flex;

  .menus {
    width: 256px;
    flex-shrink: 0;
  }
  .content {
    flex: 1;
    padding: 0px 36px;
  }
}
</style>
