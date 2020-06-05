import Vue from 'vue';
import MarkDisplay from "vue-mark-display";

if (process.browser) {
    Vue.use(require('vue-mark-display'))
  }
Vue.use(MarkDisplay);

