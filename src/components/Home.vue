<template>

<div class="">

    <section class="hero is-info is-fullheight">

      <div class="hero-body">
      <vue-particles color="#dedede" class="p-css"
        :particleOpacity="0.7"
        :particlesNumber="88"
        shapeType="circle"
        :particleSize="4"
        linesColor="#ffffff"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      >
      </vue-particles>
        <div class="container has-text-centered">

          <figure >
            <img v-bind:src="logo" width="40%" height="20%">
          </figure>

          <div class="column is-6 is-offset-3">
            <h1 class="title white">
                {{$t("home.title")}}
            </h1>
            <h2 class="subtitle">
                {{$t("home.subtitle1")}}
              <br/>
                {{$t("home.subtitle2")}}
            </h2>
            <!-- <div class="is-centered">
              <a v-bind:href="bulmaWebsite" class="button is-primary">Visit Bulma</a>
              <a v-bind:href="vueWebsite" class="button is-danger">Visit VueJS</a>
              <a v-bind:href="repoLink" class="button is-info">Visit Repository</a>
            </div> -->
            <br/>
            <br/>
            <nav class="level">
            <div class="level-item has-text-centered">
                <div>
                <p class="heading">{{$t("home.last")}}</p>
                <p class="title fonts">{{ last }}</p>
                </div>
            </div>
            <div class="level-item has-text-centered">
                <div>
                <p class="heading">{{$t("home.tps")}}</p>
                <p class="title fonts">1/4/469</p>
                </div>
            </div>
            <div class="level-item has-text-centered">
                <div>
                <p class="heading">{{$t("home.txs")}}</p>
                <p class="title fonts">9.793M</p>
                </div>
            </div>
            <div class="level-item has-text-centered">
                <div>
                <p class="heading">{{$t("home.txs30d")}}</p>
                <p class="title fonts">2.96M</p>
                </div>
            </div>
            </nav>
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
    background: linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ), url('./../assets/bg3.jpg') no-repeat center center fixed;
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
