import{a as n,S as l}from"./assets/vendor-13059e07.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();async function c(e,o){const s="https://pixabay.com/api/",i={key:"43044208-9f5714c3237b37b2f1db9f248",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:15};return(await n.get(s,{params:i})).data}function u(e){return`<li class="image-item">
           <a class="image-link" href="${e.largeImageURL}">
             <img
               class="image-photo"
               width="360"
               height="152"
               src="${e.webformatURL}"
               data-source="${e.largeImageURL}"
               alt="${e.tags}"
             />
             </a>
             <ul class="image-description">
             <li><h3>Likes</h3><p>${e.likes}</p>
             </li>
             <li><h3>Views</h3><p>${e.views}</p>
               </li>
               <li><h3>Comments</h3><p>${e.comments}</p>
                 </li>
                 <li><h3>Downloads</h3><p>${e.downloads}</p>
                   </li>
             </ul>
           </li>`}function p(e){return e.map(u).join("")}function m(e){const o=p(e);console.log(o),f.insertAdjacentHTML("beforeend",o)}const d=document.querySelector(".form"),f=document.querySelector(".gallery");document.querySelector(".loader");new l(".gallery a",{captionsData:"alt",captionDelay:250});d.addEventListener("submit",async e=>{e.preventDefault();const o=e.target.elements.image.value.trim(),s=await c(o,1);m(s.hits)});
//# sourceMappingURL=commonHelpers.js.map
