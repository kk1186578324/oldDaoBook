import {HTTP} from '../util/http.js'
class ClassicModel extends HTTP{
  getLatest(sCallback, pageSize){
      this.request({
        url:'/periodical/list',
        method:'post',
        data: {pageSize: pageSize},
        success:(res)=>{
          sCallback(res)
        }
      })

  }
}

export { ClassicModel} 