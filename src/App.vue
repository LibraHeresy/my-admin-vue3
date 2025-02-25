<template>
  <a-config-provider
    :locale="dict[locale]"
    :theme="{ token: { colorPrimary: color } }"
  >
    <RouterView />
  </a-config-provider>
</template>

<script setup>
import enUS from "ant-design-vue/es/locale/en_US";
import zhCN from "ant-design-vue/es/locale/zh_CN";

import { useI18n } from "vue-i18n";
const { locale } = useI18n();

const dict = {
  enUS,
  zhCN,
};

import dayjs from "dayjs";
import "dayjs/locale/zh-cn";

dayjs.locale(locale.value);

import { storeToRefs } from "pinia";
import { useStore } from "@/store/theme";
const themeStore = useStore();
const { color } = storeToRefs(themeStore);
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
