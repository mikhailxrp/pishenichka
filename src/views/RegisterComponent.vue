<script>
export default {
  name: 'RegisterComponent',
};
</script>

<template>
  <section class="registration">
    <div class="container">
      <div class="row justify-content-center row-padding">
        <div class="col-sm-10 auth__wrapper auth__wrapper_pt35">
          <div class="registration__title">
            <h1>Регистрация</h1>
          </div>
          <form action="#" class="form-auth form-registration">
            <div class="form-auth__label">
              <label for="tel">Введите Ваш номер телефона</label>
              <input type="text" id="tel" />
            </div>
            <div class="form-auth__label">
              <label for="name">Придумайте логин</label>
              <input type="text" id="name" />
            </div>
            <div class="form-auth__label">
              <label for="password-reg">Придумайте пароль</label>
              <input type="text" id="password-reg" />
            </div>
            <div class="form-auth__policy">
              <input type="checkbox" name="policy" id="policy" class="form-auth__checkbox" />
              <div class="form-auth__text">Я согласен (согласна) на обработку моих персональных данных</div>
            </div>
            <button class="btn btn_register btn_register_mt25px">Зарегистрироваться</button>
          </form>
          <div class="back back_registration">
            <router-link to="/" class="btn btn_back btn_back_registration">Назад</router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
