<template lang="pug">
  BRow
    BCol(cols="4" sm="3" md="2")
      BButton(variant="primary" @click="addUser" v-b-modal="'add-user-modal'") Add
    BCol
      BFormInput(v-model.lazy="query" @keyup="search" placeholder="Search...")
    AddUserModal
</template>

<script>
import AddUserModal from './AddUserModal'

export default {
  components: {
    AddUserModal
  },
  data: () => ({
    query: ''
  }),
  methods: {
    search () {
      this.$store.commit('search', this.query)
    },
    addUser () {
      console.log('adduser')
    }
  }
}
</script>

<style lang="scss" scoped>
  .row {
    padding: 30px 0;
  }

  button {
    width: 100%;
  }
</style>
