import MyWorkbenches from "@/views/Workbenches/MyWorkbenches.vue";
import { h } from "vue";
import { DesktopOutlined } from "@ant-design/icons-vue";

const routes = [
  {
    path: "/workbenches",
    name: "MyWorkbenches",
    meta: {
      title: "工作台",
      icon: () => h(DesktopOutlined),
      i18n: "workbenches",
      role: ["admin"],
    },
    component: MyWorkbenches,
  },
];

export default routes;
