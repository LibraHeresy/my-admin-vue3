import { defineStore } from "pinia";
import { useI18n } from "vue-i18n";

export const useStore = defineStore("theme", {
  state: () => ({
    theme: "dark",
    localLanguage: "zhCN",
  }),
  actions: {
    setTheme(data) {
      this.theme = data;
    },
    setLocalLanguage(data) {
      this.localLanguage = data;
      const { locale } = useI18n();
      locale.value = data;
      console.log(locale.value);
    },
  },
});
