// pages/book/book.js

// import { BooksModel } from '../../models/books'
// let booksModel = new BooksModel();
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
    bathUrl: "http://192.168.2.51:3000/img/",
    page:1,
    pageSize:1000,
    books:[],
    isSearch:false
  },
  onLoad(){
    this.initData()
  },
  //初始化列表数据
  initData() {

  const booksList = booksModelP.getBooks(this.data.page, this.data.pageSize);
    booksList.then(res=>{
      this.setData({
        books: res.content
      })
    });
  

  },
  //初始化搜索
  initSearch(){
     this.setData({
       isSearch:true
     })
  },
  //取消事件
  onCancel(){
    this.setData({
      isSearch: false
    })
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
