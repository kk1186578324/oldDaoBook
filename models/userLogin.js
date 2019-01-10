import { HTTP } from '../util/http-p.js'
class UserModel extends HTTP {
  

  userLogin(code,userInfo) {
    return this.request({
      url: '/user/login',
      data: {
        code, 
        userInfo, 
        appid:"wx18939f7ccdd1676e",
        secret:"09f81372f17516aec6831816934828a9"
        },
      method: 'post'
    })
  }
}

export { UserModel } 