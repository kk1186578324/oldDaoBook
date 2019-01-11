// components/books/index.js
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
    bathUrl: "http://192.168.2.51:3000/img/"

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
