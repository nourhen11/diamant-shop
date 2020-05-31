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

                <div class="float-md-left mb-4"><h2 class="text-black h5">TOUT</h2></div>
                <div class="d-flex">
                  <div class="dropdown mr-1 ml-md-auto">
                    <button type="button" class="btn btn-secondary btn-sm dropdown-toggle" id="dropdownMenuOffset" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Latest
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuOffset">
                      <a class="dropdown-item" href="#">Men</a>
                      <a class="dropdown-item" href="#">Women</a>
                      <a class="dropdown-item" href="#">Children</a>
                    </div>
                  </div>
                  <div class="btn-group">
                    <button type="button" class="btn btn-secondary btn-sm dropdown-toggle" id="dropdownMenuReference" data-toggle="dropdown">Reference</button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuReference">
                      <a class="dropdown-item" href="#">Relevance</a>
                      <a class="dropdown-item" href="#">Name, A to Z</a>
                      <a class="dropdown-item" href="#">Name, Z to A</a>
                      <div class="dropdown-divider"></div>
                      <a class="dropdown-item" href="#">Price, low to high</a>
                      <a class="dropdown-item" href="#">Price, high to low</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
           
            <div class="row mb-5">
              <!-- -->
              <div class="col-sm-6 col-lg-4 mb-4" v-for="product in products" :key="product.title">
                <div class="block-4 text-center border">
                  <figure class="block-4-image" style="height: 182px; cursor:pointer">
                    <a @click="addproduct(product)"><img :src="product.image" alt="Image placeholder" class="img-fluid"></a>
                  </figure>
                  <div class="block-4-text p-4">
                    <p class="mb-0" style="height: 54px;">{{product.title}}</p>
                    <p class="font-weight-bold" style="color:#7971ea;">{{product.price}} € </p>
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
                  <span class=" color d-inline-block rounded-circle mr-2" style="background-color:#f5efef"></span> <span class="text-black">Blanc</span>
                </a>
                <a class="d-flex color-item align-items-center"  @click="filterProducts('color','Jaune')"  style="cursor:pointer">
                  <span class="color d-inline-block rounded-circle mr-2" style="background-color:#e8e83f"></span> <span class="text-black">Jaune</span>
                </a>
                <a  class="d-flex color-item align-items-center" style="cursor:pointer" @click="filterProducts('color','Rose')" >
                  <span class="color d-inline-block rounded-circle mr-2" style="background-color:#f7ccd4"></span> <span class="text-black">Rosé</span>
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
