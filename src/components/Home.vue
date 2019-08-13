<template>

<div class="" style="padding: 30px 15%;">

    <section class="hero is-fullheight">

<nav class="level" style="border: solid 1px #00d1b2;padding: 20px;">
  <div class="level-item has-text-centered">
    <div>
      <p class="heading">Tweets</p>
      <p class="title">3,456</p>
    </div>
  </div>
  <div class="level-item has-text-centered">
    <div>
      <p class="heading">Following</p>
      <p class="title">123</p>
    </div>
  </div>
  <div class="level-item has-text-centered">
    <div>
      <p class="heading">Followers</p>
      <p class="title">456K</p>
    </div>
  </div>
  <div class="level-item has-text-centered">
    <div>
      <p class="heading">Likes</p>
      <p class="title">789</p>
    </div>
  </div>
</nav>

    </section>

  </div>

</template>

<script>
  import axios from 'axios';
  import logo from './../assets/logo-white.png';
  export default {
    data: function() {
      return {
        'logo': logo,
        last:'-'
      }
    },
    created() {
        // this.timer = setInterval(this.loadData, 1000)
    },
    beforeDestroy () {
        // clearInterval(this.timer)
    },
    methods: {

        loadData:function(){

            const self = this;
            this.url = "http://39.100.79.183:8888/index/blockData";

            this.$axios({
                    method: 'get',
                    url:this.url
            }).then(function(response) {
                console.log(response)
                self.last = response.data.data.result.current;
            }).catch( function(response) {
                console.log(response)
            });

        },
        findViteInfo: function() {
            this.$http.get('https://jsonplaceholder.typicode.com/posts', {
            title: this.userInput.Subject,
            body: this.userInput.Message,
            userId: 1
            }).then(function(data){
            this.showForm = false
            this.clearPost()
            })
        }
    }
  }
</script>

<style scoped>

</style>
