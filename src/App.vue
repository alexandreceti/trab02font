<template>
  <div id="app">
    <menu-nav></menu-nav>
    <section class="section">
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
import menuNav from './components/menuBar'
export default {
  components: {
    'menu-nav': menuNav
  },
  name: 'app',

  // created: function async () {
  //   const token = localStorage.getItem('@varalclub:auth-token')
  //   console.log(token)
  //   if (!token) {
  //     console.log('aqui..')
  //     this.$router.push('/login')
  //     return
  //   }
  //   this.$router.push('/')
  // }
}


</script>

<style>

</style>
