<template>
  <a-sub-menu :key="props.menuInfo.path">
    <template #title>
      <a-icon
        v-if="props.menuInfo?.meta?.icon"
        :type="props.menuInfo.meta.icon"
      />
      <span v-if="!props.collapsed">
        {{
          props.menuInfo.meta?.i18n
            ? $t(props.menuInfo.meta.i18n)
            : props.menuInfo.meta?.title
        }}
      </span>
    </template>
    <template v-for="item in props.menuInfo.children">
      <template v-if="!item.hideInMenu" :key="item.path">
        <a-menu-item v-if="!item.children">
          <a-icon v-if="item.meta?.icon" :type="item.meta.icon" />
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
const props = defineProps(['menuInfo', 'collapsed'])
</script>
