// components/nav/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:String,
    total:Number
  },

  /**
   * 组件的初始数据
   */

  data: {
    first:"",
    next:""
  },
  attached(){
    console.log(this.properties.total)
  },
  ready(){
    console.log(this.properties.total)
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})
