<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <van-nav-bar title="影院" ref="navbar" @click-left="handleLeft" @click-right="handleRight">
            <template #left>
                {{ cityName }}<van-icon name="arrow-down" color="black" />
            </template>
            <template #right>
                <van-icon name="search" size="25" color="black" />
            </template>
        </van-nav-bar>
        <div class="box" :style="{
        height:height
        }">
            <ul>
                <li v-for="data in cinemaList" :key="data.cinemaId">
                    <div class="left">
                        <div class="cinema_name">
                            {{data.name}}
                        </div>
                        <div class="cinema_text">
                            {{data.address}}
                        </div>
                    </div>
                    <div class="right">
                        <div style="color:#ff5f16;">
                            ￥{{data.lowPrice/100}}起
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import BetterScroll from'better-scroll'
import { mapState, mapActions, mapMutations } from 'vuex'
export default{
    data(){
        return{
            cinemaList:[],
            height:'0px'
        }
    },
    computed:{
        ...mapState(['cinemaList', 'cityId', 'cityName'])
    },
    mounted(){
        //console.log(this.$refs.navbar.$el.offsetHeight)
        this.height =
        document.documentElement.clientHeight
        -this.$refs.navbar.$el.offsetHeight
        -document.querySelector('footer').offsetHeight + 'px'
        
        if(this.cinemaList.length === 0) {
            this.getCinemaData(this.cityId).then(res => {
                this.$nextTick(()=> {
                    new BetterScroll('.box',{
                        scrollbar:{
                            fade: true
                        }
                    })
                })
            })
        }else {
            this.$nextTick(()=>{
                new BetterScroll('.box',{
                    scrollbar:{
                        fade: true
                    }
                })
            })
        }
        // http({
        //     //url:'/gateway?cityId=${this.$store.state.cityId}&ticketFlag=1&k=8785708',
        //     url:'/gateway?cityId=110100&ticketFlag=1&k=8785708',
        //     headers:{
        //         'X-Host': 'mall.film-ticket.cinema.list'
        //     }
        // }).then(res => {
        //     console.log(res.data.data.cinemas)
        //     this.cinemaList = res.data.data.cinemas
        //     //new BetterScroll('.box')
        //     this.$nextTick(()=>{
        //         new BetterScroll('.box',{
        //             scrollbar:{
        //                 fade: true
        //             }
        //         })
        //     })
        // })
    },
    methods:{
        ...mapActions(['getCinemaData']),
        ...mapMutations(['clearCinema']),
        handleLeft(){
            //console.log('left')
            this.$router.push('/city')
            this.clearCinema()
        },
        handleRight(){
            this.$router.push('/cinemas/search')
        }
    }
}
</script>
<style lang="scss" scoped>
li{
    padding: .9375rem;
    display: flex;
    justify-content: space-between;
    .left{
        width: 13.25rem;
    }
    .cinema_name{
        font-size: .9375rem;
    }
    .cinema_text{
        color:#797d82;
        font-size: .75rem;
        margin-top: .3125rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
}
.box{
    //height: 38.625rem;
    overflow: hidden;
    position: relative;
}
</style>
