<script>
export default {
  name: 'CatalogItem',
};
</script>

<template>
  <li class="catalog__item-inner">
    <div class="catalog__item-name">Комбайн</div>
    <div class="catalog__item-devider"></div>
    <div class="catalog__item-action">Сбор урожая</div>
    <div class="catalog__target-inner">
      <div class="catalog__target-text">Обрабатывает:</div>
      <ul class="catalog__target-name">
        <li>поля</li>
        <li>виноградники</li>
        <li>сады</li>
      </ul>
    </div>
    <button class="btn btn_rent">Арендовать за <span>9060</span>/год</button>
    <button class="btn btn_buy">Купить за <span> 1225000</span></button>
  </li>
</template>
