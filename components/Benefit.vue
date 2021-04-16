<template lang="pug">
.wrapper
  .title 店頭購入者特典
  .desc 初回生産限定盤 (SRCL-11757～11758 )、通常盤(SRCL-11759)、期間生産限定盤(SRCL-11760～11761) を下記CDショップチェーンにてご購入いただいた方に、1枚お買い上げにつき1枚、先着で下記オリジナル特典を差し上げます。(予約者優先)
  .shops
    .shop
      .shop__title ■TOWER RECORDS全店（オンライン含む／一部店舗除く）
      .shop__desc ステッカー(TOWER RECORDS ver.)
    .shop
      .shop__title ■HMV全店（HMV&amp;OOKS online含む／一部店舗除く）
      .shop__desc ステッカー(HMV ver.)
    .shop
      .shop__title ■TSUTAYA RECORDS（一部店舗除く）/ TSUTAYAオンラインショッピング
      .shop__desc ステッカー(TSUTAYA RECORDS ver.)
    .shop
      .shop__title ■全国アニメイト（通販含む）
      .shop__desc クリアファイル(期間生産限定盤絵柄)<br>※全国アニメイト（通販含む）では、期間生産限定盤(SRCL-11760〜11761)のみ特典対象となりますのでご注意ください。
    .shop
      .shop__title ■Amazon.co.jp(ECサイト)
      .shop__desc メガジャケ<br>※商品名に、【Amazon.co.jp限定特典】の記載があるページからの購入のみが対象となりますので、お気をつけ下さい。
    .shop
      .shop__title ■楽天ブックス(ECサイト)
      .shop__desc クリアファイル(初回生産限定盤絵柄)
    .shop 
      .shop__title ■応援店特典
      .shop__desc ステッカー(通常盤絵柄)<br>対象店舗一覧<br><a href="https://www.sonymusic.co.jp/Music/Info/DISH/shoplist/210519/">https://www.sonymusic.co.jp/Music/Info/DISH/shoplist/210519/</a>
    .shop
      .shop__title ＜注意事項＞
      .shop__desc ※上記は全て予定事項につき、予告なく変更になる可能性がございます。あらかじめご了承ください。<br>※全て数量限定・予約優先での先着順配布となります。<br>※特典は数に限りがありますので、無くなり次第終了となります。予めご了承ください。<br>※対象店舗は一部を除きます。詳しくは各店舗までお問い合わせください。<br>※対象店舗以外での配布はございません。予めご了承ください。
  //- .benefits
  //-   .benefit(v-for="benefit in benefitData" :key="benefit.id")
  //-     .benefit__title {{ benefit.title }}
  //-     .benefit__goods 
  //-       .good(v-for="good in benefit.goods" :key="good.id")
  //-         .good__image  
  //-         .good__title {{ good.title }}
  //-         a.good__button(:href="good.link")

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

  @include mq(md) {
    font-size: 0.8rem;
    font-weight: 400;
  }
}

.shops {
  max-width: 560px;
  margin-top: 64px;
  // background: red;
  width: 100%;

  @include mq(md) {
    max-width: none;
  }
}

.shop {
  &__title {
    font-size: 1rem;
    line-height: 1.4rem;
    font-weight: 700;
  }

  &__desc {
    margin-top: 8px;
    font-size: 0.9rem;
    line-height: 1.4rem;
    font-weight: 400;
    margin-bottom: 40px;
  }

  &:last-of-type {
    margin-top: 64px;
  }

  a {
    display: block;
  }

  word-wrap: break-word;
}

.benefit {
  // background: #222;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 64px;

  &__title {
    font-size: 1.4rem;
    font-weight: 700;

    margin-bottom: 32px;
  }

  &__goods {
    display: flex;

    flex-direction: column;
  }
}

.good {
  // background: #444;
  // min-width: 300px;
  // min-height: 300px;

  &__image {
    // background: #666;
    // width: 200px;
    // height: 200px;
    display: none;
  }

  &__title {
    font-weight: 400;
  }

  padding: 8px;
}
</style>
