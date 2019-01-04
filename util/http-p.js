import {config} from '../config.js'
const tips = {
    1:"抱歉，当前出现错误",
    1005:"xxxx"

}
class HTTP{
    request({url,data={},method="get"}){
      return  new Promise((resolve,reject)=>{
          this._request(url, resolve, reject,data,method)

        })
      }

  _request(url, resolve, reject,data = {}, method = "get"){
    wx.request({
      url: config.api_base_url+url,
      data,
      header: {
        'content-type':'application/json',
      },
      method,
      success: function (res) {
        const code = res.statusCode.toString();
        if(code.startsWith('2')){
          resolve(res.data)
        }else{
          reject()
          wx.showToast({
            title: '错误',
            icon:'none',
            duration:2000
          })
        }
       },
      fail: function (res) { 
        this._show_error(1)
      },
      complete: function (res) { },
    })
  }


  _show_error(error_code=1){
    wx.showToast({
      title: tips[error_code],
      icon: 'none',
      duration: 2000
    })


  }

}

export { HTTP }