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
    bathUrl: "http://192.168.2.54:3000/img/",
    page:1,
    pageSize:1000,
    books:[]
  },
  onLoad(){

  //  const promise =  new Promise((resolve, reject) => {


  //     wx.getSystemInfo({
  //       success: (res)=> {
  
  //         reject(res)
  //       },
  //       fail:(error) =>{
      
  //       }
  //     })
  //  })
  //  promise.then((r) => {
  //     console.log(r)
  //   },(error)=>{

  //     console.log(error)
  //   })

    
    this.initData()
  },
  //初始化列表数据
  initData() {
    // booksModel.getBooks((res) => {
    //   let lastPage = false;
    //   this.setData({
    //     books: res.content,
    //     total: res.count
    //   })

    // }, this.data.page, this.data.pageSize)

    const booksList = booksModelP.getBooks(this.data.page, this.data.pageSize);
    
    booksList.then(res=>{

      this.setData({
        books: res.content
      })
        
    });
  

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
