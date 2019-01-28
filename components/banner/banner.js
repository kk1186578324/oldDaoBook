// components/banner/banner.js
import { config } from '../../config.js'
Component({
  properties: {
    imgUrls: Array,

  },

  data: {
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    base_url: config.img_url
  },

  attached() {
    this.initData()
  },

  methods: {
    initData() {

    },
    changeIndicatorDots(e) {
      this.setData({
        indicatorDots: !this.data.indicatorDots
      })
    },
    changeAutoplay(e) {
      this.setData({
        autoplay: !this.data.autoplay
      })
    },
    intervalChange(e) {
      this.setData({
        interval: e.detail.value
      })
    },
    durationChange(e) {
      this.setData({
        duration: e.detail.value
      })
    }
  }


})
