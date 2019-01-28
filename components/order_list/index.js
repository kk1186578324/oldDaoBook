
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
    cart:{
      type: Object,
      value:null,
      // observer(newVal, oldVal, changePath){
      //   console.log(newVal.count,oldVal)
      //   this.setData({
      //     count: newVal.count,
      //     allPrice: newVal.allPrice,
      //     checked: newVal.isChecked
      //   })

      // }
    },

    index: Number,
    allChecked: {
    type: Boolean,
    value: null,
    observer(newVal, oldVal, changePath) {

      this.setData({
        checked: newVal
      })
    }
  }
  },
  data: {
    count: 1,
    allPrice: 0,
    checked: null,
    bathUrl: config.img_url

  },
  attached() {
    this.setData({
      cart: this.properties.cart,
      // checked: this.properties.cart.isChecked,
    })
  },

  methods: {
    //减少数量
    reduce(e) {
      if (this.data.count <= 1) {
        return;
      }
      this.setData({
        count: this.data.count - 1
      })
      var id = this.properties.cart._id; //id
      let price =  this.properties.cart.price;
      let status = this.data.checked;
      this.triggerEvent("reducePrice", {
        price,
        status,
        id,
        option: true,
        count: this.data.count
      }, {})
    },
    //添加数量
    add(e) {
      this.properties.cart.count++;
      return
      console.log(this.data.count)
      
      this.setData({
        count: this.data.count + 1
      })
      var id = this.properties.cart._id; //id
      let price = this.properties.cart.price;
      let status = this.data.checked;
      this.triggerEvent("addPrice", {
        price,
        status,
        id,
        option: true,
        count: this.data.count
      }, {})
    },
    //勾选列表
    checkboxChange(e) {
      var id = this.properties.cart._id; //id
      if (e.currentTarget.dataset.checked == true) {
        var price =  (+this.properties.cart.price * this.data.count);
        this.setData({
          checked: false
        })
        this.triggerEvent("reducePrice", {
          price,
          id,
          status: this.data.checked,
          count: this.data.count
        }, {})
      } else {
        this.setData({
          checked: true
        })
        var price = (+this.properties.cart.price * this.data.count);
        this.triggerEvent("addPrice", {
          price,
          id,
          status: this.data.checked,
          count:this.data.count
        }, {})
     
      }
    },
    //删除列表
    del(e) {
      var index = e.currentTarget.dataset.index;
      var id = this.properties.cart._id; //id
      var status = this.data.checked; //选中状态
      var price = +this.properties.cart.price * this.data.count;
      this.triggerEvent("delData", {
        index,
        id,
        status,
        price
      }, {})
    }
  }
})