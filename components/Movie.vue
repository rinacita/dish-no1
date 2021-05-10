<template lang="pug">
.wrapper
  img.title(src="~assets/image/movie.svg")
  a(href="https://www.youtube.com/watch?v=ujCFRKfzPxA")
    .image
      img(src="http://img.youtube.com/vi/ujCFRKfzPxA/maxresdefault.jpg")
    .desc DISH// 『No.1』 MAKING MOVIE DIGEST
  a(href="https://www.youtube.com/watch?v=PyFQzoJJz_8")
    .image
      img(src="http://img.youtube.com/vi/PyFQzoJJz_8/maxresdefault.jpg")
    .desc DISH// 『No.1』 MUSIC VIDEO
  a(href="https://www.youtube.com/watch?v=S3bd-X1Dlss")
    .image
      img(src="http://img.youtube.com/vi/S3bd-X1Dlss/maxresdefault.jpg")
    .desc DISH// 『No.1』 MUSIC VIDEO TEASER
  a(href="https://www.youtube.com/watch?v=jlwOlzVK5kY")
    .image
      img(src="http://img.youtube.com/vi/jlwOlzVK5kY/maxresdefault.jpg")
    .desc ヒロアカ5期OP


</template>

<style lang="scss" scoped>
@import '~/assets/css/variables.scss';
.wrapper {
  width: 100%;
  padding: 120px 32px;
  background: #131314;
  display: flex;
  flex-direction: column;
  align-items: center;

  @include mq(md) {
    padding: 80px 32px;
  }
}

.title {
  width: 200px;
  margin-bottom: 72px;

  @include mq(md) {
    width: 120px;
    margin-bottom: 44px;
  }
}

.image {
  position: relative;
  max-width: 480px;
  width: 100%;
}

.image img {
  width: 100%;
  vertical-align: top;
}

.image:after,
.image:before {
  position: absolute;
  transition: all 0.3;
  -webkit-transition: all 0.3s;
}

.image:after {
  content: '\A';
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: black;
  opacity: 0.4;
}

.image:before {
  content: 'PLAY';
  font-family: 'TS';
  font-size: 15px;
  letter-spacing: 4px;
  width: 100%;
  color: #fff;
  z-index: 1;
  top: 50%;
  opacity: 0.8;
  text-align: center;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
}

.image:hover:after {
  opacity: 0.6;
}

.image:hover:before {
  opacity: 1;
}

a {
  color: white;
  text-decoration: none;

  &:not(:last-of-type) {
    margin-bottom: 64px;
  }
}

.desc {
  margin-top: 16px;
  font-size: 1rem;
  line-height: 1.4rem;

  @include mq(md) {
    font-size: 0.85rem;
    line-height: 1.2rem;
  }
}
// .movies {
//   width: 100%;
//   max-width: 480px;

//   .movie {
//     width: 100%;
//     height: 100%;
//   }

//   a {
//     display: block;
//     width: 100%;
//     height: 100%;
//   }

//   .image {
//     position: relative;
//     width: 100%;
//     height: 160px;

//     &::after {
//       content: '\A';
//       position: absolute;
//       width: 100%;
//       height: 100%;
//       top: 0;
//       left: 0;
//       background: #00000099;
//       opacity: 0;
//       transition: all 1s;
//       -webkit-transition: all 1s;

//       &:hover {
//         opacity: 1;
//       }
//     }
//   }

//   img {
//     width: 100%;
//     height: 160px;
//     // vertical-align: top;
//   }
// }
</style>
