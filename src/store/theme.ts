import { defineStore } from "pinia";

interface StateImpl {
  theme: string;
  localLanguage: string;
  color: string;
}

export const useStore = defineStore("theme", {
  state: (): StateImpl => ({
    theme: "dark",
    localLanguage: "zhCN",
    color: '#1890ff'
  }),
  actions: {
    setTheme(data: string) {
      this.theme = data;
    },
    setLocalLanguage(data: string) {
      this.localLanguage = data;
    },
    setColor(data: string) {
      this.color = data;
    },
  },
  persist: true,
});
