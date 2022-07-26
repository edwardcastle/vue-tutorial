import Vue from 'vue'
import Router from 'vue-router'
import UserProfile from '@/components/UserProfile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'user-profile',
      component: UserProfile
    }

  ]
})
