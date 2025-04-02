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
          <ColorPicker :value="color" @change="updateThemeColor" />
        </template>
      </a-list-item>
    </a-list>
  </div>
</template>

<script setup lang="ts">
import ColorPicker from "@/components/ColorPicker.vue";
import { storeToRefs } from "pinia";
import { useStore } from "@/store/theme";

const themeStore = useStore();
const { theme, color } = storeToRefs(themeStore);

const handleSwitchChange = (checked: boolean) => {
  if (checked) {
    themeStore.setTheme("dark");
  } else {
    themeStore.setTheme("light");
  }
};

const updateThemeColor = (color: string) => {
  themeStore.setColor(color);
};
</script>

<style lang="less" scoped></style>
