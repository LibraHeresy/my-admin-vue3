import { defineStore } from "pinia";

export const useStore = defineStore("theme", {
  state: () => ({
    theme: "dark",
    localLanguage: "zhCN",
    color: '#1890ff'
  }),
  actions: {
    setTheme(data) {
      this.theme = data;
    },
    setLocalLanguage(data) {
      this.localLanguage = data;
    },
    setColor(data) {
      this.color = data;
    },
  },
  persist: true,
});
