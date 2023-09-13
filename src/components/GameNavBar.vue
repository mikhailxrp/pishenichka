<script>
export default {
  name: 'GameNavBar',
  inject: ['outGame']
};
</script>

<template>
  <header class="header header-game">
    <div class="container-fluid">
      <div class="header-game__wrapper">
          <div class="header__logo">
            <a href="#" class="header__logo_link">
              <img src="../assets/icons/logo_main.svg" alt="logo" />
              <div class="header__content">PISHENICHKA</div>
            </a>
          </div>
          <div class="header__start header-game__start">
            <a href="#" class="header__link header__link_start">с чего начать</a>
          </div>
          <div class="header-game__inner">
            <div class="header-game__date">
              <div class="header-game__img">
                <img src="../assets/icons/header-calendar.svg" alt="calendar" />
              </div>
              <div class="header-game__text">17 мая<br />2022 года</div>
            </div>
            <div class="header-game__money">
              <div class="header-game__img">
                <img src="../assets/icons/coins.svg" alt="coins" />
              </div>
              <div class="header-game__text">145500 монет</div>
            </div>
          </div>
          <div class="btn">
            <button class="btn btn_play btn_play-white" @click="outGame">выход</button>
          </div>
        </div>
    </div>
  </header>
</template>
