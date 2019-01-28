// pages/book/book.js

import { BooksModelP } from '../../models/books-p'
import { Banner } from "../../models/banner";
import { Classify } from "../../models/classify";
import { config } from '../../config.js'
let booksModelP = new BooksModelP();
let bannerModel = new Banner();
let classifyModel = new Classify();
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
    bathUrl: config.img_url,
    page: 1,
    pageSize: 4,
    books: [],
    isSearch: false,
    bannerList: [],
    tagComments:[],
    hidden:true,
    total:0,
    classify:null
  },
  onLoad() {
    this.initData()
  },
  //初始化列表数据
  initData() {
    this.getBooksData();
    this.getBanner();
    this.initclassify();

  },

  //获取banner
  getBanner(){
    const result = bannerModel.getBanner(1, 10)
    result.then((res) => {
      let imgUrl = [];
      res.content.forEach(function (value) {
        imgUrl.push(value.url)
      })
      console.log(imgUrl)
      this.setData({
        bannerList: imgUrl
      })
    })
  },

  //获取分类
  initclassify() {
    const result = classifyModel.getClassify(this.data.page, 8, true);
    result.then(res => {
      this.setData({
        tagComments: res.content
      })
    });

  },
  //获取书籍列表
  getBooksData(){
   this.setData({
     hidden:true
   })
   var prarm = {
     page:this.data.page, 
     pageSize:this.data.pageSize
   };
    this.data.classify ? prarm.classify = this.data.classify:null;
    const booksList = booksModelP.getBooks(prarm);
    booksList.then(res => {
       this.setData({
         hidden:false,
         books: res.content
       })
       this.data.total = res.count;
    });
  },

  //初始化搜索
  initSearch() {
    wx.navigateTo({
      url: '/pages/book/book'
    })
  },
  //触底加载
  onReachBottom(){
    if (this.data.pageSize >= this.data.total) {
      return
    }
    this.data.pageSize =this.data.pageSize+4;
    this.getBooksData();
  },
  onClassify(e){

    this.data.classify = e.detail.value;
    this.getBooksData();  
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
