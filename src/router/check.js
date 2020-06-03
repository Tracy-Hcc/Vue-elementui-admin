//  验证用户登录
import router from '@/router'
import { getCookie, setTitle } from '@/lib/util'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

router.beforeEach((to, from, next) => {
  NProgress.start()
  if (getCookie()) {
    //  有登录状态访问登录页面，直接跳转首页
    if (to.path === '/login') {
      next('/')
      return
    }
    setTitle(to.meta.title)
    next()
    NProgress.done()
  } else {
    // 如果没有登录状态，强制返回登录页
    if (to.path !== '/login') {
      next('/login')
      return
    }
    setTitle(to.meta.title)
    next()
    NProgress.done()
  }
})
