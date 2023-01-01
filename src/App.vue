<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <tabbar ref="mytabbar" v-show="$store.state.isTabbarShow"></tabbar>
    <!-- 路由容器 -->
    <section>
      <router-view></router-view>
    </section>
  </div>
</template>
<script>
import tabbar from '@/components/Tabbar';
import Vue from 'vue';
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant)
export default {
  data () {
    return {}
  },
  mounted(){
    //console.log(this.$refs.mytabber.$el.offsetHeight)
  },
  components: {
    tabbar
  }
}
</script>
<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
html,body{
  height: 100%;
}
section{
  padding-bottom: 3.0625rem;
}
</style>
<!-- https://m.maoyan.com/ajax/movieOnInfoList?token=&optimus_uuid=74B5F0A032A711EB82DD6B9282E93C676D27D7B9731D4E608D7612C3E708C120&optimus_risk_leve=71&optimus_code=10 -->
