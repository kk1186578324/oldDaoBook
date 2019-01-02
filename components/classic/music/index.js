// components/classic/music/index.js
import { classicBeh } from "../classic-beh"
Component({
  /**
   * 组件的属性列表
   */
  behaviors: [classicBeh ],
  properties: {
  },

  /**
   * 组件的初始数据
   */
  data: {
    pauseSrc:"images/pause.png",
    playingSrc:"images/playing.png"
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})

