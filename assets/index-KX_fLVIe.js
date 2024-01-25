(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function r(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(o){if(o.ep)return;o.ep=!0;const n=r(o);fetch(o.href,n)}})();const i=async(e,t={})=>{try{const r=await fetch(e,t);if(!r.ok)throw new Error(`Fetch failed. ${r.status} ${r.statusText}`);return[(r.headers.get("content-type")||"").includes("application/json")?await r.json():await r.text(),null]}catch(r){return console.error(r.message),[null,r]}},l=async()=>{const[e]=await i("https://pokeapi.co/api/v2/pokemon?limit=250&offset=0");let t=e.results;return t=await t.map(async r=>{const[a]=await i(r.url);return{...r,img:a.sprites.front_default,...a}}),t=await Promise.all(t),t},d=async e=>{try{const t=await i(`https://pokeapi.co/api/v2/pokemon/${e}`);return console.log(t),t}catch(t){throw console.error(t),new Error("unable to fetch pokemon details;")}},m=async e=>{const r=(await i(`https://pokeapi.co/api/v2/pokemon/${e}/`))[0];return{name:r.name,img:r.sprites.front_default}},p=async e=>{const t=await l();console.log(t);for(const[r,a]of t.entries()){const{name:o,img:n}=a,s=document.createElement("li");s.style.position="relative",s.dataset.name=o,s.dataset.id=`poke-${r}`,s.innerHTML=` 
    <div data-id="poke-${r}"> 
    <h2 class="poke-name">${o}</h2>
      
      </div>
      </div>
    <img src=${n}>
    </div>`,s.addEventListener("click",()=>{u(s.dataset.name),document.querySelector(".popup").style.display="block"}),e.append(s)}},u=async e=>{const[t]=await d(e);document.querySelector(".popup-content").innerHTML=`
  <h2>${e}</h2>
  <img src="${t.sprites.front_default}" style="width:10vw"></img>
  <div style="display:flex">
    <p style="font-weight:bold; margin-right:5px">type:</p>
    <p>${t.types[0].type.name}</p>
  </div>
  <div style="margin-top:-1rem">
    <div style="display:flex; margin-top:-.5rem">
    </div>
  </div>
  <p style="font-weight: bold;margin-bottom: -.05rem ">Moves:</p>
  <div style="text-align:center; margin-top:-.4rem">
    <p style="margin-bottom:rem" >${t.moves[0].move.name}</p>
    <p style="margin-top:-1.2rem" >${t.moves[1].move.name}</p>
    <p style="margin-top:-1.2rem" >${t.moves[2].move.name}</p>
  </div>
  <div style="display:flex; gap:2rem;">
  <button  id="player-1-select" class="select">player-1</player-1></button>
  <button id="player-2-select" class="select">player-2</button>
  </div>
  `,document.querySelector("#player-1-select").addEventListener("click",r=>{document.querySelector("#player-1").innerHTML=`
    <div>
      <h3 style="font-weight:"bold">${t.name}</h3>
      <img src="${t.sprites.front_default}"></img>
      <button type="submit">Get Random Pokemon</button>
    </div>
    `}),document.querySelector("#player-2-select").addEventListener("click",r=>{document.querySelector("#player-2").innerHTML=`
      <div>
        <h3 style="font-weight:"bold">${t.name}</h3>
        <img src="${t.sprites.front_default}"></img>
        <button type="submit">Get Random Pokemon</button>
      </div>
      `})},c=async e=>{let t=Math.floor(Math.random()*1e3+1);const r=await m(t);e.dataset.name=r.name,e.dataset.img=r.img,e.innerHTML=`
  <h3>${r.name}</h3>
  <img src=${r.img}>
  <button type="submit">New Random Poke</button>`,list.append(li),console.log(e.dataset.name)},y=()=>{const e=document.querySelector("#battle-scene");e.style.display="flex";const t=document.querySelector("#player-1").dataset.img,r=document.querySelector("#player-1").dataset.name,a=document.querySelector("#player-2").dataset.img,o=document.querySelector("#player-2").dataset.name;e.innerHTML=`
  <h1>Player 1<h1>
  <h2>${r}</h2>
  <img src="${t}" />
  `,setTimeout(()=>{e.innerHTML=`
  <img src="https://upload.wikimedia.org/wikipedia/commons/7/70/Street_Fighter_VS_logo.png"/>
  `},2e3),setTimeout(()=>{e.innerHTML=`
  <h1>Player 2<h1>
  <h2>${o}</h2>
  <img src="${a}" />
  `},4e3),setTimeout(()=>{e.innerHTML=`
    <img style="width:39.5rem; height:29.5rem" src="https://www.nicepng.com/png/detail/178-1784143_photo-street-fighter-fight-png.png" />
    `},6e3),setTimeout(()=>{e.innerHTML=`
    <h1>And the winner is.......</h1>
    `},8e3),setTimeout(()=>{Math.floor(Math.random()*2+1)===1?e.innerHTML=`
      <h1>Player 1<h1>
      <h2>${r}</h2>
      <img src="${t}" />
      `:e.innerHTML=`
      <h1>Player 2<h1>
      <h2>${o}</h2>
      <img src="${a}" />
      `},13e3),setTimeout(()=>{e.style.display="none"},15e3)},h=async()=>{await p(document.querySelector("#library")),document.querySelector(".popup").addEventListener("click",()=>{document.querySelector(".popup").style.display="none"}),document.querySelector("#player-2").addEventListener("click",e=>{c(document.querySelector("#player-2")),e.target.parentNode.removeChild(e.target)}),document.querySelector("#player-1").addEventListener("click",e=>{c(document.querySelector("#player-1")),e.target.parentNode.removeChild(e.target)}),document.querySelector("#battle-button").addEventListener("click",e=>{y()})};h();
