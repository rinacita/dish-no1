(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{240:function(t,e,n){var content=n(260);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(49).default)("f68f2e08",content,!0,{sourceMap:!1})},242:function(t,e,n){t.exports=n.p+"img/topics.30940d3.svg"},259:function(t,e,n){"use strict";n(240)},260:function(t,e,n){var o=n(48)(!1);o.push([t.i,".wrapper[data-v-74e198bf]{width:100%;padding:120px 32px;background:#000;display:flex;flex-direction:column;align-items:center}@media screen and (max-width:800px){.wrapper[data-v-74e198bf]{padding:80px 32px}}.title[data-v-74e198bf]{width:220px;margin-bottom:72px}@media screen and (max-width:800px){.title[data-v-74e198bf]{width:140px;margin-bottom:44px}}a[data-v-74e198bf]{color:#fff;text-decoration:none}.hr[data-v-74e198bf]{border:none;border-top:1px solid #323232;margin-bottom:20px}.topics__date[data-v-74e198bf]{font-weight:900;margin-bottom:16px}.topics__item-title[data-v-74e198bf]{margin-bottom:20px;font-weight:400}@media screen and (max-width:800px){.topics__item-title[data-v-74e198bf]{font-size:.8rem}}",""]),t.exports=o},263:function(t,e,n){"use strict";n.r(e);var o=n(6),r=(n(50),{data:function(){return{topicItems:""}},mounted:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$jsonp("https://www.sonymusic.co.jp/json/v2/artist/DISH/information/list/start/0/count/2",{callbackName:"callback"}).then((function(e){t.topicItems=e.items.articles}));case 2:case"end":return e.stop()}}),e)})))()}}),c=(n(259),n(37)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"wrapper"},[o("img",{staticClass:"title",attrs:{src:n(242)}}),o("div",{staticClass:"topics__items"},t._l(t.topicItems,(function(e){return o("a",{key:e.id,staticClass:"topics__item",attrs:{href:"https://www.sonymusic.co.jp/artist/DISH/info/"+e.id}},[o("hr",{staticClass:"hr"}),o("div",{staticClass:"topics__date"},[t._v(t._s(e.date))]),o("div",{staticClass:"topics__item-title"},[t._v(t._s(e.title))])])})),0)])}),[],!1,null,"74e198bf",null);e.default=component.exports}}]);