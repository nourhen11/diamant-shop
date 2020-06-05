<template>
  <div class="site-wrap">
      <div hidden id="snipcart" data-api-key="M2IzMjUzM2EtNzQwYy00MjYxLWFlNWMtMTk0NWFjY2NmOTBjNjM3MjUwOTU2MDgyOTc2NjUx"  data-currency="EUR"></div>

      <header class="site-navbar">
        <div class="site-navbar-top">
          <div class="container">
            <div class="row align-items-center">

              <div class="col-6 col-md-4 order-2 order-md-1 site-search-icon text-left">
                <form action="" class="site-block-top-search">
                  <span class="icon icon-search2"></span>
                  <input type="text" class="form-control border-0" placeholder="Search">
                </form>
              </div>

              <div class="col-12 mb-3 mb-md-0 col-md-4 order-1 order-md-2 text-center">
                <div class="site-logo">
                  <a href="index.html" class="js-logo-clone">DIAMANT <img src="images/5.jpg" style="width: 22px;"> SHOP</a>
                </div>
              </div>

              <div class="col-6 col-md-4 order-3 order-md-3 text-right">
                <div class="site-top-icons">
                  <ul>
                   
                
                    <li><a href="#"><span class="icon icon-person"></span></a></li>
                    <li><a href="#"><span class="icon icon-heart-o"></span></a></li>
                    <li>
                      <a class="site-cart" href="#">
                        <span class="icon icon-shopping_cart snipcart-checkout"></span>
                        <span class="count snipcart-items-count"></span>
                      </a>
                    </li> 
                    <li class="d-inline-block d-md-none ml-md-0"><a href="#" class="site-menu-toggle js-menu-toggle"><span class="icon-menu"></span></a></li>
                  </ul>
                </div> 
              </div>

            </div>
          </div>
        </div> 
        <nav class="site-navigation text-right text-md-center" role="navigation">
          <div class="container">
            <ul class="site-menu js-clone-nav d-none d-md-block">
              <li class="has-children active"> <router-link to="/">Home</router-link></li>
              <li><router-link to="/products">Catalogue</router-link>
              <li><router-link to="/blog">Blog</router-link></li>
              <li><router-link to="/contact">Contact</router-link></li>
            </ul>
          </div>
        </nav>
      </header>

    <nuxt />
    
      <footer class="site-footer border-top">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 mb-5 mb-lg-0">
               <div class="block-7">
              
                  <h3 for="email_subscribe" class="footer-heading">RESTEZ INFORMÉS</h3>
                  <p>Recevez toutes les dernières informations sur les événements, les ventes et les offres. Inscrivez-vous à la newsletter dès aujourd'hui.</p>
                      <div id="mc_embed_signup">
                      <form action="https://ynov.us10.list-manage.com/subscribe/post?u=b75c85b6ab2d35663b1a49e13&amp;id=8c0dca43d7" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                          <div id="mc_embed_signup_scroll">
                        <h2></h2>
                      <div class="mc-field-group">
                        <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL"  placeholder="e-mail">
                      </div>
                        <div id="mce-responses" class="clear">
                          <div class="response" id="mce-error-response" style="display:none"></div>
                          <div class="response" id="mce-success-response" style="display:none"></div>
                        </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                          <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_b75c85b6ab2d35663b1a49e13_8c0dca43d7" tabindex="-1" value=""></div>
                          <div class="clear"><input type="submit" value="S'ABONNER" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
                          </div>
                      </form>
                  </div>
               
              </div>
            
            </div>
            <div class="col-md-6 col-lg-3 mb-4 mb-lg-0">
              

              
            </div>
            <div class="col-md-6 col-lg-3">
              <div class="block-5 mb-5">
                <h3 class="footer-heading mb-4">Contact Info</h3>
                <ul class="list-unstyled">
                  <li class="address"> 39 RUE DU LIBERTE PARIS</li>
                  <li class="phone"><a href="tel://23923929210">+336 56 67 88</a></li>
                  <li class="email">dianmantshop@gmail.com</li>
                </ul>
              </div>

             
            </div>
          </div>
          <div class="row pt-5 mt-5 text-center">
            <div class="col-md-12">
            
            </div>
            
          </div>
        </div>
      </footer>
      <script src="https://cdn.snipcart.com/themes/v3.0.13/default/snipcart.js"></script>
  <script>
      document.addEventListener('snipcart.ready', function() {
          Snipcart.api.session.setLanguage('fr');
      });
  </script> 
 <script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script>
 <script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';fnames[5]='BIRTHDAY';ftypes[5]='birthday';}(jQuery));var $mcj = jQuery.noConflict(true);</script>
<!--End mc_embed_signup-->

  </div>
 
</template>
<style type="text/css">
	
	/* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
	   We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
     #mc_embed_signup .button{
       background-color:#7971ea;;
     }
     #mc_embed_signup form{
       padding: 0;
     }
</style>

<script>
export default {
  data(){
    return{
      user:{}
    }
  },
  created(){
  },
  methods:{

  }
}
</script>