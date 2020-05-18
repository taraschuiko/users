<template lang="pug">
  BRow
    BCol(cols="4" sm="3" md="2")
      BButton(variant="primary" v-b-modal="'add-user-modal'") Add
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
