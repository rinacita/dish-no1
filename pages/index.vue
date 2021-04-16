<template lang="pug">
.wrapper
  a.menu(@click="clicked")
    span.menu__line.menu__line--top(:class="{ 'active': menuActive }")
    span.menu__line.menu__line--bottom(:class="{ 'active': menuActive }")
  nav.gnav(:style="{ display: menuActive ? 'block' : 'none' }")
    .gnav__wrap
      ul.gnav__menu
        li.gnav__menu__item
          a(href="#top" @click="menuActive = false")
            img(src="~/assets/image/top.svg")
        li.gnav__menu__item
          a(href="#release" @click="menuActive = false")
            img(src="~/assets/image/release.svg")
        li.gnav__menu__item
          a(href="#movie" @click="menuActive = false")
            img(src="~/assets/image/movie.svg")
        li.gnav__menu__item
          a(href="#topics" @click="menuActive = false")
            img(src="~/assets/image/topics.svg")
  top#top
  release#release 
  album#album
  benefit#benefit
  movie#movie 
  topics#topics 
  footer Copy ©︎ Sony Music Records All rights reserved.
</template>

<script>
import Top from '~/components/Top'
import Release from '~/components/Release'
import Benefit from '~/components/Benefit'
import Album from '~/components/Album'
import Movie from '~/components/Movie'
import Topics from '~/components/Topics'

export default {
  components: {
    Top,
    Release,
    Benefit,
    Album,
    Movie,
    Topics,
  },
  data() {
    return {
      menuActive: false,
    }
  },
  methods: {
    clicked() {
      this.menuActive = !this.menuActive
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/variables.scss';
/*menu*/
.menu {
  color: white;
  height: 12px;
  position: fixed;
  left: 20px;
  top: 20px;
  width: 30px;
  z-index: 99;
}
.menu__line {
  background: white;
  display: block;
  height: 2px;
  position: absolute;
  transition: transform 0.3s;
  width: 100%;
}
.menu__line--bottom {
  bottom: 0;
}
.menu__line--top.active {
  top: 4px;
  transform: rotate(45deg);
  background: white;
}
.menu__line--bottom.active {
  bottom: 6px;
  transform: rotate(135deg);
  background: white;
}
/*gnav*/
.gnav {
  color: white;
  background: black;
  // display: none;
  height: 100%;
  position: fixed;
  width: 100%;
  z-index: 98;
  transition: 0.3s;
}
.gnav__wrap {
  display: flex;
  width: 100vw;
  height: 100%;
  margin: auto;
  position: absolute;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.gnav__menu {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.gnav__menu__item {
  margin: 3rem 0;

  @include mq(md) {
    margin: 2rem 0;
  }

  a {
    color: #f4f6f7;
    // font-family: 'TS';
    font-size: 1.5rem;
    font-weight: bold;
    letter-spacing: 0.1rem;
    // padding: 2.5rem;
    text-decoration: none;
    transition: 0.2s;
    &:hover {
      opacity: 0.7;
    }

    img {
      height: 20px;

      @include mq(md) {
        height: 16px;
      }
    }

    @include mq(md) {
      font-size: 1.2rem;
    }
  }
}

footer {
  background: black;
  color: white;
  font-size: 0.75rem;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
