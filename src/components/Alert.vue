<template>
  <div class="alert alert-warning alert-dismissible mt-3" role="alert">
  <button type="button" class="close px-2 mx-1" @click='$emit("close")' data-dismiss="alert" aria-label="Close" ><span aria-hidden="true">&times;</span></button>
    {{message}}
</div>
</template>

<script>
export default {
  name: 'alert',
  props: ['message'],
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
