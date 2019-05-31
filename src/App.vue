<template>
  <div id="app">
    <div class="container mt-4 justify-content-center">
      <div class="row">
        <div class="col-lg-12">
          <ul class="nav nav-tabs">
            <li class="nav-item">
              <router-link to="/home" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/instagram" class="nav-link">Instagram</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/settings" class="nav-link">Settings</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link">About</router-link>
            </li>
            <li class="nav-item">
              <a href="" class="nav-link text-danger">Logout</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="view">
        <router-view/>
      </div>
    </div>
        <!-- <img :src="$store.state.biodata.profile_picture" width="30" height="30" class="d-inline-block align-top rounded-circle"> -->
  </div>
</template>

<style lang="scss">
@import '~bootstrap/scss/bootstrap.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: #2c3e50;
}
.router-link-active{
    color: #495057 !important;
    background-color: #fff !important;
    border-color: #dee2e6 #dee2e6 #fff !important;
}
.view{
  border: 1px solid #dee2e6 ;
  border-top: none;
  padding: 20px 18px;
}
</style>
