<template>
  <div class="about">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 pt-3">
          <img :src="biodata.profile_picture" class="img-thumbnail rounded-circle">
          <p></p>
          @{{biodata.username}}
          <br/>
          <div class="row pt-5">
            <div class="col-lg-4">
              <img :src="biodata.profile_picture" class="box">
              </img>
            </div>
            <div class="col-lg-4">
              <img :src="biodata.profile_picture" class="box">
              </img>
            </div>
            <div class="col-lg-4">
              <img :src="biodata.profile_picture" class="box">
              </img>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  data(){
    return{
      // idclient : "e3c57c91b85449cea8a9fb2981926e81",
      // accessToken : "3507565790.e3c57c9.7503ea794a4e49359488f835468fd83c",
      curl : "https://api.instagram.com/v1/users/self/?access_token=3507565790.e3c57c9.7503ea794a4e49359488f835468fd83c",
      biodata : {} 
    }
  },
  mounted: function () {
    // axios.get(this.curl)
    // .then(response => {
    //   this.biodata = response.data.data
    // })
    axios.get(this.curl)
    .then(({data}) => {
      this.biodata = data.data
    })
  }
}
</script>
<style lang="scss">
.box{
  border-radius: 4px;
  box-shadow: 0px 0px 4px gray;
  height: 300px;
}
</style>

