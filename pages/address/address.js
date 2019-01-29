import { AddressModel } from '../../models/address'
var addressModel = new AddressModel();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address:[],
    page:1,
    pageSize:10
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onShow: function (options) {
    this.initData()
        
  },

  initData(){
    const result = addressModel.listAddress(this.data.page,this.data.pageSize)
    result.then((res)=>{
      if(res.success){
        this.setData({
          address:res.content
        })
      }
      console.log(res)
    })

  },
  onDelete(e){
    console.log(e)
    var _id = e.currentTarget.dataset.id;
    var index = e.currentTarget.dataset.index;
    const result = addressModel.delAddress(_id)
    result.then((res) => {
      if (res.success) {
        this.data.address.splice(index,1)
        this.setData({
          address: this.data.address
        })
        wx.showToast({
          title: "删除成功!",
          icon: 'success',
          duration: 2000
        });
      }
      console.log(res)
    })
  },
  changeDefult(e){
    var _id = e.currentTarget.dataset.id;
    var index = e.currentTarget.dataset.index;

   this.data.address[index].isDefult = true;

    const result = addressModel.addAddress(this.data.address[index])
    result.then((res) => {
      wx.showToast({
        title: "已修改！",
        icon: 'success',
        duration: 2000
      });
    })
    

  },
  onUpdate(e){
    var _id = e.currentTarget.dataset.id;
    var index = e.currentTarget.dataset.index;
    wx.setStorageSync("addressInfo", this.data.address[index])
      wx.navigateTo({
        url: '/pages/add-address/index',
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