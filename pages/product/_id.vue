<template>
  <div>
  <div class="bg-light py-3">
      <div class="container">
        <div class="row">
          <div class="col-md-12 mb-0"><a href="index.html">Home</a> <span class="mx-2 mb-0">/</span> <strong class="text-black">{{product.title}}</strong></div>
        </div>
      </div>
    </div> 
    <div class="site-section">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <img :src="'../'+product.image" alt="Image" class="img-fluid" >
          </div>
          <div class="col-md-6">
            <h2 class="text-black">{{product.title}}</h2>
            {{product.description}}
           

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
        this.$store.state.products.forEach(element => {
            if(element.title==this.$route.params.id){
                return this.product=element
            }
         })
    },
    data(){
        return{
            product:{},
        }
    },
    methods:{
        
    }
}
</script>