import { defineStore } from "pinia";

export interface TransferInfoImpl {
  paymentAccount: string;
  receiverAccount: string;
  receiver: string;
  transferAmount: number;
}

interface StateImpl {
  step: number;
  transferInfo: TransferInfo;
}

export class TransferInfo implements TransferInfoImpl {
  paymentAccount: string;
  receiverAccount: string;
  receiver: string;
  transferAmount: number;

  constructor() {
    this.paymentAccount = '';
    this.receiverAccount = '';
    this.receiver = '';
    this.transferAmount = 0;
  }
}

export const useStore = defineStore("step", {
  state: (): StateImpl => ({
    step: 0,
    transferInfo: new TransferInfo(),
  }),
  actions: {
    setStep(data: number) {
      this.step = data;
    },
    setTransferInfo(data: TransferInfo) {
      this.transferInfo = data;
    },
  },
  persist: true,
});
