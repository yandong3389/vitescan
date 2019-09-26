<template>
  <div style="margin-top:30px;">
<footer class="footer footer-bg">
  <div class="container">
<div class="bd-footer-links">
  <div class="columns">
    <div class="column is-3">
      <p class="bd-footer-link-title" style="color: white;">ViteScan</p>
      <hr class="navbar-divider theme-color-footer-hr hrshow">
        <p class="bd-footer-link">
          <a href="#">关于我们</a>
        </p>

        <p class="bd-footer-link">
          建议反馈
        </p>
        <p style="margin-top: 0.5rem;">
          <img src="/static/wechat.jpg" alt="wechat" width="100" height="100">
        </p>
        <!-- <p class="bd-footer-link">
          <a href="mailto:contact@n4q.org">商务合作：contact@n4q.org</a>
        </p> -->
              <!--
        <p class="bd-footer-link">
          <a href="#">常见问题</a>
        </p>
        <p class="bd-footer-link">
          <a href="#">意见反馈</a>
        </p>
        <p class="bd-footer-link">
          <a href="#">微信群</a>
        </p>
              -->
      <!--
      <p class="bd-footer-link bd-is-more">
        <a href="#">View all posts</a>
      </p>
      -->
    </div>

    <div class="column is-3">
      <p class="bd-footer-link-title" style="color: white;">Vite开发中心</p>
      <hr class="navbar-divider theme-color-footer-hr hrshow">
        <p class="bd-footer-link">
          <a href="https://github.com/vitelabs/go-vite" target="_blank">Github</a>
        </p>
        <p class="bd-footer-link">
          <a href="https://pre-mainnet.vite.wiki/" target="_blank">Wiki</a>
        </p>
        <p class="bd-footer-link">
          <a href="https://github.com/vitelabs/whitepaper/blob/master/vite_en.pdf">White Paper</a>
        </p>
        <!--
        <p class="bd-footer-link">
          <a href="#">Elements</a>
        </p>
        <p class="bd-footer-link">
          <a href="#">Components</a>
        </p>
       -->
    </div>

    <div class="column is-3">
      <p class="bd-footer-link-title" style="color: white;">Vite生态</p>
      <hr class="navbar-divider theme-color-footer-hr hrshow">
      <p class="bd-footer-link bd-has-subtitle">
	    <a href="https://vite.org/" target="_blank">
      <!-- 
	    <span class="bd-footer-link-icon has-text-star">
	      <i class="fas fa-star"></i>
	    </span>
       -->
	    <strong>Vite官网</strong>
	    <!-- <em>https://vite.org</em> -->
	  </a>
	</p>

      <p class="bd-footer-link bd-has-subtitle">
	  <a href="https://wallet.vite.net/" target="_blank">
      <!-- 
	    <span class="bd-footer-link-icon has-text-danger">
	      <i class="fas fa-heart"></i>
	    </span>
       -->
	    <strong>Vite钱包</strong>
	    <!-- <em>https://wallet.vite.net</em> -->
	  </a>
	</p>

        <p class="bd-footer-link bd-has-subtitle">
		  <a href="https://x.vite.net/" target="_blank">
        <!-- 
		    <span class="bd-footer-link-icon has-text-success">
		      <i class="fas fa-rocket"></i>
		    </span>
         -->
        <strong>ViteX DEX</strong>
		    <!-- <strong>ViteX DEX（手续费9折邀请码：1918500189）</strong> -->
		    <!-- <em>https://x.vite.net</em> -->
		  </a>
		</p>

        <p class="bd-footer-link bd-has-subtitle">
		  <a href="https://global.vite.store/" target="_blank">
        <!-- 
		    <span class="bd-footer-link-icon has-text-primary">
		      <i class="fas fa-certificate"></i>
		    </span>
         -->
		    <strong>Vite商城</strong>
		    <!-- <em>https://global.vite.store</em> -->
		  </a>
		</p>
        
        <p class="bd-footer-link bd-has-subtitle">
		  <a href="https://forum.vite.net/" target="_blank">
        <!--  
		    <span class="bd-footer-link-icon has-text-bootstrap">
		     <i class="fas fa-exchange-alt"></i>
		    </span>
         -->
		    <strong>Vite官方论坛</strong>
		    <!-- <em>https://forum.vite.net</em> -->
		  </a>
		</p>

    </div>

    <div class="column is-3">
      <p class="bd-footer-link-title" style="color: white;">Vite媒体</p>
      <hr class="navbar-divider theme-color-footer-hr hrshow">
        <p class="bd-footer-link">
          <a href="https://weibo.com/u/6572727462">微博</a>
        </p>
        <p class="bd-footer-link">
          <a href="https://twitter.com/vitelabs" target="_blank">Twitter</a>
        </p>
        <p class="bd-footer-link">
          <a href="https://t.me/vite_en" target="_blank">Telegram Group（English）</a>
        </p>
        <p class="bd-footer-link">
          <a href="https://t.me/vite_zh" target="_blank">Telegram Group（中文群）</a>
        </p>
        <!--
        <p class="bd-footer-link">
          <a href="#">Elements</a>
        </p>
        <p class="bd-footer-link">
          <a href="#">Components</a>
        </p>
       -->
    </div>

  </div>
</div>


  </div>
  <div class="container" style="margin-top: 50px;">
    <hr class="navbar-divider theme-color-footer-hr hrshow">
    <div class="columns is-vcentered">
        <div class="column is-4"><p class=" has-text-grey-light">Copyright© 2019 vitescan.io</p></div> 
		<div class="column is-8 leftright faddr" style=""><router-link to="/address/vite_bb684ad129fc08261b6453ccc23bea0d6110fc5d16bd788888" style="">Donations: vite_bb684ad129fc08261b6453ccc23bea0d6110fc5d16bd788888</router-link></div>
	</div>
  </div>
  
</footer>



  </div>
</template>

<script>
  export default {
        inject:['reload'],
        data() {
        return {
            language:localStorage.getItem('locale') == 'en' ? 'EN' : '中文',
            active: false,
            'selectedNavTheme': ""
        }
        },
        methods: {
            randomTheme: function() {
            this.selectedNavTheme = this.navbarThemes[Math.floor(Math.random() * this.navbarThemes.length)]
            }
        }
  }

</script>

<style>

.faddr a{
  color: #b5b5b5!important;
}
.bd-footer-links {
    margin-top: 0.5rem;
    padding-bottom: 0.5rem;
}
.bd-footer-links a {
    /* color: currentColor; */
    color: white;
}
.hrshow{
display: block;
}

.column.leftright{
text-align: left;
overflow-x: auto;
}
@media screen and (min-width: 770px){
.column.leftright{
text-align: right;
overflow-x: auto;
}
}
.footer-bg{
/**background-color: #333;*/
color: white;
padding-bottom: 1rem;
background: linear-gradient(180deg,transparent 0,rgba(0,0,0,.8));
background-color: #3273dc;
background-repeat: no-repeat;
background-attachment: fixed;
transition: .5s linear;
}
.faddr a:hover {
    color: #3273dc;
}
</style>
