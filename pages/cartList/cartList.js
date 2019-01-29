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
    allChecked: true
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
      this.setData({
        carts: res.content,
      })
      this.computeAllprice()
    })
  },
  optionCart(e) {
    this.updateCarts(e.detail)
  },
  //改变carts状态
  changeChecked(cartList) {
    var carts = this.data.carts;
    carts.forEach((value, index) => {
      if (value._id == cartList._id) {
        carts[index] = cartList;
      }
    })
    this.setData({
      carts: carts
    })
    this.computeAllprice();
  },
  //
  updateCarts(cart) {
    const result = cartModel.updateCart(cart)
    result.then((res) => {
      this.changeChecked(cart)
    })
  },

  computeAllprice() {
    var allPrice = 0,
      status = false;
    if (this.data.carts.length) {
      this.data.carts.forEach((value, index) => {
        if (value.isChecked) {
          allPrice += value.count * value.price;
        } else {
          status = true
        }
      })
      if (status) {
        this.data.allChecked = false
      } else {
        this.data.allChecked = true
      }
    } else {
      this.data.allChecked = false
    }
    this.setData({
      allPrice: allPrice.toFixed(2)
    })
  },
  //删除数据
  delData(e) {
    var carts = this.data.carts;
    carts.splice(e.detail.index, 1)
    const result = cartModel.delCart(e.detail.id);
    result.then((res) => {
      this.setData({
        carts
      })
      this.computeAllprice()
    })
  },

  //全选
  allCheck(e) {
    //处理全选逻辑
    if (!this.data.allChecked) {
      for (let i = 0; i < this.data.carts.length; i++) {
        this.data.carts[i].isChecked = true;
        this.data.allChecked = false;
      }
    } else {
      for (let i = 0; i < this.data.carts.length; i++) {
        this.data.carts[i].isChecked = false;
      }
    }
    this.setData({
      carts: this.data.carts,
    })
    this.computeAllprice();
  },
  //手指触摸动作开始 记录起点X坐标
  touchstart(e) {
    //开始触摸时 重置所有删除
    let data = touch._touchstart(e, this.data.carts)
  },
  //滑动事件处理
  touchmove(e) {
    let data = touch._touchmove(e, this.data.carts)
    this.setData({
      carts: data
    })
  },

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