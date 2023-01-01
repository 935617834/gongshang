/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Films from '@/views/Films'
import Nowplaying from '@/views/Films/Nowplaying'
import Comingsoon from '@/views/Films/Comingsoon'
import Cinemas from '@/views/Cinemas'
import Search from '@/views/Search'
import City from '@/views/City'
// import Center from '@/views/Center'
// import Order from '@/views/Order'
import Login from '@/views/Login'
import Detail from '@/views/Detail'
Vue.use(VueRouter)

const routes = [
  {
    path: '/films',
    component: Films,
    children: [
      {
        path: '/films/nowplaying',
        component: Nowplaying
      },
      {
        path: '/films/comingsoon',
        component: Comingsoon
      },
      // 嵌套路由
      {
        path: '/films',
        redirect: '/films/nowplaying'
      }
    ]
  },
  {
    name: 'damonDetail',
    path: '/detail/:id',
    component: Detail
  },
  {
    path: '/cinemas',
    component: Cinemas
  },
  {
    path: '/city',
    component: City
  },
  {
    path: '/cinemas/search',
    component: Search
  },
  {
    path: '/center',
    component: () => import('@/views/Center'),
    meta: {
      isDamonRequired: true
    }
    // beforeEnter: (to, from, next) => {
    //   if (localStorage.getItem('token')) {
    //     next()
    //   } else {
    //     next('/login')
    //   }
    // }
  },
  {
    path: '/order',
    component: () => import('@/views/Order'),
    meta: {
      isDamonRequired: true
    }
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '*',
    redirect: '/films'
  }
]
const router = new VueRouter({
  mode: 'hash',
  routes
})
// 全局拦截(守卫)
router.beforeEach((to, from, next) => {
  console.log(to)
  if (to.meta.isDamonRequired) {
    if (localStorage.getItem('token')) {
      next()
    } else {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    }
  } else {
    next()
  }
})
export default router
