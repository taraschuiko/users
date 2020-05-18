<template lang="pug">
  BContainer
    Search
    UserList
</template>

<script>
import Search from '~/components/Search'
import UserList from '~/components/UserList'

export default {
  components: {
    Search,
    UserList
  },
  mounted () {
    this.$store.dispatch('getUserList')
  }
}
</script>
