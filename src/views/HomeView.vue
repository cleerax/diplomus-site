<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { authService } from "../_services/authentication.js";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },

  created: function () {
    if (!authService.isAuthenticated()) this.$router.push("/auth");
  },
};
</script>
