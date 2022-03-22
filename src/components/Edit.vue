<template>
    <div v-if="customer">
        <Alert v-if="alert" @close="closeAlert" v-bind:message="alert" />
        <div class="container">
        <h1 class="mt-5 text-dark text-start">EditCustomer page</h1>
        <hr class="bg-primary border-1 border-top border-primary">
        <form @submit.prevent="onSubmit" >
            <div class="frame text-start text-dark p-3 mt-4">
            
                <h4>Customer Info</h4>
            <div class="mb-3 form-group">
                <label for="InputFirstName" class="form-label">First Name</label>
                <input type="text" v-model="customer.first_name" class="form-control" id="InputFirstName" aria-describedby="emailHelp" required>

            </div>
            <div class="mb-3 form-group">
                <label for="InputLastName" class="form-label">Last Name</label>
                <input type="text" v-model="customer.last_name" class="form-control" id="InputLastName">
            </div>
    </div>
    <div class="frame text-start text-dark p-3 mt-4">
            
        <h4>Customer Contact</h4>
            <div class="mb-3 form-group">
                <label for="InputEmail" class="form-label">Email</label>
                <input type="email" v-model="customer.email" class="form-control" id="InputEmail" aria-describedby="emailHelp">

            </div>
            <div class="mb-3 form-group">
                <label for="InputTelephone" class="form-label">Phone</label>
                <input type="tel" v-model="customer.phone" class="form-control" id="InputTelephone">
            </div>
    </div>
    <div class="frame text-start text-dark p-3 mt-4">
            
        <h4>Customer Location</h4>
            <div class="mb-3 form-group">
                <label for="InputAddress" class="form-label">Address</label>
                <input type="text" v-model="customer.Address" class="form-control" id="InputAddress" aria-describedby="emailHelp">

            </div>
            <div class="mb-3 form-group">
                <label for="InputCity" class="form-label">City</label>
                <input type="text" v-model="customer.City" class="form-control" id="InputCity">
            </div>
            <div class="mb-3 form-group">
                <label for="InputState" class="form-label">State</label>
                <input type="text" v-model="customer.State" class="form-control" id="InputState">
            </div>
    </div>
    <div class="frame text-start text-dark p-3 mt-4">
        <h4>Customer's Groups</h4>
        <div v-for="group of allCustomersGroup" :key="group.id">
            <div class="form-check">
            <label :for="group.title" class="form-check-label">
            <input type="checkbox" 
                class="form-check-input"
                :id="group.title" 
                :value="group.title" 
                v-model="customer.groups" />{{group.title}}</label>
            </div>
        </div>
    </div>
    <div class="d-grid gap-1">
    <button class="my-4 btn btn-outline-success btn-lg " type="submit">Submit</button>
    </div>
    </form>
       
        </div>
    </div>
    
</template>

<script>
  import { mapGetters, mapActions } from "vuex";
  import Alert from "../components/Alert.vue";
    export default {
        name: "edit",
        data() {
            return {
                alert: ''
            }
        },
        computed: {
            ...mapGetters(["allCustomersGroup"]),
           customer() {
                return this.$store.getters.customer(parseInt(this.$route.params.id));
            }
        },
        methods: {
            ...mapActions(["editCustomer"]),
            closeAlert(){
                this.alert = "";
            },
            onSubmit() {
                if(!this.customer.first_name || !this.customer.last_name || !this.customer.email){
                this.alert = 'Please fill in all required fields';
            }else {
                this.editCustomer(this.customer);
                this.$router.push({ name: 'home' ,query: {alert: 'Customer Updated'}});
            }
            }
        },
        components: {
            Alert
        }
    }
</script>

<style scoped>
.frame {
    background: rgb(80, 182, 124);
}
</style>