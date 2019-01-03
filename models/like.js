import { HTTP } from '../util/http.js'
class LikeModel extends HTTP {
  like(behavior) {
    this.request({
      url: "/like/add",
      method: 'post',
      data: behavior
    })

  }
  likeList(sCallback, behavior) {
    this.request({
      url: "/like/list",
      method: 'post',
      data: behavior,
      success:(res)=>{
      if(res.success){
        sCallback(res)
      }else{
        wx.showToast({
          title: res.msg,
          icon: "none",
          duration: 2000
        })
      }
  
      }
    })

  }
}

export { LikeModel } 