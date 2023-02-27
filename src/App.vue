<script setup lang="ts"></script>

<template>
  <div class="container">
    <div class="background" />
    <RouterView />
  </div>
</template>

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
