<template lang="pug">
  BRow
    BCol(v-for="user in this.$store.state.userList" cols="12" lg="6" xl="4" class="col")
      UserListItem(:user="user")
</template>

<script>
import UserListItem from './UserListItem'

export default {
  components: {
    UserListItem
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
