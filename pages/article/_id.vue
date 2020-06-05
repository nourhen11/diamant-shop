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
                    <img :src="'../'+article.image" alt="Image placeholder" class="img-fluid rounded">
                  </div>
                   <p class="post-meta mb-4 mt-4">par <a href="#" class="secondColor">{{article.author}}</a> <span class="block-8-sep">&bullet;</span>{{article.date}}</p>

            <div class="col-md-12">
             <p>{{article.body}}</p>
            </div>
        
        </div>
      </div>
    </div>

</template>
<script>

export default {

 created(){
     this.getarticles()
    this.articles.forEach(element => {
    if(element.date==this.$route.params.id){
        return this.article=element
     }
     })
},
    data(){
        return{
            article:{},
            articles:[]
        }
    },
 methods:{
     getarticles(){
       let files =  require.context('~/assets/content/blog/', false, /\.json$/);
        this.articles = files.keys().map(key => {
        let res = files(key);
        return res;
      });
   },
 }   
  }
</script>