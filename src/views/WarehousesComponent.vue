<script>
export default {
  name: 'WarehousesComponent',
};
</script>

<template>
  <div class="container">
    <div class="row justify-content-center row-padding">
      <div class="col-sm-10 game-field__field-main">
        <section class="warehouses scroll-bar">
          <div class="container">
            <div class="row warehouses__item">
              <div class="warehouses__item-label">
                <div class="warehouses__item-address">Адрес: 177-77</div>
                <div class="warehouses__item-beside">
                  Рядом:
                  <ul class="warehouses__list">
                    <li class="warehouses__list-item">поле</li>
                    <li class="warehouses__list-item">Виноградники</li>
                    <li class="warehouses__list-item">Сады</li>
                  </ul>
                </div>
              </div>

              <ul class="cell-wrapper">
                <li class="cell-item">
                  <div class="cell-item__name">Кукуруза</div>
                  <div class="cell-item__amount">16т</div>

                  <div class="counter">
                    <button class="btn-minus"></button>
                    <span class="counter__amount">1</span>
                    <button class="btn-plus"></button>
                  </div>

                  <div class="cell-action-panel__wrapper">
                    <div class="cell-action-panel__item" data-title="монеты">
                      <img src="../assets/icons/cell-action-panel/coins.svg" alt="coins" />
                    </div>
                    <div class="cell-action-panel__item" data-title="продукт">
                      <img src="../assets/icons/cell-action-panel/seeds.svg" alt="seeds" />
                    </div>
                    <div class="cell-action-panel__item" data-title="продать">
                      <img src="../assets/icons/cell-action-panel/truck.svg" alt="truck" />
                    </div>
                  </div>
                </li>

                <li class="cell-item">
                  <div class="cell-item__name">Кукуруза</div>
                  <div class="cell-item__amount">16т</div>

                  <div class="counter">
                    <button class="btn-minus"></button>
                    <span class="counter__amount">1</span>
                    <button class="btn-plus"></button>
                  </div>

                  <div class="cell-action-panel__wrapper">
                    <div class="cell-action-panel__item" data-title="монеты">
                      <img src="../assets/icons/cell-action-panel/coins.svg" alt="coins" />
                    </div>
                    <div class="cell-action-panel__item" data-title="продукт">
                      <img src="../assets/icons/cell-action-panel/seeds.svg" alt="seeds" />
                    </div>
                    <div class="cell-action-panel__item" data-title="продать">
                      <img src="../assets/icons/cell-action-panel/truck.svg" alt="truck" />
                    </div>
                  </div>
                </li>
              </ul>

              <div class="warehouses__actions-wrapper">
                <div class="warehouses__build-action">
                  <span>Построить стоянку</span>
                  <div class="warehouses__actions-img">
                    <img src="../assets/icons/coins.svg" alt="coins" />
                    <span>150000</span>
                  </div>
                  <button class="btn btn_do-action action-active" data-title="построить">Сделать</button>
                </div>

                <div class="warehouses__shelter-action">
                  <span>Приютить нерпочку</span>
                  <div class="warehouses__actions-img shelter-img">
                    <img src="../assets/icons/coins.svg" alt="coins" />
                    <span>15</span>
                  </div>
                  <button class="btn btn_do-action" data-title="приютить">Сделать</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
