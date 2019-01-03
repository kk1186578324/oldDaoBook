import { HTTP } from '../util/http.js'
class BooksModel extends HTTP {
  getBooks(sCallback, page, pageSize) {
    this.request({
      url: '/books/list',
      method: 'post',
      data: { page, pageSize },
      success: (res) => {
        sCallback(res)
      }
    })

  }
}

export { BooksModel } 