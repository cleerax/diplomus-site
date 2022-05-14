<template>
  <tr role="button" v-on:click="$router.push('/contractor/' + contractor.id)">
    <th scope="row" class="text-center">{{ contractor.id }}</th>
    <td>
      <div class="d-flex align-items-center">
        <img
          :src="contractor.imageLink"
          alt=""
          style="width: 45px; height: 45px"
          class="rounded-circle"
        />
        <div class="ms-3">
          <p class="fw-normal mb-1">{{ contractor.name }}</p>
          <p class="text-muted mb-0">{{ contractor.email }}</p>
        </div>
      </div>
    </td>
    <td>{{ contractor.inn }}</td>
    <td>{{ contractor.address }}</td>
    <td>{{ contractor.activeTime }}</td>
  </tr>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ContractorRow",
  props: {
    contractor: {
      id: Number,
      name: String,
      email: String,
      inn: String,
      address: String,
      imageLink: String,
      activeTime: String,
    },
  },
});
</script>