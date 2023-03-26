<template>
  <div>
    <NMessageProvider>
      <NuxtPage />
      <SigninModal />
    </NMessageProvider>
  </div>
</template>

<script setup lang="ts">
import { NMessageProvider } from 'naive-ui';
import SigninModal from '@/components/signin-modal/index.vue';
</script>


<style lang="scss">
@import './styles/font.scss';

.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(0.5rem);
}

* {
  font-family: FZBIAOYSJW;
}

html,
body {
  cursor: url('@/assets/images/spatula.png'), auto;

  &:hover {
    cursor: url('@/assets/images/spatula.png'), pointer !important;
  }
}

.n-tabs .n-tabs-tab {
  &:hover {
    cursor: url('@/assets/images/spatula.png'), pointer !important;
  }
}
</style>
