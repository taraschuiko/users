import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const API_URL = process.env.API_URL

const store = () => new Vuex.Store({
  state: {
    userList: []
  },
  mutations: {
    setUserList (state, userList) {
      state.userList = userList
    }
  },
  actions: {
    getUserList ({ commit }) {
      axios.get(`${API_URL}/users`)
        .then(r => commit('setUserList', r.data))
    }
  }
})

export default store
