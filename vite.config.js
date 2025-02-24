import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true, // 启用 JavaScript 支持
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // 将 `@` 别名指向项目根目录下的 `src` 文件夹
    },
  },
})
