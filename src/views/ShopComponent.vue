<script>
import WheatItem from './WheatItem.vue';
export default {
  name: 'ShopComponent',
  components: {
    WheatItem,
  },
  data() {
    return {
      dataTitle: 'wheat',
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
  methods: {
    showShopItem(data){
      this.dataTitle = data
    }
  },
};
</script>

<template>
  <section class="game-field">
    <div class="container">
      <div class="row justify-content-center row-padding">
        <div class="col-sm-10 game-field__field-main">
          <div class="shop">
            <aside class="asidebar">
              <nav>
                <ul class="asidebar__menu">
                  <li v-for="product of shopProducts" :key="product.id" @click="showShopItem(product.dataTitle)">
                    <a class="asidebar__link" :data-title="product.name">
                      <img :src="product.src" alt="wheat" />
                    </a>
                  </li>
                </ul>
              </nav>
            </aside>
            <div class="container">
              <div class="row shop__scroll scroll-bar">
                <div class="shop__wrapper" >
                    <wheat-item v-if="dataTitle === 'wheat'"></wheat-item>
                    <h4 v-else>Тут пока ничего нет</h4>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
a {
  cursor: pointer;
}
</style>
