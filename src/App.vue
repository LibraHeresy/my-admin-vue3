<template>
  <a-config-provider
    :locale="dict[safeLocale]"
    :theme="{ token: { colorPrimary: color } }"
  >
    <RouterView />
  </a-config-provider>
</template>

<script setup lang="ts">
import enUS from "ant-design-vue/es/locale/en_US";
import zhCN from "ant-design-vue/es/locale/zh_CN";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import { useI18n } from "vue-i18n";
import { storeToRefs } from "pinia";
import { useStore } from "@/store/theme";
import { computed } from "vue";

// 定义 locale 的合法取值范围
type LocaleKey = keyof typeof dict;

const { locale } = useI18n();
const dict = {
  enUS,
  zhCN,
} as const; // 使用 as const 确保 dict 的键为字面量类型

const themeStore = useStore();
const { color } = storeToRefs(themeStore);

// 确保 safeLocale 的类型为 LocaleKey
const safeLocale = computed<LocaleKey>(() => {
  const currentLocale = locale.value as string;
  return (currentLocale in dict ? currentLocale : "enUS") as LocaleKey;
});

dayjs.locale(safeLocale.value);
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