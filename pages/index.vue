<template>
  <section class="container">
    <div>

      <app-genre-menu></app-genre-menu>

      <div class="playlist-wrapper">
        <nuxt-child :key="$route.params.genre"></nuxt-child>
      </div>

      <img class="pattern" src="~assets/images/pattern.svg" alt="">



    </div>
  </section>

</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import AppGenreMenu from '~/components/AppGenreMenu.vue'

export default {
  components: {
    AppLogo,
    AppGenreMenu
  },

  methods: {
    play(url) {
      // const mixcloudApi = Mixcloud.FooterWidget(url, { disablePushState: true });
      //
      // mixcloudApi.then(api => {
      //   console.log(api);
      //   Mixcloud.FooterWidget('123');
      // });

      // console.log();

      this.url = url;
    }
  }
}
</script>

<style lang="scss" scoped>

  .playlist-wrapper {
    width: 600px;
    margin: 0 auto;
    background-color: #000000;
    color: #ffffff;
  }

</style>
