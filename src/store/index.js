/*
 * @Author: qdlaoxu
 * @Date:   2017-07-22 16:30:36
 * @Last Modified by:   qdlaoxu
 * @Last Modified time: 2017-07-22 21:10:51
 */

'use strict';

import Vue from 'vue'
import Vuex from 'vuex'

import * as actions from './actions'
import * as getters from './getters'

import app from './modules/app'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    username: sessionStorage.getItem("username") || "",
    accessToken: sessionStorage.getItem("accessToken") || ""
  },
  actions,
  getters,
  modules: {
    app
  },
  mutations: {
    set_username(state, username){
      sessionStorage.setItem("username", username)
      state.username = username
    }
  }
})
export default store
