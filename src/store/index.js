import Vue from 'vue'
import Vuex from 'vuex'
import tabView from './modules/tabView'
import breadCrumb from './modules/breadCrumb'
import user from './modules/user'
Vue.use(Vuex)

//  全局状态管理
export default new Vuex.Store({
  //  状态数据对象
  state: {

  },
  getters: {

  },
  mutations: {

  },
  actions: {

  },
  modules: {
    tabView,
    breadCrumb,
    user
  }
})
