<template>
    <footer>
      <ul>
        <!-- vue-touter 声明是导航 -->
          <!-- <router-link to="/films" active-class="damonactive" tag="li">电影</router-link>
          <router-link to="/cinemas" active-class="damonactive" tag="li">影院</router-link>
          <router-link to="/center" active-class="damonactive" tag="li">我的</router-link> -->
          <!-- vue-touter(4) 声明是导航 -->
          <router-link to="/films" custom v-slot="{navigate,isActive}">
          <li @click="navigate" :class="isActive?'damonactive':''">
            <span class="iconfont icon-dianying"></span>
            <i>电影</i>
          </li>
          </router-link>
          <router-link to="/cinemas" custom v-slot="{navigate,isActive}">
          <li @click="navigate" :class="isActive?'damonactive':''">
            <span class="iconfont icon-yingyuan"></span>
            <i>影院</i>
          </li>
        </router-link>
          <router-link to="/center" custom v-slot="{navigate,isActive}">
          <li @click="navigate" :class="isActive?'damonactive':''">
            <span class="iconfont icon-31wode"></span>
            <i>我的</i>
          </li>
        </router-link>
      </ul>
    </footer>
</template>
<script>
import '../assets/iconfont/iconfont.css'
export default {}
</script>
<style lang="scss" scoped>
footer{
    position:fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3.0625rem;
    background: rgb(245, 245, 244);
    z-index: 100;
    ul{
        display: flex;
    }
    li{
        flex: 1;
        line-height: 1.5625rem;
        text-align: center;
        list-style: none;
        display: flex;
        flex-direction: column;
    }
}
.damonactive{
  color: red;
}
</style>