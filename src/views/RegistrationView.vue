<template>
  <div class="register">
    <RegistrationForm class="form-register" />
  </div>
</template>

<script>
// @ is an alias to /src
import RegistrationForm from "@/components/authentication/RegistrationForm.vue";

export default {
  name: "RegistrationView",
  components: {
    RegistrationForm,
  },
};
</script>

<style scoped>
.register {
  display: flex;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
  height: 100%;
}

.form-register {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
</style>
