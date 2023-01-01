// import axios from "axios"

// function httpForList(){
//     return axios({
//         url: "https://m.maizuo.com/gateway?cityId=310100&pageNum=1&pageSize=10&type=1&k=906601",
//       headers:{
//         'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16654079493690137116475393","bc":"310100"}',
//         'X-Host': 'mall.film-ticket.film.list'
//       }
//     })
// }function httpForDetail(params){
//   return axios({
//     url: 'https://m.maizuo.com/gateway?filmId=${params}&k=3338113',
//     headers:{
//       'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2. 1", "e":"16654079493690137116475393","bc":"310100"}',
//       'X-Host': 'mall.film-ticket.film.info'
//     }
//   })
// }
// export default {
//   httpForDetail,
//   httpForList
// }
import axios from 'axios'
import { Toast } from 'vant'
const http = axios.create({
  baseURL: 'https://m.maizuo.com',
  timeout: 1000,
  Headers: {
    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16654079493690137116475393","bc":"310100"}'
  }
})
http.interceptors.request.use(function(config){
  Toast.loading({
    message: '加载中...',
    forbidClick: true,
    duration:0
  });
  return config
  //console.log(config)
},  function(error){
    return Promise.reject(error)
})
http.interceptors.response.use(function(response){
  Toast.clear()
  return{
    ...response,
    aaa:'damon'
  }
},function(error){
  Toast.clear()
  return Promise.reject(error)
})
export default http