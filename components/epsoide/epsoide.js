// components/epsoide/epsoide.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    message:"111", 
    view:"MINA",
    count:1,
    id:0,
    zero:0

  },

  /**
   * 组件的方法列表
   */
  methods: {

     add(e){
  
      // this.count = this.count+1;

       this.setData({
           count:this.data.count +1


       })
     }
    

  }
})
