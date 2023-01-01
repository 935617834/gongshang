<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <van-search
        v-model="value"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
        />
        <ul v-if="value">
                <li v-for="data in compputedList" :key="data.cinemaId">
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
</template>
<script>
export default {
    data(){
        return{
            value:''
        }
    },
    computed:{
        compputedList(){
            return this.$store.state.cinemaList.filter(item=>item.name.toUpperCase().includes(this.value.toUpperCase()) || item.address.toUpperCase().includes(this.value.toUpperCase()))
        }
    },
    methods:{
        onSearch(){},
        onCancel(){
            this.$router.back()
        }
    },
    mounted(){
        if(this.$store.state.cinemaList.length === 0){
            this.$store.dispatch('getCinemaData',this.$store.state.cityId)
        }else{
            console.log('缓存')
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
