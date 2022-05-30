<template>
  <div class="container">
    <p class="h1">Товары поставщиков</p>
    <hr />
    <div>
      <button class="btn btn-primary" :disabled="this.selected.size == 0">Заказать</button>
      <button class="btn btn-success mx-3" :disabled="this.selected.size == 0">Статистика</button>
      <button class="btn btn-danger" :disabled="this.selected.size == 0" v-show="this.isAdmin()">Удалить</button>
    </div>
    <hr />
    <ProductsSearchBar />
    <table class="table align-middle mb-0 bg-white border table-hover table-striped">
      <thead class="bg-light">
        <tr>
          <th style="width: 3%"></th>
          <th style="width: 8%" class="text-center">ID товара</th>
          <th>Наименование</th>
          <th>Категория</th>
          <th>Статус</th>
          <th>Наличие на складе</th>
          <th>Поставщик</th>
          <th>Цена, ₽</th>
          <th>Цена доставки, ₽</th>
          <th>РРЦ, ₽</th>
          <th>Цена со ск. 10%, ₽</th>
          <th>Цена со ск. 5%, ₽</th>
          <th>Цена со ск. 3%, ₽</th>
        </tr>
      </thead>
      <tbody>
        <ProductRow
          :product="product"
          v-for="product in products"
          :key="product.id"
          @addSelected="this.addSelected"
          @removeSelected="this.removeSelected"
        />
      </tbody>
    </table>
    <BasePages :pageCount="this.pageCount" :pageNumber="parseInt(this.pageNumber)" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import { defineComponent } from "vue";
import { productsService } from "@/_services/products";
import { authService } from "@/_services/authentication";

import ProductRow from "@/components/products/ProductRow.vue";
import BasePages from "@/components/BasePages.vue";
import ProductsSearchBar from "@/components/products/ProductsSearchBar.vue";

export default defineComponent({
  name: "HomeView",
  components: { ProductRow, BasePages, ProductsSearchBar },
  data: function () {
    return {
      products: [],
      pageSize: 10,
      pageCount: 0,
      pageNumber: this.page === undefined ? 1 : this.page,
      selected: undefined,
    };
  },
  props: ["page"],
  created: async function () {
    try {
      this.selected = new Set();

      await this.updateProducts(this.pageSize, this.pageNumber);
      this.pageCount = (await productsService.getPageCount(this.pageSize)).pageCount;
    } catch (ex) {
      alert(ex);
    }
  },
  methods: {
    async updateProducts(pageSize, pageNumber) {
      this.products = await productsService.getPage(pageSize, pageNumber);

      this.selected = new Set();
    },
    addSelected(id) {
      this.selected.add(id);
    },
    removeSelected(id) {
      this.selected.delete(id);
    },
    isAdmin() {
      return authService.isAdmin();
    },
  },
  watch: {
    async page(newPageNumber) {
      this.pageNumber = newPageNumber === undefined ? 1 : newPageNumber;
      await this.updateProducts(this.pageSize, this.pageNumber);
    },
  },
});
</script>
