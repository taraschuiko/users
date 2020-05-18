<template lang="pug">
  BContainer
    Header
    UserList
</template>

<script>
import Header from '~/components/Header'
import UserList from '~/components/UserList'

export default {
  components: {
    Header,
    UserList
  },
  mounted () {
    this.$store.dispatch('getUserList')
  }
}
</script>
