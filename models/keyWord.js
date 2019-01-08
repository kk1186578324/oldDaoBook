
class keyWordModel{

  const  maxLength = 10;
  getHistory(){
    const result = wx.getStorage("history")
    if(!result){
      return []
    }
    return result
  }

  addHistory(value){
   
  
   wx.setStorage({
     key: 'history',
     data: value,
   })

  }





}