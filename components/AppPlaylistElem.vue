<template>
  <div>
    <div class="playlist">
      <div class="playlist__img">
        <img :src="playlist.pictures.extra_large" :alt="playlist.name">
      </div>
      <div class="playlist__descr">
        <div class="playlist__info">
          <template v-if="isCurrent">
            <div class="playlist__play-button" v-on:click="play(playlist)" v-if="!isPlayerPlaying"></div>
            <div class="playlist__pause-button" v-on:click="pause()" v-if="isPlayerPlaying"><span
              class="line"></span><span class="line"></span></div>
          </template>
          <template v-else>
            <div class="playlist__play-button" v-on:click="play(playlist)"></div>
          </template>
          <div class="playlist__descr">
            <div class="playlist__title">{{ playlist.name }}</div>
            <div class="playlist__stats">
              <span><img src="~assets/images/clock.svg" alt="Audio Length:"> {{ formattedSeconds }}</span>
              <span><img src="~assets/images/heart.svg" alt="Favourite Count:"> {{ playlist.favorite_count }}</span>
              <span><img src="~assets/images/headphones.svg" alt="Listeners:"> {{ playlist.listener_count }}</span>
            </div>
          </div>
        </div>

        <div class="playlist__tags">
          <div class="tag" v-for="(tag, tagIndex) in playlist.tags" v-bind:key="tagIndex">{{ tag.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import AppPlayer from '~/components/AppPlayer.vue';

  export default {
    props: ['playlist', 'currentPlaying', 'isPlaying'],

    computed: {
      isCurrent() {
        if (this.currentPlaying) {
          return this.playlist.slug === this.currentPlaying.slug;
        } else {
          return false;
        }
      },
      isPlayerPlaying() {
        return this.$store.getters.getIsPlaying;
      },

      formattedSeconds() {
        return (new Date(this.playlist.audio_length * 1000)).toUTCString().match(/(\d\d:\d\d:\d\d)/)[0];
      }
    },

    methods: {
      play(data) {
        this.$store.dispatch('setPlayerUrl', data.key);
        this.$store.dispatch('setCurrentPlaying', data);
        this.$store.dispatch('setIsPlaying', true);
      },

      pause() {
        this.$store.dispatch('setIsPlaying', false);
      }
    },

    components: {
      AppPlayer
    }
  }
</script>

<style lang="scss" scoped>
  .playlist {
    display: flex;
    border: 1px solid #282828;
    border-radius: 3px;
    margin-top: 15px;
    margin-bottom: 15px;
    transition: all .2s ease-in-out;

    &:hover {
      background-color: rgba(#000000, .5);
    }

    &__img {
      max-width: 150px;
      flex: 0 0 150px;
      margin-right: 20px;

      img {
        max-width: 100%;
        display: block;
        height: auto;
      }
    }

    &__title {
      font-size: 24px;
      margin-bottom: 15px;

      @media (max-width: 600px) {
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: 20px;
        overflow: hidden;
      }
    }

    &__descr {
      padding-bottom: 10px;
      overflow: hidden;
    }

    &__stats {
      color: #ffffff;
      display: flex;

      img {
        width: 14px;
        margin-right: 3px;
      }

      span {
        display: flex;
        font-size: 12px;
        align-items: center;

        & + span {
          margin-left: 10px;
        }
      }
    }

    &__tags {
      display: flex;
      flex-flow: row wrap;
      margin-left: -3px;
      margin-right: -3px;

      .tag {
        font-size: 10px;
        padding: 2px;
        border: 1px solid #282828;
        border-radius: 3px;
        margin: 3px;
        white-space: nowrap;
      }
    }

    &__info {
      display: flex;
      align-items: center;
      padding-top: 10px;
      padding-bottom: 10px;
      padding-right: 10px;
    }

    &__play-button {
      position: relative;
      width: 60px;
      height: 60px;
      flex: 0 0 60px;
      border: 1px solid #ffffff;
      margin-right: 10px;
      border-radius: 50%;
      cursor: pointer;

      &:before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 7px;
        right: 0;
        width: 0px;
        height: 0px;
        border-style: solid;
        border-width: 15px 0 15px 25px;
        border-color: transparent transparent transparent #FFFFFF;
        margin: auto;
      }

      &:hover {
        border-color: #6a8c30;

        &:before {
          border-color: transparent transparent transparent #6a8c30;
        }
      }
    }

    &__pause-button {
      position: relative;
      width: 60px;
      height: 60px;
      flex: 0 0 60px;
      border: 1px solid #ffffff;
      margin-right: 10px;
      border-radius: 50%;
      cursor: pointer;

      .line {
        position: absolute;
        width: 4px;
        height: 30px;
        background-color: #ffffff;
        transform: rotate(0);
        top: 0;
        bottom: 0;
        left: -13px;
        right: 0;
        margin: auto;

        & + .line {
          left: 12px;
        }
      }

      &:hover {
        border-color: #6a8c30;

        .line {
          background-color: #6a8c30;
        }
      }
    }
  }
</style>
