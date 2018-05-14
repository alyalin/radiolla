<template>
  <div class="inner-wrapper">

    <div class="b-shop">
      <div class="b-shop__img">
        <img src="~assets/images/hoodie.png"
             srcset="~assets/images/hoodie.png 1x,
                 ~assets/images/hoodie@2x.png 2x"
             alt="Base hoodie">
      </div>
      <div class="b-shop__descr">
        <h3 class="b-shop__title">Radiolla Base Hoodie</h3>
        <ul>
          <li>100% Хлопок</li>
          <li>Шелкография</li>
        </ul>
        <div class="price">1200 ₽</div>
        <button type="button">Купить</button>
      </div>
    </div>


    <img class="pattern" src="~assets/images/pattern2.svg" alt="">
  </div>
</template>

<style lang="scss" scoped>
  .b-shop {
    display: flex;
    &__img {
      max-width: 50%;
      margin-right: 20px;

      img {
        max-width: 100%;
        height: auto;
        display: block;
      }
    }

    &__title {
      font-size: 30px;
      font-style: italic;
      margin-bottom: 15px;
    }
  }

  button {
    cursor: pointer;
    background: transparent;
    color: #ffffff;
    font-size: 18px;
  }

  ul {
    padding-left: 18px;
    margin-bottom: 10px;
  }

  .pattern {
    max-width: 400px;
    right: 50px;
  }

  .price {
    font-size: 20px;
    margin-bottom: 20px;
  }
</style>
