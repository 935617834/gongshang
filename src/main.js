import Vue from 'vue' // ES6导入方式
import App from './App.vue' // 导入根组件APP
import router from './router'
import store from './store'
Vue.config.productionTip = false

new Vue({
  router,
   store,
  render: h => h(App) // vue支持的新写法
}).$mount('#app')

// eslint-disable-next-line no-var
// var obj = {
//   name: 'Damon',
//   age: 100
// }
// console.log(obj)
