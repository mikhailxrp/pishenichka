<script>
export default {
  name: 'AuthComponent'
};
</script>

<template>
  <section class="auth">
    <div class="container">
      <div class="row justify-content-center row-padding">
        <div class="col-sm-10 auth__wrapper">
          <div class="auth__text-screen_1">
            <p>
              Привет! <br />
              Тут будет несколько слов о проекте, нужно представиться
            </p>
            <span class="auth__answer">Мы уже знакомы?</span>
            <div class="auth__inner-btn">
              <router-link to="/register" class="btn btn_register">Нет , зарегистрироваться</router-link>
              <router-link to="/login" class="btn btn_play-big">Да , играть</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
