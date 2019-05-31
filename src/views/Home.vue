<template>
  <div class="home">
    <h4>Student Data List</h4>
    <listdata></listdata>
  </div>
</template>

<script>
// @ is an alias to /src
import listdata from '@/components/ListData.vue'

export default {
  name: 'home',
  components: {
    listdata
  }
}
</script>
