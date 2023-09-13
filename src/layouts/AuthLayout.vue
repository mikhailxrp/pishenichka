<script>
import LoginNavBar from '../components/LoginNavBar.vue'
export default {
  name: 'AuthLayout',
  components: {
    LoginNavBar
  }
}
</script>

<template>
  <section class="auth-overlay">
    <login-nav-bar></login-nav-bar>
    <router-view></router-view>
  </section>
</template>