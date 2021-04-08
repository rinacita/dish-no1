<template lang="pug">
.wrapper 
  img.main(src="~assets/image/main.jpg")
  .release
    img.release__title(src="~assets/image/release.svg")
    h4 読売テレビ・日本テレビ系全国29局ネット<br>TVアニメ『僕のヒーローアカデミア』<br>第5期オープニングテーマ
    a(href="https://dish.lnk.to/No1_AW")
      img.release__download(src="~assets/image/download.svg")
</template>

<style lang="scss" scoped>
@import '~/assets/css/variables.scss';

.wrapper {
  // background: pink;
  width: 100%;
  background: #131314;
  padding: 108px 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  @include mq(md) {
    padding: 0 0 80px;
  }
}

img.main {
  width: 70vw;
  margin-bottom: 64px;

  @include mq(md) {
    width: 100%;
  }
}

.release {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  padding: 0 48px;
  width: 100%;
  max-width: 480px;

  h4 {
    font-weight: 400;
    margin-bottom: 48px;
  }

  img {
    width: 100%;

    &:first-of-type {
      margin-bottom: 32px;
    }

    &.release__download {
      opacity: 1;
      transition: opacity 0.2s;

      &:hover {
        opacity: 0.7;
      }
    }
  }
}
</style>
