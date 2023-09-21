import { createStore } from 'vuex';
import shopTabModule from './modules/menuTabShop';

export default createStore({
modules: {
    shopTabModule
  },
  state() {
    return {
      isLogin: false,
      login: '',
      password: '',
    };
  },
  getters: {
    isAuth(state) {
      if (state.login !== '' && state.password !== '') {
        state.isLogin = true;
        return state.isLogin;
      }
    },
  },
});
