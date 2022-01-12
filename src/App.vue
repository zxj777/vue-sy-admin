<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { ConfigProvider } from 'ant-design-vue'
import { AppProvider } from '@/components/Application'
import HelloWorld from '@/components/HelloWorld.vue'
</script>

<template>
  <ConfigProvider>
    <AppProvider>
      <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
      <img alt="Vue logo" src="./assets/logo.png" />
    </AppProvider>
  </ConfigProvider>
</template>

<style lang="less">
#app {
  user-select: none;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
