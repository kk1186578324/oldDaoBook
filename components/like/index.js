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
    likeData:{
      type:Object,
      value:{}
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
  ready(){
    // this.setData({
    //   count1
    // })
    this.initLike()
  },


  /**
   * 组件的方法列表
   */
  methods: {
    //初始化喜欢
    initLike() {
      let result;
      console.log(this.properties.likeData)
      // if (!this.properties.likeData.art_id){
      //       return;
      // }
      if (this.properties.likeData.type){
         result = likeModel.likeList(this.properties.likeData)
      }else{
        result = likeModel.likeBookList(this.properties.likeData)
      }
 
      result.then((res) => {
        this.setData({
          like: res.content
        })
      })
    },
    onLike(){
      if (this.properties.readonly){
        return;
      }
      var behavior = {}
      behavior.art_id = this.properties.likeData.art_id
      this.data.like.like_status ? behavior.behavior = "cancle" : behavior.behavior = "like"
      let result;
      if (this.properties.likeData.type){
        behavior.type = this.properties.likeData.type
         result = likeModel.like(behavior)
      }else{
        result = likeModel.likeBook(behavior);
      }
        
        let like = this.data.like;
        result.then(res => {
          if (res.success) {
            if (!like.like_status) {
              like.like_status = 1;
              like.fav_nums++
            } else {
              like.like_status = 0
              like.fav_nums--
            }
            this.setData({
              like
            })
          }
        })
      









      // var count1 = this.initCount()
      // this.setData({
      //   count1: count1
      // })
      console.log(this.properties.like)
 
  //激活自定义事件
      // this.triggerEvent("like", { behavior},{})
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
