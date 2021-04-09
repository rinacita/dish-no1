<template lang="pug">
.wrapper
  top
  release
  movie
  topics
  footer Copy ©︎ Sony Music Records All rights reserved.
</template>

<script>
import Top from '~/components/Top'
import Release from '~/components/Release'
import Movie from '~/components/Movie'
import Topics from '~/components/Topics'

export default {
  components: {
    Top,
    Release,
    Movie,
    Topics,
  },
}
</script>

<style lang="scss" scoped>
footer {
  background: #131314;
  color: white;
  font-size: 0.75rem;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
