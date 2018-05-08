<template>
  <div>aaaa
    <app-playlist-elem v-for="(playlist, index) in playLists" v-bind:key="index" :playlist="playlist"></app-playlist-elem>
  </div>
</template>

<script>
  import AppPlaylistElem from '~/components/AppPlaylistElem.vue'

  export default  {
    components: {
      AppPlaylistElem
    },

    data() {
      return {
        playLists: []
      }
    },

    async asyncData({ app }) {
      const { data } = await app.$axios.$get('https://api.mixcloud.com/discover/popular/popular/');

      return { playLists: data }
    }
  }
</script>
