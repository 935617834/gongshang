<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
      <film-swiper :key="datalist.length">
        <film-swiper-item v-for="data in datalist" :key="data">
          {{data}}
          <!-- <img :src="data"/> -->
        </film-swiper-item>
      </film-swiper>
        <film-header class="sticky"></film-header>
        <router-view></router-view>
    </div>
</template>
<script>
import filmHeader from '@/components/films/FilmHeader'
import filmSwiper from '@/components/films/FilmSwiper'
import filmSwiperItem from '@/components/films/FilmSwiperItem'
// import axios from 'axios'
export default {
  data(){
    return {
      datalist:[]
    }
  },
  mounted(){
    setTimeout(()=>{
      this.datalist = ['1111','2222','3333']
      // axios.get('/banner.json').then(res=>{
        // console.log(res.data)
        // this.datalist = res.data.banner
      // })
    }, 1000)
  },
  components: {
    filmSwiper,
    filmSwiperItem,
    filmHeader
  }
}
</script>
<style lang ="scss" scoped>
.sticky{
  position: sticky;
  top: 0;
  background: rgb(253, 254, 254);
  z-index: 100;
}
</style>