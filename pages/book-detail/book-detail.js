// pages/book-detail/book-detail.js


import { BooksModelP } from '../../models/books-p'
import { LikeModel } from '../../models/like-p'
var likeModel = new LikeModel();

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
    likeData:{},
    comments:[],
    isWrite:false,
    isStatus:false
  },

  onLoad(opt){
    var bid = opt.bid;
    wx.showLoading({
      title: '加载中',

    })
    const booksList = booksModelP.booksDetail(bid);
    booksList.then(res => {
      this.setData({
        books: res.content,
        comments: res.content.comment,
      })
      var likeData = {
        art_id: res.content.id
      }
      console.log(likeData)
      this.setData({
        likeData,
        isStatus: true
      })
      wx.hideLoading()
    });
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
