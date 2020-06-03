import Vue from 'vue'
import Router from 'vue-router'
import login from '@/views/login/login'
import main from '@/views/main/main'
Vue.use(Router)

export const routerMap = [
  {
    path: '/login',
    name: 'login',
    component: login,
    inMenu: false,
    meta: {
      title: '登陆'
    }
  },
  {
    path: '/',
    name: 'index',
    component: main,
    redirect: '/home',
    inMenu: false,
    meta: {
      title: '首页'
    },
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('@/views/home/home'),
        meta: { title: '首页' }
      }
    ]
  },
  {
    path: '/integralManage',
    name: 'integralManage',
    component: main,
    redirect: '/personManage',
    inMenu: true,
    meta: {
      title: '积分管理'
    },
    children: [
      {
        path: 'personManage',
        name: 'personManage',
        component: () => import('@/views/integralManage/personManage'),
        meta: { title: '人员管理' }
      },
      {
        path: 'integralPlan',
        name: 'integralPlan',
        component: () => import('@/views/integralManage/integralPlan'),
        meta: { title: '积分计划' }
      }
    ]
  },
  {
    path: '/ceshi',
    name: 'ceshi',
    component: main,
    inMenu: true,
    meta: {
      title: '测试菜单'
    },
    children: [
      {
        path: 'ceshiPage',
        name: 'ceshiPage',
        component: () => import('@/views/ceshi/ceshi'),
        meta: { title: '管理测试' }
      }
    ]
  }
]
export default new Router({
  routes: routerMap
})
