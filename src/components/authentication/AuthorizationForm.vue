<template>
  <div class="text-center">
    <form @submit.stop.prevent="login(username, password)">
      <h1 class="h3 mb-3 fw-normal">Войти в систему</h1>
      <div class="form-floating">
        <input
          type="text"
          class="form-control"
          id="floatingInput"
          placeholder="Username"
          required
          v-model="username"
        />
        <label for="floatingInput">Имя пользователя</label>
      </div>
      <div class="form-floating">
        <input
          type="password"
          class="form-control"
          id="floatingPassword"
          placeholder="Password"
          required
          v-model="password"
        />
        <label for="floatingPassword">Пароль</label>
      </div>

      <button class="w-100 btn btn-lg btn-primary" type="submit">Войти</button>
    </form>

    <div
      class="alert alert-danger alert-dismissible fade show error-alert"
      role="alert"
      v-if="this.isError"
    >
      {{ this.errorMessage }}
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        @click="
          this.isError = false;
          this.errorMessage = '';
        "
      ></button>
    </div>

    <button
      class="w-100 btn btn-lg btn-secondary regbtn"
      v-on:click="registration()"
    >
      Регистрация
    </button>
  </div>
</template>

<script>
import { authService } from "@/_services/authentication";

export default {
  name: "AuthorizationForm",
  data() {
    return {
      isError: false,
      errorMessage: "",
    };
  },
  methods: {
    registration() {
      this.$router.push("/register");
    },
    async login(username, password) {
      try {
        let response = await authService.login(username, password);
        if (response == null) {
          this.isError = true;
          this.errorMessage = "Логин или пароль введены неверно";
          return;
        }
        this.$router.push("/");
      } catch (ex) {
        if (ex instanceof TypeError) {
          this.isError = true;
          this.errorMessage = ex.message;
          return;
        }

        throw ex;
      }
    },
  },
};
</script>

<style scoped>
.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="text"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.form-signin .regbtn {
  margin-top: 10px;
}

.error-alert {
  margin-top: 10px;
  margin-bottom: 0px;
}
</style>
