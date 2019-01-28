// components/like/index.js
import { LikeModel } from '../../models/like-p'
var likeModel = new LikeModel();
Component({
  /**
   * 组件的属性列表
   */
  properties: {

    readonly:{
      type:Boolean,
      value:false
    },

    like: {
      type: Number
    },
    count: {
      type: Number
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    like: {
    },
    count1:"",

  },



  /**
   * 组件的方法列表
   */
  methods: {
    onLike(){
      if (this.properties.readonly){
        return;
      }
      console.log(this.data.like)
      var behavior = this.data.like ? "cancel" : "like";
      //激活自定义事件
      this.triggerEvent("like", { behavior }, {})

    },



    // initCount() {
    //   var count = this.properties.count+1;
    //   console.log(count)
    //   var count1 = ""
    //   if (count >= 1000) {
    //     count1 = Math.floor((count / 1000) * 10) / 10 + 'k'
    //   }
    //   return count1
    // }
  }
})
