<template lang="pug">
.wrapper
  .albums
    .album(v-for="album in albumData" :key="album.id")
      //- .album__jacket
      //-   .album__image
      .album__info
        .album__title {{ album.title }}
        .album__product-no {{ album.product }}
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
  // max-width: 70vw;
  max-width: 640px;
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
    background: gray;

    @include mq(md) {
      width: 100%;
      // 後で変更
      // 画像だからそもそもheightいらない？
      height: 240px;
    }
  }

  &__info {
    // margin-left: 8vw;
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
      font-size: 1.2rem;
    }
  }

  &__product-no {
    margin-top: 32px;
    font-size: 0.9rem;
    white-space: pre-wrap;
    line-height: 1.4rem;

    @include mq(md) {
      font-size: 0.8rem;
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
      font-size: 0.8rem;
    }
  }
}
</style>
