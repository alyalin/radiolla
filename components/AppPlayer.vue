<template>
  <div class="mixcloud-wrapper" v-bind:class="{ 'is-loaded': playerLoaded }">
    <iframe @load="load" id="mixcloud" width="100%" height="60" :src="`https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&light=0&feed=${url}`" frameborder="0" allow="autoplay"></iframe>
  </div>
</template>

<script>

  export default {
    props: [ 'url' ],

    data() {
      return {
        playerApi: null
      }
    },

    computed: {
      isPlaying() {
        return this.$store.getters.getIsPlaying;
      }
    },

    data() {
      return {
        player: null,
        playerLoaded: false
      }
    },

    methods: {
      load() {
        this.player = Mixcloud.PlayerWidget(document.getElementById('mixcloud'));

        this.player.ready.then((widget) => {
          this.playerLoaded = true;
          widget.play();
          widget.events.play.on(() => this.playListener());
          widget.events.pause.on(() => this.pauseListener());
        });
      },

      pauseListener() {
        this.$store.dispatch('setIsPlaying', false);
      },

      playListener() {
        this.$store.dispatch('setIsPlaying', true);
      },
    },

    watch: {
      isPlaying() {
        if (this.player) {
          this.player.ready.then((widget) => {
            if (this.isPlaying) {
              widget.play();
            } else {
              widget.pause();
            }
          });
        }
      }
    }
  }
</script>

<style lang="scss">
  .mixcloud-wrapper {
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #25292c;
    right: 0;
    height: 0;
    transition: height .15s ease-in-out;

    &.is-loaded {
      height: 60px;
    }
  }
</style>
