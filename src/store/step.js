import { defineStore } from "pinia";

export const useStepStore = defineStore("step", {
  state: () => ({
    step: 0,
    transferInfo: null,
  }),
  actions: {
    setStep(data) {
      this.step = data;
    },
    setTransferInfo(data) {
      this.transferInfo = data;
    },
  },
});
