<template>
  <div>
    <article  v-for="blogpost in blogPosts" :key="blogpost.title">
    <h1>{{blogpost.title}}</h1>
    <div>{{blogpost.body}}</div>
    <div>hhhhhhhhhhhhh</div>
    </article>
  </div>
  
</template>



<script>
export default {
  head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
    };
  },
computed: {
  blogPosts(){
    return this.$store.state.blogPosts
  }

}
};
</script>