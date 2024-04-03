import{a as b,S as w,i as d}from"./assets/vendor-b2578120.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();async function u(e,o){const n="https://pixabay.com/api/",i={key:"43044208-9f5714c3237b37b2f1db9f248",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:15};return(await b.get(n,{params:i})).data}function S(e){return`<li class="image-item">
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
           </li>`}function v(e){return e.map(S).join("")}function f(e){const o=v(e);console.log(o),m.insertAdjacentHTML("beforeend",o)}const M=document.querySelector(".form"),m=document.querySelector(".gallery"),h=document.querySelector(".loader"),l=document.querySelector(".btn-load");let a,s=1,p=0;const P=15,$=new w(".gallery a",{captionsData:"alt",captionDelay:250});function q(){l.classList.remove("is-hidden")}function x(){l.classList.add("is-hidden")}function g(){h.classList.remove("is-hidden")}function y(){h.classList.add("is-hidden")}M.addEventListener("submit",F);l.addEventListener("click",O);async function F(e){if(e.preventDefault(),a=e.target.elements.image.value.trim(),m.innerHTML="",s=1,!a){d.error({title:"Error",position:"topRight",color:"#EF4040",messageColor:"#FAFAFB",maxWidth:"432px",height:"88",message:"Please, fill the form!"});return}try{g();const o=await u(a,s);p=Math.ceil(o.totalHits/P),f(o.hits),$.refresh()}catch{console.log(error)}y(),L(),e.target.reset()}async function O(){s+=1,g();try{const e=await u(a,s);f(e.hits)}catch{console.log(error)}L(),y()}function L(){s>=p?(x(),d.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):q()}
//# sourceMappingURL=commonHelpers.js.map
