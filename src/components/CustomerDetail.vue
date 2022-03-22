<template>
    <div class="container text-start text-dark">
        <div class="mt-4">

        <router-link class="text-decoration-none" to="/">Back</router-link>
        </div>
        <div v-if="customer">
            <h1 class="page-header mt-4">
                {{customer.first_name}}  {{customer.last_name}}
                <span class="float-end">
                    <router-link class="btn btn-primary me-2" :to="{ name: 'edit', params: { id: customer.id}}">Edit</router-link>
                    <button class="btn btn-danger" @click="onClick(customer.id)">Delete</button>
                </span>
            </h1>
            <hr>
            <ul class="list-group">
                <li class="list-group-item"><i class="fa-solid fa-mobile-screen pe-2"></i>{{customer.phone}}</li>
                <li class="list-group-item"><i class="fa-solid fa-envelope pe-2"></i>{{customer.email}}</li>
            </ul>

            <ul class="list-group mt-3">
                <li class="list-group-item">{{customer.Address}}</li>
                <li class="list-group-item">{{customer.City}}</li>
                <li class="list-group-item">{{customer.State}}</li>
            </ul>
            <h4 class="mt-3">Groups</h4>
             <ul class="list-group mt-3">
                <li class="list-group-item" v-for="group in customer.groups" :key="group.id">{{group}}</li>
            </ul>
              
        </div>
        

    </div>
    
</template>

<script>
import { mapActions } from "vuex";
    export default {
        computed: {
            customer() {
                return this.$store.getters.customer(parseInt(this.$route.params.id));
            }
        },
        methods: {
            ...mapActions(["deleteCustomer"]),
            onClick(id){
                this.$router.push({ name: 'home', query: {alert: 'Customer Deleted'} });
                this.deleteCustomer(id);
            }
        }
    }
</script>

