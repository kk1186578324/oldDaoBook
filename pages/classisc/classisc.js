// pages/classisc/classisc.js
import { ClassicModel} from '../../models/classic'

var classic = new ClassicModel();
Page({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    message:2222111,
    classic:"刻骨铭心"

  },
  onLoad:function(options){
    console.log(111)

    classic.getLatest((res)=>{


    })
  },
  

  /**
   * 组件的方法列表
   */
  methods: {
    

  }
})
