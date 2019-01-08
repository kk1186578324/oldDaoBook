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
  booksComment(book_id,content) {
    return this.request({
      url: '/comment/add',
      data: { book_id, content},
      method: 'post'
    })
  }
  booksSearch(bookName) {
    return this.request({
      url: '/books/search',
      data: {bookName},
      method: 'post'
    })
  }
}

export { BooksModelP } 