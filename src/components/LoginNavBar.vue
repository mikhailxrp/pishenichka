<script>
export default {
  name: 'LoginNavBar',
};
</script>

<template>
  <header class="header">
    <div class="container-fluid">
      <div class="header__wrapper">
          <div class="header__logo">
            <router-link to="/" class="header__logo_link">
              <img src="../assets/icons/logo_main.svg" alt="logo" />
              <div class="header__content">PISHENICHKA</div>
            </router-link>
          </div>
          <div class="header__project">
            <router-link to='/about' class="header__link"> о проекте </router-link>
          </div>

          <div class="header__start">
            <a href="#" class="header__link"> с чего начать </a>
          </div>

          <div class="btn">
            <router-link to="/login">
              <button class="btn btn_play btn_play-white" > играть </button>
            </router-link>
              
          </div>
        </div>
    </div>
  </header>
</template>
