<template>
  <div>
<nav id="navbar" class="navbar has-shadow is-spaced">
  <div class="container">
  <div class="navbar-brand">
    <router-link class="navbar-item" to="/">
      <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: Free, open source, &amp; modern CSS framework based on Flexbox" width="112" height="28">
    </router-link>
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
                <span class="icon has-text-primary"><i class="fa fa-server"></i></span>
                <strong>View Txns</strong>
                <br>
                
              </span>
            </a>
            <a class="navbar-item " href="#">
              <span>
                <span class="icon has-text-primary"><i class="fa fa-server"></i></span>
                <strong>View Contract Internal Txns</strong>
                <br>
                
              </span>
            </a>
            <hr class="navbar-divider">
            <router-link class="navbar-item " to="/blocks">
              <span>
                <span class="icon has-text-primary">
                  <i class="fa fa-cubes"></i>
                </span>
                <strong>View Blocks</strong>
                <br>
                
              </span>
            </router-link>
            <hr class="navbar-divider">
            <a class="navbar-item " href="#">
              <span>
                <span class="icon has-text-primary">
                  <i class="fa fa-users"></i>
                </span>
                <strong>Top Accounts</strong>
                <br>
                Top Accounts by VITE Balance
              </span>
            </a>
            <hr class="navbar-divider">
            <a class="navbar-item " href="#">
              <span>
                <span class="icon has-text-primary">
                  <i class="fa fa-file-contract"></i>
                </span>
                <strong>Verified Contracts</strong>
                <br>
                Contracts With verified source codes only
              </span>
            </a>
        </div>
      </div>
    
        <a class="navbar-item bd-navbar-item-videos " href="#">
          <span class="icon has-text-primary"><i class="fas fa-coins"></i></span>
          <span>Tokens</span>
        </a>
        <a class="navbar-item bd-navbar-item-blog " href="#">
          <span class="icon has-text-primary"><i class="fa fa-server"></i></span>
          <span>SBP</span>
        </a>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link" href="#">
          <span class="icon has-text-primary"><i class="fas fa-gamepad"></i></span>
          <span>DApp</span>
        </a>
        <div id="moreDropdown" class="navbar-dropdown">
            <a class="navbar-item " href="#">
              <span>
                <span class="icon has-text-primary"><i class="fas fa-rocket"></i></span>
                <strong>Dice Game</strong>
                <br>
                
              </span>
            </a>
            <hr class="navbar-divider">
            <a class="navbar-item " href="#">
              <span>
                <span class="icon has-text-primary">
                  <i class="fas fa-ellipsis-h"></i>
                </span>
                <strong>More</strong>
                <br>
                
              </span>
            </a>
        </div>
      </div>
      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link" href="#">
          <span class="icon has-text-primary"><i class="fas fa-star"></i></span>
          <span>Resources</span>
        </a>
        <div id="moreDropdown" class="navbar-dropdown">
            <a class="navbar-item " href="#">
              <span>
                <span class="icon has-text-primary"><i class="fas fa-rocket"></i></span>
                <strong>Test</strong>
                <br>
                
              </span>
            </a>
            <hr class="navbar-divider">
            <a class="navbar-item " href="#">
              <span>
                <span class="icon has-text-primary">
                  <i class="fa fa-chart-line"></i>
                </span>
                <strong>Charts & Statistics</strong>
                <br>
                
              </span>
            </a>
        </div>
      </div>
      
    </div>


    <div class="navbar-end">
    
        <div class="navbar-item has-dropdown is-hoverable" style="width: 110px;">
          <a class="navbar-link">
          <span class="icon has-text-primary">
            <i class="fa fa-globe"></i>
          </span>
           <span>{{language}}</span>
           </a>
			<div id="" class="moreDropdownEN navbar-dropdown">
            <router-link class="navbar-item" @click.native="changelang('en')" to="">
              <span>
                <span class="icon has-text-success">
                  <!--<i class="fa fa-globe"></i>--><i class="fa fa-globe"></i>
                </span>
                <strong>EN</strong>
              </span>
            </router-link>
            
            <router-link class="navbar-item" @click.native="changelang('zh')" to="">
              <span>
                <span class="icon has-text-orange">
                  <!--<i class="fa fa-globe"></i>--><i class="fa fa-globe"></i>
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
<router-link to="/" class="button is-primary router-link-exact-active router-link-active" style="border-radius: 0px 4px 4px 0px;"><span class="fas fa-search"></span></router-link>
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
    width: 7rem;
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

@media screen and (min-width: 1024px){
#moreDropdown {
    width: 16rem;
}
}
</style>
