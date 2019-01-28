var startX
var startY
class Touch {

  constructor() {
  }

  _touchstart(e, items) {

    if(!items){
      return
    }
    //开始触摸时 重置所有删除
    console.log(e);

      if (items.isTouchMove) {
        //只操作为true的
        items.isTouchMove = false;
      }
  

    startX = e.changedTouches[0].clientX
    startY = e.changedTouches[0].clientY
       console.log(items)
    return items
  }

  _touchmove(e, items) {
    if (!items) {
      return
    }
     var index = e.currentTarget.dataset.index, //当前索引
      touchMoveX = e.changedTouches[0].clientX, //滑动变化坐标
      touchMoveY = e.changedTouches[0].clientY, //滑动变化坐标
  
      //获取滑动角度
      angle = this._angle({
        X: startX,
        Y: startY
      }, {
          X: touchMoveX,
          Y: touchMoveY
        });

    console.log(items);
    // items.forEach(function (v, i) {
      // items.isTouchMove = false
      //滑动超过30度角 return
    
    // if (Math.abs(angle) > 30) return;
    if (items.serial  == index) {
        if (touchMoveX > startX) //右滑
          items.isTouchMove = false
        else //左滑
          items.isTouchMove = true
      }
  
    return items
  }

  _angle(start, end) {
    var _X = end.X - start.X,
      _Y = end.Y - start.Y
    //返回角度 /Math.atan()返回数字的反正切值
    return 360 * Math.atan(_Y / _X) / (2 * Math.PI);
  }
}

export { Touch} 
