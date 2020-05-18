<template lang="pug">
  BCard(v-if="user.address")
    h2 {{ user.username }}
    b Email:
    span  {{ user.email }}
    br
    b Address:
    span  {{ user.address.city }}, {{ user.address.street }}, {{user.address.suite}}
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  }
}
</script>
