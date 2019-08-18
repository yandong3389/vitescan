<template>
  <div>
  
  
<nav id="navbar" class="navbar is-spaced logoHid" style="padding: 0rem 2rem 0rem 2rem;z-index: 31;">
	<div class="container">
	<div class="navbar-brand">
	<router-link class="navbar-item" to="/">
      <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: Free, open source, &amp; modern CSS framework based on Flexbox" width="112" height="28">
    </router-link>
	 </div>
	 
	 <div id="navMenuDocumentation" class="navbar-menu">

     <div class="navbar-end">
        <div class="navbar-item has-dropdown is-hoverable" style="">
          <a class="navbar-link">
          <span class="icon theme-color-font">
            <i class="fa fa-globe"></i>
          </span>
           <span>PreMainnet</span>
           </a>
			<div id="" class="moreDropdownEN navbar-dropdown">
            <router-link class="navbar-item" @click.native="changelang('en')" to="">
              <span>
                <span class="icon theme-color-font">
                  <i class="fa fa-globe"></i>
                </span>
                <strong>PreMainnet</strong>
              </span>
            </router-link>
            </div>
        </div>
        
        <div class="navbar-item has-dropdown is-hoverable" style="min-width: 132px;">
          <a class="navbar-link">
          <span class="icon">
          
              <svg v-if="language =='English'" id="icon-US" class="svg-inline--fa fa-globe fa-w-24" viewBox="0 0 1433 1024" width="100%" height="100%"><path d="M0 0h1433.6v1024H0V0z" fill="#FFFFFF"></path><path d="M0 0h614.4v477.866667H0z" fill="#435DB0"></path><path d="M68.266667 68.266667v68.266666h68.266666V68.266667H68.266667z m136.533333 0v68.266666h68.266667V68.266667H204.8z m136.533333 0v68.266666h68.266667V68.266667H341.333333z m136.533334 0v68.266666h68.266666V68.266667H477.866667zM409.6 136.533333v68.266667h68.266667V136.533333H409.6zM273.066667 136.533333v68.266667h68.266666V136.533333H273.066667zM136.533333 136.533333v68.266667h68.266667V136.533333H136.533333zM68.266667 204.8v68.266667h68.266666V204.8H68.266667z m136.533333 0v68.266667h68.266667V204.8H204.8z m136.533333 0v68.266667h68.266667V204.8H341.333333z m136.533334 0v68.266667h68.266666V204.8H477.866667zM68.266667 341.333333v68.266667h68.266666V341.333333H68.266667z m136.533333 0v68.266667h68.266667V341.333333H204.8z m136.533333 0v68.266667h68.266667V341.333333H341.333333z m136.533334 0v68.266667h68.266666V341.333333H477.866667zM409.6 273.066667v68.266666h68.266667V273.066667H409.6zM273.066667 273.066667v68.266666h68.266666V273.066667H273.066667zM136.533333 273.066667v68.266666h68.266667V273.066667H136.533333z" fill="#A7B6E6"></path><path d="M614.4 0v68.266667h819.2V0H614.4z m0 136.533333v68.266667h819.2V136.533333H614.4z m0 136.533334v68.266666h819.2V273.066667H614.4z m0 136.533333v68.266667h819.2V409.6H614.4zM0 546.133333v68.266667h1433.6V546.133333H0z m0 136.533334v68.266666h1433.6v-68.266666H0z m0 136.533333v68.266667h1433.6v-68.266667H0z m0 136.533333v68.266667h1433.6v-68.266667H0z" fill="#ED4C49"></path></svg>
              <svg v-if="language !='English'" id="icon-CN" class="svg-inline--fa fa-globe fa-w-24" viewBox="0 0 1433 1024" width="100%" height="100%"><path d="M0 0h1433.6v1024H0V0z" fill="#CF2338"></path><path d="M819.2 614.4h68.266667v68.266667h-68.266667zM887.466667 341.333333h68.266666v68.266667h-68.266666zM887.466667 477.866667h68.266666v68.266666h-68.266666zM819.2 204.8h68.266667v68.266667h-68.266667zM512 341.333333l-68.266667-204.8-68.266666 204.8H150.186667l184.32 136.533334-68.266667 204.8 177.493333-129.706667L621.226667 682.666667l-68.266667-204.8 184.32-136.533334z" fill="#FFD128"></path></svg>
          
              <!-- <i class="fa fa-globe"></i> -->
          </span>
           <span style="padding-left: 0.3rem;font-size: 14px;">{{language}}</span>
           </a>
			<div id="" class="moreDropdownEN navbar-dropdown">
            <router-link class="navbar-item" @click.native="changelang('en')" to="">
              <span>
                <span class="icon theme-color-font">
                  <svg id="icon-US" class="svg-inline--fa fa-globe fa-w-24" viewBox="0 0 1433 1024" width="100%" height="100%"><path d="M0 0h1433.6v1024H0V0z" fill="#FFFFFF"></path><path d="M0 0h614.4v477.866667H0z" fill="#435DB0"></path><path d="M68.266667 68.266667v68.266666h68.266666V68.266667H68.266667z m136.533333 0v68.266666h68.266667V68.266667H204.8z m136.533333 0v68.266666h68.266667V68.266667H341.333333z m136.533334 0v68.266666h68.266666V68.266667H477.866667zM409.6 136.533333v68.266667h68.266667V136.533333H409.6zM273.066667 136.533333v68.266667h68.266666V136.533333H273.066667zM136.533333 136.533333v68.266667h68.266667V136.533333H136.533333zM68.266667 204.8v68.266667h68.266666V204.8H68.266667z m136.533333 0v68.266667h68.266667V204.8H204.8z m136.533333 0v68.266667h68.266667V204.8H341.333333z m136.533334 0v68.266667h68.266666V204.8H477.866667zM68.266667 341.333333v68.266667h68.266666V341.333333H68.266667z m136.533333 0v68.266667h68.266667V341.333333H204.8z m136.533333 0v68.266667h68.266667V341.333333H341.333333z m136.533334 0v68.266667h68.266666V341.333333H477.866667zM409.6 273.066667v68.266666h68.266667V273.066667H409.6zM273.066667 273.066667v68.266666h68.266666V273.066667H273.066667zM136.533333 273.066667v68.266666h68.266667V273.066667H136.533333z" fill="#A7B6E6"></path><path d="M614.4 0v68.266667h819.2V0H614.4z m0 136.533333v68.266667h819.2V136.533333H614.4z m0 136.533334v68.266666h819.2V273.066667H614.4z m0 136.533333v68.266667h819.2V409.6H614.4zM0 546.133333v68.266667h1433.6V546.133333H0z m0 136.533334v68.266666h1433.6v-68.266666H0z m0 136.533333v68.266667h1433.6v-68.266667H0z m0 136.533333v68.266667h1433.6v-68.266667H0z" fill="#ED4C49"></path></svg>
                </span>
                <strong>English</strong>
              </span>
            </router-link>
            
            <router-link class="navbar-item" @click.native="changelang('zh')" to="">
              <span>
                <span class="icon theme-color-font">
                  <svg id="icon-CN" class="svg-inline--fa fa-globe fa-w-24" viewBox="0 0 1433 1024" width="100%" height="100%"><path d="M0 0h1433.6v1024H0V0z" fill="#CF2338"></path><path d="M819.2 614.4h68.266667v68.266667h-68.266667zM887.466667 341.333333h68.266666v68.266667h-68.266666zM887.466667 477.866667h68.266666v68.266666h-68.266666zM819.2 204.8h68.266667v68.266667h-68.266667zM512 341.333333l-68.266667-204.8-68.266666 204.8H150.186667l184.32 136.533334-68.266667 204.8 177.493333-129.706667L621.226667 682.666667l-68.266667-204.8 184.32-136.533334z" fill="#FFD128"></path></svg>
                </span>
                <strong>简体中文</strong>
              </span>
            </router-link>
            </div>
        </div>
      </div>

    
    </div></div>
    
    
