<template>
  <div class="home">
    <Customers class="mt-5" />
  </div>
</template>

<script>
// @ is an alias to /src
import Customers from '@/components/Customers.vue'

export default {
  name: 'HomeView',
  components: {
    Customers
  }
}
</script>
