<template lang="pug">
  BCard(v-if="!isEditing")
    h2 {{ user.username }}
    b Email:
    span  {{ user.email }}
    br
    b Address:
    span  {{ user.address.city }}, {{ user.address.street }}, {{user.address.suite}}
    div
      BButton(variant="info" @click="toggleEdit" class="mt-2 mr-1") Edit
      BButton(variant="danger" @click="deleteUser" class="mt-2") Delete
  BCard(v-else)
    div
      h2
        input(v-model.trim="editedUsername")
    div(class="mb-2")
      b Email:
      input(v-model.trim="editedEmail")
    div(class="mb-2")
      b City:
        input(v-model.trim="editedAddress.city")
    div(class="mb-2")
      b Street:
        input(v-model.trim="editedAddress.street")
    div(class="mb-2")
      b Suite:
        input(v-model.trim="editedAddress.suite")
    div
      BButton(variant="success" @click="submitEdit" class="mt-2 mr-1") Submit
      BButton(variant="light" @click="toggleEdit" class="mt-2") Cancel
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      isEditing: false,
      editedUsername: this.user.username,
      editedEmail: this.user.email,
      editedAddress: this.user.address
    }
  },
  methods: {
    deleteUser () {
      this.$store.commit('deleteUser', this.user.id)
    },
    toggleEdit () {
      this.isEditing = !this.isEditing
      this.editedUsername = this.user.username
      this.editedEmail = this.user.email
      this.editedAddress = this.user.address
    },
    submitEdit () {
      const emailRegex = /\b[\w.-]+@[\w.-]+\.\w{2,4}\b/i
      if (this.editedUsername && emailRegex.test(this.editedEmail)) {
        this.$store.commit('editUser', {
          id: this.user.id,
          username: this.editedUsername,
          email: this.editedEmail,
          address: this.editedAddress
        })
        this.toggleEdit()
      }
    }
  }
}
</script>
