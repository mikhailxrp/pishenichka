<script>
export default {
  name: 'SectorsItem',
};
</script>

<template>
  <li class="sectors__item-inner">
    <div class="sectors__item-description">
      <div class="item-size">Размер: 4Га</div>
      <div class="item-growth">Рост: 34%</div>
    </div>

    <div class="sectors__item-select">
      <div class="item-type">Тип:</div>
      <select name="item-type" id="item-sectors">
        <option value="field">Поля</option>
        <option value="field">Поля</option>
        <option value="field">Поля</option>
      </select>
    </div>

    <div class="sectors__item-actions-panel">
      <div class="item-action">Действия:</div>
      <div class="item-action__inner">
        <div class="item-action__improvement item-border" data-title="Улучшение">
          <img src="../assets/icons/sectors-icons/improvement.png" alt="improvement" />
        </div>
        <div class="item-action__coins item-border" data-title="Монеты">
          <img src="../assets/icons/sectors-icons/coins.png" alt="coins" />
        </div>
        <div class="item-action__cancel item-border" data-title="Отменить">
          <img src="../assets/icons/sectors-icons/cancel.png" alt="cancel" />
        </div>
      </div>
    </div>
  </li>
</template>
