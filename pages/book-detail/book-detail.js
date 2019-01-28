// pages/book-detail/book-detail.js


import { BooksModelP } from '../../models/books-p'
import { LikeModel } from '../../models/like-p'
import { CartModel } from '../../models/cart'
import { config } from '../../config.js'
var likeModel = new LikeModel();
var cartModel = new CartModel();
let booksModelP = new BooksModelP();
var bid ;
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
    like: {},
    comments:[],
    isWrite:false,
    bathUrl: config.img_url,
    cartsCount:0
  },

  onLoad(opt){

    wx.showLoading({
      title: '加载中',
    })
    bid = opt.bid;
    this.initDetail();
    this.initCart();
  },

  initDetail(){
    
    const booksList = booksModelP.booksDetail(bid);
    const commentList = booksModelP.getComment(bid);
    booksList.then(res => {
      this.setData({
        books: res.content
      })
      var likeSend = {
        art_id: res.content.id
      }
      this.initLike(likeSend)
      wx.hideLoading()
    });

    commentList.then(res => {
      this.setData({
        comments: res.content
      })
    })
  },
 initCart(){

   const result = cartModel.getOneBook({ book_id: bid })
   result.then((res) => {
     this.setData({
       cartsCount: res.content||0
     })
   })
 },
  //自定义事件获取子组件的值
  onLike(event) {
    var behavior = event.detail
    behavior.art_id = this.data.books.id
    let result;
    result = likeModel.likeBook(behavior)
    let like = Object.assign({}, this.data.like);
    result.then(res => {
      if (res.success) {
        if (!like.like_status) {
          like.like_status = 1;
          like.fav_nums++
        } else {
          like.like_status = 0
          like.fav_nums--
        }
        this.setData({
          like
        })
      }
    })

  },




  initConfirm(e){
    const comment = e.detail.value;
    const book_id = this.data.books.id;
    var obj ={
      content: comment
    }; 
    let commentData = this.data.comments;
    commentData.unshift(obj)
    const booksResult = booksModelP.booksComment(book_id, comment);
    booksResult.then(res => {
        this.setData({
          isWrite: false,
          comments: commentData
        })
        wx.showToast({
          title: '已评论',
          icon: 'success',
          duration: 2000
        })
    });



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
  //初始化喜欢
  initLike(likeSend) {
    const result = likeModel.likeBookList(likeSend)
    result.then((res) => {
      this.setData({
        like: res.content
      })
    })
  },
  //加入购物车
  inputCart(){
    const result = cartModel.addCart({ book_id: bid})
    result.then((res) => {
      this.setData({
        cartsCount: res.content
      })
      wx.showToast({
        title: '添加成功！',
        icon: 'success',
        duration: 3000
      });
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})
