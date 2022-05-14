<template>
  <section>
    <div class="container py-5 rounded" style="background-color: #eee">
      <h2>Карточка поставщика №{{ this.contractor.id }}</h2>
      <div class="row">
        <div class="col-lg-4">
          <div class="card mb-4">
            <div class="card-body text-center">
              <img :src="this.contractor.imageLink" alt="avatar"
                class="rounded-circle img-fluid" style="width: 150px; height: 150px;">
              <h5 class="my-3">{{ contractor.name }}</h5>
              <p class="text-muted mb-1">ИНН: {{ contractor.inn }}</p>
              <p class="text-muted mb-4">Адрес: {{ contractor.address }}</p>
            </div>
          </div>
          <!--
          <div class="card mb-4 mb-lg-0">
            <div class="card-body p-0">
              <ul class="list-group list-group-flush rounded-3">
                <li class="list-group-item d-flex justify-content-center align-items-center p-3">
                  <button type="button" class="btn btn-primary ms-1">Follow</button>
                </li>
                <li class="list-group-item d-flex justify-content-center align-items-center p-3">
                  <button type="button" class="btn btn-outline-primary ms-1">Message</button>
                </li>
              </ul>
            </div>
          </div>
          -->
        </div>
        <div class="col-lg-8">
          <div class="card mb-4">
            <div class="card-body">
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Email</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">{{ contractor.email }}</p>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Активное время</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">{{ contractor.activeTime }}</p>
                </div>
              </div>
              <hr />
              <div class="row justify-content-center mt-3">
                <div class="col justify-content-center text-center">
                  <button type="button" class="btn btn-primary ms-1">Связаться</button>
                </div>
                <div class="col justify-content-center text-center">
                  <button type="button" class="btn btn-outline-primary ms-1">Запланировать сообщение</button>
                </div>
              </div>
              <hr />
              <div class="row justify-content-center mt-3">
                <div class="col justify-content-center text-center">
                  <button type="button" class="btn btn-secondary ms-1">Просчитать доставку через UPS</button>
                </div>
              </div>
            </div>
          </div>
          <!--
          <div class="card mb-4">
            <div class="card-body">
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Full Name</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">Johnatan Smith</p>
                </div>
              </div>
            </div>
          </div>
          -->
        </div>
      </div>
      <hr />
      <h2>Товары поставщика</h2>
      <table class="table align-middle mb-0 bg-white border table-bordered table-hover table-striped">
        <thead class="bg-light">
          <tr>
            <th style="width: 8%" class="text-center">ID товара</th>
            <th>Наименование</th>
            <th>Статус</th>
            <th>Цена, ₽</th>
            <th style="width: 15%" class="text-center">Действия</th>
          </tr>
        </thead>
        <tbody>
          <ContractorProductRow :product="product" v-for="product in products" :key="product.id"/>
        </tbody>
      </table>
      <BasePages :pageCount="this.pageCount" :pageNumber="this.pageNumber" />
    </div>
  </section>
</template>

<script>
import { defineComponent } from "vue";
import { contractorsService } from "@/_services/contractors";
import ContractorProductRow from "@/components/contractors/ContractorProductRow.vue";
import BasePages from "@/components/BasePages.vue";

export default defineComponent({
  name: "ContractorView",
  components: { ContractorProductRow, BasePages },
  data: function () {
    return {
      contractor: undefined,
      products: [],
      pageSize: 30,
      pageCount: 0,
      pageNumber: this.page === undefined ? 1 : this.page,
    };
  },
  props: ["page"],
  created: async function () {
    try {
      this.contractor = await contractorsService.getById(this.$route.params.id);
      await this.updateProducts(this.pageSize, this.pageNumber);
      this.pageCount = (await contractorsService.getProductsPageCount(this.contractor.id, this.pageSize)).pageCount;
    } catch (ex) {
      alert(ex);
    }
  },
  methods: {
    async updateProducts(pageSize, pageNumber) {
      this.products = await contractorsService.getProductsPage(this.contractor.id, pageSize, pageNumber);
    },
  },
  watch: {
    async page(newPageNumber) {
      this.pageNumber = newPageNumber === undefined ? 1 : Number(newPageNumber);
      await this.updateProducts(this.pageSize, this.pageNumber);
    },
  },
});
</script>
