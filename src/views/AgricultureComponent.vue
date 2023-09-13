<script>
export default {
  name: 'AgricultureComponent',
};
</script>

<template>
  <div class="container">
    <div class="row justify-content-center row-padding">
      <div class="col-sm-10 game-field__field-main">
        <section class="agriculture">
          <div class="container">
            <div class="row carousel">
              <div class="carousel__wrapper">
                <div class="carousel__img">
                  <div class="carousel__title">Поля</div>
                  <img src="../assets/img/carousel/fields.svg" alt="fields" data-title="Поля" />
                </div>

                <div class="carousel__img">
                  <div class="carousel__title">Виноградники</div>
                  <img src="../assets/img/carousel/vineyards.svg" alt="vineyards" data-title="Виноградники" />
                </div>

                <div class="carousel__img">
                  <div class="carousel__title">Сады</div>
                  <img src="../assets/img/carousel/cherry.svg" alt="cherry" data-title="Сады" />
                </div>
              </div>
              <div class="carousel__nav-doted"></div>
              <div class="carousel__nav-prev"></div>
              <div class="carousel__nav-next"></div>
            </div>

            <div class="row agriculture__wrapper">
              <div class="agriculture__item agriculture__item_empty">
                Пока что тут ничего нет :( Создайте виноградники, используя раздел “Регионы”)
              </div>

              <div class="agriculture__item agriculture__item_options hidden">
                <div class="agriculture__close" data-title="закрыть">
                  <img src="../assets/icons/close.svg" alt="close" />
                </div>

                <div class="agriculture__inner">
                  <span class="item-label">Адрес: 1452-334</span>
                  <span class="item-label">4 Га</span>
                  <div class="agriculture__progress-bar">
                    <span class="item-label">Растет:</span>
                    <progress value="35" max="100"></progress>
                  </div>
                  <span class="item-label">Подсолнечник</span>
                </div>

                <div class="agriculture__inner-btn">
                  <button
                    class="btn btn_do-action action-active btn_ml btn_mixin-t70"
                    data-title="тут будет переменная с ответом с сервера"
                  >
                    Полив
                  </button>
                  <button class="btn btn_do-action btn_ml" data-title="тут будет переменная с ответом с сервера">
                    Обработка удобрениями
                  </button>
                  <button class="btn btn_do-action btn_ml" data-title="тут будет переменная с ответом с сервера">
                    Обработка от сорняков и вредителей
                  </button>
                </div>
              </div>

              <div class="agriculture__item agriculture__item-elem hidden">
                <div class="agriculture__item-label-inner">
                  <span class="item-label">Адрес: 133-12</span>
                  <span class="item-label">4 Га</span>
                </div>

                <div class="agriculture__select-option-inner">
                  <div class="agriculture__inner-counter">
                    <span class="item-label">Засеять:</span>
                    <div class="counter">
                      <button class="btn-minus btn-minus_min"></button>
                      <span class="counter__amount counter__amount_min">1</span>
                      <button class="btn-plus btn-plus_min"></button>
                    </div>
                  </div>

                  <div class="agriculture__item-select">
                    <select name="select-agriculture" id="select-agriculture">
                      <option disabled selected>Культура</option>
                      <option value="1452-334">Пшеница</option>
                      <option value="1452-335">Ячмень</option>
                      <option value="1452-336">Подсолнечник</option>
                    </select>
                  </div>
                </div>

                <button class="btn btn_start">Старт!</button>
              </div>

              <div class="agriculture__item agriculture__item-elem hidden">
                <div class="agriculture__item-label-inner">
                  <span class="item-label">Адрес: 133-12</span>
                  <span class="item-label">4 Га</span>
                </div>

                <div class="agriculture__select-option-inner">
                  <div class="agriculture__inner-counter">
                    <span class="item-label">Засеять:</span>
                    <div class="counter">
                      <button class="btn-minus btn-minus_min"></button>
                      <span class="counter__amount counter__amount_min">1</span>
                      <button class="btn-plus btn-plus_min"></button>
                    </div>
                  </div>

                  <div class="agriculture__item-select">
                    <select name="select-agriculture" id="select-agriculture">
                      <option disabled selected>Культура</option>
                      <option value="1452-334">Пшеница</option>
                      <option value="1452-335">Ячмень</option>
                      <option value="1452-336">Подсолнечник</option>
                    </select>
                  </div>
                </div>

                <button class="btn btn_start">Старт!</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
