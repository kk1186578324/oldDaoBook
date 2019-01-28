import { HTTP } from '../util/http-p.js'
class BooksModelP extends HTTP {
  getBooks({ page, pageSize, classify, bookName}) {
   return this.request({
      url: '/books/list',
     data: { page, pageSize, classify, bookName},
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
  getComment(book_id) {
    return this.request({
      url: '/comment/list',
      data: { book_id },
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
 classifySearch(classify) {
    return this.request({
      url: '/books/classify',
      data: { classify },
      method: 'post'
    })
  }
}

export { BooksModelP } 