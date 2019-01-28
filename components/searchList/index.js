// components/searchList/index.js
import { config } from '../../config.js'
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    searchData:Object

  },

  /**
   * 组件的初始数据
   */
  data: {
    bathUrl: config.img_url,
  
  },


  /**
   * 组件的方法列表
   */
  methods: {

    detail(e){
      const bid = e.currentTarget.dataset.id;
      wx.navigateTo({
        url: `/pages/book-detail/book-detail?bid=${bid}`
      })

    }

  }
})
