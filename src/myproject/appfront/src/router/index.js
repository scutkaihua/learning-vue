import Vue from 'vue'
import Router from 'vue-router'
import View from '@/components/navigations/View'
import main from '@/components/views/main'
import page1 from '@/components/views/page1'
import page2 from '@/components/views/page2'
import page3 from '@/components/views/page3'
import page4 from '@/components/views/page4'
import login from '@/components/views/Login'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      component: login,
      name: 'login'
    },
    {
      path: '/',
      component: View,
      redirect: 'main',
      children: [
        {
          path: 'main',
          name: 'main',
          component: main
        },
        {
          path: 'page1',
          name: 'page1',
          component: page1
        },
        {
          path: 'page2',
          name: 'page2',
          component: page2
        },
        {
          path: 'page3',
          name: 'page3',
          component: page3
        },
        {
          path: 'page4',
          name: 'page4',
          component: page4
        }
      ]
    }
  ]
})
