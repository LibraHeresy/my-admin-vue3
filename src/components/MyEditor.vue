<template>
  <div style="border: 1px solid #ccc">
    <Toolbar
      style="border-bottom: 1px solid #ccc"
      :editor="editorRef"
      :defaultConfig="toolbarConfig"
      :mode="mode"
    />
    <Editor
      style="height: 150px; overflow-y: hidden"
      :value="value"
      :defaultConfig="editorConfig"
      :mode="mode"
      @onCreated="onCreated"
      @onChange="handleInput"
    />
  </div>
</template>

<script setup>
import { Editor, Toolbar } from "@wangeditor/editor-for-vue";
import { ref, shallowRef, onBeforeUnmount } from "vue";
import { defineEmits } from "vue";

const emits = defineEmits(["input"]);

const handleInput = (value) => {
  emits("input", value.getHtml());
};

const props = defineProps({
  value: {
    type: String,
    default: "",
  },
});

const editorRef = shallowRef();

const toolbarConfig = {};

const editorConfig = {
  placeholder: "请输入内容...",
};

const mode = ref("default");

const onCreated = (editor) => {
  editorRef.value = Object.seal(editor);
};

onBeforeUnmount(() => {
  const editor = editorRef.value;
  if (editor) {
    editor.destroy();
  }
});
</script>
