import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const API_URL = process.env.API_URL

const store = () => new Vuex.Store({
  state: {
    userList: [],
    searchUserList: [],
    displaySearchUserList: false
  },
  mutations: {
    setUserList (state, userList) {
      state.userList = userList
    },
    search (state, query) {
      state.searchUserList = state.userList.filter(user => user.username.toLowerCase().includes(query.toLowerCase()))
      state.displaySearchUserList = !!query.trim()
    },
    editUser (state, editedUser) {
      state.userList = state.userList.map(user => user.id === editedUser.id ? editedUser : user)
    },
    deleteUser (state, id) {
      state.userList = state.userList.filter(user => user.id !== id)
      state.searchUserList = state.searchUserList.length ? state.searchUserList.filter(user => user.id !== id) : state.searchUserList
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
