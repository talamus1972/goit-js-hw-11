import"./assets/vendor-491d46cf.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();document.querySelector(".gallery");fetch("https://pixabay.com/api/?key=41564235-b9b3b0b401bd21d391a887255").then(o=>o.json()).then(o=>{console.log(o),o.reduce((r,l)=>r+`
// <li class="gallery-item">

<img class="gallery-image"
src = '${l.pageURL}' 
alt = '${l.tags}'/>

// </li>
`,"")}).catch(o=>{console.log(o)});
//# sourceMappingURL=commonHelpers.js.map
