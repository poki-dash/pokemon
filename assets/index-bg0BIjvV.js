(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function t(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(o){if(o.ep)return;o.ep=!0;const n=t(o);fetch(o.href,n)}})();const i=async(r,e={})=>{try{const t=await fetch(r,e);if(!t.ok)throw new Error(`Fetch failed. ${t.status} ${t.statusText}`);return[(t.headers.get("content-type")||"").includes("application/json")?await t.json():await t.text(),null]}catch(t){return console.error(t.message),[null,t]}},c=async()=>{const[r]=await i("https://pokeapi.co/api/v2/pokemon?limit=35&offset=0");let e=r.results;return e=await e.map(async t=>{const[s]=await i(t.url);return{...t,img:s.sprites.front_default,...s}}),e=await Promise.all(e),e},l=async r=>{try{const e=await i(`https://pokeapi.co/api/v2/pokemon/${r}`);return console.log(e),e}catch(e){throw console.error(e),new Error("unable to fetch pokemon details;")}},d=async r=>{const t=(await i(`https://pokeapi.co/api/v2/pokemon/${r}/`))[0];return{name:t.name,img:t.sprites.front_default}},p=async r=>{const e=await c();console.log(e);for(const[t,s]of e.entries()){const{name:o,img:n}=s,a=document.createElement("li");a.style.position="relative",a.dataset.name=o,a.dataset.id=`poke-${t}`,a.innerHTML=` 
    <div data-id="poke-${t}"> 
    <h2 class="poke-name">${o}</h2>
      
      </div>
      </div>
    <img src=${n}>
    </div>`,a.addEventListener("click",()=>{m(a.dataset.name),document.querySelector(".popup").style.display="block"}),r.append(a)}},m=async r=>{const[e]=await l(r);document.querySelector(".popup-content").innerHTML=`
  <h2>${r}</h2>
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
  `},u=async r=>{let e=Math.floor(Math.random()*1e3+1);const t=await d(e),s=document.createElement("li");s.innerHTML=`<h3>${t.name}</h3>
  <img src=${t.img}>`,r.append(s)},y=async()=>{await p(document.querySelector("#library")),document.querySelector(".popup").addEventListener("click",()=>{document.querySelector(".popup").style.display="none"}),u(document.querySelector("#randomPoke"))};y();
