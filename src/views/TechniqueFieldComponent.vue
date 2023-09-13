<script>
import CatalogItem from './CatalogItem.vue';
import HangarItem from './HangarItem.vue';
export default {
  name: 'AgricultureFieldComponent',
  components: { HangarItem, CatalogItem },
  data() {
    return {
      active: 'hangar',
    };
  },
};
</script>

<template>
  <section class="game-field">
    <div class="container">
      <div class="row justify-content-center row-padding">
        <div class="col-sm-10 game-field__field-main">
          <div class="row">
            <div
              class="col-sm-6 game-field__field_tab"
              :class="active === 'hangar' ? 'active_tab' : ''"
              @click="active = 'hangar'"
            >
              Ангар
            </div>
            <div
              class="col-sm-6 game-field__field_tab"
              :class="active === 'catalog' ? 'active_tab' : ''"
              @click="active = 'catalog'"
            >
              Каталог
            </div>
          </div>

          <div class="hangar scroll-bar" v-if="active === 'hangar'">
            <div class="container">
              <ul class="row hangar__wrapper pt-3">
                <hangar-item v-for="item of 10" :key="item"></hangar-item>
              </ul>
            </div>
          </div>

          <div class="catalog scroll-bar" v-if="active === 'catalog'">
            <div class="container">
              <ul class="row catalog__wrapper pt-3">
                <catalog-item v-for="item of 10" :key="item"></catalog-item>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.active_tab {
  background-color: #fff;
}
</style>
