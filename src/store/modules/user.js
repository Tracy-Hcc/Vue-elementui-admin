import { setCookie, clearCookie } from '@/lib/util'
import axios from 'axios'
import apiList from '@/api'
const user = {
  state: {

  },
  mutations: {
    
  },
  actions: {
    login ({ commit }, { userName, password }) {
      return new Promise((resolve, reject) => {
        axios({
          method: 'post',
          url: apiList.login,
          data: {
            name: userName,
            passwd: password
          }
        }).then(res => {
          console.log(res)
          setCookie()
          resolve(res)
        }).catch(err => {
          reject(err)
        })
      })
    },
    logout () {
      clearCookie()
    }
  }
}
export default user
