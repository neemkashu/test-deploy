(()=>{"use strict";var e={373:(e,n,t)=>{t.r(n)},458:function(e,n){var t=this&&this.__awaiter||function(e,n,t,o){return new(t||(t=Promise))((function(r,i){function a(e){try{s(o.next(e))}catch(e){i(e)}}function c(e){try{s(o.throw(e))}catch(e){i(e)}}function s(e){var n;e.done?r(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,c)}s((o=o.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.initRouting=void 0;const o={404:'<p class="error-caption">The page does not exist</p>',"/":'<div class="store__filters">Container with the store</div>\n    <div class="store__goods">Goods are here</div>\n    <input\n        class="store__range"\n        type="range"\n        name="price"\n        min="0"\n        max="100"\n        >',cart:'<div class="cart">Here is the cart</div>'};function r(e,n){var t;const o=document.querySelector(n);if(!o)throw new Error(`No parent node with class ${n}`);{o.innerHTML=e;const n=o.querySelector(".store__range");n instanceof HTMLInputElement&&(n.value=null!==(t=new URLSearchParams(window.location.search).get("price"))&&void 0!==t?t:"50",n.addEventListener("change",(()=>{console.log("new price filter value"),function(){const e=new URL(window.location.href);e.search=function(){const e=new URLSearchParams,n=document.querySelector(".store__range");return n instanceof HTMLInputElement&&e.set("price",n.value),e}().toString();const n=document.querySelector(".store__range");let t=null;n instanceof HTMLInputElement&&(t=n.value),history.pushState({price:t},"",e.toString())}()})))}}const i=()=>t(void 0,void 0,void 0,(function*(){const e=document.location.hash.toLowerCase().split("/")[1];r(o[e||"/"]||o[404],"main")}));n.initRouting=function(){window.addEventListener("load",i),window.addEventListener("popstate",i)}}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={exports:{}};return e[o].call(i.exports,i,i.exports,t),i.exports}t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{t(373);const e=t(458);console.log("line"),(0,e.initRouting)()})()})();