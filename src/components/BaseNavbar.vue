<template>
  <header class="p-3 mb-3 border-bottom">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><router-link to="/" class="nav-link px-2 link-dark">Товары</router-link></li>
          <li><router-link to="/contractors" class="nav-link px-2 link-dark">Поставщики</router-link></li>
          <li><router-link to="/about" class="nav-link px-2 link-dark">О проекте</router-link></li>
        </ul>

        <!--
        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
          <input type="search" class="form-control" placeholder="Search..." aria-label="Search">
        </form>
        -->

        <div class="dropdown text-end">
          <a href="#" class="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
            {{ username }}
          </a>
          <ul class="dropdown-menu text-small" aria-labelledby="dropdownUser1">
            <!--
            <li><a class="dropdown-item" href="#">New project...</a></li>
            <li><a class="dropdown-item" href="#">Settings</a></li>
            <li><a class="dropdown-item" href="#">Profile</a></li>
            <li><hr class="dropdown-divider"></li>
            -->
            <li><a class="dropdown-item" href="#" @click="logout()">Выйти</a></li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { authService } from "@/_services/authentication";
import { defineComponent } from "vue";

export default defineComponent({
  name: "BaseNavbar",
  data: function () {
    return {
      username: authService.getUserInfo().userName,
    };
  },
  methods: {
    logout() {
      authService.logout();
    },
  },
});
</script>

<style>
router-link-exact-active {
  color: whitesmoke;
  background: crimson;
  border-radius: .5rem;
}
</style>
