export const state = () => ({
    blogArticle: {},
    products:[],
    product:{}
  });
  
  export const mutations = {
    setBlogPosts(state, list) {
      state.blogPosts = list;
    },
    setProducts(state, list) {
      state.products = list;
    },
    setProduct (state, product) {
      state.product = product
    },
    setArticle (state, article) {
      state.blogArticle = article
    },
  };
  
  export const actions = {
    async nuxtServerInit({ commit }) {
      let files = await require.context('~/assets/content/product/', false, /\.json$/);
      let productsList = files.keys().map(key => {
        let res = files(key);
        return res;
      });
      await commit('setProducts', productsList);
    },

  };
  
  export const getters= {
      product: state => state.product  
    }