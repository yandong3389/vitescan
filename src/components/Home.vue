<template>

<div class="">

    <section class="hero is-fullheight">

      <div class="hero-body">
      
        <div class="container has-text-centered">


          <div class="column is-6 is-offset-3">
          </div>

        </div>
      </div>

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
        this.timer = setInterval(this.loadData, 1000)
    },
    beforeDestroy () {
        clearInterval(this.timer)
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

  .hero.is-info {
    
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
  .p-css {
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
.fonts {
    font-size: 1rem;
}
</style>
