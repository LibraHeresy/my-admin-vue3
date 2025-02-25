<template>
  <div class="color-picker">
    <input
      id="color-picker-input"
      class="color-picker-input"
      :value="value"
      @input="handleInput"
      type="color"
    />
    <div
      class="color-picker-box"
      :style="{
        backgroundColor: value,
      }"
      @click="handleClick"
    />
    <div class="color-picker-text">
      {{ value }}
    </div>
  </div>
</template>

<script setup>
import { defineEmits } from "vue";
import { throttle } from "lodash";

const props = defineProps({
  value: {
    type: String,
    default: "#ffffff",
  },
});

const emits = defineEmits(["change"]);
const handleClick = () => {
  const dom = document.getElementById("color-picker-input");
  dom.click();
};
const handleInput = throttle((e) => {
  emits("change", e.target.value);
}, 100);
</script>

<style lang="less" scoped>
.color-picker {
  padding: 4px;
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 6px;
  position: relative;

  .color-picker-input {
    position: absolute;
    z-index: -1;
    width: 24px;
    height: 24px;
  }
  .color-picker-box {
    width: 24px;
    height: 24px;
    cursor: pointer;
    border: 1px solid #ccc;
    margin-right: 4px;
    border-radius: 4px;
  }
  .color-picker-text {
    width: 60px;
    text-align: center;
    font-size: 14px;
    color: #333;
  }
}
</style>
