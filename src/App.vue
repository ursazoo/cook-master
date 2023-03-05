<template>
  <NConfigProvider inline-theme-disabled>
    <div class="container">
      <div class="background" />
      <RouterView />
    </div>
  </NConfigProvider>
</template>

<script setup lang="ts">
import { NConfigProvider } from 'naive-ui';
</script>

<style lang="scss" scoped>
.background {
  position: relative;
  width: 100vw;
  height: 100vh;
  background: url('@/assets/images/background.webp') repeat;
  background-size: 15%;
  filter: blur(1px);
}
</style>
