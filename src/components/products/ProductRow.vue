<template>
  <tr :rowspan="rowspan">
    <th scope="row" class="text-center">{{ product.id }}</th>
    <td>
      <p class="fw-normal mb-1">{{ product.name }}</p>
      <p class="text-muted mb-0">{{ product.name }}</p>
    </td>
    <td>{{ product.status }}</td>
    <td>
      <tr v-for="contractor in product.contractors" :key="contractor.id">
        <td><router-link class="link-secondary" :to="'/contractor/' + contractor.id">{{ contractor.name }}</router-link></td>
      </tr>
    </td>
    <td>
      <tr v-for="contractor in product.contractors" :key="contractor.id">
        <td>{{ contractor.price }}</td>
      </tr>
    </td>
    <td>
      <button type="button" class="btn btn-sm btn-light" style="border-radius: 20px;">
        Заказать
      </button>
    </td>
  </tr>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProductRow",
  props: {
    product: {
      id: Number,
      name: String,
      status: String,
      contractors: [
        {
          id: Number,
          name: String,
          price: Number,
        },
      ],
    },
  },
  data: function () {
    return {
      rowspan: this.product.contractors.length,
    };
  },
});
</script>
