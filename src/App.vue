<template>
  <BaseNavbar v-if="!$route.meta.hideNavbar" />
  <router-view />
  <div class="container" v-if="!$route.meta.hideNavbar">
    <footer class="py-3">
      <div class="justify-content-center border-bottom mb-3" />
      <p class="text-center text-muted">2022 Андрей Минаев</p>
    </footer>
  </div>
</template>

<script>
import BaseNavbar from "@/components/BaseNavbar.vue";
import { defineComponent } from "vue";
import { authService } from "@/_services/authentication.js";

export default defineComponent({
  name: "App",
  components: {
    BaseNavbar,
  },
  created: function () {
    if (!authService.isAuthenticated()) this.$router.push("/auth");
  },
});
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
