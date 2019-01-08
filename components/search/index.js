// components/search/index.js

import { BooksModelP} from "../../models/books-p";
let booksModelP = new BooksModelP()
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    content:[1,2,3,4,5],
    searchResult:[],
    isSearch: false,
    inputData:""

  },

  /**
   * 组件的方法列表
   */

  methods: {

    initSearch(e){
      console.log(e)
      let result = booksModelP.booksSearch(e.detail.value);
     result.then((res)=>{
          if(res.success&&res.content.length){
            this.setData({
              searchResult:res.content,
              isSearch:true

            })
          }else{
            wx.showToast({
              title: '未找到相关图书',
              icon: 'none',
              duration: 2000
            })
          }
         console.log(res)
     })

    },
    onCancel(){
             
      this.triggerEvent("cancel", {}, {})

    },
    initDel(){

      this.setData({
        isSearch: false,
        inputData:""
      })
    }

  }
})
