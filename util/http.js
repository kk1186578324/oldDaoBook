import {config} from '../config.js'
const tips = {
    1:"抱歉，当前出现错误",
    1005:"xxxx"

}
class HTTP{
  request(params){
    if(!params.method){
      params.method = "get"
    }
    wx.request({
      url: config.api_base_url+params.url,
      data: params.data,
      header: {
        'content-type':'application/json',
      },
      method: params.method,
      success: function (res) {
        let code = res.statusCode.toString();
        if(code.startsWith('2')){
          params.success&&params.success(res.data)
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