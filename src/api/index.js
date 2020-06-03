//  接口管理
//  判断当前环境
const baseUrl = process.env.NODE_ENV === 'production' ? '' : 'https://api.apiopen.top'
const apiList = {
  login: baseUrl + '/loginUser'
}

export default apiList
