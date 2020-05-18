<template lang="pug">
  BRow
    BCol(v-if="displaySearchUserList" v-for="user in searchUserList" cols="12" lg="6" xl="4" class="col")
      UserListItem(:user="user")
    BCol(v-if="!displaySearchUserList" v-for="user in userList" cols="12" lg="6" xl="4" class="col")
      UserListItem(:user="user")
</template>

<script>
import UserListItem from './UserListItem'

export default {
  components: {
    UserListItem
  },
  computed: {
    displaySearchUserList () {
      return this.$store.state.displaySearchUserList
    },
    userList () {
      return this.$store.state.userList
    },
    searchUserList () {
      return this.$store.state.searchUserList
    }
  }
}
</script>

<style lang="scss" scoped>
  .col {
    margin-bottom: 30px;
  }

  .card {
    height: 100%;
  }
</style>
