<template>
  <tr>
    <th scope="row" class="text-center">{{ product.id }}</th>
    <td>
      <p class="fw-normal mb-1">{{ product.name }}</p>
      <p class="text-muted mb-0">{{ product.name }}</p>
    </td>
    <td>{{ product.status }}</td>
    <td>{{ product.price }}</td>
    <td class="text-center">
      <button type="button" class="btn btn-sm btn-light" style="border-radius: 20px;">
        Заказать
      </button>
    </td>
  </tr>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ContractorProductRow",
  props: {
    product: {
      id: Number,
      name: String,
      status: String,
      price: Number,
    },
  },
});
</script>
