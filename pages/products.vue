<template>
    <div>
         <div class="bg-light py-3">
      <div class="container">
        <div class="row">
          <div class="col-md-12 mb-0"><a href="index.html">Home</a> <span class="mx-2 mb-0">/</span> <strong class="text-black">Shop</strong></div>
        </div>
      </div>
    </div>

    <div class="site-section">
      <div class="container">

        <div class="row mb-5">
          <div class="col-md-9 order-2">
           
            <div class="row">
              <div class="col-md-12 mb-5">

                <div class="d-flex">
             
                  <div class="btn-group">
                    <button type="button" class="btn text-white btn-sm" style="background-color:#efc9cf">Liste des Produits</button>
                    
                  </div>
                </div>
              </div>
            </div>
           
            <div class="row mb-5">
              <!-- -->
              <div class="col-sm-6 col-lg-4 mb-4" v-for="product in products" :key="product.title">
                <div class="block-4 text-center border">
                  <figure class="block-4-image" style="height: 135px; cursor:pointer">
                    <nuxt-link :to="'/product/' + product.title"><img :src="product.image" alt="Image placeholder" class="img-fluid" style="height: 154px;"></nuxt-link>
                  </figure>
                  <div class="block-4-text p-4">
                    <p class="mb-0" style="height: 54px;">{{product.title}}</p>
                    <h5 class="font-weight-bold" style="color:#7971ea;">{{product.price}} € </h5>
                  </div>
                </div>
              </div>
            <!-- -->


            </div>
            <div class="row">
              <div class="col-md-12 text-center">
                <div class="site-block-27">
                  <ul>
                    <li><a href="#">&lt;</a></li>
                    <li class="active"><span>1</span></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">4</a></li>
                    <li><a href="#">5</a></li>
                    <li><a href="#">&gt;</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-3 order-1 mb-5 mb-md-0">
            <div class="border p-4 rounded mb-4">
              <h3 class="mb-3 h6 text-uppercase text-black d-block">Categories</h3>
              <ul class="list-unstyled mb-0">
                <li class="mb-1" ><a @click="filterProducts('category','BAGUES')" class="d-flex colorp" style="cursor:pointer"><span>BAGUES</span></a></li>
                <li class="mb-1"><a  @click="filterProducts('category','BRACELETS')" class="d-flex colorp" style="cursor:pointer"><span>BRACELETS</span></a></li>
                <li class="mb-1"><a @click="filterProducts('category','COLLIERS')" class="d-flex colorp" style="cursor:pointer"><span>COLLIERS</span></a></li>
                <li class="mb-1"><a  @click="filterProducts('category','BOUCLES A OREILLES')" class="d-flex colorp " style="cursor:pointer"><span>BOUCLES OREILLES</span> </a></li>

              </ul>
            </div>

            <div class="border p-4 rounded mb-4">
              <div class="mb-4">
                <h3 class="mb-3 h6 text-uppercase text-black d-block">Filter Par Prix</h3>
                <div id="slider-range" class="border-primary"></div>
                <input type="text" name="text" id="amount" class="form-control border-0 pl-0 bg-white"/>
              </div>

              <div class="mb-4">
                <h3 class="mb-3 h6 text-uppercase text-black d-block">Taille</h3>
                <label for="s_sm" class="d-flex">
                  <input type="checkbox" id="s_sm" class="mr-2 mt-1"> <span class="text-black">S (2,319)</span>
                </label>
                <label for="s_md" class="d-flex">
                  <input type="checkbox" id="s_md" class="mr-2 mt-1"> <span class="text-black">M (1,282)</span>
                </label>
                <label for="s_lg" class="d-flex">
                  <input type="checkbox" id="s_lg" class="mr-2 mt-1"> <span class="text-black">L (1,392)</span>
                </label>
              </div>

              <div class="mb-4">
                <h3 class="mb-3 h6 text-uppercase text-black d-block">Couleur</h3>
                <a class="d-flex color-item align-items-center" @click="filterProducts('color','Blanc')" style="cursor:pointer">
                  <span class=" color d-inline-block rounded-circle mr-2" style="background-color:#f5efef"></span> <span class="text-black">BLANC</span>
                </a>
                <a class="d-flex color-item align-items-center"  @click="filterProducts('color','Jaune')"  style="cursor:pointer">
                  <span class="color d-inline-block rounded-circle mr-2" style="background-color:#e8e83f"></span> <span class="text-black">JAUNE</span>
                </a>
                <a  class="d-flex color-item align-items-center" style="cursor:pointer" @click="filterProducts('color','Rose')" >
                  <span class="color d-inline-block rounded-circle mr-2" style="background-color:#f7ccd4"></span> <span class="text-black">OR ROSE</span>
                </a>
                <a  class="d-flex color-item align-items-center" style="cursor:pointer" @click="filterProducts('color','Rose')" >
                  <span class="color d-inline-block rounded-circle mr-2" style="background-color:#d1d3d6"></span> <span class="text-black">PLATINE</span>
                </a>
                
              </div>

            </div>
          </div>
        </div>

       
        
      </div>
    </div>
    </div>
</template>

<script>
export default {
computed: {
  products() {
    return this.$store.state.products
  }

},
created(){
  console.log(this.$route.path)
},
 methods: {
    addproduct(item) {
      console.log(item)
      this.$store.commit('setProduct', item)
      this.$router.push('/product')
    }
    ,
    filterProducts(type,valeur){
      let productFilters=[]
      let files =  require.context('~/assets/content/product/', false, /\.json$/);
      let productsList = files.keys().map(key => {
        let res = files(key);
        return res;
      });

      switch (type) {
        case 'category':
          productsList.forEach(element => {
            if(element.category==valeur){
              productFilters.push(element)
            }
         })
          break;
        case 'color':
            productsList.forEach(element => {
            if(element.color==valeur){
              productFilters.push(element)
            }
         })
           break;
        case 'size':
          console.log('size filter.');
          // expected output: "Mangoes and papayas are $2.79 a pound."
          break;
        default:
          console.log(`Sorry, we are out of.`);
      }
     
      this.$store.commit('setProducts',productFilters)

    }
    
  }
};
</script>

<style scoped>
.colorp{
  color: #7971ea;
}

</style>>
