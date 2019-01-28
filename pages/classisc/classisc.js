// pages/classisc/classisc.js
import { ClassicModel} from '../../models/classic-p'
import { LikeModel } from '../../models/like-p'
import { config } from '../../config.js'
var classicModel = new ClassicModel();
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
    bathUrl: config.img_url,
    pageSize:1,
    total:"",
    page:1,
    firstPage:true,
    lastPage:false 
  },
  onShow: function () {
    console.log(123)
    this.initData()
  },
  // onLoad:function(options){
  //   this.initData()
  // },

  //自定义事件获取子组件的值
  onLike(event) {
    var behavior = event.detail
    behavior.art_id = this.data.classic.id
    behavior.type = this.data.classic.type
    let result;
    result = likeModel.like(behavior)
    let like = Object.assign({}, this.data.like) ;

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
    const result = classicModel.getLatest(this.data.page, this.data.pageSize)
    result.then(res=>{
      let lastPage = false;
      this.setData({
        classic: res.content[0],
        total: res.count
      })
      var likeSend = {
        art_id: res.content[0].id,
        type: res.content[0].type
      }
      this.initLike(likeSend)
    })
  },
    //初始化喜欢
  initLike(likeSend) {
    const result = likeModel.likeList(likeSend)
    result.then((res) => {
      this.setData({
        like: res.content
      })
    })
  }

})
