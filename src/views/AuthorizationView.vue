<template>
  <div class="signin">
    <AuthorizationForm class="form-signin" />
  </div>
</template>

<script>
// @ is an alias to /src
import AuthorizationForm from "@/components/authentication/AuthorizationForm.vue";

export default {
  name: "AuthorizationView",
  components: {
    AuthorizationForm,
  },
};
</script>

<style scoped>
.signin {
  display: flex;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
  height: 100%;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
</style>
