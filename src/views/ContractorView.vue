<template>
  <p>Карточка поставщика {{ contractorId }}</p>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ContractorView",
  components: {},
  data: function () {
    return {
      contractorId: this.$route.params.id,
    };
  },
});
</script>
