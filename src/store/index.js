import Vue from 'vue';
import Vuex from 'vuex';
import console from './modules/console';
import precedents from './modules/precedents';
import excel from './modules/excel';
import banner from './modules/banner';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    console,
    precedents,
    excel,
    banner
  }
});