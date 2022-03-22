import { createRouter, createWebHistory } from 'vue-router'
import Customers from '../views/CustomersView.vue'
import CustomerDetail from "../components/CustomerDetail.vue"
import Edit from "../components/Edit.vue"

const routes = [
  {
    path: '/',
    name: 'home',
    component: Customers
  },
  {
    path: '/view/:id',
    name: 'view',
    component: CustomerDetail
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: Edit
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/addCustomer',
    name: 'addCustomer',
    component: () => import(/* webpackChunkName: "about" */ '../views/AddCustomerView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
