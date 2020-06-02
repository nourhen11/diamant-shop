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
            <img :src="product.image" alt="Image" class="img-fluid" style="height: 94%; width: 86%;">
          </div>
          <div class="col-md-6">
            <h2 class="text-black">{{product.title}}</h2>
            {{product.description}}
            <p><strong class="text-primary h4">{{product.price}}.00</strong></p>
            <div class="mb-1 d-flex">
              <label for="option-sm" class="d-flex mr-3 mb-3">
                couleur : {{product.color}}
              
              </label>
              <p>
                Taille :{{product.size}}
              </p>
             
            </div>
            <div class="mb-5">
              <div class="input-group mb-3" style="max-width: 120px;">
              <div class="input-group-prepend">
                <button class="btn btn-outline-primary js-btn-minus" type="button">&minus;</button>
              </div>
              <input type="text" class="form-control text-center" value="1" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1">
              <div class="input-group-append">
                <button class="btn btn-outline-primary js-btn-plus" type="button">&plus;</button>
              </div>
            </div>

            </div>

           <button class="snipcart-add-item "
            :data-item-id="product.title"
            :data-item-price="product.price"
            :data-item-image="product.image"
            :data-item-name="product.title"
            :data-item-url="'http://localhost:3000/admin/#/collections/produt/entries'/product.slug"
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
    computed:{
        product(){
            return this.$store.getters.product
        }
    }
}
</script>