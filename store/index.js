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
    addUser (state, newUser) {
      state.userList.push({
        id: state.userList.length + 1,
        ...newUser
      })
      this.commit('updateSearch')
    },
    editUser (state, editedUser) {
      state.userList = state.userList.map(user => user.id === editedUser.id ? editedUser : user)
      this.commit('updateSearch')
    },
    deleteUser (state, id) {
      state.userList = state.userList.filter(user => user.id !== id)
      this.commit('updateSearch')
    },
    updateSearch (state) {
      state.searchUserList = state.userList.filter(user => state.searchUserList.some(resultUser => resultUser.id === user.id))
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
