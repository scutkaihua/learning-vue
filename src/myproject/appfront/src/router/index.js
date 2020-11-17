import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/Test'
import Person from '@/components/Person'
Vue.use(Router)

export default new Router({
  routes: [

    { path: '/hello', component: HelloWorld },
    { path: '/person', component: Person },
    { path: '/', component: Test }

  ]
})
