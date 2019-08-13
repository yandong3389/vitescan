<template>
  <div id="app">
    <app-navbar></app-navbar>
    <router-view v-if="isRouterAlive" ></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
  export default {
    name: 'App',
    provide () {
        return {
            reload: this.reload
        }
    },
    data () {
        return {
            isRouterAlive: true
        }
    },
    methods: {
        reload () {
            this.isRouterAlive = false
            this.$nextTick(function(){
                this.isRouterAlive = true
            })
        }
    }
  }
</script>

<style>
#nprogress .bar {
      background: #1496ed !important;
    }
</style>
