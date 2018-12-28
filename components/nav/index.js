// components/nav/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:String,
    firstPage:Boolean,
    lastPage: Boolean
  },

  /**
   * 组件的初始数据
   */

  data: {
  
  },
  ready(){


    console.log(this.properties.total)


  },
  /**
   * 组件的方法列表
   */
  methods: {

    onPage(e){
      console.log(e)
      this.triggerEvent("page", e.target.dataset.name, {})

    }

  }
})
