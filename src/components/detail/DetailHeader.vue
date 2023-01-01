<template>
    <div class="header">
        <van-icon name="arrow-left" @click="handleBack" />
        <slot></slot>
    </div>
</template>
<script>
export default {
    methods:{
        handleBack(){
            this.$router.back()
        }
    }
}
</script>
<style lang="scss" scoped>
.header{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 2.75rem;
    line-height: 2.75rem;
    background-color: white;
    text-align: center;
    .van-icon{
        font-size:1.875rem;
        position: fixed;
        left: .625rem;
        top: 0;
        height: 2.75rem;
        line-height: 2.75rem;
    }
}
</style>