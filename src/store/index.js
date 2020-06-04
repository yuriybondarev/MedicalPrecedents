import Vue from 'vue';
import Vuex from 'vuex';
import console from './modules/console';
import precedents from './modules/precedents';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    console,
    precedents
  }
});