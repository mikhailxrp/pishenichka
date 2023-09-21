<script>
import AuthLayout from './layouts/AuthLayout.vue';
import GameLayout from './layouts/GameLayout.vue';
export default {
  name: 'App',
  components: {
    AuthLayout,
    GameLayout,
  },
  provide() {
    return {
      loginGame: this.loginGame,
      outGame: this.outGame,
    };
  },
  methods: {
    loginGame() {
      this.$router.replace('/game');
    },
    outGame() {
      this.isAuth = false;
      this.$router.replace('/');
    },
  },
  computed: {
    layout() {
      return (this.$route.meta.layout || 'auth') + '-layout';
    },
  },
};
</script>

<template>
  <component :is="layout">
    <router-view></router-view>
  </component>
</template>

<style lang="scss">
@import url('./assets/style/style.min.css');
</style>