</nav>
  
<nav id="navbar" class="navbar has-shadow is-spaced" style="padding-top: 0rem;padding-bottom: 0rem;">
  <div class="container">
  
  
  <div class="navbar-brand">
  
	<router-link class="navbar-item logoShow" to="/">
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
          <span class="icon theme-color-font"><i class="fa fa-link"></i></span>
          <span>Blockchain</span>
        </a>
        <div id="moreDropdown" class="navbar-dropdown">
            <router-link class="navbar-item " to="/txs">
              <span>
                <span class="icon theme-color-font"><i class="fa fa-server"></i></span>
                <strong>View Txns</strong>
                <br>
                
              </span>
            </router-link>

            <router-link class="navbar-item " to="/transactions">
              <span>
                <span class="icon theme-color-font"><i class="fa fa-server"></i></span>
                <strong>View Contract Internal Txns</strong>
                <br>
                
              </span>
            </router-link>
            <hr class="navbar-divider">
            <router-link class="navbar-item " to="/blocks">
              <span>
                <span class="icon theme-color-font">
                  <i class="fa fa-cubes"></i>
                </span>
                <strong>View Blocks</strong>
                <br>
                
              </span>
            </router-link>
            <hr class="navbar-divider">
            <router-link class="navbar-item " to="/accounts">
              <span>
                <span class="icon theme-color-font">
                  <i class="fa fa-users"></i>
                </span>
                <strong>Top Accounts</strong>
                <br>
                Top Accounts by VITE Balance
              </span>
            </router-link>
            <hr class="navbar-divider">
            <a class="navbar-item " href="#">
              <span>
                <span class="icon theme-color-font">
                  <i class="fa fa-file-contract"></i>
                </span>
                <strong>Verified Contracts</strong>
                <br>
                Contracts With verified source codes only
              </span>
            </a>
        </div>
      </div>
    
        
        <router-link class="navbar-item " to="/tokens">
          <span class="icon theme-color-font"><i class="fas fa-coins"></i></span>
          <span>Tokens</span>
        </router-link>
        <router-link class="navbar-item " to="/sbps">
          <span class="icon theme-color-font"><i class="fa fa-server"></i></span>
          <span>SBP</span>
        </router-link>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link" href="#">
          <span class="icon theme-color-font"><i class="fas fa-gamepad"></i></span>
          <span>DApp</span>
        </a>
        <div id="moreDropdown" class="navbar-dropdown">
            <a class="navbar-item " href="#">
              <span>
                <span class="icon theme-color-font"><i class="fas fa-rocket"></i></span>
                <strong>Dice Game</strong>
                <br>
                
              </span>
            </a>
            <hr class="navbar-divider">
            <a class="navbar-item " href="#">
              <span>
                <span class="icon theme-color-font">
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
          <span class="icon theme-color-font"><i class="fas fa-star"></i></span>
          <span>Resources</span>
        </a>
        <div id="moreDropdown" class="navbar-dropdown">
            <a class="navbar-item " href="#">
              <span>
                <span class="icon theme-color-font"><i class="fas fa-rocket"></i></span>
                <strong>Test</strong>
                <br>
                
              </span>
            </a>
            <hr class="navbar-divider">
            <a class="navbar-item " href="#">
              <span>
                <span class="icon theme-color-font">
                  <i class="fa fa-chart-line"></i>
                </span>
                <strong>Charts & Statistics</strong>
                <br>
                
              </span>
            </a>
        </div>
      </div>
      
    </div>


     <div class="navbar-end logoShow" >
       <!--
        <div class="navbar-item has-dropdown is-hoverable" style="">
          <a class="navbar-link">
          <span class="icon theme-color-font">
            <i class="fa fa-globe"></i>
          </span>
           <span>PreMainnet</span>
           </a>
			<div id="" class="moreDropdownEN navbar-dropdown">
            <router-link class="navbar-item" @click.native="changelang('en')" to="">
              <span>
                <span class="icon has-text-success">
                  <i class="fa fa-globe"></i>
                </span>
                <strong>PreMainnet</strong>
              </span>
            </router-link>
            </div>
        </div>
        -->
        <div class="navbar-item has-dropdown is-hoverable" style="min-width: 132px;">
          <a class="navbar-link">
          <span class="icon">
          
              <svg v-if="language =='English'" id="icon-US" class="svg-inline--fa fa-globe fa-w-24" viewBox="0 0 1433 1024" width="100%" height="100%"><path d="M0 0h1433.6v1024H0V0z" fill="#FFFFFF"></path><path d="M0 0h614.4v477.866667H0z" fill="#435DB0"></path><path d="M68.266667 68.266667v68.266666h68.266666V68.266667H68.266667z m136.533333 0v68.266666h68.266667V68.266667H204.8z m136.533333 0v68.266666h68.266667V68.266667H341.333333z m136.533334 0v68.266666h68.266666V68.266667H477.866667zM409.6 136.533333v68.266667h68.266667V136.533333H409.6zM273.066667 136.533333v68.266667h68.266666V136.533333H273.066667zM136.533333 136.533333v68.266667h68.266667V136.533333H136.533333zM68.266667 204.8v68.266667h68.266666V204.8H68.266667z m136.533333 0v68.266667h68.266667V204.8H204.8z m136.533333 0v68.266667h68.266667V204.8H341.333333z m136.533334 0v68.266667h68.266666V204.8H477.866667zM68.266667 341.333333v68.266667h68.266666V341.333333H68.266667z m136.533333 0v68.266667h68.266667V341.333333H204.8z m136.533333 0v68.266667h68.266667V341.333333H341.333333z m136.533334 0v68.266667h68.266666V341.333333H477.866667zM409.6 273.066667v68.266666h68.266667V273.066667H409.6zM273.066667 273.066667v68.266666h68.266666V273.066667H273.066667zM136.533333 273.066667v68.266666h68.266667V273.066667H136.533333z" fill="#A7B6E6"></path><path d="M614.4 0v68.266667h819.2V0H614.4z m0 136.533333v68.266667h819.2V136.533333H614.4z m0 136.533334v68.266666h819.2V273.066667H614.4z m0 136.533333v68.266667h819.2V409.6H614.4zM0 546.133333v68.266667h1433.6V546.133333H0z m0 136.533334v68.266666h1433.6v-68.266666H0z m0 136.533333v68.266667h1433.6v-68.266667H0z m0 136.533333v68.266667h1433.6v-68.266667H0z" fill="#ED4C49"></path></svg>
              <svg v-if="language !='English'" id="icon-CN" class="svg-inline--fa fa-globe fa-w-24" viewBox="0 0 1433 1024" width="100%" height="100%"><path d="M0 0h1433.6v1024H0V0z" fill="#CF2338"></path><path d="M819.2 614.4h68.266667v68.266667h-68.266667zM887.466667 341.333333h68.266666v68.266667h-68.266666zM887.466667 477.866667h68.266666v68.266666h-68.266666zM819.2 204.8h68.266667v68.266667h-68.266667zM512 341.333333l-68.266667-204.8-68.266666 204.8H150.186667l184.32 136.533334-68.266667 204.8 177.493333-129.706667L621.226667 682.666667l-68.266667-204.8 184.32-136.533334z" fill="#FFD128"></path></svg>
          
              <!-- <i class="fa fa-globe"></i> -->
          </span>
           <span style="padding-left: 0.3rem;font-size: 14px;">{{language}}</span>
           </a>
			<div id="" class="moreDropdownEN navbar-dropdown">
            <router-link class="navbar-item" @click.native="changelang('en')" to="">
              <span>
                <span class="icon has-text-success">
                  <svg id="icon-US" class="svg-inline--fa fa-globe fa-w-24" viewBox="0 0 1433 1024" width="100%" height="100%"><path d="M0 0h1433.6v1024H0V0z" fill="#FFFFFF"></path><path d="M0 0h614.4v477.866667H0z" fill="#435DB0"></path><path d="M68.266667 68.266667v68.266666h68.266666V68.266667H68.266667z m136.533333 0v68.266666h68.266667V68.266667H204.8z m136.533333 0v68.266666h68.266667V68.266667H341.333333z m136.533334 0v68.266666h68.266666V68.266667H477.866667zM409.6 136.533333v68.266667h68.266667V136.533333H409.6zM273.066667 136.533333v68.266667h68.266666V136.533333H273.066667zM136.533333 136.533333v68.266667h68.266667V136.533333H136.533333zM68.266667 204.8v68.266667h68.266666V204.8H68.266667z m136.533333 0v68.266667h68.266667V204.8H204.8z m136.533333 0v68.266667h68.266667V204.8H341.333333z m136.533334 0v68.266667h68.266666V204.8H477.866667zM68.266667 341.333333v68.266667h68.266666V341.333333H68.266667z m136.533333 0v68.266667h68.266667V341.333333H204.8z m136.533333 0v68.266667h68.266667V341.333333H341.333333z m136.533334 0v68.266667h68.266666V341.333333H477.866667zM409.6 273.066667v68.266666h68.266667V273.066667H409.6zM273.066667 273.066667v68.266666h68.266666V273.066667H273.066667zM136.533333 273.066667v68.266666h68.266667V273.066667H136.533333z" fill="#A7B6E6"></path><path d="M614.4 0v68.266667h819.2V0H614.4z m0 136.533333v68.266667h819.2V136.533333H614.4z m0 136.533334v68.266666h819.2V273.066667H614.4z m0 136.533333v68.266667h819.2V409.6H614.4zM0 546.133333v68.266667h1433.6V546.133333H0z m0 136.533334v68.266666h1433.6v-68.266666H0z m0 136.533333v68.266667h1433.6v-68.266667H0z m0 136.533333v68.266667h1433.6v-68.266667H0z" fill="#ED4C49"></path></svg>
                </span>
                <strong>English</strong>
              </span>
            </router-link>
            
            <router-link class="navbar-item" @click.native="changelang('zh')" to="">
              <span>
                <span class="icon has-text-orange">
                  <svg id="icon-CN" class="svg-inline--fa fa-globe fa-w-24" viewBox="0 0 1433 1024" width="100%" height="100%"><path d="M0 0h1433.6v1024H0V0z" fill="#CF2338"></path><path d="M819.2 614.4h68.266667v68.266667h-68.266667zM887.466667 341.333333h68.266666v68.266667h-68.266666zM887.466667 477.866667h68.266666v68.266666h-68.266666zM819.2 204.8h68.266667v68.266667h-68.266667zM512 341.333333l-68.266667-204.8-68.266666 204.8H150.186667l184.32 136.533334-68.266667 204.8 177.493333-129.706667L621.226667 682.666667l-68.266667-204.8 184.32-136.533334z" fill="#FFD128"></path></svg>
                </span>
                <strong>简体中文</strong>
              </span>
            </router-link>
            </div>
        </div>
      </div>


	<!--
    <div class="navbar-end">
    
        <div class="navbar-item has-dropdown is-hoverable" style="width: 110px;">
          <a class="navbar-link">
          <span class="icon theme-color-font">
            <i class="fa fa-globe"></i>
          </span>
           <span>{{language}}</span>
           </a>
			<div id="" class="moreDropdownEN navbar-dropdown">
            <router-link class="navbar-item" @click.native="changelang('en')" to="">
              <span>
                <span class="icon has-text-success">
                  <i class="fa fa-globe"></i>
                </span>
                <strong>English</strong>
              </span>
            </router-link>
            
            <router-link class="navbar-item" @click.native="changelang('zh')" to="">
              <span>
                <span class="icon has-text-orange">
                  <i class="fa fa-globe"></i>
                </span>
                <strong>简体中文</strong>
              </span>
            </router-link>
          
        </div>
      </div>
    </div>
    -->
    
  </div>
  
  <div class="navbar-item search-item" style="">
<input placeholder="Search by Block / Transaction / Account / Token" value="" class="search-input theme-color-font">
<router-link to="/" class="button theme-color router-link-exact-active router-link-active" style="border-radius: 0px 4px 4px 0px;"><span class="fas fa-search"></span></router-link>
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
            language:localStorage.getItem('locale') == 'en' ? 'English' : '简体中文',
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
                this.language = localStorage.getItem('locale') == 'en' ? 'English' : '简体中文'

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
.search-input.theme-color-font:focus{
border: 1px solid #6c757e;
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
.logoShow{
display:none;
}

@media screen and (max-width: 1023px){
.logoShow{
display:block;
}
.logoHid{
display:none;
}
}
@media screen and (max-width: 1023px){
.logoShow{
display:block;
}
.logoHid{
display:none;
}
}






@media screen and (min-width: 1024px){
.bd-header {
    align-items: center;
    display: flex;
    min-height: 90px;
}
}


.navbar-item .has-dropdown:hover .navbar-dropdown {
    display: block;
}

</style>
