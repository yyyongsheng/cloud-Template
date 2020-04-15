// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
   
  let sum=event.num1+event.num2


  return {
    sum,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
  
  }
}