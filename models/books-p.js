import { HTTP } from '../util/http-p.js'
class BooksModelP extends HTTP {
  getBooks(page, pageSize) {
   return this.request({
      url: '/books/list',
      data: { page, pageSize },
      method: 'post'
    })
  }
  booksDetail(books_id){
    return this.request({
      url: '/books/detail/' + books_id,
      method:'get'
    })
  }
}

export { BooksModelP } 