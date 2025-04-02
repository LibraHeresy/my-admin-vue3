import { defineStore } from "pinia";

interface OrderImpl {
  orderNo: string;
  orderAmount: string;
  orderStatus: string;
  orderDate: string;
  orderType: string;
  worker: string;
  orderPayment: string;
}

interface StateImpl {
  order: OrderImpl;
}

class Order implements OrderImpl {
  orderNo: string;
  orderAmount: string;
  orderStatus: string;
  orderDate: string;
  orderType: string;
  worker: string;
  orderPayment: string;

  constructor() {
    this.orderNo = "20200801-0003";
    this.orderAmount = "300.00";
    this.orderStatus = "已支付";
    this.orderDate = "2020-08-01";
    this.orderType = "采购单";
    this.worker = "王五";
    this.orderPayment = "支付宝";
  }
}

export const useStore = defineStore("order", {
  state: (): StateImpl => ({
    order: new Order(),
  }),
  actions: {
    setOrder(data: OrderImpl) {
      this.order = data;
    },
  },
  persist: true,
});
