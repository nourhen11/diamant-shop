<template>
<div>
    
    <div class="site-section block-8">
      <div class="container">
        <div class="row justify-content-center  mb-5">
          <div class="col-md-7 site-section-heading text-center pt-4">
            <h2>Blog List</h2>
          </div>
        </div>
        <!---->
        <div class="row align-items-center" v-for="article in articles" :key="article.title">
          <div class="col-md-12 col-lg-7 mb-5">
            <a href="#"><img :src="'./'+article.image" alt="Image placeholder" class="img-fluid rounded"></a>
          </div>
          <div class=" col-lg-5">
            <h3><a href="#" class="secondColor">{{article.title}}</a></h3>
            <p class="post-meta mb-4">By <a href="#" class="secondColor">{{article.author}}</a> <span class="block-8-sep">&bullet;</span>{{article.date}}</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam iste dolor accusantium facere corporis ipsum animi deleniti fugiat. Ex, veniam?[...]</p>
            <p> <nuxt-link :to="'/article/' + article.date" class="btn btn-primary btn-sm" style="background-color:#7971ea">Lire la suite</nuxt-link></p>
          </div>
        </div>
      </div>
    </div>

    
</div>
</template>
<script>
export default {
  data(){
    return{
      articles:[]
    }
  },
  created(){
      let files =  require.context('~/assets/content/blog/', false, /\.json$/);
      let blogList = files.keys().map(key => {
        let res = files(key);
        return res;
      });
      this.articles=blogList
  },
  methods:{

  }
}
</script>
<style scoped>
.secondColor{
  color: #7971ea;
}
</style>>

