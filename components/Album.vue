<template lang="pug">
.wrapper
  .albums
    .album(v-for="album in albumData" :key="album.id")
      .album__jacket
        .album__image
          img(src="~assets/image/now_printing.svg")
      .album__info
        .album__title {{ album.title }}
        .album__product-no {{ album.product }}
        a.album__link(:href="album.link")
          img(src="~assets/image/reserved.svg")
        .album__playlists
          .playlist(v-for="playlist in album.playlists" :key="playlist.id")
            .playlist__title {{ playlist.title }}
            .playlist__tracks
              .playlist__track(v-for="track in playlist.tracks" :key="track.id") {{ track.name }}
</template>

<script>
import albumData from '~/assets/data/album.json'

export default {
  data: () => {
    return {
      albumData,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/variables.scss';
.wrapper {
  width: 100%;
  background: #131314;
}

.albums {
  // background: red;
  max-width: 70vw;
  // max-width: 640px;
  margin: 0 auto;
  padding: 80px 32px;

  @include mq(md) {
    max-width: none;
    padding: 64px 44px;
  }
}

.album {
  // background: blue;
  display: flex;
  flex-direction: row;
  margin-bottom: 160px;

  @include mq(md) {
    flex-direction: column;
    margin-bottom: 80px;
  }

  &__jacket {
  }

  &__image {
    width: 30vw;
    height: 30vw;
    background: #202020;

    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 180px;

      @include mq(md) {
        width: 150px;
      }
    }

    @include mq(md) {
      width: 100%;
      // 後で変更
      // 画像だからそもそもheightいらない？
      height: 240px;
    }
  }

  &__info {
    margin-left: 8vw;
    padding-top: 16px;

    @include mq(md) {
      margin: 0;
      padding-top: 44px;
    }
  }

  &__title {
    font-size: 1.3rem;
    font-weight: 700;
    @include mq(md) {
      font-size: 1.5rem;
    }
  }

  &__product-no {
    margin-top: 32px;
    font-size: 0.9rem;
    font-weight: 400;
    white-space: pre-wrap;
    line-height: 1.4rem;

    @include mq(md) {
      font-size: 0.8rem;
    }
  }

  &__link {
    img {
      margin-top: 32px;
      max-width: 240px;
      width: 100%;
      opacity: 1;
      transition: opacity 0.2s;

      &:hover {
        opacity: 0.7;
      }

      @include mq(md) {
        max-width: none;
      }
    }
  }

  &__playlists {
    margin-top: 64px;
  }
}

.playlist {
  margin-bottom: 48px;

  &__title {
    font-size: 1.2rem;
    font-weight: 700;

    @include mq(md) {
      font-size: 1.1rem;
    }
  }

  &__tracks {
    margin-top: 24px;
  }

  &__track {
    margin-top: 12px;
    font-size: 0.9rem;
    line-height: 1.2rem;
    @include mq(md) {
      font-size: 0.9rem;
      line-height: 1.4rem;
      font-weight: 400;
      margin-top: 8px;
    }
  }
}
</style>
