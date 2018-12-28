// components/epsoide/epsoide.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    index:{
      type:Number,
      value:"",
      observer(newVal,oldVal,changePath){
        let val =  newVal<10?"0"+newVal:newVal;
        this.setData({
          _index:val
        })
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

    year:"2018",
    month: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月","十二月"],
    _index:""
  },
  attached(){
   let date = new Date();
   let year = date.getFullYear();
   let month = date.getMonth()
   this.setData({
     year,
     month:this.data.month[month]
   })
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
