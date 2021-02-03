<template>
  <div>
  
  
<nav id="navbar" class="navbar is-spaced logoHid" style="padding: 0rem 2rem 0rem 2rem;z-index: 31;">
	<div class="container">
	<div class="navbar-brand">
	<router-link class="navbar-item" to="/">
      <!-- <img v-bind:src="companyLogo" alt="ViteScan.io" width="112" height="28"> -->
      <svg  style="enable-background:new 0 0 66 34;width: 50px;height: 36px;margin-top: -10px;" viewBox="0 0 512 512" height="51pt" width="51pt" xmlns="http://www.w3.org/2000/svg">
        <path fill="#eb1919" d="m76 240c12.109375 0 23.109375-4.816406 31.207031-12.625l44.148438 22.074219c-.226563 1.820312-.355469 3.667969-.355469 5.550781 0 24.8125 20.1875 45 45 45s45-20.1875 45-45c0-6.9375-1.582031-13.515625-4.398438-19.390625l60.007813-60.007813c5.875 2.816407 12.453125 4.398438 19.390625 4.398438 24.8125 0 45-20.1875 45-45 0-4.6875-.722656-9.207031-2.058594-13.457031l52.132813-39.097657c7.140625 4.769532 15.710937 7.554688 24.925781 7.554688 24.8125 0 45-20.1875 45-45s-20.1875-45-45-45-45 20.1875-45 45c0 4.6875.722656 9.207031 2.058594 13.457031l-52.132813 39.097657c-7.140625-4.769532-15.710937-7.554688-24.925781-7.554688-24.8125 0-45 20.1875-45 45 0 6.9375 1.582031 13.515625 4.398438 19.390625l-60.007813 60.007813c-5.875-2.816407-12.453125-4.398438-19.390625-4.398438-12.109375 0-23.109375 4.816406-31.207031 12.625l-44.148438-22.074219c.226563-1.820312.355469-3.667969.355469-5.550781 0-24.8125-20.1875-45-45-45s-45 20.1875-45 45 20.1875 45 45 45zm360-210c8.269531 0 15 6.730469 15 15s-6.730469 15-15 15-15-6.730469-15-15 6.730469-15 15-15zm-120 90c8.269531 0 15 6.730469 15 15s-6.730469 15-15 15-15-6.730469-15-15 6.730469-15 15-15zm-120 120c8.269531 0 15 6.730469 15 15s-6.730469 15-15 15-15-6.730469-15-15 6.730469-15 15-15zm-120-60c8.269531 0 15 6.730469 15 15s-6.730469 15-15 15-15-6.730469-15-15 6.730469-15 15-15zm0 0"/>
        <path fill="rgb(50, 115, 220)" d="m497 482h-16v-317c0-8.285156-6.714844-15-15-15h-60c-8.285156 0-15 6.714844-15 15v317h-30v-227c0-8.285156-6.714844-15-15-15h-60c-8.285156 0-15 6.714844-15 15v227h-30v-107c0-8.285156-6.714844-15-15-15h-60c-8.285156 0-15 6.714844-15 15v107h-30v-167c0-8.285156-6.714844-15-15-15h-60c-8.285156 0-15 6.714844-15 15v167h-16c-8.285156 0-15 6.714844-15 15s6.714844 15 15 15h482c8.285156 0 15-6.714844 15-15s-6.714844-15-15-15zm-76-302h30v302h-30zm-120 90h30v212h-30zm-120 120h30v92h-30zm-120-60h30v152h-30zm0 0"/>
      </svg>
      <!-- <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 66 34" xml:space="preserve" style="enable-background:new 0 0 66 34;width: 80px;height: 36px;"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="home" transform="translate(-140.000000, -15.000000)" fill="#3273dc" ><g id="header" ><g id="Page-1" transform="translate(140.000000, 15.000000)" ><polygon id="Fill-1" points="0 8.26842569 10.0518349 33.9059853 11.1644771 5.7596" ></polygon><polygon id="Fill-2" points="13.7158183 5.27651927 10.4047174 33.9431982 36.0790844 -3.11926606e-05" ></polygon><g id="Group-2" transform="translate(27.818182, 14.424242)" ><polygon id="Fill-3" points="5.06661818 10.2992787 5.03573745 10.2992787 1.24738882 0.789260328 0.536196163 0.789260328 4.64926038 10.833609 5.43781084 10.833609 9.56615947 0.789260328 8.88584754 0.789260328" ></polygon><polygon id="Fill-4" points="13.4163319 10.8337025 14.0966439 10.8337025 14.0966439 0.789041979 13.4163319 0.789041979" ></polygon><polygon id="Fill-5" points="17.9468475 1.32393372 21.8278384 1.32393372 21.8278384 10.8336401 22.5081503 10.8336401 22.5081503 1.32393372 26.4047374 1.32393372 26.4047374 0.789291521 17.9468475 0.789291521" ></polygon><polygon id="Fill-6" points="30.2547228 0.789260328 30.2547228 10.833609 37.7540622 10.833609 37.7540622 10.2992787 30.9350347 10.2992787 30.9350347 5.88177409 37.274631 5.88177409 37.274631 5.34713189 30.9350347 5.34713189 30.9350347 1.32421446 37.6767044 1.32421446 37.6767044 0.789260328"></polygon></g></g></g></g></g></svg> -->
      <p style="font-size: 24px;color: rgb(50, 115, 220);font-family: yahei;">ViteScan</p>
      <p style="margin-top: 6px;color: #3273dc;margin-left: 10px;font-size: 13px;font-family: yahei;">{{ $t("index.subtitle") }}</p>
    </router-link>
	 </div>
	 
	 <div id="navMenuDocumentation" class="navbar-menu">

     <div class="navbar-end">
        <div class="navbar-item has-dropdown is-hoverable" style="">
          <a class="navbar-link">
          <span class="icon theme-color-font">
            <i class="fa fa-globe"></i>
          </span>
           <span>Mainnet</span>
           </a>
			<div id="" class="moreDropdownEN navbar-dropdown">
            <router-link class="navbar-item" to="">
              <span>
                <span class="icon theme-color-font">
                  <i class="fa fa-globe"></i>
                </span>
                <strong>Mainnet</strong>
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
      <svg  style="enable-background:new 0 0 66 34;width: 50px;height: 36px;margin-top: -10px;" viewBox="0 0 512 512" height="51pt" width="51pt" xmlns="http://www.w3.org/2000/svg">
        <path fill="#eb1919" d="m76 240c12.109375 0 23.109375-4.816406 31.207031-12.625l44.148438 22.074219c-.226563 1.820312-.355469 3.667969-.355469 5.550781 0 24.8125 20.1875 45 45 45s45-20.1875 45-45c0-6.9375-1.582031-13.515625-4.398438-19.390625l60.007813-60.007813c5.875 2.816407 12.453125 4.398438 19.390625 4.398438 24.8125 0 45-20.1875 45-45 0-4.6875-.722656-9.207031-2.058594-13.457031l52.132813-39.097657c7.140625 4.769532 15.710937 7.554688 24.925781 7.554688 24.8125 0 45-20.1875 45-45s-20.1875-45-45-45-45 20.1875-45 45c0 4.6875.722656 9.207031 2.058594 13.457031l-52.132813 39.097657c-7.140625-4.769532-15.710937-7.554688-24.925781-7.554688-24.8125 0-45 20.1875-45 45 0 6.9375 1.582031 13.515625 4.398438 19.390625l-60.007813 60.007813c-5.875-2.816407-12.453125-4.398438-19.390625-4.398438-12.109375 0-23.109375 4.816406-31.207031 12.625l-44.148438-22.074219c.226563-1.820312.355469-3.667969.355469-5.550781 0-24.8125-20.1875-45-45-45s-45 20.1875-45 45 20.1875 45 45 45zm360-210c8.269531 0 15 6.730469 15 15s-6.730469 15-15 15-15-6.730469-15-15 6.730469-15 15-15zm-120 90c8.269531 0 15 6.730469 15 15s-6.730469 15-15 15-15-6.730469-15-15 6.730469-15 15-15zm-120 120c8.269531 0 15 6.730469 15 15s-6.730469 15-15 15-15-6.730469-15-15 6.730469-15 15-15zm-120-60c8.269531 0 15 6.730469 15 15s-6.730469 15-15 15-15-6.730469-15-15 6.730469-15 15-15zm0 0"/>
        <path fill="rgb(50, 115, 220)" d="m497 482h-16v-317c0-8.285156-6.714844-15-15-15h-60c-8.285156 0-15 6.714844-15 15v317h-30v-227c0-8.285156-6.714844-15-15-15h-60c-8.285156 0-15 6.714844-15 15v227h-30v-107c0-8.285156-6.714844-15-15-15h-60c-8.285156 0-15 6.714844-15 15v107h-30v-167c0-8.285156-6.714844-15-15-15h-60c-8.285156 0-15 6.714844-15 15v167h-16c-8.285156 0-15 6.714844-15 15s6.714844 15 15 15h482c8.285156 0 15-6.714844 15-15s-6.714844-15-15-15zm-76-302h30v302h-30zm-120 90h30v212h-30zm-120 120h30v92h-30zm-120-60h30v152h-30zm0 0"/>
      </svg>
      <!-- <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: Free, open source, &amp; modern CSS framework based on Flexbox" width="112" height="28"> -->
      <p style="font-size: 24px;color: rgb(50, 115, 220);font-family: yahei;">ViteScan</p>
      <!-- <p style="margin-top: 6px;color: #3273dc;margin-left: 10px;font-size: 13px;font-family: yahei;">{{ $t("index.subtitle") }}</p> -->
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
          <!--
            <router-link class="navbar-item " to="/transactions">
              <span>
                <span class="icon theme-color-font"><i class="fa fa-server"></i></span>
                <strong>View Contract Internal Txns</strong>
                <br>
                
              </span>
            </router-link>
            -->
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
            <!-- <hr class="navbar-divider">
            <router-link class="navbar-item " to="/accounts">
              <span>
                <span class="icon theme-color-font">
                  <i class="fa fa-users"></i>
                </span>
                <strong>Top Accounts</strong>
                <br>
                Top Accounts by VITE Balance
              </span>
            </router-link> -->
            <!-- <hr class="navbar-divider">
            <a class="navbar-item " href="#">
              <span>
                <span class="icon theme-color-font">
                  <i class="fa fa-file-contract"></i>
                </span>
                <strong>Verified Contracts</strong>
                <br>
                Contracts With verified source codes only
              </span>
            </a> -->
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
        <router-link class="navbar-item " to="/accounts">
          <span class="icon theme-color-font"><i class="fa fa-users"></i></span>
          <span>Top Accounts</span>
        </router-link>

        <!--
        <router-link class="navbar-item " to="/vitexLog">
          <span class="icon theme-color-font"><i class="fa fa-history"></i></span>
          <span>ViteX Log</span>
        </router-link>

        -->
        <!-- <router-link class="navbar-item " to="#">
          <span class="icon theme-color-font"><i class="fa fa-chart-bar"></i></span>
          <span>ViteX</span>
        </router-link> -->
