<template>
  <div class="container">
    <p class="h1">Товары поставщиков</p>
    <table class="table align-middle mb-0 bg-white border table-bordered table-hover table-striped">
      <thead class="bg-light">
        <tr>
          <th style="width: 8%" class="text-center">ID товара</th>
          <th>Наименование</th>
          <th>Статус</th>
          <th>Поставщик</th>
          <th>Цена</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <ProductRow :product="product" v-for="product in products" :key="product.id"/>
      </tbody>
    </table>
    <BasePages :pageCount="15" :pageNumber="this.pageNumber" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import { defineComponent } from "vue";
import { productsService } from "@/_services/products";

import ProductRow from "@/components/products/ProductRow.vue";
import BasePages from "@/components/BasePages.vue";

export default defineComponent({
  name: "HomeView",
  components: { ProductRow, BasePages },
  data: function () {
    return {
      products: [],
      pageSize: 30,
      pageCount: 0,
      pageNumber: this.page === undefined ? 1 : this.page,
    };
  },
  props: ["page"],
  created: async function () {
    try {
      await this.updateProduts(this.pageSize, this.pageNumber);
      this.pageCount = (await productsService.getPageCount(this.pageSize)).pageCount;
    } catch (ex) {
      alert(ex);
    }
  },
  methods: {
    async updateProduts(pageSize, pageNumber) {
      this.products = await productsService.getPage(pageSize, pageNumber);
    },
  },
  watch: {
    async page(newPageNumber) {
      this.pageNumber = newPageNumber === undefined ? 1 : newPageNumber;
      await this.updateProduts(this.pageSize, this.pageNumber);
    },
  },
});
</script>
