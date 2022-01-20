import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getter'

Vue.use(Vuex)

const modulesFiles = require.context('./modules', false, /\.ts$/)

const modules = modulesFiles.keys().reduce((modules: any, modulePath: string) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})

export default new Vuex.Store({
  mutations: {
  },
  actions: {
  },
  getters,
  modules
})
