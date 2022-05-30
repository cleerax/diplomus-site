<template>
  <tr :rowspan="rowspan">
    <td class="text-center">
      <input class="form-check-input" type="checkbox" @change="changeSelected" v-model="isSelected"/>
    </td>
    <th scope="row" class="text-center">{{ product.id }}</th>
    <td>
      <p class="fw-normal mb-1">{{ product.name }}</p>
      <!--<p class="text-muted mb-0">{{ product.name }}</p>-->
    </td>
    <td>{{ product.category.name }}</td>
    <td>{{ product.status }}</td>
    <td>{{ product.isAvailable ? "Доступно" : "Недоступно" }}</td>
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
      <tr v-for="contractor in product.contractors" :key="contractor.id">
        <td>{{ contractor.deliveryPrice }}</td>
      </tr>
    </td>
    <td>
      <tr v-for="contractor in product.contractors" :key="contractor.id">
        <td>{{ contractor.marketPrice }}</td>
      </tr>
    </td>
    <td>
      <tr v-for="contractor in product.contractors" :key="contractor.id">
        <td>{{ contractor.price1 }}</td>
      </tr>
    </td>
    <td>
      <tr v-for="contractor in product.contractors" :key="contractor.id">
        <td>{{ contractor.price2 }}</td>
      </tr>
    </td>
    <td>
      <tr v-for="contractor in product.contractors" :key="contractor.id">
        <td>{{ contractor.price3 }}</td>
      </tr>
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
      category: Object,
      status: String,
      contractors: [
        {
          id: Number,
          name: String,
          price: Number,
          deliveryPrice: Number,
          marketPrice: Number,
          price1: Number,
          price2: Number,
          price3: Number,
        },
      ],
      isAvailable: String,
    },
  },
  data: function () {
    return {
      rowspan: this.product.contractors.length,
      isSelected: false,
    };
  },
  methods: {
    changeSelected() {
      this.isSelected ? this.$emit("addSelected", this.product.id) : this.$emit("removeSelected", this.product.id);
    },
  },
});
</script>
