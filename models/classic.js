import {HTTP} from '../util/http.js'
class ClassicModel extends HTTP{
  getLatest(sCallback, page,pageSize){
      this.request({
        url:'/periodical/list',
        method:'post',
        data: { page, pageSize},
        success:(res)=>{
          sCallback(res)
        }
      })

  }
}

export { ClassicModel} 