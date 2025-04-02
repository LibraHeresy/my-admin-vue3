import request from "./request";
import { AxiosResponse } from "axios";

const userApi = {
  // 获取工作台数据
  GetWorkbenchData: "/api/workbench/getData",
};

export function getWorkbenchData(parameter: object): Promise<ResponseData> {
  return request({
    url: userApi.GetWorkbenchData,
    method: "get",
    data: parameter,
  });
}
