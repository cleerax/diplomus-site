<template>
  <tr>
    <td class="text-center">
      <input class="form-check-input" type="checkbox" @change="changeSelected" v-model="isSelected"/>
    </td>
    <th scope="row" class="text-center">{{ contractor.id }}</th>
    <td @click="$router.push('/contractor/' + contractor.id)" role="button">
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
  data: function() {
    return {
      isSelected: false,
    };
  },
  methods: {
    changeSelected() {
      this.isSelected ? this.$emit("addSelected", this.contractor.id) : this.$emit("removeSelected", this.contractor.id);
    },
  },
});
</script>