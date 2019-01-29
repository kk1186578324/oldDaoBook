// pages/add-address/index.js

import { AddressModel } from '../../models/address'
var addressModel = new AddressModel();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputText:null,
    addressMsg:{
      isDefult: true
    },

    address:{}
  },
  onShow(){
    const address = wx.getStorageSync("addressInfo");
    if (address){
      this.setData({
        addressMsg: address
      })
    }
    console.log(address)

  },
  initMap(){


 
  },
  _getName(e){

    this.data.addressMsg.name = e.detail.value;

  },
  _changebox(e){

    this.data.addressMsg.isDefult = !this.data.addressMsg.isDefult
      console.log(e)
  },
  _getPhone(e) {

    this.data.addressMsg.phone = e.detail.value;

  },
  _getMap(e){
    this.data.addressMsg.address = e.detail.value;
  },

  _getAddress(e) {

    this.data.addressMsg.address_detail = e.detail.value;

  },

  _getEmail(e) {

    this.data.addressMsg.email = e.detail.value;

  },
  _getDefult(e) {

    this.data.addressMsg.defult = e.detail.value;
  },

  save(){

    if (!this.data.addressMsg.name){
      this._showToast("请填写收件人！")
      return
    } else if (!this.data.addressMsg.phone){
      this._showToast("请填写联系电话！")
      return
    } else if (!this.data.addressMsg.address){
      this._showToast("请填写所在位置！")
      return
    }
    else if (!this.data.addressMsg.address_detail) {
      this._showToast("请填写详细地址！")
      return
    }
    const result = addressModel.addAddress(this.data.addressMsg)
    result.then((res)=>{
      wx.showToast({
        title: "已保存！",
        icon: 'success',
        duration: 2000
      });
    setTimeout(function(){
      wx.navigateBack({
        delta: 1
      })
    },1000)
    })
   console.log(this.data.addressMsg)
  },

  getlocation(){
    const that =this;
    wx.getLocation({
      type:"gcj02",
      success: function(res) {
       wx.openLocation({
         latitude: res.latitude,
         longitude: res.longitude,
         scale:18,
         success:function(res){
           wx.chooseLocation({
             success:function(res){
               console.log(res)
               that.data.addressMsg.address = res.address+res.name
               that.setData({
                 inputText: res.address + res.name
               })

               wx.redirectTo({
                 url: '/pages/add-address/index'
               })
             }
           })
         }
       })
      },
    })

  },

  _showToast(msg){
    wx.showToast({
      title: msg,
      icon: 'none',
      duration: 2000
    });

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    // console.log("ccccccccccccc")

    wx.removeStorageSync("addressInfo")
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