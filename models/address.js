import { HTTP } from '../util/http-p.js'
class AddressModel extends HTTP {
  addAddress(paramObj) {
    return this.request({
      url: '/address/add',
      data: paramObj,
      method: 'post'
    })
  }
  listAddress(page,pageSize) {
    return this.request({
      url: '/address/list',
      data: { page, pageSize},
      method: 'post'
    })
  }
  delAddress(id) {
    return this.request({
      url: '/address/del',
      method: 'post',
      data: { id }
    })
  }
  updateCart(carts) {
    return this.request({
      url: '/cart/update',
      data: { carts },
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

export { AddressModel } 