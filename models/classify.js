import { HTTP } from "../util/http-p.js"

class Classify extends HTTP {
  getClassify(page, pageSize, recommend) {
    return this.request({
      url: '/classify/list',
      data: { page, pageSize, recommend},
      method: 'post'
    })
  }
}

export { Classify }