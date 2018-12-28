import { HTTP } from '../util/http.js'
class LikeModel extends HTTP {
  like(behavior) {
    this.request({
      url: "/like/add",
      method: 'post',
      data: behavior
    })

  }
}

export { LikeModel } 