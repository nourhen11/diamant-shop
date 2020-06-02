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
                  <a href="index.html" class="js-logo-clone">Histoire d'or</a>
                </div>
              </div>

              <div class="col-6 col-md-4 order-3 order-md-3 text-right">
                <div class="site-top-icons">
                  <ul>
                    <li><a href="" class="snipcart-customer-profile">nbbb</a></li>
                    <li><a href="#" class="snipcart-customer-signin"><span class="icon icon-person"></span></a></li>
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
                <form action="#" method="post">
                  <h3 for="email_subscribe" class="footer-heading">RESTEZ INFORMÉS</h3>
                  <p>Recevez toutes les dernières informations sur les événements, les ventes et les offres. Inscrivez-vous à la newsletter dès aujourd'hui.</p>
                  <div class="form-group">
                    <input type="text" class="form-control py-4" id="email_subscribe" placeholder="Email">
                    <input type="submit" class="btn btn-sm btn-primary" value="Send" style="background-color:#7971ea">
                  </div>
                </form>
              </div>
            
            </div>
            <div class="col-md-6 col-lg-3 mb-4 mb-lg-0">
              
            </div>
            <div class="col-md-6 col-lg-3">
              <div class="block-5 mb-5">
                <h3 class="footer-heading mb-4">Contact Info</h3>
                <ul class="list-unstyled">
                  <li class="address"> 39 RUE DU ANATOLE 75012 PARIS</li>
                  <li class="phone"><a href="tel://23923929210">+2 392 3929 210</a></li>
                  <li class="email">emailaddress@domain.com</li>
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
  </div>
 
</template>
<script>
export default {
  methods:{
    login(){
      this.$auth.loginWith('auth0')

    }
  }
}
</script>