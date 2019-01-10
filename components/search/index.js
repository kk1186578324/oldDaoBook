// components/search/index.js

import { BooksModelP} from "../../models/books-p";
import { KeyWordModel } from '../../models/keyWord'
let booksModelP = new BooksModelP()
let keyWordModel = new KeyWordModel();
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
    hisData:[],
    searchResult:[],
    isSearch: false,
    inputData:""

  },
  attached(){
    const result = keyWordModel.getHistory()

    this.setData({
      hisData:result
    })
    console.log(result)

  },

  /**
   * 组件的方法列表
   */

  methods: {

    initSearch(e){
      console.log(e)
      const searchData = e.detail.value;
      let result = booksModelP.booksSearch(searchData);
     result.then((res)=>{
          if(res.success&&res.content.length){
            this.setData({
              searchResult:res.content,
              isSearch:true
            })
            keyWordModel.addHistory(searchData)
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
