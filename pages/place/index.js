// pages/cartList/cartList.js
import {
  CartModel
} from '../../models/cart'
import {
  config
} from '../../config.js'
import { AddressModel } from '../../models/address'
var addressModel = new AddressModel();
var cartModel = new CartModel();

var that
Page({

  /**
   * 页面的初始数据
   */
  data: {
      carts: [],
      allPrice: 0,
      allChecked: true,
      address:{},
      page: 1,
      pageSize: 10,
      countryCodes: ["快递","自提"],
      countryCodeIndex: 0,
      addStatus:false,
      fare:10
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onShow() {
    this.initAddress();
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
  initAddress(){
    const that = this;
    const result = addressModel.listAddress(this.data.page, this.data.pageSize)
    let status = false
    result.then((res) => {
      if (res.success) {
        res.content.forEach(function(value,index){
             if(value.isDefult){
               that.setData({
                 address: value
               })
               status = true;
             }
        })
        if(status){
          that.setData({
            addStatus:true
          })
        }else{
          that.setData({
            addStatus: false
          })
        }
   
      }
      console.log(that.data.addStatus)
    })

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
  bindCountryCodeChange: function (e) {
    console.log(e);
    if(e.detail.value=="1"){
      this.setData({
        fare:0
      })
    }
    this.setData({
      countryCodeIndex: e.detail.value
    })
  },

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