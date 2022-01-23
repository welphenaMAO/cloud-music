import { phoneLogin } from '@/api/user'
import { getToken, removeToken, setToken } from '@/utils/auth'
import { resetRouter } from '@/router/index'

const state = {
  token: getToken(),
  name: "root",
  avatar: '',
  introduction: '',
  roles: []
}

const mutations = {
  SET_TOKEN: (state: { token: string | any }, token: string | any) => {
    state.token = token
  },
  SET_INTRODUCTION: (state: { introduction: string }, introduction: string) => {
    state.introduction = introduction
  },
  SET_NAME: (state: { name: string }, name: string) => {
    state.name = name
  },
  SET_AVATAR: (state: { avatar: string }, avatar: string) => {
    state.avatar = avatar
  },
  SET_ROLES: (state: { roles: any }, roles: any) => {
    state.roles = roles
  }
}

const actions = {
  // phone login
  phoneLogin({ commit }: any, data: any) {
    return new Promise<void>((resolve, reject) => {
      phoneLogin(data)
        // @ts-ignore
        .then(({data: {token, profile: {nickname,avatarUrl}}}: any) => {
          console.log('token ??', token)
          console.log("profile name ??", nickname)
          commit('SET_TOKEN', token)
          commit('SET_NAME', nickname)
          commit('SET_AVATAR', avatarUrl)
          setToken(token)
          resolve()
        })
        .catch(error => {
          reject(error)
        })
    })
  },

  // user logout
  logout ({ commit }) {
    commit('SET_TOKEN', '')
    commit('SET_ROLES', [])
    removeToken()
    resetRouter()
    window.location.href = '/auth/logout'
  },

  // remove token
  resetToken ({ commit }) {
    return new Promise((resolve: any) => {
      commit('SET_TOKEN', '')
      commit('SET_ROLES', [])
      removeToken()
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
