import { createStore } from "vuex";

export default createStore({
  state(){
    return {
      isAuth: false,
      login: 'admin',
      password: 'admin',
    };
  },
  getters: {
    isAuth(state){
      return state.isAuth
    }
  }
})