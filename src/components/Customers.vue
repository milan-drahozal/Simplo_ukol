<template>
<div class="container">
  <Alert v-if="alert" @close="closeAlert" v-bind:message="alert" />
  <h1 class="display-5 text-start">Customers</h1>
  <hr class="bg-primary border-1 border-top border-primary">
  <form>
    <div class="mb-3 row g-1">
      <input class="p-2 rounded-pill" type="text" placeholder="Enter Last Name" v-model="filterInput">
    </div>
  </form>
  <table class="table table-striped mt-5">
    <thead>
    <tr>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email</th>
      <th scope="col">Groups</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="customer in filterBy(allCustomers, filterInput)" :key="customer.id">
      <td class="pt-3">{{customer.first_name}}</td>
      <td class="pt-3">{{customer.last_name}}</td>
      <td class="pt-3">{{customer.email}}</td>
      <td class="pt-3"><li class="list-unstyled list-inline list-inline-item" v-for="n in customer.groups" :key="n">{{n}}</li></td>
      <td class="pt-2"><button type="button" class="btn btn-secondary"><router-link class="text-light text-decoration-none" :to="{ name: 'view', params: { id: customer.id}}">View</router-link></button></td>
    </tr>
  </tbody>
</table>
</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Alert from "../components/Alert.vue"
export default {
  name: 'Customers',
  data() {
    return {
      customers: [],
      alert: "",
      filterInput: ""
    }
  },
  methods: {
    // Fetching data without vuex
    // async fetchCustomers(){
    //   const response = await fetch("http://localhost:3000/customers");
    //   const data = await response.json();
    //   return data
    // },
    ...mapActions(["fetchCustomersvuex"]),
    closeAlert(){
      this.alert = "";
      // Vyčistí route query param
      this.$router.push({ query: {alert: ''}});
    },
    filterBy(list, value){
      value = value.charAt(0).toUpperCase() + value.slice(1);
      return list.filter((customer) => {
        return customer.last_name.indexOf(value) > -1;
      })
    }
  },
  async created() {
    //Fetching data without vuex
    // const data = await this.fetchCustomers();
    // this.customers = data;
    if(this.$route.query.alert){
        this.alert = this.$route.query.alert;
      }
  
    this.fetchCustomersvuex();
  },
  computed: mapGetters(["allCustomers"]),
  components: {
    Alert
  }
}
</script>

<style scoped>

</style>
