import axios from "axios";

const state = {
    customers: [],
    customerGroup: [
      {
        id: 1,
        title: "Group1"
      },
      {
        id: 2,
        title: "Group2"
      },
      {
        id: 3,
        title: "Group3"
      },
      {
        id: 4,
        title: "Group4"
      }
    ]

};

const getters = {
    allCustomers: state => state.customers,
    customer: state => id => state.customers.find(user => user.id === id),
    allCustomersGroup: state => state.customerGroup
};

const actions = {
    async fetchCustomersvuex({ commit }) {
        const response = await axios.get("http://localhost:3000/customers");

        commit("setCustomers", response.data);
    },
    async addCustomervuex({ commit }, customer) {
      const response = await axios.post("http://localhost:3000/customers", {
        first_name: customer.first_name,
        last_name: customer.last_name,
        email: customer.email,
        phone: customer.phone,
        Address: customer.address,
        City: customer.city,
        State: customer.state,
        groups: customer.groups

      });

      commit("newCustomer", response.data);
    },
    async deleteCustomer({ commit }, id) {
      await axios.delete(`http://localhost:3000/customers/${id}`);

      commit("removeCustomer", id);
    },
    async editCustomer({ commit }, customer){
      const response = await axios.put(`http://localhost:3000/customers/${customer.id}`, {
        first_name: customer.first_name,
        last_name:  customer.last_name,
        email: customer.email,
        phone: customer.phone,
        Address: customer.Address,
        City: customer.City,
        State: customer.State,
        groups: customer.groups

      });
      commit("editCustomer", response.data);
    }
};

const mutations = {
  setCustomers: (state, customers) => (state.customers = customers),
  newCustomer: (state, customer) => state.customers.shift(customer),
  removeCustomer: (state, id) => state.customers = state.customers.filter(customer => customer.id != id),
  editCustomer: (state, customer) => state.customers.forEach(c => {
    if(c.id == customer.id){
      c = customer;
    }
  })
};

export default {
    state,
    getters,
    actions,
    mutations
  };