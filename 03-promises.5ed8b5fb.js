var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},i={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in o)return o[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,o){i[e]=o},e.parcelRequired7c6=t);var n=t("iQIUW");const l=document.querySelector(".form");l.addEventListener("submit",(function(e){e.preventDefault();const o=l.elements[2].value,i=l.elements[1].value,t=l.elements[0].value;for(let e=1;e<=o;e+=1)1===e&&r(e,t).then((({position:e,delay:o})=>{n.Notify.success(`✅ Fulfilled promise ${e} in ${o}ms`)})).catch((({position:e,delay:o})=>{n.Notify.failure(`❌ Rejected promise ${e} in ${o}ms`)})),setTimeout((()=>{r(e,Number(t)+Number(i)*e).then((({position:e,delay:o})=>{n.Notify.success(`✅ Fulfilled promise ${e} in ${o}ms`)})).catch((({position:e,delay:o})=>{n.Notify.failure(`❌ Rejected promise ${e} in ${o}ms`)}))}),i*e);function r(e,o){return new Promise(((i,t)=>{const n=Math.random()>.3;setTimeout((()=>{n?i({position:e,delay:o}):t({position:e,delay:o}),console.log(o)}),o)}))}}));
//# sourceMappingURL=03-promises.5ed8b5fb.js.map