<template>
  <div class="custom-setting">
    <a-list item-layout="horizontal">
      <a-list-item>
        <a-list-item-meta title="风格配色" description="整体风格配色设置">
        </a-list-item-meta>
        <template #extra>
          <a-switch
            checked-children="暗色"
            un-checked-children="浅色"
            default-checked
            :checked="theme === 'dark'"
            @change="handleSwitchChange"
          />
        </template>
      </a-list-item>
      <a-list-item>
        <a-list-item-meta title="主题色" description="页面风格配色设置">
        </a-list-item-meta>
        <template #extra>
          <ColorPicker @change="updateThemeColor" />
        </template>
      </a-list-item>
    </a-list>
  </div>
</template>

<script setup>
import ColorPicker from "@/components/ColorPicker.vue";
import { storeToRefs } from "pinia";
import { useStore } from "@/store/theme";
const themeStore = useStore();
const { theme } = storeToRefs(themeStore);

const handleSwitchChange = (checked) => {
  if (checked) {
    themeStore.setTheme("dark");
  } else {
    themeStore.setTheme("light");
  }
};

const updateThemeColor = (color) => {
  if (window.less) {
    window.less
      .modifyVars({
        "@primary-color": color, // 新的主题色
      })
      .then(() => {
        console.log("Theme changed successfully");
        window.less.refreshStyles(); //好像可有可无
      })
      .catch((error) => {
        console.error("Failed to change theme", error);
      });
  } else {
    console.error("Less is not loaded correctly");
  }
};
</script>

<style lang="less" scoped></style>
