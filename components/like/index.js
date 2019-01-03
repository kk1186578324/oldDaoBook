// components/like/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    like:{
      type: Number
    },
    count:{
      type: Number
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    count1:"",

  },
  attached(){
    var count1 = this.initCount()
    this.setData({
      count1
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onLike(){
      var count1 = this.initCount()
      this.setData({
        count1: count1,
        count: this.data.like ? this.data.count - 1 : this.data.count + 1,
        like: this.data.like ? 0 : 1
      })
      var behavior = this.data.like?"like":"cancle";
  //激活自定义事件
      this.triggerEvent("like", { behavior},{})
    },
    initCount() {
      var count = this.data.count + 1;
      var count1 = ""
      if (count >= 1000) {
        count1 = Math.floor((count / 1000) * 10) / 10 + 'k'
      }
      return count1
    }
  }
})
