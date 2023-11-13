import { createRouter, createWebHistory } from 'vue-router'
import UserList from '../views/UserList.vue'
import UserDetails from '../views/UserDetails.vue'

const routes = [
  {
    path: '/',
    component: UserList,
  },
  {
    path: '/user/:username',
    component: UserDetails,
  },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
