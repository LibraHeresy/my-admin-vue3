import { defineStore } from "pinia";
import i18n from "@/language/i18n";

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
      i18n.locale = data;
    },
  },
});
