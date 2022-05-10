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
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <ProductRow :product="product" />
        </tr>
      </tbody>
    </table>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import { defineComponent } from "vue";
import ProductRow from "@/components/products/ProductRow.vue";

export default defineComponent({
  name: "HomeView",
  components: { ProductRow },
  data: function () {
    return {
      products: [
        {
          id: 1,
          name: "TestProduct",
          status: "TestStatus",
          contractor_id: 421,
          contractor_name: "TestContractor",
        },
      ],
    };
  },
});
</script>
