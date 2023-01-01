import Vue from 'vue'
import Vuex from 'vuex'
import http from '@/util/http'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

export default new Vuex.Store({
  plugins:[createPersistedState({
    reducer: (state) => {
      return {
        cityId: state.cityId,
        cityName: state.cityName
      }
    }
  })],
  state: {
    cityId: '110100',
    cityName: '北京',
    cinemaList:[],
    isTabbarShow: true
  },
  actions: {
    getCinemaData (cityId,store) {
      http({
        url: '/gateway?cityId=${cityId}&ticketFlag=1&k=8785708',
        headers: {
          'X-Host': 'mall.film-ticket.cinema.list'
        }
      })
      console.log(res.data.data.cinemas)
      store.commit('changeCinema', res.data.data.cinemas)
    }
  },
  mutations: {
    changeCityName (state, cityName) {
      state.cityName = cityName
      //console.log(cityName)
    },
    changeCityId(state,cityId){
      state.cityId = cityId
    },
    getCinemaData(state,data){
        state.cinemaList = data
    },
    clearCinema(state){
      state.cinemaList = []
    },
    show(state){
      state.isTabbarShow = true
    },
    hide(state){
      state.isTabbarShow = false
    }
  }
})
