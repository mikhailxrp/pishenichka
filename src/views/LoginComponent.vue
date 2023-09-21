<script>
import { mapGetters } from 'vuex';

export default {
  name: 'LoginComponent',
  methods: {
    submit() {
      if(this.isAuth){
        this.$router.push('/game');
      }        
      this.login = ''
      this.password = ''
    },
  },
  computed: {
    ...mapGetters(['isAuth']),
  },
};
</script>

<template>
  <section class="login">
    <div class="container">
      <div class="row justify-content-center row-padding">
        <div class="col-sm-10 auth__wrapper auth__wrapper_pt35">
          <div class="login__title">
            <h1>Вход</h1>
          </div>
          <form action="#" class="form-auth form-login">
            <div class="form-auth__label">
              <label for="login">Введите Ваш логин</label>
              <input type="text" id="login" v-model="$store.state.login" />
            </div>
            <div class="form-auth__label">
              <label for="password">Введите Ваш пароль</label>
              <input type="text" id="password" v-model="$store.state.password" />
            </div>
            <button class="btn btn_login" @click.prevent="submit">В игру</button>
          </form>
          <div class="back">
            <router-link to="/" class="btn btn_back">Назад</router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
