<template>
    <div>
      <p>{{'@' + fullName }}</p>
      <p>followers: {{followers}}</p>
      <button @click="followUser">follow</button>
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
  watch: {
    followers (newFollowerCount, oldFollowerCount) {
      if (oldFollowerCount < newFollowerCount) {
        console.log(this.fullName + ' has a new user')
      }
    }
  },
  computed: {
    fullName () {
      return `${this.user.firstName} ${this.user.lastName}`
    }
  },
  methods: {
    followUser () {
      this.followers++
    }
  }
}
</script>

<style scoped>

</style>
