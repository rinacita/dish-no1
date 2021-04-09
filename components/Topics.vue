<template lang="pug">
.wrapper
  img.title(src="~assets/image/topics.svg")
  .topics__items
    a.topics__item(v-for="item in topicItems" :key="item.id" :href="'https://www.sonymusic.co.jp/artist/DISH/info/' + item.id")
      hr.hr
      .topics__date {{ item.date }}
      .topics__item-title {{ item.title }}
</template>

<script>
export default {
  data() {
    return {
      topicItems: '',
    }
  },
  async mounted() {
    await this.$jsonp(
      'https://www.sonymusic.co.jp/json/v2/artist/DISH/information/list/start/0/count/2',
      {
        callbackName: 'callback',
      }
    ).then((json) => {
      this.topicItems = json.items.articles
    })
  },
}
</script>

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
  width: 220px;
  margin-bottom: 72px;

  @include mq(md) {
    width: 140px;
    margin-bottom: 44px;
  }
}

a {
  color: white;
  text-decoration: none;
}

.hr {
  border: none;
  border-top: 1px solid #323232;
  margin-bottom: 20px;
}

.topics__date {
  font-family: 'TS';
  margin-bottom: 16px;
}

.topics__item-title {
  margin-bottom: 20px;

  @include mq(md) {
    font-size: 0.8rem;
  }
}
</style>
