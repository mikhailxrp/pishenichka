<script>
import { mapState } from 'vuex';
export default {
  name: 'LoginComponent',
  inject: ['loginGame', ],
  data() {
    return {
      loginName: '',
      pass: '',
    };
  },
  methods: {
    submit() {
      if (this.isValid) {
        this.$router.push('/game');
      }
      this.loginName = '';
      this.pass = '';
    },
  },
  computed: {
    ...mapState(['login', 'password']),
    isValid() { 
      if(this.loginName === this.login && this.pass === this.password){
        return true
      }else {
        return false
      }
    },
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
              <input type="text" id="login" v-model="loginName" />
            </div>
            <div class="form-auth__label">
              <label for="password">Введите Ваш пароль</label>
              <input type="text" id="password" v-model="pass" />
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
