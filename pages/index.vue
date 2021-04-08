<template lang="pug">
.wrapper
  top
  release
  movie
  topics
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

<style lang="scss" scoped></style>
