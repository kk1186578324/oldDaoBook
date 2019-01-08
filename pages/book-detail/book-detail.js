// pages/book-detail/book-detail.js


import { BooksModelP } from '../../models/books-p'

let booksModelP = new BooksModelP();
Page({
  /**
   * 组件的属性列表
   */
  properties: {
    

  },

  /**
   * 组件的初始数据
   */
  data: {
    books:{},
    comments:[],
    isWrite:false
  },

  onLoad(opt){
    var bid = opt.bid;
    wx.showLoading({
      title: '加载中',

    })
    const booksList = booksModelP.booksDetail(2);
    booksList.then(res => {
      this.setData({
        books: res.content,
        comments: res.content.comment,
      })
      wx.hideLoading()
    });
 /*  Promise.all([booksList]).then(res=>{

     console.log(res)
   })*/

  },

  initConfirm(e){
    const comment = e.detail.value;
    const book_id = this.data.books.id;
    const obj = {
      content:comment
    }
    var books = this.data.books
      books.comment.unshift(obj)
    this.setData({
      books,
    })

    const booksResult = booksModelP.booksComment(book_id, comment);
    booksResult.then(res => {
        this.setData({
          isWrite: false
        })
        wx.showToast({
          title: '已评论',
          icon: 'success',
          duration: 2000
        })
    });

    console.log(this.data.books.comment)

  },
//点击输入框
  initWrite() {
    this.setData({
      isWrite:true
    })
  },
//离开输入框
  blurInput(e){

      this.setData({
          isWrite: false
      })

  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})
