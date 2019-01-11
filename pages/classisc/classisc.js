// pages/classisc/classisc.js
import { ClassicModel} from '../../models/classic-p'
import { LikeModel } from '../../models/like-p'
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
    like:{},
    likeData:{},
    isStatus:false,
    bathUrl:"http://192.168.2.51:3000/img/",
    pageSize:1,
    total:"",
    page:1,
    firstPage:true,
    lastPage:false 
  },
  onLoad:function(options){
    this.initData()
  },
  //分页
  onPage(e){
    e.detail == "prev" ? this.setData({
      page: this.data.page - 1,
    }) : this.setData({
      page: this.data.page + 1,
    })
    this.data.page <= 1 ? this.setData({
      firstPage: true,
      lastPage: false
    }) : this.setData({
        firstPage: false
    });
    this.data.page >= this.data.total ? this.setData({
      firstPage: false,
      lastPage: true
    }) : this.setData({
        lastPage: false
    });
    if(this.data.page<1){
      this.setData({
        page:1,
      })
      return;
    }

    if (this.data.page> this.data.total){
      this.setData({
        page: this.data.total,
      })
      return;
    }

    this.initData()
  },
  //初始化列表数据
  initData() {
    const result = classic.getLatest(this.data.page, this.data.pageSize)
    result.then(res=>{
      let lastPage = false;
      this.setData({
        classic: res.content[0],
        total: res.count
      })
      var likeData = {
        art_id: res.content[0].id,
        type: res.content[0].type
      }
      this.setData({
        likeData,
        isStatus:true
      })
    })
  }

})
