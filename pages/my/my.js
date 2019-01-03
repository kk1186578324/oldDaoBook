// pages/my/my.js
import { ClassicModel } from '../../models/classic'
import { LikeModel } from '../../models/like'
var likeModel = new LikeModel();
var classicModel = new ClassicModel();
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
    classic:[],
    bathUrl: "http://192.168.2.54:3000/img/",
    pageSize: 1000,
    page: 1,
  },
   onLoad(){
     this.initData()
   },
  initData(){
    classicModel.getLatest((res)=>{
      this.setData({
         classic:res.content
      })
    })

  },

  onLike(event) {
    var behavior = event.detail
    behavior.art_id = event.target.dataset.id
    behavior.type = event.target.dataset.type
    likeModel.like(behavior)
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})
