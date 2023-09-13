<script>
export default {
  name: 'TheAboutProject',
};
</script>

<template>
  <section class="about-project">
    <div class="container">
      <div class="row about-project__wrapper">
        <div class="col-sm-2 col-md-2 about-project__label">
          <div class="about-project__label-item">1</div>
        </div>
        <div class="col-sm-10 col-md-10">
          <div class="about-project__content">
            <p>
              С другой стороны сложившаяся структура организации требуют от нас анализа систем массового участия. С
              другой стороны укрепление и развитие структуры в значительной степени обуславливает создание форм
              развития.
            </p>
          </div>
        </div>
      </div>

      <div class="row about-project__wrapper">
        <div class="col-sm-2 col-md-2 about-project__label">
          <div class="about-project__label-item">2</div>
        </div>
        <div class="col-sm-10 col-md-10">
          <div class="about-project__content">
            <p>
              С другой стороны сложившаяся структура организации требуют от нас анализа систем массового участия. С
              другой стороны укрепление и развитие структуры в значительной степени обуславливает создание форм
              развития.
            </p>
          </div>
        </div>
      </div>

      <div class="row about-project__wrapper">
        <div class="col-sm-2 col-md-2 about-project__label">
          <div class="about-project__label-item">3</div>
        </div>
        <div class="col-sm-10 col-md-10">
          <div class="about-project__content">
            <p>
              С другой стороны сложившаяся структура организации требуют от нас анализа систем массового участия. С
              другой стороны укрепление и развитие структуры в значительной степени обуславливает создание форм
              развития.
            </p>
          </div>
        </div>
      </div>

      <div class="row about-project__wrapper about-project__wrapper_last">
        <div class="col-sm-2 col-md-2 about-project__label">
          <div class="about-project__label-item about-project__label-item_hidden">4</div>
        </div>
        <div class="col-sm-10 d-flex justify-content-center">
          <router-link to="/login" class="btn btn_play about-project__btn">Играть</router-link>
        </div>
      </div>
    </div>
  </section>
</template>