<!--
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
      
  -->
    </div>

     <div class="navbar-end logoShow" >
       <!--
        <div class="navbar-item has-dropdown is-hoverable" style="">
          <a class="navbar-link">
          <span class="icon theme-color-font">
            <i class="fa fa-globe"></i>
          </span>
           <span>Mainnet</span>
           </a>
			<div id="" class="moreDropdownEN navbar-dropdown">
            <router-link class="navbar-item" @click.native="changelang('en')" to="">
              <span>
                <span class="icon has-text-success">
                  <i class="fa fa-globe"></i>
                </span>
                <strong>Mainnet</strong>
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
<input placeholder="Search by Block / Transaction / Account / Contract" value="" v-model="keyword" class="search-input theme-color-font">
<button @click="searchByKey()" class="button theme-color router-link-exact-active router-link-active" style="border-radius: 0px 4px 4px 0px;"><span class="fas fa-search"></span></button>
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
            language:localStorage.getItem('locale') == 'zh' ? '简体中文' : 'English',
            active: false,
            companyLogo: companyLogo,
            'selectedNavTheme': "",
            keyword:''
        }
        },
        methods: {
            changelang: function(lang){
                localStorage.setItem('locale', lang);

                // 使用F5刷新时可以不用实时变化
                this.$i18n.locale = localStorage.getItem('locale');
                this.language = localStorage.getItem('locale') == 'zh' ? '简体中文' : 'English'

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
            },
            searchByKey: function() {

                let keyword = this.keyword;

                if(keyword === "" || keyword == null){
                    return false;
              　}

                // address / block num / block hash / tx hash
                if (keyword.length == 55 && keyword.indexOf('vite_') == 0) {
                   console.info("address");
                   this.$router.push("/address/" + keyword)
                } else if (!isNaN(keyword)){
                   console.info("block Number");
                   this.$router.push("/block/" + keyword)
                } else if (keyword.length == 64){
                   console.info("hash");
                   this.$router.push("/tx/" + keyword)
                } else {
                   console.info("无效关键字！");
                }


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
border: 1px solid #3273dc;
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
