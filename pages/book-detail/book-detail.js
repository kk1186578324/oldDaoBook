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
    content: ["王小波", "王小波2", "王小波3", "王小波", "王小波2", "王小波3"],
    books:{}
  },

  onLoad(opt){
    var bid = opt.bid;

    const booksList = booksModelP.booksDetail(2);
    booksList.then(res => {
      this.setData({
        books: res.content,
        // content: res.content
      })

    });

    console.log(opt)
  },

  initInput(e){
   console.log(e)
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
