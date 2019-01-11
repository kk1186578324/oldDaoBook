import {HTTP} from '../util/http-p.js'
class ClassicModel extends HTTP{
  getLatest(page,pageSize){

    let key = this._getKey(page)
    let classic = wx.getStorageSync(key);
    if(!classic){
      const result = this.request({
        url: '/periodical/list',
        method: 'post',
        data: { page, pageSize }
      })
      result.then(res=>{
       wx.setStorageSync(this._getKey(res.content[0].index), res)
      })
      return result;
    }else{
       return new Promise((resolve,reject)=>{
         resolve(classic)
       }) 
    }
   
  }


  //获取key
  _getKey(index) {
    let key = "classic-" + index;
    return key;
  }
}

export { ClassicModel} 