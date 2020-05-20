export const state = () => ({
    blogPosts: [],
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