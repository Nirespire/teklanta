import Vue from 'vue'
import Router from 'vue-router'
import Construction from '@/components/Construction'

import 'font-awesome/css/font-awesome.css'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Construction',
      component: Construction
    }
  ]
})
