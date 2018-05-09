<template>
  <div v-if="url">
    <iframe style="position: fixed; bottom: 0; left: 0;" width="100%" height="60" :src="`https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&light=0&feed=${url}`" frameborder="0"></iframe>
  </div>
</template>

<script>
  export default {
    props: [
      'url'
    ]
  }
</script>
