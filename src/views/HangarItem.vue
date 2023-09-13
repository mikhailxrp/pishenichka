<script>
export default {
  name: 'HangarItem',
};
</script>

<template>
  <li class="hangar__item-inner">
    <div class="hangar__item-close" data-title="закрыть">
      <img src="../assets/icons/close.svg" alt="close" />
    </div>
    <div class="hangar__item-name">Комбайн</div>
    <div class="hangar__item-devider"></div>
    <div class="hangar__item-text">Сбор урожая</div>
    <div class="hangar__item-action">Обрабатывает:</div>
    <div class="hangar__item-select">
      <select name="select-action" id="select-action">
        <option disabled selected>Выбрать</option>
        <option value="1452-334">Регион 1452-334</option>
        <option value="1452-335">Регион 1452-335</option>
        <option value="1452-336">Регион 1452-336</option>
      </select>
    </div>
    <div class="hangar__item-rent">Аренда: 10200/год</div>
  </li>
</template>
