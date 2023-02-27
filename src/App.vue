<script setup lang="ts"></script>

<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <nav>
        {{ text }}
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/link" />
      </nav>
    </div>
  </header> -->

  <div class="container">
    <div class="background"></div>
    <RouterView />
  </div>
</template>

<style lang="scss" scoped>
.background {
  position: relative;
  width: 100vw;
  height: 100vh;
  // padding-top: 50px;

  background: url('@/assets/images/background.webp') repeat;
  background-size: 15%;

  filter: blur(1px);
}
</style>
