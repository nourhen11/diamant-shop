<template>
  <div>
   
    <div class="site-blocks-cover" style="background-color:#a6ecf3">
      <div class="container">
        <div class="row align-items-start align-items-md-center justify-content-end">

                    <div class="col-md-7 text-center text-md-left pt-5 pt-md-0">
                      <div class="col-md-7 site-section-heading text-center pt-4">
            <h3>Nouveautés</h3>
          </div>
                      <carousel :autoplay	="true" :paginationColor="'#efefef'" :paginationEnabled="true">  
                          <slide v-for="product in newProducts" :key="product.title">
                           <img :src="product.image"  style="width:300px">
                          </slide>
                          
                          
                     </carousel>
                    
                    </div>
          <div class="col-md-5 text-center text-md-left pt-5 pt-md-0">
            <h1 class="mb-2">DIAMANT SHOP</h1>
            <div class="intro-text text-center text-md-left">
              <p class="mb-4">Avec plus de 500 modéles en France,il y a forcément un Histoire d'Or près de chez vous ! Vous y trouverez un large choix de Bijoux et Montres, ainsi que tous nos services : mise à taille de bague, entretien de montre, rachat d'or ou encore perçage d'oreilles.</p>
              <p>
                <nuxt-link to="/products" class="btn btn-sm" style="background-color: #7971ea;color:white">Découvrir</nuxt-link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

     
  </div>
</template>



<script>

export default {
  head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
    };
  },
created(){
    this.getNewProducts()
    console.log(this.newProducts)
},
  data(){
    return{
     newProducts:[]
    }
  },
  methods:{
    getNewProducts(){
       let files =  require.context('~/assets/content/product/', false, /\.json$/);
        let products = files.keys().map(key => {
        let res = files(key);
        return res;
      });
       this.newProducts = products

    }

  }


};
</script>

<style>
  .example-slide {
    align-items: center;
    background-color: #666;
    color: #999;
    display: flex;
    font-size: 1.5rem;
    justify-content: center;
    min-height: 10rem;
  }
</style>