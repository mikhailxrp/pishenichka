import { createStore } from 'vuex';

export default createStore({

  state() {
    return {
      isLogin: false,
      login: '',
      password: '',
      shopProducts: [
        {
          name: 'Злаки',
          dataTitle: 'wheat',
          src: require('../assets/icons/warehouses/wheat.svg'),
          id: 1,
        },
        {
          name: 'Виноград',
          dataTitle: 'grape',
          src: require('../assets/icons/warehouses/grape.svg'),
          id: 2,
        },
        {
          name: 'Вишня',
          dataTitle: 'cherry',
          src: require('../assets/icons/warehouses/cherry.svg'),
          id: 3,
        },
        {
          name: 'Техника',
          dataTitle: 'technique',
          src: require('../assets/icons/warehouses/technique.svg'),
          id: 4,
        },
      ],
    };
  },
  getters: {
    isAuth(state) {
      if (state.login !== '' && state.password !== '') {
        state.isLogin = true;
        return state.isLogin;
      }
    },
    asideMenu(state) {
      return state.shopProducts;
    },
  },
});
