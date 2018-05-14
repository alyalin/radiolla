<template>
  <div>

    <div class="wrapper">
      <header>
        <app-logo></app-logo>
        <app-global-nav></app-global-nav>
      </header>

      <nuxt/>
    </div>

    <app-player :url="playerUrl"></app-player>
  </div>
</template>

<script>
  import AppGlobalNav from '~/components/AppGlobalNav.vue'
  import AppLogo from '~/components/AppLogo.vue'
  import AppPlayer from '~/components/AppPlayer.vue'

  export default {
    components: {
      AppGlobalNav,
      AppLogo,
      AppPlayer
    },

    computed: {
      playerUrl: function () {
        return this.$store.getters.getPlayerUrl;
      }
    },
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
    padding-bottom: 60px;
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
    z-index: -1;

    @media (max-width: 768px) {
      display: none;
    }
  }

  .wrapper {
    /*padding-top: 300px;*/
  }

  .page-enter-active, .page-leave-active {
    transition: opacity .5s
  }
  .page-enter, .page-leave-active {
    opacity: 0
  }

  header {
    max-width: 900px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 50px;
    padding: 30px;

    @media (max-width: 700px) {
      flex-direction: column;
    }
  }

  .inner-wrapper {
    max-width: 800px;
    margin: 0 auto;
    padding-left: 10px;
    padding-right: 10px;
  }

</style>
