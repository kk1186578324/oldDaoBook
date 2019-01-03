// components/classic/music/index.js
import { classicBeh } from "../classic-beh"
const bgm = wx.getBackgroundAudioManager()
Component({
  /**
   * 组件的属性列表
   */
  behaviors: [classicBeh ],
  properties: {
    url:{
      type: String,
      value:""
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    pauseSrc:"images/pause.png",
    playingSrc:"images/playing.png",
    playStatus:0,
    animationData:''
  },
  attached(){

    this._recoverStatus();
    this._monitorSwitch();

  },
  //在组件实例被从页面节点树移除时执行
  detached(){
    // bgm.pause()
  },

  /**
   * 组件的方法列表
   */
  methods: {
    isPlay(){
      this.setData({
        playStatus: this.data.playStatus? 0: 1
      })
      console.log(this.data.playStatus)
      if (this.data.playStatus){
        bgm.src = this.properties.url;
        bgm.play()
      }else{
        bgm.stop()
      }
  
    },
    _recoverStatus(){
      console.log(bgm.paused)
      if(bgm.paused){
        this.setData({
          playStatus:0
        })
        return
      }
      console.log(bgm.src, this.properties.url)
      if (bgm.src == this.properties.url){
        if (!bgm.paused){
          this.setData({
            playStatus: 1
          })
        }
       
      }
      
    },
    _monitorSwitch(){

      bgm.onPlay(() => {
        this._recoverStatus()
      })
      bgm.onPause(() => {
        this._recoverStatus()
      })
      bgm.onStop(() => {
        this._recoverStatus()
      }),
      bgm.onEnded(() => {
      this._recoverStatus()
      })
    }

  }
})

