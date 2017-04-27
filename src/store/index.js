import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import getters from './getters';
import app from './modules/app';

Vue.use(Vuex);

const store = new Vuex.Store({
  strict: true, // process.env.NODE_ENV !== 'development',
  actions,
  getters,
  modules: {
    app,
  },
  state: {

  },
  mutations: {

  },
});

export default store;
