import {HTTP} from "../util/http-p.js"

class Banner extends HTTP{
    getBanner(page,pageSize){
        return this.request({
            url: '/banner/list',
            data: { page, pageSize },
            method: 'post'
        })
    }
}

export {Banner}