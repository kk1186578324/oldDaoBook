// pages/classisc/classisc.js
import { ClassicModel} from '../../models/classic'
import { LikeModel } from '../../models/like'
var classic = new ClassicModel();
var likeModel = new LikeModel();
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
    classic:{
      image:""
    },
    bathUrl:"http://localhost:3000/img/",
    pageSize:1,
    total:""
  },
  onLoad:function(options){
    classic.getLatest((res)=>{
        this.setData({
          classic:res.content[0],
          total:res.count
        })
    }, this.data.pageSize)
  },
//自定义事件获取子组件的值
  onLike(event) {
    var behavior = event.detail
    behavior.art_id = this.data.classic.id
    behavior.type = this.data.classic.type
    likeModel.like(behavior)
  },
  

  /**
   * 组件的方法列表
   */
  methods: {


  }
})
