import { createI18n } from "vue-i18n";
import enUS from "./enUS";
import zhCN from "./zhCN";

const messages = {
  enUS,
  zhCN,
};

const i18n = createI18n({
  locale: "zhCN", // 默认语言
  fallbackLocale: "zhCN", // 回退语言
  messages,
});

export default i18n;
