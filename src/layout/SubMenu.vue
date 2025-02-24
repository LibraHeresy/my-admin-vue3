<template>
  <a-sub-menu :key="props.menuInfo.path">
    <template #icon v-if="props.menuInfo?.meta?.icon">
      <component :is="props.menuInfo.meta.icon" />
    </template>
    <template #title>
      <span v-if="!props.collapsed">
        {{
          props.menuInfo.meta?.i18n
            ? $t(props.menuInfo.meta.i18n)
            : props.menuInfo.meta?.title
        }}
      </span>
    </template>
    <template v-for="item in props.menuInfo.children">
      <template v-if="!item.hideInMenu">
        <a-menu-item v-if="!item.children" :key="item.path">
          <template #icon v-if="item.meta?.icon">
            <component :is="item.meta.icon" />
          </template>
          <span v-if="!props.collapsed">
            {{ item.meta?.i18n ? $t(item.meta.i18n) : item.meta?.title }}
          </span>
        </a-menu-item>
        <SubMenu v-else :menu-info="item" />
      </template>
    </template>
  </a-sub-menu>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps(["menuInfo", "collapsed"]);
</script>
