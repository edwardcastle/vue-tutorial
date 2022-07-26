<template>
    <div>
      <p>{{'@' + fullName }}</p>
      <p>followers: {{followers}}</p>
      <button></button>
    </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      followers: 0,
      user: {
        id: 1,
        username: 'edwardcastle',
        firstName: 'Edward',
        lastName: 'Castle',
        email: 'edwardcastle@gmail.com',
        isAdmin: true
      }
    }
  },
  computed: {
    fullName () {
      return `${this.user.firstName} ${this.user.lastName}`
    }
  }
}
</script>

<style scoped>

</style>
