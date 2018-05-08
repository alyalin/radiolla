<template>
  <section class="container">
    <div>

      <app-genre-menu></app-genre-menu>

      <div class="playlist-wrapper">
        <nuxt-child :key="$route.params.genre"></nuxt-child>
      </div>

      <template v-if="url">
        <iframe style="position: fixed; bottom: 0; left: 0;" width="100%" height="60" :src="`https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&light=1&feed=${url}`" frameborder="0"></iframe>
      </template>

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

  data() {
    return {
      url: null
    }
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
