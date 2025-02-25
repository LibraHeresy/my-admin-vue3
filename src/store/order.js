import { defineStore } from "pinia";

export const useStore = defineStore("order", {
  state: () => ({
    order: {
      orderNo: "20200801-0003",
      orderAmount: "300.00",
      orderStatus: "已支付",
      orderDate: "2020-08-01",
      orderType: "采购单",
      worker: "王五",
      orderPayment: "支付宝",
    },
  }),
  actions: {
    setOrder(data) {
      this.order = data;
    },
  },
  persist: true,
});
