<template>
  <div class="container">
    <p class="h1">Поставщики</p>
    <table class="table align-middle mb-0 bg-white border table-bordered table-hover table-striped">
      <thead class="bg-light">
        <tr>
          <th style="width: 12%" class="text-center">ID поставщика</th>
          <th>Поставщик</th>
          <th>ИНН</th>
          <th>Адрес</th>
          <th>Время активности</th>
        </tr>
      </thead>
      <tbody>
        <ContractorRow :contractor="contractor" v-for="contractor in contractors" :key="contractor.id" />
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

import ContractorRow from "@/components/contractors/ContractorRow.vue";
import BasePages from "@/components/BasePages.vue";

export default defineComponent({
  name: "ContractorsView",
  components: { ContractorRow, BasePages },
  data: function () {
    return {
      contractors: [],
      pageSize: 30,
      pageCount: 0,
      pageNumber: this.page === undefined ? 1 : this.page,
    };
  },
  props: ["page"],
  created: async function () {
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
  },
  watch: {
    async page(newPageNumber) {
      this.pageNumber = newPageNumber === undefined ? 1 : newPageNumber;
      await this.updateContractors(this.pageSize, this.pageNumber);
    },
  },
});
</script>
