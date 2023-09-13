<script>
import RegionsItem from './RegionsItem.vue';
import SectorsItem from './SectorsItem.vue';
export default {
  name: 'GameFieldComponent',
  components: {
    RegionsItem,
    SectorsItem,
  },
  data() {
    return {
      active: 'regions',
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
              :class="active === 'regions' ? 'active_tab' : ''"
              @click="active = 'regions'"
            >
              Регионы
            </div>
            <div
              class="col-sm-6 game-field__field_tab"
              :class="active === 'sectors' ? 'active_tab' : ''"
              @click="active = 'sectors'"
            >
              Секторы
            </div>
          </div>
          <div class="regions scroll-bar" v-if="active === 'regions'">
            <ul class="row regions__wrapper pt-3">
              <regions-item v-for="item of 10" :key="item"></regions-item>
            </ul>
          </div>

          <div class="sectors scroll-bar" v-if="active === 'sectors'">
            <ul>
              <li class="row sectors__wrapper mt-2" v-for="item of 3" :key="item">
                <span class="sectors__adress">Адрес: 1452-334</span>
                <ul class="row sectors__gap">
                  <sectors-item v-for="item of 3" :key="item"></sectors-item>
                </ul>
              </li>
            </ul>
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
