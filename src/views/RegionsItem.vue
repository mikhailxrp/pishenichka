<script>
export default {
  name: 'RegionsItem',
};
</script>

<template>
  <li class="regions__item">
    <div class="regions__item-number">
      Регион №1
      <span class="regions__item-devider"></span>
    </div>

    <div class="regions__item-aside-wrapper">
      <div class="regions__item-aside-img" data-title="Изучить">
        <img src="../assets/icons/regions-icons/search.svg" alt="search" />
      </div>
      <div class="regions__item-aside-img" data-title="Поля">
        <img src="../assets/icons/regions-icons/fields.svg" alt="fields" />
      </div>
      <div class="regions__item-aside-img" data-title="Деньги">
        <img src="../assets/icons/regions-icons/money.svg" alt="money" />
      </div>
    </div>

    <div class="item-inner">
      <div class="item-inner__addres">
        <div class="item-inner__text">Адрес:</div>
        <div class="item-inner__number">1452-334</div>
      </div>
      <div class="item-inner__free">
        <div class="item-inner__text">Свободно:</div>
        <div class="item-inner__number">16 Га</div>
      </div>
      <div class="item-inner__sectors">
        <div class="item-inner__text">Секторов:</div>
        <div class="item-inner__number">2</div>
      </div>

      <div class="item-inner__seasons">
        <div class="item-inner__winter-spring">
          <div class="item-inner__img" data-title="Зима">
            <img src="../assets/icons/regions-icons/seasons/winter.svg" alt="winter" />
          </div>
          <div class="item-inner__min-degrees">-5</div>
          <div class="item-inner__devider-degrees">-</div>
          <div class="item-inner__max-degrees">-10</div>
          <div class="item-inner__text-degrees">°С</div>

          <div class="item-inner__img" data-title="Весна">
            <img src="../assets/icons/regions-icons/seasons/spring.svg" alt="spring" />
          </div>
          <div class="item-inner__min-degrees">21</div>
          <div class="item-inner__devider-degrees">-</div>
          <div class="item-inner__max-degrees">30</div>
          <div class="item-inner__text-degrees">°С</div>
        </div>

        <div class="item-inner__vertical-devider"></div>

        <div class="item-inner__summer-autumn">
          <div class="item-inner__img" data-title="Лето">
            <img src="../assets/icons/regions-icons/seasons/summer.svg" alt="summer" />
          </div>
          <div class="item-inner__min-degrees">14</div>
          <div class="item-inner__devider-degrees">-</div>
          <div class="item-inner__max-degrees">21</div>
          <div class="item-inner__text-degrees">°С</div>

          <div class="item-inner__img" data-title="Осень">
            <img src="../assets/icons/regions-icons/seasons/autumn.svg" alt="autumn" />
          </div>
          <div class="item-inner__min-degrees">7</div>
          <div class="item-inner__devider-degrees">-</div>
          <div class="item-inner__max-degrees">18</div>
          <div class="item-inner__text-degrees">°С</div>
        </div>
      </div>
    </div>
  </li>
</template>
