<script>
import GameNavBar from '../components/GameNavBar.vue';
import TheAsidePanel from '@/components/TheAsidePanel.vue';
import RegistryFieldComponent from '@/views/RegistryFieldComponent.vue';
import TechniqueFieldComponent from '@/views/TechniqueFieldComponent.vue';
import AgricultureComponent from '@/views/AgricultureComponent.vue';
import WarehousesComponent from '@/views/WarehousesComponent.vue';
import ProductionComponent from '@/views/ProductionComponent.vue'
import ShopComponent  from '@/views/ShopComponent.vue'
export default {
  name: 'GameLayout',
  components: {
    GameNavBar,
    TheAsidePanel,
    RegistryFieldComponent,
    TechniqueFieldComponent,
    AgricultureComponent,
    WarehousesComponent,
    ProductionComponent,
    ShopComponent
  },
  data() {
    return {
      activeFieldItem: 'registry'
    };
  },
  methods: {
    toggleField(data){
       this.activeFieldItem = data
    }
  },  
};
</script>

<template>
  <section class="game-layout">
    <game-nav-bar></game-nav-bar>
    <the-aside-panel @activeItemPanel="toggleField"></the-aside-panel>
    <registry-field-component v-if="activeFieldItem === 'registry'"></registry-field-component>
    <technique-field-component v-else-if="activeFieldItem === 'technique'"></technique-field-component>
    <agriculture-component v-else-if="activeFieldItem === 'agriculture'"></agriculture-component>
    <warehouses-component v-else-if="activeFieldItem === 'warehouses'"></warehouses-component>
    <production-component v-else-if="activeFieldItem === 'production'"></production-component>
    <shop-component v-else-if="activeFieldItem === 'shop'"></shop-component>
  </section>
</template>
