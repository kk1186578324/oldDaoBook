// pages/book/book.js

// import { BooksModel } from '../../models/books'
// let booksModel = new BooksModel();
import { BooksModelP } from '../../models/books-p'
import { KeyWordModel } from '../../models/keyWord'
let booksModelP = new BooksModelP()
let keyWordModel = new KeyWordModel();
import { config } from '../../config.js'
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
    hisData: [],
    searchResult: [],
    isSearch: false,
    inputData: "",
    bathUrl: config.img_url,
    page:1,
    pageSize:8,
    books:[],
    isSearch:true,
    total:0
  },
  onShow(){
    const result = keyWordModel.getHistory()
    console.log(result)
    this.setData({
      hisData: result
    })
  },
  //取消事件
  onCancel(){
    wx.navigateBack({ delta: 1 })
  },


  //初始化搜索
  initSearch(e) {
    console.log(e)
    const bookName = e.detail.value;
    console.log(this.data.hisData)
    this.data.hisData.unshift(bookName)
    this.setData({
      hisData: this.data.hisData
    })
    var prarm = {
      page: this.data.page,
      pageSize: this.data.pageSize,
      bookName,
    };
    const booksList = booksModelP.getBooks(prarm);
    booksList.then(res => {
      if (res.success && res.content.length) {
        this.setData({
          books: res.content,
          isSearch: false,
        })
        this.data.total = res.count;
        keyWordModel.addHistory(bookName)
      } else {
        wx.showToast({
          title: '未找到相关图书',
          icon: 'none',
          duration: 2000
        })
      }
    });
  },

  initDel() {
    this.setData({
      isSearch: true,
      inputData: ""
    })
  },
  //触底加载
  onReachBottom() {
    if (this.data.pageSize >= this.data.total) {
      return
    }
    this.data.pageSize = this.data.pageSize + 4;
    this.getBooksData();
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})
