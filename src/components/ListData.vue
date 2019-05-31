<template>
  <div class="">
    <form class="form-inline">
      <div class="form-group mb-4">
        <input type="text" class="form-control" v-model="search" placeholder="Search . . .">
      </div>
      <span class="mb-4 ml-4">filter by</span>
      <select class="custom-select mb-4 ml-2" v-model="addressFilter">
        <option selected disabled>Address</option>
        <option v-for="(student, i) in students" :key="i">{{student.address}}</option>
      </select>
      
    </form>
    <table class="table" v-if="filteredList.length > 0">
      <thead class="thead-light">
        <tr>
          <th scope="col">NIM</th>
          <th scope="col">Full Name</th>
          <th scope="col">Address</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(student, i) in filteredList" :key="i">
          <th scope="row">{{student.nim}}</th>
          <td>{{student.name}}</td>
          <td>{{student.address}}</td>
        </tr>
      </tbody>
    </table>
    <div class="alert alert-danger" role="alert" v-else>
      There is no data matches
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{ 
      search: '',
      addressFilter:'',
      students: [
        {nim: 1810651057,name: "Mohammad Firmansyah",address: "Bondowoso"},
        {nim: 1810651063,name: "Ahmad Fulan",address: "Jember"},
        {nim: 1810651063,name: "Iqbal Saifuddin",address: "Situbondo"},
        {nim: 1810651057,name: "Abdul",address: "Bondowoso"},
        ]
    }
  },
  computed:{
    filteredList() {
      return this.students.filter(list => {
        return (""+list.nim).includes(this.search.toLowerCase()) 
        || list.name.toLowerCase().includes(this.search.toLowerCase()) 
        || list.address.toLowerCase().includes(this.addressFilter.toLowerCase())
      })
    },
  }
}
</script>

<style scoped lang="scss">

</style>
