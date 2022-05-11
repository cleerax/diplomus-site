<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <li class="page-item" :class="{ disabled: this.pageNumber == 1 ? true : false }">
        <button class="page-link" aria-disabled="true" @click="$router.push(this.getLink(this.pageNumber - 1))">Назад</button>
      </li>
      <template v-for="i in this.pageCount < 5 ? this.pageCount : 5" :key="i">
        <li class="page-item" :class="{ disabled: getCorrectPage(i) == this.pageNumber ? true : false }">
          <router-link :to="getLink(getCorrectPage(i))" class="page-link">{{ getCorrectPage(i) }}</router-link>
        </li>
      </template>
      <li class="page-item" :class="{ disabled: this.pageNumber == this.pageCount ? true : false }">
        <button class="page-link" aria-disabled="true" @click="$router.push(this.getLink(Number(this.pageNumber) + 1))">Вперед</button>
      </li>
    </ul>
  </nav>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "BasePages",
  props: {
    pageCount: Number,
    pageNumber: Number,
  },
  methods: {
    getLink(pageNumber) {
      return pageNumber === 1 ? "/" : "/?page=" + pageNumber;
    },
    getCorrectPage(i) {
      if (this.pageNumber <= 3) return i;
      else if (this.pageCount - this.pageNumber <= 2) return this.pageCount - 5 + i
      else return this.pageNumber - 3 + i;
    },
  },
});
</script>
