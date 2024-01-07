import{S as i,i as u}from"./assets/vendor-46aac873.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const d=document.querySelector(".form"),p=document.querySelector(".gallery"),c=document.querySelector(".loader"),f="41564235-b9b3b0b401bd21d391a887255",n={key:f,q:"",image_type:"photo",orientation:"horizontal",safesearch:!0},m=new i(".gallery a",{captionsData:"alt",captionDelay:250,close:!0,enableKeyboard:!0,docClose:!0});d.addEventListener("submit",s=>{s.preventDefault(),c.style.display="block",n.q=s.target.elements.search.value;const t=new URLSearchParams(n);y(t),s.currentTarget.reset()});const y=s=>fetch(`https://pixabay.com/api/?${s}`).then(t=>{if(!t.ok)throw new Error(t.statusText);return t.json()}).then(({hits:t})=>{t.length>0?(p.innerHTML=t.reduce((a,o)=>a+`
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
    `,""),m.refresh()):u.error({position:"topRight",messageColor:"#FFFFFF",backgroundColor:"#EF4040",titleSize:"8px",closeOnEscape:!0,message:"Sorry, there are no images matching your search query. Please try again!"})}).catch(t=>{console.error(t.message)}).finally(()=>{c.style.display="none"});
//# sourceMappingURL=commonHelpers.js.map
