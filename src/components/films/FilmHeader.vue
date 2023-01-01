<template>
    <ul>
        <router-link to="/films/nowplaying" custom v-slot="{navigate,isActive}">
          <li @click="navigate" :class="isActive?'damonactive':''">
            <span :class="isActive?'damonactiv':''">正在热映</span>
          </li>
          </router-link>
          <router-link to="/films/comingsoon" custom v-slot="{navigate,isActive}">
          <li @click="navigate" :class="isActive?'damonactive':''">
            <span :class="isActive?'damonactiv':''">即将上映</span>
          </li>
          </router-link>
    </ul>
</template>
<style lang="scss" scoped>
ul{
    display: flex;
    height: 3.0625rem;
    line-height: 3.0625rem;
    border-bottom: 1px solid rgb(245, 245, 244);
    li{
        flex: 1;
        list-style: none;
        text-align: center;
    }
}
.damonactiv{
    color: red;
    border-bottom: 2px solid red;
}
</style>