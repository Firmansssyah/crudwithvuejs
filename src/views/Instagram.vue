<template>
  <div>
    <h4>Instagram</h4>
    <div class="card" style="width: 18rem;">
      <img class="card-img-top" :src="biodata.profile_picture">
      <div class="card-body">
        <h5 class="card-title">@{{biodata.username}}</h5>
        <p class="card-text">{{biodata.bio}}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          Post : {{biodata.counts.media}} <br/>
          Followers : {{biodata.counts.followed_by}} <br/>
          Following : {{biodata.counts.follows}}
        </li>
      </ul>
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
      this.$store.commit('setBiodata',data.data)
    })
  }
}
</script>
<style lang="scss">

</style>

