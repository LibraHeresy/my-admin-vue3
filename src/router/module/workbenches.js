import MyWorkbenches from "@/views/Workbenches/MyWorkbenches.vue";

const routes = [
  {
    path: "/workbenches",
    name: "MyWorkbenches",
    meta: {
      title: "工作台",
      icon: "desktop",
      i18n: "workbenches",
      role: ["admin"],
    },
    component: MyWorkbenches,
  },
];

export default routes;
