import{S as u,i as d}from"./assets/vendor-46aac873.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const p=document.querySelector(".form"),l=document.querySelector(".gallery"),f=document.querySelector(".loader"),m="https://pixabay.com/api/?",y="41564235-b9b3b0b401bd21d391a887255",i={key:y,q:"",image_type:"photo",orientation:"horizontal",safesearch:!0},g=new u(".gallery a",{captionsData:"alt",captionDelay:250,close:!0,enableKeyboard:!0,docClose:!0}),c=s=>{f.style.display=s?"block":"none"};p.addEventListener("submit",s=>{if(s.preventDefault(),c(!0),i.q=encodeURIComponent(s.target.elements.search.value.trim()),i.q===""){console.error("Please enter a valid search query.");return}const r=new URLSearchParams(i);h(r),s.currentTarget.reset()});const h=s=>(c(!0),fetch(m+`${s}`).then(r=>{if(!r.ok)throw new Error("Something went wrong. Please try again later.");return r.json()}).then(({hits:r})=>{l.innerHTML="",r.length===0?d.error({position:"topRight",messageColor:"#FFFFFF",backgroundColor:"#EF4040",titleSize:"8px",closeOnEscape:!0,message:"Sorry, there are no images matching your search query. Please try again!"}):(l.innerHTML="",l.innerHTML=r.reduce((a,o)=>a+`
                    <li class="gallery-item">
                        <a href=${o.largeImageURL}> 
                            <img class="gallery-img" src=${o.webformatURL} alt=${o.tags}/>
                        </a>
                        <div class="gallery-text-box">
                            <p>Likes: <span class="text-value">${o.likes}</span></p>
                            <p>Views: <span class="text-value">${o.views}</span></p>
                            <p>Comments: <span class="text-value">${o.comments}</span></p>
                            <p>Downloads: <span class="text-value">${o.downloads}</span></p>
                        </div>
                    </li>
                `,""),g.refresh())}).catch(r=>{console.error(r.message)}).finally(()=>{c(!1)}));
//# sourceMappingURL=commonHelpers.js.map
