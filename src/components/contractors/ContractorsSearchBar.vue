<template>
  <nav class="navbar navbar-light row align-items-end justify-conetnt-end text-end">
    <div class="col mb-1">
      <label>Поиск по:</label>
    </div>
    <div class="col-3">
      <select class="form-select" aria-label="Выбор фильтра" id="searchtype">
        <option
          v-for="type in this.searchTypes"
          :key="type.value"
          :value="type.value"
        >
          {{ type.name }}
        </option>
      </select>
    </div>
    <div class="col-3">
      <div class="input-group" role="search">
        <input type="search" class="form-control" id="searchinput" placeholder="Поиск..." aria-label="Search">
        <button class="btn btn-outline-primary" @click="test">Поиск</button>
      </div>
    </div>
  </nav>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ContractorsSearchBar",
  data: function () {
    return {
      searchTypes: [
        { name: "ID поставщика", value: "contractor_id" },
        { name: "Название поставщика", value: "contractor_name" },
      ],
    };
  },
  methods: {
    test() {
      var input = document.getElementById("searchinput");
      var type = document.getElementById("searchtype");
      input.value = type.value;
    },
  },
});
</script>
