<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider
      v-model:collapsed="collapsed"
      :trigger="null"
      collapsible
      :width="240"
      :theme="theme"
    >
      <div class="logo-wrapper">
        <img class="logo" src="@/assets/logo.png" alt="logo" />
        <template v-if="!collapsed">
          <div
            class="title"
            :style="{
              color: theme === 'dark' ? '#fff' : '#000',
            }"
          >
            My-Admin-Vue3
          </div>
        </template>
      </div>
      <a-menu
        :theme="theme"
        mode="inline"
        :selectedKeys="[$route.path]"
        :openKeys.sync="openKeys"
        @select="handleMenuClick"
      >
        <template v-for="item in menus">
          <template v-if="!item.hideInMenu">
            <a-menu-item v-if="!item.children" :key="item.path">
              <template #icon v-if="item.meta?.icon">
                <component :is="item.meta.icon" />
              </template>
              <span v-if="!collapsed">{{ getTitle(item) }}</span>
            </a-menu-item>
            <SubMenu v-else :menu-info="item" :collapsed="collapsed" />
          </template>
        </template>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header
        style="
          background: #fff;
          padding: 0;
          display: flex;
          justify-content: space-between;
        "
      >
        <div @click="() => (collapsed = !collapsed)">
          <MenuUnfoldOutlined v-if="collapsed" class="trigger" />
          <MenuFoldOutlined v-else class="trigger" />
        </div>
        <div style="margin-right: 36px">
          <a-dropdown>
            <UserOutlined class="dropdown-icon" />
            <template #overlay>
              <a-menu>
                <a-menu-item>
                  <a
                    href="javascript:;"
                    @click="() => router.push({ path: '/setting' })"
                  >
                    个人设置
                  </a>
                </a-menu-item>
                <a-menu-item>
                  <a href="javascript:;" @click="() => logout()">退出登录</a>
                </a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
          <a-dropdown>
            <GlobalOutlined class="dropdown-icon" />
            <template #overlay>
              <a-menu>
                <a-menu-item>
                  <a
                    href="javascript:;"
                    @click="() => handleChangeLanguage('zhCN')"
                  >
                    中文
                  </a>
                </a-menu-item>
                <a-menu-item>
                  <a
                    href="javascript:;"
                    @click="() => handleChangeLanguage('enUS')"
                  >
                    English
                  </a>
                </a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
        </div>
      </a-layout-header>
      <a-layout-content>
        <div class="content-header">
          <a-breadcrumb>
            <a-breadcrumb-item>{{ $t("home") }}</a-breadcrumb-item>
            <a-breadcrumb-item v-for="title in breadcrumbs" :key="title">
              <a href="">{{ title }}</a>
            </a-breadcrumb-item>
          </a-breadcrumb>
          {{ breadcrumbs[breadcrumbs.length - 1] || "" }}
        </div>
        <div class="content-wrapper">
          <router-view />
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script setup>
import SubMenu from "./SubMenu.vue";
import { ref, watch, h } from "vue";
import { storeToRefs } from "pinia";
import { useThemeStore } from "@/store/theme";
import { useRoute, useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import {
  GlobalOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
} from "@ant-design/icons-vue";

// 控制菜单折叠
let collapsed = ref(false);
let openKeys = ref([]);
let tempOpenKeys = ref([]);
watch(collapsed, (val) => {
  if (val) {
    tempOpenKeys = [...openKeys];
    openKeys = [];
  } else {
    openKeys = [...tempOpenKeys];
    tempOpenKeys = [];
  }
});

// 监控 route 变化，重新获取面包屑
const route = useRoute();
watch(
  () => route.path,
  () => {
    getBreadcrumb();
  }
);

// 获取菜单数据
let menus = ref([]);
let menusMap = ref({});
const router = useRouter();
let menuRoute =
  router.options.routes.find((item) => item.name === "menu") || {};
menus = menuRoute?.children || [];
const setMenusMap = (routes, parentPath = "") => {
  routes.map((route) => {
    menusMap[route.path] = {
      ...route,
      parentPath,
    };
    if (route.children) {
      setMenusMap(route.children, route.path);
    }
  });
};
setMenusMap(menus);
openKeys = [menusMap[route.path]?.parentPath || ""];

// 语言切换
const themeStore = useThemeStore();
const { theme, localLanguage } = storeToRefs(themeStore);
watch(localLanguage, () => {
  getBreadcrumb();
});
const setLocalLanguage = (val) => {
  themeStore.setLocalLanguage(val);
};
const handleChangeLanguage = (value) => {
  setLocalLanguage(value);
};

// 获取标题
const { t } = useI18n();
const getTitle = (item) => {
  return item?.meta?.i18n ? t(item.meta.i18n) : item?.meta?.title || "";
};

// 渲染面包屑
let breadcrumbs = ref([]);
const getBreadcrumb = () => {
  const arr = getBreadcrumbTitle(route.path);
  breadcrumbs = [...arr.reverse()];
};
const getBreadcrumbTitle = (path) => {
  let breadcrumb = [];
  const ob = menusMap[path];
  breadcrumb.push(getTitle(ob) || "");
  if (ob?.parentPath) {
    const arr = getBreadcrumbTitle(ob.parentPath);
    breadcrumb.push(...arr);
  }
  return breadcrumb;
};
getBreadcrumb();

// 菜单路由跳转
const handleMenuClick = (e) => {
  if (e.key === router.currentRoute.value.path) return;
  router.push({
    path: e.key,
  });
};

// 退出登录
const logout = () => {
  localStorage.removeItem("token");
  router.push({
    path: "/login",
  });
};
</script>
<style lang="less" scoped>
#components-layout-demo-custom-trigger {
  height: 100vh;
  box-sizing: border-box;
}
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo-wrapper {
  height: 32px;
  margin: 16px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

#components-layout-demo-custom-trigger .logo {
  width: 32px;
  height: 32px;
  object-fit: contain;
}

#components-layout-demo-custom-trigger .title {
  margin-left: 8px;
  white-space: nowrap;
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
}

#components-layout-demo-custom-trigger .content-header {
  background-color: #ffffff;
  margin-top: 2px;
  height: 80px;
  color: rgba(0, 0, 0, 0.85);
  font-weight: 600;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 24px;
}

#components-layout-demo-custom-trigger .content-wrapper {
  flex: 1;
  padding: 24px;
  box-sizing: border-box;
  overflow-y: scroll;
}

.dropdown-icon {
  font-size: 18px;
  line-height: 64px;
  padding: 0px 14px;
  cursor: pointer;
  transition: color 0.3s;
}

.ant-layout-content {
  display: flex;
  flex-direction: column;
}
</style>
