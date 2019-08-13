<template>
  <div>
    <nav id="navbar" class="navbar is-fixed-top is-white" v-bind:class="selectedNavTheme">

      <!--Company Logo & Website-->
      <div class="navbar-brand">
          <router-link class="navbar-item" to="/">
          <img v-bind:src="companyLogo" alt="Bulma: a modern CSS framework based on Flexbox" width="100" height="28">
          </router-link>
        <!-- <a class="navbar-item" v-bind:href="companyWebsite">
        </a> -->
        <!--workflow on the burger menu when clicked-->
        <div v-on:click="active = !active" v-bind:class = "{'is-active': active }" class="navbar-burger burger"
             data-target="navbarExampleTransparentExample">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <!--Navbar Options-->
      <div v-bind:class="{'is-active': active }" class="navbar-menu">

        <!--Left Navbar list-->
        <div class="navbar-start">

          <router-link class="navbar-item" to="/">{{$t("menu.home")}}</router-link>
          <router-link class="navbar-item" to="/blogs">{{$t("menu.blogs")}}</router-link>
          <router-link class="navbar-item" to="/reward">{{$t("menu.voteReward")}}</router-link>
          <router-link class="navbar-item" to="/cycleRewardTotal">{{$t("menu.voteCycleReward")}}</router-link>
          <!-- <router-link class="navbar-item" to="/contact">{{$t("menu.contact")}}</router-link> -->
          <router-link class="navbar-item" to="/aboutus">{{$t("menu.aboutus")}}</router-link>

          <!--DropDown Navbar Items-->
          <!-- <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">{{$t("menu.follow")}}</a>
            <div class="navbar-dropdown is-boxed">
              <a class="navbar-item" target="_blank" href="http://weibo.com"><p><span class="icon"><i class="fab fa-weibo"></i></span>weibo</p></a>
              <a class="navbar-item" target="_blank" href="http://weibo.com"><p><span class="icon"><i class="fab fa-telegram-plane"></i></span>telegram</p></a>
            </div>

          </div> -->
        </div> <!--Left NavBar ends-->

        <!--NavBar items on the right-->
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="field is-grouped">

              <p class="control">
                <a href="https://explorer.vite.net/SBPDetail/N4Q.org" target="_blank" class="button is-info">
                  <span class="icon">
                    <i class="fas fa-vote-yea"></i>
                  </span>
                  <span>{{$t("menu.vote")}}</span>
                </a>
              </p>
            </div>
          </div>


          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">{{language}}</a>
            <div class="navbar-dropdown is-boxed">
              <router-link class="navbar-item" @click.native="changelang('en')" to=""><p><span class="icon"><i class="fas fa-globe-europe"></i></span>EN</p></router-link>
              <router-link class="navbar-item" @click.native="changelang('zh')" to=""><p><span class="icon"><i class="fas fa-globe-asia"></i></span>中文</p></router-link>
            </div>

          </div>

        </div>

      </div>
    </nav>
  </div>
</template>

<script>
  import companyLogo from './../assets/logo-black.png'
  export default {
        inject:['reload'],
        data() {
        return {
            language:localStorage.getItem('locale') == 'en' ? 'EN' : '中文',
            active: false,
            companyLogo: companyLogo,
            companyWebsite: "http://localhost:8080",
            navbarThemes: [
            //   'is-primary',
            //   'is-link',
            //   'is-info',
            //   'is-success',
            //   'is-warning',
            //   'is-danger',
            //   'is-black',
            //   'is-dark',
            //   'is-light',
            //   'is-white'
            ],
            'selectedNavTheme': ""
        }
        },
        methods: {
            changelang: function(lang){
                localStorage.setItem('locale', lang);

                // 使用F5刷新时可以不用实时变化
                this.$i18n.locale = localStorage.getItem('locale');
                this.language = localStorage.getItem('locale') == 'en' ? 'EN' : '中文'

                // F5刷新
                // location.reload()

                // 读条刷新,URL带随机参数
                // this.$router.push({
                //     path:this.$route.fullPath, // 获取当前连接，重新跳转
                //     query:{
                //         _time:new Date().getTime()/1000 // 时间戳，刷新当前router
                //     }
                // })
            },
            randomTheme: function() {
            this.selectedNavTheme = this.navbarThemes[Math.floor(Math.random() * this.navbarThemes.length)]
            }
        }
  }

</script>

<style>

</style>
