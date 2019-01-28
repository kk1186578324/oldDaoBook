import {HTTP} from '../util/http.js'
class ClassicModel extends HTTP{
  getLatest(sCallback, page,pageSize){

    let key = this._getKey(page)
    let classic = wx.getStorageSync(key);
    if(!classic){
      this.request({
        url: '/periodical/list',
        method: 'post',
        data: { page, pageSize },
        success: (res) => {
          wx.setStorageSync(this._getKey(res.content[0].index),res)
          sCallback(res)
        }
      })
    }else{
      sCallback(classic)
    }
   
  }


  //获取key
  _getKey(index) {
    let key = "classic-" + index;
    return key;
  }
}

export default ClassicModel;