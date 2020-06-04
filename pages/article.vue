<template>
    
    <div class="site-section border-bottom">
      <div class="container">
        <div class="row mb-5">
            <div class="col-md-12"></div>
            <div class="col-md-12">
            
            
                <div class="site-section-heading pt-3 mb-4">
                <h2 class="text-black">{{article.title}}</h2>
                 </div>
            </div>     
             
                <div class="col-md-12">
                    <img :src="article.image" alt="Image placeholder" class="img-fluid rounded">
                  </div>
                   <p class="post-meta mb-4 mt-4">By <a href="#" class="secondColor">{{article.author}}</a> <span class="block-8-sep">&bullet;</span>{{article.date}}</p>

            <div class="col-md-12">
              {{article.body}}
            </div>
        
        </div>
      </div>
    </div>

</template>
<script>
export default {
  computed: {
  article() {
    return this.$store.state.blogArticle
  }
},
  created(){
    //console.log(this.$store.state.blogArticle)
  }
  }
</script>