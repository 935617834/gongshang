<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <van-list van-list
          v-model="loading"
          :finished="finished"
          finished-text="我是有底线的"
          @load="onLoad"
          :immediate-check="false"
          >
            <van-cell v-for="data in datalist" :key="data.filmId" @click="handleChangePage(data.filmId)">
              <img :src="data.poster"/>
              <div>
                <div class="title">{{data.name}}</div>
                <div class="content">
                  <div :class="data.grade?'':'hidden'">
                    观众评分<span style="color:darkorange">{{data.grade}}</span>
                  </div>
                  <div class="actors">
                    主演：{{data.actors | actorsFilter}}
                  </div>
                  <div>
                    {{data.nation}} | {{data.runtime}}分钟
                  </div>
                </div>
              </div>
            </van-cell>
          </van-list>
    </div>
</template>
<script>
import Vue from 'vue'
import http from '@/util/http'
Vue.filter("actorsFilter",(data)=>{
  // console.log()
  return data.map(itme=>itme.name).join('')
})
export default {
  data () {
    return {
      datalist: [],
      loading:false,
      finished:false,
      current:1,
      total: 0
    }
  },
  mounted(){
    http({
      url: "/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=906601",
      headers:{
         'X-Host': 'mall.film-ticket.film.list'
       }
    }).then(res=>{
      console.log(res.data.data.films)
    this.datalist = res.data.data.films
    this.total = res.data.data.total
    })
  },
  methods: {
    onLoad(){
      if(this.datalist.length=== this.total && this.total !== 0){
        this.finished = true
        return
      }
      console.log('到底了')
      this.current++
      http({
        url: "/gateway?cityId=110100&pageNum=${this.current}&pageSize=10&type=1&k=906601",
      headers:{
         'X-Host': 'mall.film-ticket.film.list'
       }
      }).then(res=>{
        //console.log(res.data.data.films)
        this.datalist = [...this.datalist,...res.data.data.films]
        this.loading = false
      })
    },
    handleChangePage (id) {
      console.log(id)
      // location.href = '#/detail'
      // this.$router.push('/detail/${id}')
      this.$router.push({
        name: 'damonDetail',
        params: {
          id
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.van-list{
  .van-cell{
    overflow: hidden;
    padding: .9375rem;
    border-bottom: 1px solid rgb(245, 245, 244);
    img{
      width: 4.125rem;
      float: left;
    }
    .title{
      font-size: 1rem;
    }
    .content{
      font-size: .75rem;
      color: rgb(91, 91, 91);
      }
      .actors{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
  }
}
</style>"
