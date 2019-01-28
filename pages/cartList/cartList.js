// pages/cartList/cartList.js
import {
  CartModel
} from '../../models/cart'
import {
  config
} from '../../config.js'
import {
  Touch
} from 'touch.js' //新加
var cartModel = new CartModel();

var that
let touch = new Touch()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    carts: [],
    item: {},
    allPrice: 0,
    // allChecked: false

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onShow() {
    this.initData();
  },
  initData() {
    const result = cartModel.listCart()
    let allPrice = 0;
    result.then((res) => {
      var status = false;
      res.content.forEach(function(value, index) {
        value.serial = index;
        if (!value.isChecked) {
          status = true
        } else {
          allPrice += value.allPrice
        }
      })
      this.setData({
        carts: res.content,
        allPrice: allPrice.toFixed(2)
      })
    })
  },
  reducePrice(e) {

    //判断是否为加减option
    if (e.detail.option && !e.detail.status) {
      return;
    }
    // var count = e.detail.count - 1;
    const result = cartModel.checkCart(e.detail.id, e.detail.status, e.detail.count);
    result.then((res) => {
      this.changeChecked(e.detail.id, e.detail.status, e.detail.option, e.detail.count)
      this.setData({
        allPrice: Math.abs((this.data.allPrice - e.detail.price)).toFixed(2)
      })
    })
  },
  addPrice(e) {
    //判断是否为加减option
    if (e.detail.option && !e.detail.status) {
      return;
    }
  const result = cartModel.checkCart(e.detail.id, e.detail.status, e.detail.count);
    result.then((res) => {
      this.changeChecked(e.detail.id, e.detail.status, e.detail.option,e.detail.count)
      this.setData({
        allPrice: ((+this.data.allPrice) + (+e.detail.price)).toFixed(2)
      })
    })
  },

  //改变carts状态
  changeChecked(id, status, option, count){
   var carts = this.data.carts;
    carts.forEach((value,index)=>{
      if(value._id==id){
        value.isChecked = status;
        value.count = count
      }
    })
    this.setData({
      carts: carts
    })
  },
  //删除数据
  delData(e) {
    var carts = this.data.carts;
    carts.splice(e.detail.index, 1)
    const result = cartModel.delCart(e.detail.id);
    result.then((res) => {
      if (e.detail.status) {
        this.setData({
          allPrice: Math.abs((this.data.allPrice - e.detail.price)).toFixed(2)
        })
      }
      this.setData({
        carts
      })
    })
  },

  //手指触摸动作开始 记录起点X坐标
  touchstart(e) {
    //开始触摸时 重置所有删除
    let data = touch._touchstart(e, this.data.carts)
    // this.setData({
    //   carts: data
    // })
  },
  //滑动事件处理
  touchmove(e) {
    let data = touch._touchmove(e, this.data.carts)
    this.setData({
      carts: data
    })
  },
  //全选
  allCheck(e) {

    //处理全选逻辑
    let i = 0;
    let allPrice = 0;
    if (!this.data.allChecked) {
      for (i = 0; i < this.data.carts.length; i++) {
        this.data.carts[i].isChecked = true;
        allPrice += this.data.carts[i].allPrice;
      }
    } else {
      for (i = 0; i < this.data.carts.length; i++) {
        this.data.carts[i].isChecked = false;
      }
      allPrice = 0;
    }
    this.setData({
      allChecked: !this.data.allChecked,
      carts: this.data.carts,
      allPrice: allPrice.toFixed(2)
    })

  },
  checkboxChange(e) {
    console.log(e)

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
  onReady: function() {

  },


  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})