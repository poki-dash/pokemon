(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(r){if(r.ep)return;r.ep=!0;const n=t(r);fetch(r.href,n)}})();const i=async(o,e={})=>{try{const t=await fetch(o,e);if(!t.ok)throw new Error(`Fetch failed. ${t.status} ${t.statusText}`);return[(t.headers.get("content-type")||"").includes("application/json")?await t.json():await t.text(),null]}catch(t){return console.error(t.message),[null,t]}},l=async()=>{const[o]=await i("https://pokeapi.co/api/v2/pokemon?limit=250&offset=0");let e=o.results;return e=await e.map(async t=>{const[s]=await i(t.url);return{...t,img:s.sprites.front_default,...s}}),e=await Promise.all(e),e},d=async o=>{try{const e=await i(`https://pokeapi.co/api/v2/pokemon/${o}`);return console.log(e),e}catch(e){throw console.error(e),new Error("unable to fetch pokemon details;")}},p=async o=>{const t=(await i(`https://pokeapi.co/api/v2/pokemon/${o}/`))[0];return{name:t.name,img:t.sprites.front_default}},m=async o=>{const e=await l();console.log(e);for(const[t,s]of e.entries()){const{name:r,img:n}=s,a=document.createElement("li");a.style.position="relative",a.dataset.name=r,a.dataset.id=`poke-${t}`,a.innerHTML=` 
    <div data-id="poke-${t}"> 
    <h2 class="poke-name">${r}</h2>
      
      </div>
      </div>
    <img src=${n}>
    </div>`,a.addEventListener("click",()=>{u(a.dataset.name),document.querySelector(".popup").style.display="block"}),o.append(a)}},u=async o=>{const[e]=await d(o);document.querySelector(".popup-content").innerHTML=`
  <h2>${o}</h2>
  <img src="${e.sprites.front_default}" style="width:10vw"></img>
  <div style="display:flex">
    <p style="font-weight:bold; margin-right:5px">type:</p>
    <p>${e.types[0].type.name}</p>
  </div>
  <div style="margin-top:-1rem">
    <div style="display:flex; margin-top:-.5rem">
    </div>
  </div>
  <p style="font-weight: bold;margin-bottom: -.05rem ">Moves:</p>
  <div style="text-align:center; margin-top:-.4rem">
    <p style="margin-bottom:rem" >${e.moves[0].move.name}</p>
    <p style="margin-top:-1.2rem" >${e.moves[1].move.name}</p>
    <p style="margin-top:-1.2rem" >${e.moves[2].move.name}</p>
  </div>

  <button class="select" style="border: 2px solid black; padding: .5rem; border-radius:5px"; width:"">Select</button>
  `},c=async o=>{let e=Math.floor(Math.random()*1e3+1);const t=await p(e);o.innerHTML=`
  <h3>${t.name}</h3>
  <img src=${t.img}>
  <button type="submit">New Random Poke</button>`,list.append(li)},y=async()=>{await m(document.querySelector("#library")),document.querySelector(".popup").addEventListener("click",()=>{document.querySelector(".popup").style.display="none"}),document.querySelector("#player-2").addEventListener("click",o=>{c(document.querySelector("#player-2")),o.target.parentNode.removeChild(o.target)}),document.querySelector("#player-1").addEventListener("click",o=>{c(document.querySelector("#player-1")),o.target.parentNode.removeChild(o.target)})};y();
