import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      isLogin: false,
      login: '',
      password: '',
    };
  },
  getters: {
    isAuth(state) {
      if (state.login === 'admin' && state.password === 'admin') {
        state.isLogin = true;
        return state.isLogin;
      }
    },
  },
});
