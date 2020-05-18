<template lang="pug">
  BCard(v-if="user.address")
    h2 {{ user.username }}
    b Email:
    span  {{ user.email }}
    br
    b Address:
    span  {{ user.address.city }}, {{ user.address.street }}, {{user.address.suite}}
    div
      BButton(variant="danger" @click="deleteUser") Delete
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  methods: {
    deleteUser () {
      this.$store.commit('deleteUser', this.user.id)
    }
  }
}
</script>
