<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div v-if="filmInfo">
      <detail-header v-scroll="50">
        {{filmInfo.name}}
      </detail-header>
        <!-- <img :src="filmInfo.poster"/> -->
        <div :style="{
        backgroundImage:'url('+filmInfo.poster+')'
        }" class="poster"></div>
        <div class="content">
          <div>{{filmInfo.name}}</div>
          <div>
            <div class="content-button">{{filmInfo.category}}</div>
            <div class="content-button">{{filmInfo.premiereAt | dateFilter}}上映</div>
            <div class="content-button">{{filmInfo.nation}} | {{filmInfo.runtime}}分钟</div>
            <div class="content-button">{{filmInfo.synopsis}}</div>
          </div>
          <div class="box">
            <div>演职人员</div>
            <detail-swiper :perview="3.5" name="actors">
              <deta-swiper-item v-for="(data,index) in filmInfo.actors" :key="index">
                <img :src="data.avatarAddress" class="avatar">
                <div style="text-align:center;font-size:12px">{{data.name}}</div>
                <div  style="text-align:center;font-size:13px">{{data.role}}</div>
              </deta-swiper-item>
            </detail-swiper>
          </div>
          <div>
            <div>剧照</div>
            <detail-swiper :perview="2" name="photos">
              <deta-swiper-item v-for="(data,index) in filmInfo.photos" :key="index">
                <img :src="data" class="avatar" @click="handlePreview(index)">
              </deta-swiper-item>
            </detail-swiper>
          </div>
        </div>
    </div>
</template>
<script>
import detailSwiper from '@/components/detail/DetailSwiper.vue'
import detailSwiperItem from '@/components/detail/DetailSwiperltem.vue'
import http from '@/util/http'
import obj from '@/util/minxinObj'
import moment from 'moment'
import Vue from 'vue'
import detailHeader from '@/components/detail/DetailHeader.vue'
import { showImagePreview } from 'vant'
moment.locale('zh-cn')
Vue.filter('dateFilter',(date)=>{
  return moment(date*1000).format('YYYY-MM-DD')
})
Vue.directive('scroll',{
  inserted(el,binding){
    //console.log(binding.value)
    el.style.display = 'none'
    window.onscroll = () => {
      console.log('scroll')
      if((document.documentElement.scrollTop || document.body.scrollTop) > binding.value){
        el.style.display = 'block'
      }else {
        el.style.display = 'none'
      }
    }
  },
  unbind () {
    window.onscroll = null
  }
})
export default {
  mixins: [obj],
  data () {
    return {
      filmInfo: null
    }
  },
  components:{
    detailSwiper,
    detailSwiperItem,
    detailHeader,
  },
  methods:{
    handlePreview(index){
      showImagePreview({
        images:this.filmInfo.photos,
        startPosition:index,
        closeable:true,
        closeIconPosition:top-left
      })
    }
  },
  mounted () {
    console.log('created',this.$route.params.id)
    http({
      url:'/gateway?filmId=6165&k=4530052',
      //url: '/gateway?filmId=6150&k=8326464',
      //url: '/gateway?filmId=${this.$route.params.id}&k=8326464',
      headers:{
        'X-Host': 'mall.film-ticket.film.info'
       }
    }).then(res=>{
      console.log(res.data.data.film)
      this.filmInfo = res.data.data.film
    })
  },
  created(){
    window.onscroll=()=>{
      console.log('scroll')
      if(document.documentElement.scrollTop>50){
        console.log('显示')
      }else {
        console.log('隐藏')
      }
    }
  },
  destroyed(){
    window.onscroll = null
  }
}
</script>
<style lang="scss" scoped>
.poster{
  width: 100%;
  height: 27.4375rem;
  background-position: center;
  background-size: cover;
}
.content{
  padding: .9375rem;
  .content-button{
    color: #797d82;
    font-size: .8125rem;
    margin-top: 4px;
  }
}
  .avatar{
   width: 100%;
   height: 5.3125rem;
   background-position: center;
   background-size: cover;
 }
</style>
