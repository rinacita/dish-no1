(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{238:function(t,e,n){var content=n(252);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(49).default)("ea466f28",content,!0,{sourceMap:!1})},250:function(t,e,n){t.exports=n.p+"img/topics.bab888b.svg"},251:function(t,e,n){"use strict";n(238)},252:function(t,e,n){var o=n(48)(!1);o.push([t.i,'.wrapper[data-v-468cbd9f]{width:100%;padding:120px 32px;background:#131314;display:flex;flex-direction:column;align-items:center}@media screen and (max-width:800px){.wrapper[data-v-468cbd9f]{padding:80px 32px}}.title[data-v-468cbd9f]{width:220px;margin-bottom:72px}@media screen and (max-width:800px){.title[data-v-468cbd9f]{width:140px;margin-bottom:44px}}a[data-v-468cbd9f]{color:#fff;text-decoration:none}.hr[data-v-468cbd9f]{border:none;border-top:1px solid #323232;margin-bottom:20px}.topics__date[data-v-468cbd9f]{font-family:"TS";margin-bottom:16px}.topics__item-title[data-v-468cbd9f]{margin-bottom:20px}@media screen and (max-width:800px){.topics__item-title[data-v-468cbd9f]{font-size:.8rem}}',""]),t.exports=o},253:function(t,e,n){"use strict";n.r(e);var o=n(6),c=(n(50),{data:function(){return{topicItems:""}},mounted:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$jsonp("https://www.sonymusic.co.jp/json/v2/artist/DISH/information/list/start/0/count/2",{callbackName:"callback"}).then((function(e){t.topicItems=e.items.articles}));case 2:case"end":return e.stop()}}),e)})))()}}),r=(n(251),n(37)),component=Object(r.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"wrapper"},[o("img",{staticClass:"title",attrs:{src:n(250)}}),o("div",{staticClass:"topics__items"},t._l(t.topicItems,(function(e){return o("a",{key:e.id,staticClass:"topics__item",attrs:{href:"https://www.sonymusic.co.jp/artist/DISH/info/"+e.id}},[o("hr",{staticClass:"hr"}),o("div",{staticClass:"topics__date"},[t._v(t._s(e.date))]),o("div",{staticClass:"topics__item-title"},[t._v(t._s(e.title))])])})),0)])}),[],!1,null,"468cbd9f",null);e.default=component.exports}}]);