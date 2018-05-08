<template>
  <div>
    <div class="playlist">
      <div class="playlist__img" v-on:click="play(playlist.key)">
        <img :src="playlist.pictures.large" :alt="playlist.name">
      </div>
      <div class="playlist__descr">
        <div class="playlist__title">{{ playlist.name }}</div>
        <div class="playlist__tags">
          <div class="tag" v-for="(tag, tagIndex) in playlist.tags" v-bind:key="tagIndex">{{ tag.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['playlist']
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
      padding-top: 10px;
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
  }
</style>
