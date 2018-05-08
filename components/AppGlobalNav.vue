<template>
  <nav class="global-nav">
    <nuxt-link class="global-nav__el" to="/">Плейлисты</nuxt-link>
    <nuxt-link class="global-nav__el" to="/shop">Магазин</nuxt-link>
    <nuxt-link class="global-nav__el" to="/team">Команда</nuxt-link>
  </nav>
</template>

<style lang="scss">
  .global-nav {
    display: flex;
    justify-content: flex-end;
    padding: 10px 30px;
    &__el {
      color: #ffffff;
      font-size: 18px;

      & + & {
        margin-left: 20px;
      }
    }
  }
</style>
