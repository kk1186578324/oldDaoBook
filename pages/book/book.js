// pages/book/book.js

import { BooksModel } from '../../models/books'
var booksModel = new BooksModel();
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
    bathUrl: "http://192.168.2.54:3000/img/",
    page:1,
    pageSize:1000,
    books:[]


  },
  onLoad(){
    this.initData()
  },
  //初始化列表数据
  initData() {
    booksModel.getBooks((res) => {
      let lastPage = false;
      this.setData({
        books: res.content,
        total: res.count

      })

    }, this.data.page, this.data.pageSize)
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
