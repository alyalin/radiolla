<template>
  <div>

    <div class="wrapper">
      <app-global-nav></app-global-nav>
      <nuxt/>
    </div>

    <img class="pattern" src="~assets/images/pattern.svg" alt="">
  </div>
</template>

<script>
  import AppGlobalNav from '~/components/AppGlobalNav.vue'

  export default {
    components: {
      AppGlobalNav
    }
  }
</script>

<style lang="scss">
  html {
    font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    background-color: #000000;
    color: #ffffff;
  }

  *, *:before, *:after {
    box-sizing: border-box;
    margin: 0;
  }

  .button--green {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #3b8070;
    color: #3b8070;
    text-decoration: none;
    padding: 10px 30px;
  }

  .button--green:hover {
    color: #fff;
    background-color: #3b8070;
  }

  .button--grey {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #35495e;
    color: #35495e;
    text-decoration: none;
    padding: 10px 30px;
    margin-left: 15px;
  }

  .button--grey:hover {
    color: #fff;
    background-color: #35495e;
  }

  .pattern {
    position: fixed;
    width: 500px;
    right: 0;
    top: 50%;
    transform: translate(0, -50%);
  }

  .wrapper {
    padding-top: 300px;
  }

  .page-enter-active, .page-leave-active {
    transition: opacity .5s
  }
  .page-enter, .page-leave-active {
    opacity: 0
  }

</style>
