// pages/my/my.js
import { ClassicModel } from '../../models/classic-p'
import { LikeModel } from '../../models/like-p'
import {UserModel } from '../../models/userLogin'
var likeModel = new LikeModel();
var classicModel = new ClassicModel();
var userModel = new UserModel();
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
    bathUrl: "http://192.168.2.51:3000/img/",
    pageSize: 1000,
    page: 1,
    isLogin:false,
    userInfo:{}
  },
   onLoad(){
     // 查看是否授权
     wx.getSetting({
       success:  (res)=> {
         if (res.authSetting['scope.userInfo']) {
           // 已经授权，可以直接调用 getUserInfo 获取头像昵称
           wx.getUserInfo({
             success:  (res)=> {
               console.log(res.userInfo)

               this.setData({
                 userInfo:res.userInfo,
                 isLogin: true
               })
               this.initLogin()
               this.initData()
          
             }
           })
         }
       }
     })
 
   },
  initData(){

    classicModel.getLatest().then((res) => {
      this.setData({
        classic: res.content
      })
    })

  },

  onLike(event) {
    var behavior = event.detail
    behavior.art_id = event.target.dataset.id
    behavior.type = event.target.dataset.type
    likeModel.like(behavior)
  },
//授权登录
  bindGetUserInfo(e){
    if (e.detail.rawData){
      this.setData({
        userInfo: JSON.parse(e.detail.rawData),
        isLogin: true
      })
      console.log(this.data.userInfo)
      this.initLogin()
      this.initData();
    }
  },
  //初始化登录状态
  initLogin(){
    wx.login({
      success:(res)=> {
        if (res.code) {

          console.log(res)
          const result = userModel.userLogin(res.code, this.data.userInfo);
          result.then(res=>{
            wx.setStorageSync("token", res.openid)
          })
          // 发起网络请求
          // wx.request({
          //   url: 'https://test.com/onLogin',
          //   data: {
          //     code: res.code
          //   }
          // })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})
