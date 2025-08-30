import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Interest from '../views/Interest.vue'
import Workshops from '../views/Workshops.vue'
import WorkshopDetail from '../views/WorkshopDetail.vue'
import Community from '../views/Community.vue'
import Resources from '../views/Resources.vue'
import Contact from '../views/Contact.vue'

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/interest',
      name: 'Interest',
      component: Interest
    },
    {
      path: '/workshops',
      name: 'Workshops',
      component: Workshops
    },
    {
      path: '/workshops/:slug',
      name: 'WorkshopDetail',
      component: WorkshopDetail
    },
    {
      path: '/community',
      name: 'Community',
      component: Community
    },
    {
      path: '/resources',
      name: 'Resources',
      component: Resources
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})

export default router 