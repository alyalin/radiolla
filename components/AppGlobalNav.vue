<template>
  <nav class="global-nav">
    <nuxt-link class="global-nav__el" to="/" exact>Popular</nuxt-link>
  </nav>
</template>

<style lang="scss">
  .global-nav {
    display: flex;
    justify-content: flex-end;

    &__el {
      color: #ffffff;
      font-size: 18px;
      text-decoration: none;
      opacity: .9;

      & + & {
        margin-left: 20px;
      }

      &.nuxt-link-active {
        font-weight: 800;
        opacity: 1;
      }
    }
  }
</style>
