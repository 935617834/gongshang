<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        login
          <button @click="handleLogin">登录</button>
    </div>
</template>
<script>
export default {
  methods: {
    handleLogin () {
      setTimeout(() => {
        localStorage.setItem('token', '后端返回的token字段')
        // console.log(this.$route.query.redirect)
        // this.$router.push('/center')
        this.$router.push(this.$route.query.redirect)
      }, 0)
    }
  }
}
</script>
