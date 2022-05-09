<template>
  <div class="text-center">
    <form @submit.stop.prevent="register(username, password, email)">
      <h1 class="h3 mb-3 fw-normal">Регистрация</h1>
      <div class="form-floating">
        <input
          type="text"
          class="form-control"
          id="floatingUsername"
          placeholder="Username"
          required
          v-model="username"
        />
        <label for="floatingInput">Имя пользователя</label>
      </div>
      <div class="form-floating">
        <input
          type="email"
          class="form-control"
          id="floatingEmail"
          placeholder="name@example.com"
          v-model="email"
        />
        <label for="floatingInput">Электронная почта</label>
      </div>
      <div class="form-floating pwd">
        <input
          type="password"
          class="form-control"
          id="password"
          placeholder="Password"
          required
          v-model="password"
          @change="validatePassword()"
        />
        <label for="floatingPassword">Пароль</label>
      </div>
      <div class="form-floating pwd-repeat">
        <input
          type="password"
          class="form-control"
          id="password-repeat"
          placeholder="Repeat password"
          required
          @change="validatePassword()"
        />
        <label for="floatingPasswordRepeat">Повторите пароль</label>
      </div>

      <button class="w-100 btn btn-lg btn-primary" type="submit">
        Зарегистрироваться
      </button>
    </form>
  </div>
</template>

<script>
// import { authService } from "@/_services/authentication";

export default {
  name: "RegistrationForm",
  methods: {
    register(username, password, email) {
      alert(username + password + email);
      // var response = await authService.register(username, password, email);

      // if (response == "error") {
      //   this.errorMessage = "Введенный логин занят";
      //   return;
      // }

      // await authService.login(username, password);
      // this.$router.push("/");
    },
    validatePassword() {
      let password = document.getElementById("password");
      let passwordRepeat = document.getElementById("password-repeat");

      if (password.value != passwordRepeat.value) {
        passwordRepeat.setCustomValidity("Пароли не совпадают");
      } else {
        passwordRepeat.setCustomValidity("");
      }
    },
  },
};
</script>

<style scoped>
.form-floating:focus-within {
  z-index: 2;
}

input[type="email"] {
  margin-top: 10px;
  margin-bottom: 10px;
}

.pwd input[type="password"] {
  margin-bottom: -1px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.pwd-repeat input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.regbtn {
  margin-top: 10px;
}
</style>
