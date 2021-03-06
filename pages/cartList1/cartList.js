// pages/cartList/cartList.js
import { CartModel } from '../../models/cart'
import { config } from '../../config.js'
import { Touch } from 'touch.js'//新加
var cartModel = new CartModel();

var that
let touch = new Touch()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    carts:[],
    item:{},
    allPrice:0,
    allChecked:true
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
  
    this.initData();
  },
  onShow: function () {
    console.log(111)
    this.initData();
  
  },
 

  initData(){
    const result = cartModel.listCart()
    let allPrice=0;
    result.then((res) => {
      res.content.forEach(function(value,index){
        allPrice += value.allPrice
        value.serial = index;
      })
    
      this.setData({
        carts: res.content,
        allPrice: allPrice.toFixed(2)
      })
    })
  },
  getAllPrice(e){

  //判断是否为加减option
   
    console.log(e.detail.status,e.detail.option)
    if (e.detail.option &&!e.detail.status){
       return;
    }

    // this.setData({
    //   allChecked: e.detail.status
    // })
    const result = cartModel.checkCart(e.detail.id,e.detail.status);
    result.then((res)=>{
      this.setData({
        allChecked: e.detail.status,
        allPrice: e.detail.allPrice.toFixed(2)
      })
    })
  },
  delData(e){
    console.log(this.data.carts,e)
    var carts = this.data.carts;
    carts.splice(e.detail.index, 1)
    const result = cartModel.delCart(e.detail.id);
    result.then((res) => {
        if (e.detail.status) {
          this.setData({
            allPrice: (this.data.allPrice - e.detail.price).toFixed(2)
          })
        }
        this.setData({
          carts
        })

    })
  },

  //手指触摸动作开始 记录起点X坐标
  touchstart (e) {
    //开始触摸时 重置所有删除
    let data = touch._touchstart(e, this.data.carts)
    this.setData({
      carts: data
    })
  },
  //滑动事件处理
  touchmove (e) {
    let data = touch._touchmove(e, this.data.carts)
    console.log(data)
    this.setData({
      carts: data
    })
  },
  //全选
  allCheck(e){
    

    this.setData({
      allChecked: !this.data.allChecked
    })
    console.log(this.data.checked);


  },

  // //删除事件
  // del: function (e) {
  //   wx.showModal({
  //     title: '提示',
  //     content: '确认要删除此条信息么？',
  //     success: function (res) {
  //       if (res.confirm) {
  //         console.log('用户点击确定')
  //         console.log(that.data.carts)
  //         that.data.items.splice(e.currentTarget.dataset.index, 1)
  //         that.setData({
  //           carts: that.data.carts
  //         })
  //       } else if (res.cancel) {
  //         console.log('用户点击取消')
  //       }
  //     }
  //   })
  // },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },


  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})