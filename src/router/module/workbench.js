import MyWorkbench from "@/views/Workbench/MyWorkbench.vue";
import { h } from "vue";
import { DesktopOutlined } from "@ant-design/icons-vue";

const routes = [
  {
    path: "/workbench",
    name: "MyWorkbench",
    meta: {
      title: "工作台",
      icon: () => h(DesktopOutlined),
      i18n: "workbench",
      role: ["admin"],
    },
    component: MyWorkbench,
  },
];

export default routes;
