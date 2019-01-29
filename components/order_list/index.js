
var that
import {
  Touch
} from 'touch.js' //新加
import {
  config
} from '../../config.js'
let touch = new Touch()
Component({
  properties: {
    hidChecked:Boolean,
    index:Number,
    cart:{
      type: Object,
      value:null,
      observer(newVal, oldVal, changePath){
        this.setData({
          cartData:newVal,
        })

      }
    },
  },
  data: {
    cartData:{},
    isChecked: null,
    bathUrl: config.img_url
  },
  attached() {
    this.setData({
      cartData: this.properties.cart,
    })
  },

  methods: {
    //减少数量
    reduce(e) {
      if (this.data.cartData.count <= 1) {
        return;
      }
      this.data.cartData.count--;
      this._optionComput()
    },
    //添加数量
    add(e) {
      this.data.cartData.count++;
      this._optionComput();
    },


    //勾选列表
    checkboxChange(e) {
      console.log(e)
      var id = this.properties.cart._id; //id
      this.data.cartData.isChecked = !this.data.cartData.isChecked
      this.setData({
        cartData: this.data.cartData
      })
      this._optionComput();
    },
    _optionComput() {
      this.setData({
        cartData: this.data.cartData
      })
      console.log(this.data.cartData)
      this.triggerEvent("optionCart", this.data.cartData, {})
    },
    //删除列表
    del(e) {
      var index = e.currentTarget.dataset.index;
      var id = this.properties.cart._id; //id
      this.triggerEvent("delData", {
        index,
        id
      }, {})
    }
  }
})