import Vue from 'vue'
import Router from 'vue-router'
import FirstPage from '@/components/FirstPage'
import SecondLPage from '@/components/SecondPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/fist-page',
      name: 'FirstPage',
      component: FirstPage
    },
    {
      path: '/second-page',
      name: 'SecondLPage',
      component: SecondLPage
    }
  ]
})
