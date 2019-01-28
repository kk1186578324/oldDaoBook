import { HTTP } from '../util/http-p.js'
class LikeModel extends HTTP {
  like(behavior) {
    return this.request({
      url: "/like/add",
      method: 'post',
      data: behavior
    })

  }
  likeList(behavior) {
   return this.request({
      url: "/like/list",
      method: 'post',
      data: behavior
    })

  }
  likeAllList() {
    return this.request({
      url: "/like/allList",
      method: 'post'
    })
  }

  likeBook(behavior) {
    return this.request({
      url: "/like/book",
      method: 'post',
      data: behavior
    })

  }
 likeBookList(behavior) {
    return this.request({
      url: "/like/bookList",
      method: 'post',
      data: behavior
    })

  }
}

export { LikeModel } 