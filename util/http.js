import {config} from '../config.js'
const tips = {
    1:"抱歉，当前出现错误",
    1005:"xxxx"

}


class HTTP{

  request(params){

    const token = wx.getStorageSync("token")
    console.log(token)
    if (!token) {
      wx.showModal({
        title: '提示',
        content: '请先授权登录12',
        success(res) {
          if (res.confirm) {
            wx.switchTab({
              url: '/pages/my/my'
            })
          } else if (res.cancel) {

          }
        }
      })
      return
    }
    if(!params.method){
      params.method = "get"
    }
    wx.request({
      url: config.api_base_url+params.url,
      data: params.data,
      header: {
        'content-type':'application/json',
        'Authorization': token
      },
      method: params.method,
      success: function (res) {
        let code = res.statusCode.toString();
        console.log(res)
        if(code.startsWith('2')){
          params.success && params.success(res.data)
        }else{
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