<template>
  <div class="tags">
    <nuxt-link :to="`/genre/${tag.queryName}`" class="btn-tag"
               v-for="(tag, index) in tagList" v-bind:key="index">
      {{ tag.name }}
    </nuxt-link>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tagList: [
          {
            name: 'Эмбиент',
            queryName: 'ambient'
          },
          {
            name: 'Чилаут',
            queryName: 'chillout'
          },
          {
            name: 'Классическая музыка',
            queryName: 'classical'
          },
          {
            name: 'Рок',
            queryName: 'rock'
          },
          {
            name: 'Соул',
            queryName: 'soul'
          },
          {
            name: 'Поп',
            queryName: 'pop'
          },
          {
            name: 'Рэп',
            queryName: 'rap'
          },
          {
            name: 'Инди',
            queryName: 'indie'
          },
          {
            name: 'Дабстеп',
            queryName: 'dubstep'
          },
          {
            name: `Драм'н'бейс`,
            queryName: 'drum-bass'
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .tags {
    width: 800px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
    margin-bottom: 60px;

    .btn-tag {
      color: #ffffff;
      font-size: 18px;
      padding: 10px;
      border: 1px solid #47494e;
      text-decoration: none;
      border-radius: 25px;
      white-space: nowrap;
      margin: 10px;

      &:hover {
        background-color: lighten(#000000, 10%);
      }

      &.nuxt-link-exact-active {
        border-color: darken(#90BD41, 5%);
        background-color: darken(#90BD41, 13%);
      }
    }
  }
</style>
