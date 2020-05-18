<template lang="pug">
  BContainer
    UserList
</template>

<script>
import UserList from '~/components/UserList'

export default {
  components: {
    UserList
  },
  mounted () {
    this.$store.dispatch('getUserList')
  }
}
</script>
