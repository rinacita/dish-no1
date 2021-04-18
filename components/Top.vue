<template lang="pug">
.wrapper
  .top-horizontal
    img.top-dish(src="~/assets/image/dish.svg")
    img.top-glitch(src="~/assets/image/glitch.png")
    img.top-no1(src="~/assets/image/no1.svg")
  .top-vertical
    img.top-dish(src="~/assets/image/dish.svg")
    img.top-glitch(src="~/assets/image/glitch.png")
    img.top-no1(src="~/assets/image/no1.svg")
</template>

<style lang="scss" scoped>
@import '~/assets/css/variables.scss';

@function dishHeight($glitchHeight) {
  @return $glitchHeight * (64 / 2500);
}

@function no1Height($glitchHeight) {
  @return $glitchHeight * (135 / 2500);
}

@function diffHeight($glitchHeight) {
  @return $glitchHeight * ((135 - 64) / 2500) / 2;
}

@function glitchWidth($glitchHeight) {
  @return $glitchHeight * (110 / 308);
}

@mixin imgHeight($glitchHeight) {
  img {
    &.top-dish {
      height: dishHeight($glitchHeight);
      width: auto;
    }
    &.top-glitch {
      height: $glitchHeight;
      width: glitchWidth($glitchHeight);
    }
    &.top-no1 {
      height: no1Height($glitchHeight);
      width: auto;
      margin-bottom: diffHeight($glitchHeight);
    }
  }
}

.wrapper {
  background: black;
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
}

_:lang(x) + _:-webkit-full-screen-document,
.wrapper {
  height: -webkit-fill-available;
}

.top-horizontal {
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 100vh;
  @include imgHeight(80vh);

  @include mq(xl) {
    width: 80vh;
    @include imgHeight(60vh);
  }

  @include mq(lg) {
    width: 80vw;
    @include imgHeight(60vw);
  }

  @include mq(md) {
    display: none;

    img {
      display: none;
    }
  }
}

.top-vertical {
  display: none;

  @include mq(md) {
    display: flex;
    flex-direction: column-reverse;

    width: 160px;

    img {
      width: 100%;

      &:not(:first-of-type) {
        margin-bottom: 48px;
      }
    }
  }

  @include mq(sm) {
    width: 90px;

    img {
      &:not(:first-of-type) {
        margin-bottom: 28px;
      }
    }
  }
}
</style>
