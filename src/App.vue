<template>
  <BaseNavbar v-if="!$route.meta.hideNavbar"/>
  <router-view />
</template>

<script>
import BaseNavbar from "@/components/BaseNavbar.vue";

export default {
  name: "App",
  components: {
    BaseNavbar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}

html,
body {
  height: 100%;
}
</style>
