import { createWebHashHistory, createRouter } from 'vue-router'
import BasicLayout from "@/layout/BasicLayout.vue";
import ComponentRepository from "./module/example-page";
import ExceptionPage from "./module/exception-page";
import Workbench from "./module/workbench";
import { h } from "vue";
import { SettingOutlined } from "@ant-design/icons-vue";

const routes = [
  {
    path: "/",
    redirect: "/workbench",
    hideInMenu: true,
  },
  {
    path: "/menu",
    name: "menu",
    component: BasicLayout,
    children: [
      ...Workbench,
      ...ComponentRepository,
      ...ExceptionPage,
      {
        path: "/setting",
        name: "MySetting",
        meta: {
          title: "个人设置",
          icon: () => h(SettingOutlined),
          i18n: "personalSettings",
        },
        component: () =>
          import(
            /* webpackChunkName: "my-setting" */ "@/views/Setting/MySetting.vue"
          ),
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    hideInMenu: true,
    component: () =>
      import(/* webpackChunkName: "common" */ "@/views/Login/MyLogin.vue"),
  },
  {
    path: '/:catchAll(.*)',
    name: "AllNotFound",
    hideInMenu: true,
    component: () =>
      import(
        /* webpackChunkName: "common" */ "@/views/ExceptionPage/NotFound.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.path === "/login") {
    next();
  } else {
    let token = localStorage.getItem("token");
    if (token) {
      next();
    } else {
      next("/login");
    }
  }
});

export default router;
