<template>
  <div>
  <div class="bg-light py-3">
      <div class="container">
        <div class="row">
          <div class="col-md-12 mb-0"><nuxt-link to="/">Home</nuxt-link> <span class="mx-2 mb-0">/</span> <strong class="text-secondary">{{product.title}}</strong></div>
        </div>
      </div>
    </div> 
    <div class="site-section">
      <div class="container">
        <div class="row">
          <div class="col-md-5">
            <img :src="'../'+product.image" alt="Image" class="img-fluid" style="border: solid;border-color: #e8dfdf; border-width: 1px; width: 402px;box-shadow: 0 0 30px -10px rgba(0, 0, 0, 0.1);">
          </div>
          <div class="col-md-6">
            <h2 class="text-black">{{product.title}}</h2>
            <p> {{product.description}}</p>
           
            <p><strong class="text-secondry h4">Prix : {{product.price}}.00 € </strong></p>
            <div class="mb-1 d-flex">
              <label for="option-sm" class="d-flex mr-3 mb-3">
                <span class="d-inline-block text-black mr-2">Couleur: </span> <span class="d-inline-block " style="top:-2px; position: relative;">{{product.color}}</span> 
              </label>
             <label for="option-sm" class="d-flex mr-3 mb-3">
                <span class="d-inline-block text-black mr-2">Taille: </span> <span class="d-inline-block " style="top:-2px; position: relative;">{{product.size}}</span> 
              </label>

              <label for="option-sm" class="d-flex mr-3 mb-3">
                <span class="d-inline-block text-black mr-2">Categorie: </span> <span class="d-inline-block " style="top:-2px; position: relative;">{{product.category}}</span> 
              </label>
               <label for="option-sm" class="d-flex mr-3 mb-3">
                <span class="d-inline-block text-black mr-2">Quantité in stock: </span> <span class="d-inline-block " style="top:-2px; position: relative;">{{product.quantity}}</span> 
              </label>
            </div>
           <button class="snipcart-add-item buy-now btn btn-sm" style="background-color:#7971ea;color:white"
            :data-item-id="product.title"
            :data-item-price="product.price"
            :data-item-image="'../'+product.image"
            :data-item-name="product.title"
            :data-item-url="this.$route.fullPath"
           >
         Ajouter a panier
        </button>

          </div>
        </div>
      </div>
    </div>   
</div>
</template>
<script>

export default {
    created(){
      this.getproducts()
        this.products.forEach(element => {
            if(element.title==this.$route.params.id){
                return this.product=element
            }
         })
    },
    data(){
        return{
            product:{},
            products:[]
        }
    },
    methods:{
      getproducts(){
       let files =  require.context('~/assets/content/product/', false, /\.json$/);
        this.products = files.keys().map(key => {
        let res = files(key);
        return res;
      });
   },
    }
}
</script>