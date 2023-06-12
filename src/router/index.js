import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import About from '../views/AboutUsView.vue'
import Write from '../views/WriteTaleView.vue'


const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/write',
    component: Write
  }
]

const router = createRouter({
    history: createWebHistory(),
    routes
  })
  
  export default router