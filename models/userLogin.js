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
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiMDIxTEdnQUgxZkM5VDAwWkVEQUgxU2hzQUgxTEdnQVgiLCJpYXQiOjE1NDcwODk4MjcsImV4cCI6MTU0NzA5MzQyN30.O8S0zAmCFKbvjyrBEM7xzViGU3_mRahNHLtmmWYwuNA
// {
//   session_key: 'j2CsXsttSO74jnvLYL2+rQ==',
//     openid: 'o4uI348yVkW2h3OpFYu7CwwM08UY'
// }

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiMDIxNVUxUzUwZ1poYkQxSUlCUDUwOEI0UzUwNVUxUzEiLCJpYXQiOjE1NDcwODk5NjIsImV4cCI6MTU0NzA5MzU2Mn0.Wxvmbj_ - Xo8YHgGC8SSNKFiJKxDlHoSrZ1xzRw9AX44
// {
//   session_key: '7677fBGtlbTlRulvmG4c9Q==',
//     openid: 'o4uI348yVkW2h3OpFYu7CwwM08UY'
// }