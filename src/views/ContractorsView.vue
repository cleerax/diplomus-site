<template>
  <div class="container">
    <p class="h1">Поставщики</p>
    <div>
      <hr />
      <button class="btn btn-primary me-3" v-show="this.isAdmin()">Добавить</button>
      <button class="btn btn-danger" :disabled="this.selected.size == 0" v-show="this.isAdmin()">Удалить</button>
      <hr />
    </div>
    <ContractorsSearchBar />
    <table class="table align-middle mb-0 bg-white border table-bordered table-hover table-striped">
      <thead class="bg-light">
        <tr>
          <th style="width: 3%"></th>
          <th style="width: 12%" class="text-center">ID поставщика</th>
          <th>Поставщик</th>
          <th>ИНН</th>
          <th>Адрес</th>
          <th>Время активности</th>
        </tr>
      </thead>
      <tbody>
        <ContractorRow
          :contractor="contractor"
          v-for="contractor in contractors"
          :key="contractor.id"
          @addSelected="this.addSelected"
          @removeSelected="this.removeSelected"
        />
      </tbody>
    </table>
    <BasePages :pageCount="this.pageCount" :pageNumber="this.pageNumber" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import { defineComponent } from "vue";
import { contractorsService } from "@/_services/contractors";
import { authService } from "@/_services/authentication";

import ContractorRow from "@/components/contractors/ContractorRow.vue";
import BasePages from "@/components/BasePages.vue";
import ContractorsSearchBar from "@/components/contractors/ContractorsSearchBar.vue";

export default defineComponent({
  name: "ContractorsView",
  components: { ContractorRow, BasePages, ContractorsSearchBar },
  data: function () {
    return {
      contractors: [],
      pageSize: 30,
      pageCount: 0,
      pageNumber: this.page === undefined ? 1 : this.page,
      selected: undefined,
    };
  },
  props: ["page"],
  created: async function () {
    this.selected = new Set();

    try {
      await this.updateContractors(this.pageSize, this.pageNumber);
      this.pageCount = (await contractorsService.getPageCount(this.pageSize)).pageCount;
    } catch (ex) {
      alert(ex);
    }
  },
  methods: {
    async updateContractors(pageSize, pageNumber) {
      this.contractors = await contractorsService.getPage(pageSize, pageNumber);
    },
    addSelected(id) {
      this.selected.add(id);
      console.log(this.selected);
    },
    removeSelected(id) {
      this.selected.delete(id);
      console.log(this.selected);
    },
    isAdmin() {
      return authService.isAdmin();
    },
  },
  watch: {
    async page(newPageNumber) {
      this.pageNumber = newPageNumber === undefined ? 1 : newPageNumber;
      await this.updateContractors(this.pageSize, this.pageNumber);
    },
  },
});
</script>
