<template>
  <div class="text-center">
    <form>
      <h1 class="h3 mb-3 fw-normal">Войти в систему</h1>
      <div class="form-floating">
        <input
          type="email"
          class="form-control"
          id="floatingInput"
          placeholder="name@example.com"
          required
        />
        <label for="floatingInput">Электронная почта</label>
      </div>
      <div class="form-floating">
        <input
          type="password"
          class="form-control"
          id="floatingPassword"
          placeholder="Password"
          required
        />
        <label for="floatingPassword">Пароль</label>
      </div>

      <button class="w-100 btn btn-lg btn-primary" type="submit">Войти</button>
    </form>

    <button
      class="w-100 btn btn-lg btn-secondary regbtn"
      v-on:click="registration()"
    >
      Регистрация
    </button>
  </div>
</template>

<script>
export default {
  name: "AuthorizationForm",
  methods: {
    registration() {
      this.$router.push("/register");
    },
  },
};
</script>

<style scoped>
.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
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
</style>
