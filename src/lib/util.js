import Cookies from 'js-cookie'

//  保存cookie
export const setCookie = (token, tokenName = 'tokenName') => {
  Cookies.set(tokenName, token)
}

//  获取cookie
export const getCookie = (tokenName = 'tokenName') => {
  return Cookies.get(tokenName)
}

//  删除cookie
export const clearCookie = (tokenName = 'tokenName') => {
  Cookies.remove(tokenName)
  let message = '删除成功'
  return message
}

//  更改title
export const setTitle = (title) => {
  window.document.title = title
}

//  缓存
export const localSave = (name, value) => {
  localStorage.setItem(name, value)
}
//  读取缓存
export const localRead = (name) => {
  return localStorage.getItem(name)
}

export const getTabListToLocal = tabList => {
  return tabList.map(item => {
    return {
      name: item.name,
      path: item.path,
      meta: item.meta,
      params: item.params,
      query: item.query
    }
  })
}

//  获取面包屑导航
export const getBreadCrumbList = route => {
  let arr = []
  for (let i = 0; i < route.matched.length; i++) {
    if (!route.matched[i].parent) {
      route.matched[i].path = ''
    }
    arr.push(route.matched[i])
  }
  console.log(arr)
  return arr
}
