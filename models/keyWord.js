
class KeyWordModel{
  constructor(){
    const maxLength = 10;
  }

  getHistory(){
    const result = wx.getStorageSync("history")
    console.log(result)
    if(!result){
      return []
    }
    return result
  }

  addHistory(value){
   const result = this.getHistory();
    if (result.length >= this.maxLength){
     result.pop();
   }
    if (result.includes(value)){
      return
    }

    result.unshift(value);
    console.log(result)
   wx.setStorage({
     key: 'history',
     data: result
   })

  }





}

export { KeyWordModel}