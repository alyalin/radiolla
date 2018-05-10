<template>
  <div>
    <iframe v-show="url" @load="load" id="mixcloud" style="position: fixed; bottom: 0; left: 0;" width="100%" height="60" :src="`https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&light=0&feed=${url}`" frameborder="0" allow="autoplay"></iframe>
  </div>
</template>

<script>

  export default {
    props: [ 'url' ],

    computed: {
      isPlaying() {
        return this.$store.getters.getIsPlaying;
      }
    },

    mounted() {

    },

    data() {
      return {
        player: null
      }
    },

    methods: {
      load() {
        this.player = Mixcloud.PlayerWidget(document.getElementById('mixcloud'), { disablePushstate: true });

        this.player.ready.then((widget) => {
          widget.play();

          widget.events.play.on(() => {
            this.$store.dispatch('setIsPlaying', true);
          });

          widget.events.pause.on(() => {
            this.$store.dispatch('setIsPlaying', false);
          });
        });

        console.log(this.player);
      }
    },

    watch: {
      isPlaying(newVal, oldVal) {
        if (this.player && this.isPlaying) {
          this.player.ready.then((widget) => {
            console.log('www');
            widget.play();
          });

        }
        if (this.player && !this.isPlaying) {
          this.player.ready.then((widget) => {
            widget.pause();
          });
        }
      }
    }
  }
</script>
