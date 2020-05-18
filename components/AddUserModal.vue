<template lang="pug">
  BModal(id="add-user-modal" cancel-variant="light" hide-footer hide-header)
    div
      b Username:
      h2
        input(v-model.trim="username")
    div(class="mb-2")
      b Email:
      input(v-model.trim="email")
    div(class="mb-2")
      b City:
        input(v-model.trim="address.city")
    div(class="mb-2")
      b Street:
        input(v-model.trim="address.street")
    div(class="mb-2")
      b Suite:
        input(v-model.trim="address.suite")
    div
      BButton(variant="primary" @click="addUser" class="mt-2 mr-1") Add
      BButton(variant="light" @click="$bvModal.hide('add-user-modal')" class="mt-2") Cancel
</template>

<script>
export default {
  data: () => ({
    username: '',
    email: '',
    address: {
      city: '',
      street: '',
      suite: ''
    }
  }),
  methods: {
    addUser () {
      const emailRegex = /\b[\w.-]+@[\w.-]+\.\w{2,4}\b/i
      if (this.username && emailRegex.test(this.email)) {
        this.$store.commit('addUser', {
          username: this.username,
          email: this.email,
          address: this.address
        })

        this.$bvModal.hide('add-user-modal')

        this.username = ''
        this.email = ''
        this.address = {
          city: '',
          street: '',
          suite: ''
        }
      }
    }
  }
}
</script>
