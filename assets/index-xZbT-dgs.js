(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();const a=async(n,e={})=>{try{const o=await fetch(n,e);if(!o.ok)throw new Error(`Fetch failed. ${o.status} ${o.statusText}`);return[(o.headers.get("content-type")||"").includes("application/json")?await o.json():await o.text(),null]}catch(o){return console.error(o.message),[null,o]}},c=async()=>{const[n]=await a("https://pokeapi.co/api/v2/pokemon?limit=35&offset=0");let e=n.results;return e=await e.map(async o=>{const[i]=await a(o.url);return{...o,img:i.sprites.front_default,...i}}),e=await Promise.all(e),e},l=async n=>{try{const e=await a(`https://pokeapi.co/api/v2/pokemon/${n}`);return console.log(e),e}catch(e){throw console.error(e),new Error("unable to fetch pokemon details;")}},p=async n=>{const e=await c();console.log(e);for(const[o,i]of e.entries()){const{name:t,img:r}=i,s=document.createElement("li");s.style.position="relative",s.dataset.name=t,s.dataset.id=`poke-${o}`,s.innerHTML=` 
    <div data-id="poke-${o}"> 
    <h2 class="poke-name">${t}</h2>
      
      </div>
      </div>
    <img src=${r}>
    </div>`,s.addEventListener("click",()=>{d(s.dataset.name),document.querySelector(".popup").style.display="block"}),n.append(s)}},d=async n=>{const[e]=await l(n);document.querySelector(".popup-content").innerHTML=`
  <h2>${n}</h2>
  <img src="${e.sprites.front_default}" style="width:10vw"></img>
  <div style="display:flex">
  <p style="font-weight:bold; margin-right:5px">type:</p>
  <p>${e.types[0].type.name}</p>
  </div>
  <div style="margin-top:-1rem">
  <div style="display:flex; margin-top:-.5rem">
  </div></div>
  <p style="font-weight: bold;margin-bottom: -.05rem ">Moves:</p>
  <div style="text-align:center; margin-top:-.4rem">
  <p style="margin-bottom:rem" >${e.moves[0].move.name}</p>
  <p style="margin-top:-1.2rem" >${e.moves[1].move.name}</p>
  <p style="margin-top:-1.2rem" >${e.moves[2].move.name}</p>
  </div>

  <button style="border: 2px solid black; padding: .5rem; border-radius:5px">Select</button>
  
  `},m=async()=>{await p(document.querySelector("#library")),document.querySelector(".popup").addEventListener("click",()=>{document.querySelector(".popup").style.display="none"})};m();
