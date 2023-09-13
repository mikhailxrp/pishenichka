<script>
export default {
  name: 'ProductionComponent',
};
</script>

<template>
  <section class="game-field">
    <div class="container">
      <div class="row justify-content-center row-padding">
        <div class="col-sm-10 game-field__field-main">
          <section class="production scroll-bar">
            <div class="container">
              <div class="row production__item">
                <div class="production__item-label">
                  <div class="production__item-address">Адрес: 177-77</div>
                  <div class="production__item-beside">
                    Рядом:
                    <ul class="production__list">
                      <li class="production__list-item">поле</li>
                      <li class="production__list-item">Виноградники</li>
                      <li class="production__list-item">Сады</li>
                    </ul>
                  </div>
                </div>

                <ul class="cell-wrapper">
                  <li class="cell-item">
                    <div class="cell-item__wrapper">
                      <div class="cell-item__inner">
                        <div class="cell-item__name">Вино</div>
                        <div class="cell-item__amount">7 т / год</div>
                        <button class="btn btn_option-export">Настройки экспорта</button>
                        <div class="cell-action-panel__wrapper">
                          <button class="btn btn_start-export" data-title="начать производство">
                            <img src="../assets/icons/cell-action-panel/start.svg" alt="start" />
                          </button>
                          <button class="btn btn_stop-export" data-title="остановить производство">
                            <img src="../assets/icons/cell-action-panel/stop.svg" alt="stop" />
                          </button>
                        </div>
                      </div>
                      <!-- внутренняя часть производства скрытый блок с кнопкой расторгнуть контракт начало-->
                      <!-- <div class="cell-item__wrapper-devider show">
                              <div class="top-devider"></div>
                              <div class="contract-inner">
                                <div class="cell-item__name">Экспорт:</div>
                                <div class="cell-item__amount">4 т / год</div>
                                <div class="cell-item__amount">Доход в год : <span>360000</span></div>
                                <button class="btn btn_option-export btn_contract" data-title="Данные с сервера">Расторгнуть контракт</button>
                              </div>
                              <div class="bottom-devider"></div>
                            </div> -->
                      <!-- внутренняя часть производства с кнопкой расторгнуть контракт конец-->
                      <div class="cell-item__inner-action">
                        <div class="cell-item__name">Модернизация производства</div>
                        <div class="cell-item__info" data-title="информация с сервера">
                          <img src="../assets/icons/info.svg" alt="info" />
                        </div>
                        <div class="cell-item__img">
                          <img src="../assets/icons/coins.svg" alt="coins" />
                          <span>1500000</span>
                        </div>
                        <button class="btn btn_do-action btn_m0 btn_ml">Сделать</button>
                      </div>
                    </div>
                  </li>

                  <li class="cell-item">
                    <div class="cell-item__wrapper">
                      <div class="cell-item__inner">
                        <div class="cell-item__name">Вино</div>
                        <div class="cell-item__amount">7 т / год</div>
                        <button class="btn btn_option-export">Настройки экспорта</button>
                        <div class="cell-action-panel__wrapper">
                          <button class="btn btn_start-export" data-title="начать производство">
                            <img src="../assets/icons/cell-action-panel/start.svg" alt="start" />
                          </button>
                          <button class="btn btn_stop-export" data-title="остановить производство">
                            <img src="../assets/icons/cell-action-panel/stop.svg" alt="stop" />
                          </button>
                        </div>
                      </div>
                      <!-- внутренняя часть производства скрытый блок с кнопкой расторгнуть контракт начало-->
                      <!-- <div class="cell-item__wrapper-devider"> 
                              <div class="top-devider"></div>
                              <div class="contract-inner">
                                <div class="cell-item__name">Экспорт:</div>
                                <div class="cell-item__amount">4 т / год</div>
                                <div class="cell-item__amount">Доход в год : <span>360000</span></div>
                                <button class="btn btn_option-export btn_contract" data-title="Данные с сервера">Расторгнуть контракт</button>
                              </div>
                              <div class="bottom-devider"></div>
                            </div> -->
                      <!-- внутренняя часть производства с кнопкой расторгнуть контракт конец-->
                      <div class="cell-item__inner-action">
                        <div class="cell-item__name">Модернизация производства</div>
                        <div class="cell-item__info" data-title="информация с сервера">
                          <img src="../assets/icons/info.svg" alt="info" />
                        </div>
                        <div class="cell-item__img">
                          <img src="../assets/icons/coins.svg" alt="coins" />
                          <span>1500000</span>
                        </div>
                        <button class="btn btn_do-action btn_m0 btn_ml">Сделать</button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </section>
</template>
