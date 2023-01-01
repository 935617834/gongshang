<template>
    <div class="swiper damon">
        <div class="swiper-wrapper">
          <slot></slot>
        </div>
      <div class="swiper-pagination"></div>
    </div>
</template>
<script>
import Swiper from 'swiper/bundle'
import 'swiper/swiper-bundle.css'
export default {
  props:{
    loop:{
      type:Boolean,
      default:true
    }
  },
  mounted () {
    new Swiper('.damon', {
      pagination: {
        el: '.swiper-pagination',
      },
      loop: this.loop,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      }
    })
  }
}
</script>
