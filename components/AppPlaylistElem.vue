<template>
  <div>
    <div class="playlist">
      <div class="playlist__img">
        <img :src="playlist.pictures.large" :alt="playlist.name">
      </div>
      <div class="playlist__descr">
        <div class="playlist__info">
          <div class="playlist__play-button" v-on:click="play(playlist.key)"></div>
          <div class="playlist__descr">
            <div class="playlist__title">{{ playlist.name }}</div>
            <div class="playlist__stats">
              <span>Time: {{ playlist.audio_length }}</span>
              <span>Favs: {{ playlist.favorite_count }}</span>
              <span>Listen: {{ playlist.listener_count }}</span>
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
  export default {
    props: ['playlist'],

    methods: {
      play(url) {
        this.$store.dispatch('setPlayerUrl', url);
      }
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

    &:hover {
      background-color: lighten(#000000, 5%);
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
  }
</style>
