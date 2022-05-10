<template>
  <th scope="row" class="text-center">{{ product.id }}</th>
  <td>
    <p class="fw-normal mb-1">{{ product.name }}</p>
    <p class="text-muted mb-0">{{ product.name }}</p>
  </td>
  <td>{{ product.status }}</td>
  <td><router-link :to="'/contractor/' + product.contractor_id">{{ product.contractor_name }}</router-link></td>
  <td>
    <button type="button" class="btn btn-sm btn-light" style="border-radius: 20px;">
      Заказать
    </button>
  </td>
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
      contractor_id: Number,
      contractor_name: String,
    },
  },
});
</script>
