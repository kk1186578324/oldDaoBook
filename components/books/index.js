// components/books/index.js
import { config } from '../../config.js'
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    books:Array

  },

  /**
   * 组件的初始数据
   */
  data: {
    bathUrl: config.img_url

  },

  /**
   * 组件的方法列表
   */
  methods: {

    toDetail(e){
      const bid = e.currentTarget.dataset.id;
      console.log(e)
      wx.navigateTo({
          url:`/pages/book-detail/book-detail?bid=${bid}`
      })
    }

  }
})
