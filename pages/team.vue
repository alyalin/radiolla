<template>
  <div class="inner-wrapper">
    <div class="team-wrapper">
      <div class="b-team" v-for="(t, index) in team" v-bind:key="index">
        <div class="b-team__img">
          <img :src="`img/${t.src}.png`"
               :srcset="`img/${t.src}.png 1x, img/${t.src}@2x.png 2x`"
               alt="Base hoodie">
        </div>
        <div class="b-team__info">
          <div class="b-team__name">{{ t.name }}</div>
          <div class="b-team__position"> {{ t.position }} </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        team: [
          { src: 'team-1', name: 'Andron Gudronov', position: 'Контент-менеджер' },
          { src: 'team-2', name: 'Valentina Valentinova', position: 'DJ' },
          { src: 'team-5', name: 'Roman Krylov', position: 'Music lover' },
          { src: 'team-3', name: 'Ekaterina Bookovsky', position: 'DJ' },
          { src: 'team-4', name: 'Anton Doshikov', position: 'SMM' },
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .team-wrapper {
    display: flex;
    flex-flow: row wrap;
    margin-left: -8px;
    margin-right: -8px;

    @media (max-width: 800px) {
      justify-content: center;
    }
  }

  .b-team {
    margin: 20px 10px;

    &__img {
      margin-bottom: 10px;
      width: 245px;

      img {
        display: block;
        max-width: 100%;
        height: auto;
      }
    }

    &__info {
      text-align: center;
    }

    &__name {
      margin-bottom: 3px;
      font-size: 18px;
    }

    &__position {
      font-style: italic;
      font-size: 12px;
    }
  }
</style>
