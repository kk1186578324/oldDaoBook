// components/like/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    like:{
      type:String
    },
    count:{
      type: Number
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    count:998,
    count1:"",
    imgstatus:1

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLike(){
      var count = this.data.count+1;
      var count1=""
      if (count>=1000){
        count1 = Math.floor((count/1000)*10)/10+'k'
      }
      console.log(count)
      this.setData({
        count: this.data.count+1,
        count1: count1,
        imgstatus: this.data.imgstatus == 1 ? 2 : 1

      })
    }

  }
})
