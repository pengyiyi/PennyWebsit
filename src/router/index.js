import Vue from 'vue'
import Router from 'vue-router'
import Index  from '@/page/index.vue'
import Blogs from'@/page/blog/AllBlogs.vue'
import About from'@/page/about/me.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component:Index
    },
    {
      path:'/blogs',
      component:Blogs
    },
    {
      path:'/about',
      component:About
    }
  ]
})
