import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Children from './views/Children.vue'
import Child from './views/Child.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      displayOnNav:true
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      displayOnNav:true
    },
    {
      path: '/children',
      name: 'Children',
      component: Children,
      displayOnNav:true
    },
    {
      path: '/children/child/:child',
      name: 'Child',
      component: Child,
      displayOnNav:false
    }
  ]
})
