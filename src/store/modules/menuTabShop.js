export default{
  state(){
    return {
      shopProducts: [
        {
          name: 'Злаки',
          dataTitle: 'wheat',
          src: require('../../assets/icons/warehouses/wheat.svg'),
          id: 1,
        },
        {
          name: 'Виноград',
          dataTitle: 'grape',
          src: require('../../assets/icons/warehouses/grape.svg'),
          id: 2,
        },
        {
          name: 'Вишня',
          dataTitle: 'cherry',
          src: require('../../assets/icons/warehouses/cherry.svg'),
          id: 3,
        },
        {
          name: 'Техника',
          dataTitle: 'technique',
          src: require('../../assets/icons/warehouses/technique.svg'),
          id: 4,
        },
      ],
    };
  },
  getters: {
    asideMenu(state){
      return state.shopProducts
    }
  }
}