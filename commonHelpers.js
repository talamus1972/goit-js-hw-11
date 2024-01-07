import{S as c}from"./assets/vendor-b41a7778.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const i=document.querySelector(".form"),u=document.querySelector(".gallery"),p="https://pixabay.com/api/",d="41564235-b9b3b0b401bd21d391a887255",n=new URL(p);n.searchParams.append("key",d);n.searchParams.append("image_type","foto");n.searchParams.append("orientation","horizontal");n.searchParams.append("safesearch","true");const f=new c(".gallery a",{captionsData:"alt",captionDelay:250});i.addEventListener("submit",s=>{s.preventDefault();const t=s.target.elements.search.value;h(t),s.currentTarget.reset()});const m=s=>fetch(n+s).then(t=>{if(!t.ok)throw new Error("Somthing wrong");return t.json()}),g=({hits:s})=>{u.innerHTML=s.reduce((t,o)=>t+`
        <li class="gallery-item">
         <a href=${o.largeImageURL}> 
          <img class="gallery-img" src =${o.webformatURL} alt=${o.tags}/>
        </a>
        <div class="gallery-text-box">
          <p>Likes: <span class="text-value">${o.likes}</span></p>
          <p>views: <span class="text-value">${o.views}</span></p>
          <p>comments: <span class="text-value">${o.comments}</span></p>
          <p>downloads: <span class="text-value">${o.downloads}</span></p>
      </div>
       </li>
    `,""),f.refresh()};function h(s){m(s).then(t=>{g(t)}).catch(t=>console.log(t))}
//# sourceMappingURL=commonHelpers.js.map
