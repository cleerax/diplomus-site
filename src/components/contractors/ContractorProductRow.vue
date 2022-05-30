<template>
  <tr>
    <th scope="row" class="text-center">{{ product.id }}</th>
    <td>
      <p class="fw-normal mb-1">{{ product.name }}</p>
      <p class="text-muted mb-0">{{ product.name }}</p>
    </td>
    <td>{{ product.category.name }}</td>
    <td>{{ product.status }}</td>
    <td>{{ product.price }}</td>
    <td>{{ product.deliveryPrice }}</td>
    <td>{{ product.marketPrice }}</td>
    <td>{{ product.isAvailable ? "Доступно" : "Недоступно" }}</td>
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
      category: String,
      status: String,
      price: Number,
      devileryPrice: Number,
      available: String,
      marketPrice: Number,
    },
  },
});
</script>
