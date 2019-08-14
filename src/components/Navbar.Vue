<template>
  <div>
<nav id="navbar" class="navbar has-shadow is-spaced">
  <div class="container">
  <div class="navbar-brand">
    <a class="navbar-item" href="#">
      <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: Free, open source, &amp; modern CSS framework based on Flexbox" width="112" height="28">
    </a>
    <div id="navbarBurger" v-on:click="active = !active" v-bind:class = "{'is-active': active }"  class="navbar-burger burger" data-target="navMenuDocumentation">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <div id="navMenuDocumentation" v-bind:class="{'is-active': active }" class="navbar-menu">
    <div class="navbar-start">
    
    <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link" href="#">
          <span class="icon has-text-primary"><i class="fa fa-link"></i></span>
          <span>Blockchain</span>
        </a>
        <div id="moreDropdown" class="navbar-dropdown">
            <a class="navbar-item " href="#">
              <span>
                <span class="icon has-text-success"><i class="fas fa-rocket"></i></span>
                <strong>Bulma start</strong>
                <br>
                A tiny npm package to get started
              </span>
            </a>
            <hr class="navbar-divider">
            <a class="navbar-item " href="#">
              <span>
                <span class="icon has-text-orange">
                  <svg class="svg-inline--fa fa-plug fa-w-12" aria-hidden="true" data-prefix="fas" data-icon="plug" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M256 144V32c0-17.673 14.327-32 32-32s32 14.327 32 32v112h-64zm112 16H16c-8.837 0-16 7.163-16 16v32c0 8.837 7.163 16 16 16h16v32c0 77.406 54.969 141.971 128 156.796V512h64v-99.204c73.031-14.825 128-79.39 128-156.796v-32h16c8.837 0 16-7.163 16-16v-32c0-8.837-7.163-16-16-16zm-240-16V32c0-17.673-14.327-32-32-32S64 14.327 64 32v112h64z"></path></svg><!-- <i class="fas fa-plug"></i> -->
                </span>
                <strong>Bulma extensions</strong>
                <br>
                Side projects to enhance Bulma
              </span>
            </a>
        </div>
      </div>
    
        <a class="navbar-item bd-navbar-item-videos " href="#">
          <span class="icon has-text-primary"><i class="fas fa-coins"></i></span>
          <span>Tokens</span>
        </a>
        <a class="navbar-item bd-navbar-item-blog " href="#">
          <span class="icon has-text-primary"><i class="fa fa-file-contract"></i></span>
          <span>Contracts</span>
        </a>
        <a class="navbar-item bd-navbar-item-blog " href="#">
          <span class="icon has-text-primary"><i class="fa fa-server"></i></span>
          <span>SBP</span>
        </a>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link" href="#">
          <span class="icon has-text-primary"><i class="fas fa-star"></i></span>
          <span>Resources</span>
        </a>
        <div id="moreDropdown" class="navbar-dropdown">
            <a class="navbar-item " href="#">
              <span>
                <span class="icon has-text-success"><i class="fas fa-rocket"></i></span>
                <strong>Bulma start</strong>
                <br>
                A tiny npm package to get started
              </span>
            </a>
            <hr class="navbar-divider">
            <a class="navbar-item " href="#">
              <span>
                <span class="icon has-text-orange">
                  <svg class="svg-inline--fa fa-plug fa-w-12" aria-hidden="true" data-prefix="fas" data-icon="plug" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M256 144V32c0-17.673 14.327-32 32-32s32 14.327 32 32v112h-64zm112 16H16c-8.837 0-16 7.163-16 16v32c0 8.837 7.163 16 16 16h16v32c0 77.406 54.969 141.971 128 156.796V512h64v-99.204c73.031-14.825 128-79.39 128-156.796v-32h16c8.837 0 16-7.163 16-16v-32c0-8.837-7.163-16-16-16zm-240-16V32c0-17.673-14.327-32-32-32S64 14.327 64 32v112h64z"></path></svg><!-- <i class="fas fa-plug"></i> -->
                </span>
                <strong>Bulma extensions</strong>
                <br>
                Side projects to enhance Bulma
              </span>
            </a>
        </div>
      </div>
      
    </div>


    <div class="navbar-end">
    
        <div class="navbar-item has-dropdown is-hoverable" style="width: 110px;">
          <a class="navbar-link">
          <span class="icon has-text-star">
            <svg class="svg-inline--fa fa-star fa-w-18" aria-hidden="true" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg><!-- <i class="fas fa-star"></i> -->
          </span>
           <span>{{language}}</span>
           </a>
			<div id="" class="moreDropdownEN navbar-dropdown">
            <router-link class="navbar-item" @click.native="changelang('en')" to="">
              <span>
                <span class="icon has-text-success">
                  <svg class="svg-inline--fa fa-rocket fa-w-16" aria-hidden="true" data-prefix="fas" data-icon="rocket" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M505.1 19.1C503.8 13 499 8.2 492.9 6.9 460.7 0 435.5 0 410.4 0 307.2 0 245.3 55.2 199.1 128H94.9c-18.2 0-34.8 10.3-42.9 26.5L2.6 253.3c-8 16 3.6 34.7 21.5 34.7h95.1c-5.9 12.8-11.9 25.5-18 37.7-3.1 6.2-1.9 13.6 3 18.5l63.6 63.6c4.9 4.9 12.3 6.1 18.5 3 12.2-6.1 24.9-12 37.7-17.9V488c0 17.8 18.8 29.4 34.7 21.5l98.7-49.4c16.3-8.1 26.5-24.8 26.5-42.9V312.8c72.6-46.3 128-108.4 128-211.1.1-25.2.1-50.4-6.8-82.6zM400 160c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z"></path></svg><!-- <i class="fas fa-rocket"></i> -->
                </span>
                <strong>EN</strong>
              </span>
            </router-link>
            
            <router-link class="navbar-item" @click.native="changelang('zh')" to="">
              <span>
                <span class="icon has-text-orange">
                  <svg class="svg-inline--fa fa-plug fa-w-12" aria-hidden="true" data-prefix="fas" data-icon="plug" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M256 144V32c0-17.673 14.327-32 32-32s32 14.327 32 32v112h-64zm112 16H16c-8.837 0-16 7.163-16 16v32c0 8.837 7.163 16 16 16h16v32c0 77.406 54.969 141.971 128 156.796V512h64v-99.204c73.031-14.825 128-79.39 128-156.796v-32h16c8.837 0 16-7.163 16-16v-32c0-8.837-7.163-16-16-16zm-240-16V32c0-17.673-14.327-32-32-32S64 14.327 64 32v112h64z"></path></svg><!-- <i class="fas fa-plug"></i> -->
                </span>
                <strong>中文</strong>
              </span>
            </router-link>
          
        </div>
      </div>
    </div>
    
    
  </div>
  
  <div class="navbar-item search-item" style="">
<input placeholder="Search by Block / Transaction / Account / Token" value="" class="search-input">
<a href="/" class="button is-primary router-link-exact-active router-link-active" style="border-radius: 0px 4px 4px 0px;"><span class="fas fa-search"></span></a>
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
.bd-patreon-button img {
    border-radius: 4px;
    display: block;
    max-height: none!important;
}
.moreDropdownEN {
    width: 10rem;
}
.is-active .moreDropdownEN {
    width: 100%;
}
.search-input{
    width: 21rem;
    height: 36px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    border: 1px solid #e5edf3;
    padding: 0 5px;
    margin: 0;
    font-size: 14px;
    outline: none;
    border-radius: 4px 0px 0px 4px;
    margin-right: -4px;
}
.search-input:focus{
border: 1px solid #00d1b2;
}
.search-item {
align-items: stretch;
display: flex;
flex-shrink: 0;
min-height: 3.25rem;
}

</style>
