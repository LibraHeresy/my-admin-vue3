import { createApp } from "vue";
import App from "./App.vue";

// 引入 antd
import Antd from "ant-design-vue";
import "ant-design-vue/dist/reset.css";

// 引入路由
import router from "./router";

// 引入状态管理
import { createPinia } from "pinia";
const pinia = createPinia();

// 引入状态管理持久化插件
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
pinia.use(piniaPluginPersistedstate);

// 引入 Mock
import "./mock/mock";

// 引入 wangeditor 富文本
import "@wangeditor/editor/dist/css/style.css";

// 引入 less 运行时
import "less";

// 引入 i18n
import i18n from "./language/i18n";

createApp(App).use(router).use(pinia).use(Antd).use(i18n).mount("#app");
