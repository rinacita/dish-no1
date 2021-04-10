<template lang="pug">
.wrapper
  .title 店頭購入者特典
  .desc 初回生産限定盤 (SRCL-11757～11758 )、通常盤(SRCL-11759)、期間生産限定盤(SRCL-11760～11761) を下記CDショップチェーンにてご購入いただいた方に、1枚お買い上げにつき1枚、先着で下記オリジナル特典を差し上げます。(予約者優先)
  .benefits
    .benefit(v-for="benefit in benefitData" :key="benefit.id")
      .benefit__title {{ benefit.title }}
      .benefit__goods 
        .good(v-for="good in benefit.goods" :key="good.id")
          .good__image  
          .good__title {{ good.title }}
          a.good__button(:href="good.link")

</template>

<script>
import benefitData from '~/assets/data/benefit.json'

export default {
  data: () => {
    return {
      benefitData,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/variables.scss';

.wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 32px;
}

.title {
  font-size: 1.75rem;
  font-weight: 700;
}

.desc {
  margin-top: 32px;
  max-width: 560px;
  font-size: 1rem;
  line-height: 1.4rem;
}

.benefit {
  background: #222;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 64px;

  &__title {
    font-size: 1.4rem;
    font-weight: 700;
  }

  &__goods {
    display: flex;
  }
}

.good {
  background: #444;
  min-width: 300px;
  min-height: 300px;

  &__image {
    background: #666;
    width: 200px;
    height: 200px;
  }
}
</style>
