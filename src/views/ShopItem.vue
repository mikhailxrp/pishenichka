<script>
export default {
  name: 'ShopItem',
};
</script>

<template>
  <div class="shop__item">
    <div class="shop__item-name">Пшеница</div>
    <div class="shop__item-img-info" data-title="информация с сервера">
      <img src="../assets/icons/info.svg" alt="info" />
    </div>
    <div class="shop__item-select">
      <select name="select-action" id="shop-select">
        <option disabled selected>Выбрать</option>
        <option value="1452-334">Регион 1452-334</option>
        <option value="1452-335">Регион 1452-335</option>
        <option value="1452-336">Регион 1452-336</option>
      </select>
    </div>
    <div class="shop__item-wrapper">
      <div class="shop__item-amount item-label">Кол - во гектар</div>
      <div class="counter">
        <button class="btn-minus"></button>
        <span class="counter__amount">1</span>
        <button class="btn-plus"></button>
      </div>
    </div>
    <div class="shop__item-wrapper">
      <div class="shop__item-img">
        <img src="../assets/icons/coins.svg" alt="coins" />
        <span class="item-label">5000</span>
      </div>
      <button class="btn btn_do-action btn_buy-grey" data-title="купить">Купить</button>
    </div>
  </div>
</template>
