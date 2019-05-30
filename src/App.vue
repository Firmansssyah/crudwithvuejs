<template>
  <div id="app">
      <nav class="navbar navbar-expand navbar-dark bg-primary">
        <a class="navbar-brand" href="#">
          <img src="./assets/logo.png" width="30" height="30" class="d-inline-block align-top">
          Vue.js
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/instagram" class="nav-link">Instagram</router-link>
            </li>
          </ul>
        </div>
      </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import '~bootstrap/scss/bootstrap.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.router-link-active{
  color: white;
}
</style>
