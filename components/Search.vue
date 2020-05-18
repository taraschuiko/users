<template lang="pug">
  BRow
    BCol
      BFormInput(v-model.lazy="query" @keyup="search" @keyup.enter="search")
    BCol(cols="4" sm="3" md="2")
      BButton(variant="primary" @click="search") Search
</template>

<script>
export default {
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
