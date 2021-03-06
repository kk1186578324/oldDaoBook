import { HTTP } from '../util/http-p.js'
class CartModel extends HTTP {
  addCart({book_id}) {
    return this.request({
      url: '/cart/add',
      data: {book_id},
      method: 'post'
    })
  }
  listCart() {
    return this.request({
      url: '/cart/list',
      data: {},
      method: 'post'
    })
  }
  delCart(id) {
    return this.request({
      url: '/cart/del',
      method: 'post',
      data: {id}
    })
  }
  updateCart(carts) {
    return this.request({
      url: '/cart/update',
      data: {carts},
      method: 'post'
    })
  }
  getOneBook({ book_id }) {
    return this.request({
      url: '/cart/getOne',
      data: { book_id },
      method: 'post'
    })
  }
}

export { CartModel } 