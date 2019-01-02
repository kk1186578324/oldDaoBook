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
    bathUrl:"http://192.168.2.54:3000/img/",
    pageSize:1,
    total:"",
    page:1,
    firstPage:true,
    lastPage:false
  },
  onLoad:function(options){
    // let lastPage = false;
    // lastPage = res.count <= 1 ? true : false;
    // this.setData({
    //   lastPage
    // })

    this.initData()
  },
//自定义事件获取子组件的值
  onLike(event) {
    var behavior = event.detail
    behavior.art_id = this.data.classic.id
    behavior.type = this.data.classic.type
    likeModel.like(behavior)
  },
  //分页
  onPage(e){
    e.detail == "prev" ? this.setData({
      page: this.data.page - 1,
    }) : this.setData({
      page: this.data.page + 1,
    })
    this.data.page == 1 ? this.setData({
      firstPage: true,
      lastPage: false
    }) : null;
    console.log(this.data.page, this.data.total)
    this.data.page == this.data.total ? this.setData({
      firstPage: false,
      lastPage: true
    }) : null;
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
  initData() {
    classic.getLatest((res) => {
      let lastPage=false;
      this.setData({
        classic: res.content[0],
        total: res.count,
   
      })
     
    }, this.data.page, this.data.pageSize)
  }


  

  

})
