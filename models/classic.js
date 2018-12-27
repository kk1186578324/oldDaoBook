import {HTTP} from '../util/http.js'
class ClassicModel extends HTTP{
  getLatest(sCallback){
      this.request({
        url:'/banner/list',
        method:'post',
        success:(res)=>{
          sCallback(res)
        }
      })

  }
}

export { ClassicModel} 