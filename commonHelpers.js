import{a as w,S,i as d}from"./assets/vendor-b2578120.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function l(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=l(t);fetch(t.href,r)}})();async function m(e,o){const l="https://pixabay.com/api/",s={key:"43044208-9f5714c3237b37b2f1db9f248",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:15};return(await w.get(l,{params:s})).data}function F(e){return`<li class="image-item">
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
           </li>`}function v(e){return e.map(F).join("")}function f(e){const o=v(e);console.log(o),u.insertAdjacentHTML("beforeend",o)}const x=document.querySelector(".form"),u=document.querySelector(".gallery"),p=document.querySelector(".loader"),h=document.querySelector(".btn-load");let a,i=1,g=0;const P=15,q=new S(".gallery a",{captionsData:"alt",captionDelay:250});function M(){h.classList.remove("is-hidden")}function y(){h.classList.add("is-hidden")}function L(){p.classList.remove("is-hidden")}function n(){p.classList.add("is-hidden")}x.addEventListener("submit",$);h.addEventListener("click",R);async function $(e){if(e.preventDefault(),a=e.target.elements.image.value.trim(),u.innerHTML="",i=1,!a){d.error({title:"Error",position:"topRight",color:"#EF4040",messageColor:"#FAFAFB",maxWidth:"432px",height:"88",message:"Please, fill the form!"}),n();return}try{L();const o=await m(a,i);g=Math.ceil(o.totalHits/P),o.hits.length?(f(o.hits),q.refresh(),b()):(d.error({position:"topRight",color:"#EF4040",messageColor:"#FAFAFB",maxWidth:"432px",height:"88",message:"Sorry, there are no images matching your search query. Please try again!"}),y(),n())}catch{console.log(error)}n(),e.target.reset()}async function R(){i+=1,L();try{const e=await m(a,i);f(e.hits)}catch{console.log(error)}A(),b(),n()}function b(){i>=g?(y(),d.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):M()}function A(){const e=u.firstChild.getBoundingClientRect().height;scrollBy({top:e*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
