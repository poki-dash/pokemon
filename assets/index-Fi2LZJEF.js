(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function r(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(o){if(o.ep)return;o.ep=!0;const n=r(o);fetch(o.href,n)}})();const i=async(t,e={})=>{try{const r=await fetch(t,e);if(!r.ok)throw new Error(`Fetch failed. ${r.status} ${r.statusText}`);return[(r.headers.get("content-type")||"").includes("application/json")?await r.json():await r.text(),null]}catch(r){return console.error(r.message),[null,r]}},m=async()=>{const[t]=await i("https://pokeapi.co/api/v2/pokemon?limit=250&offset=0");let e=t.results;return e=await e.map(async r=>{const[a]=await i(r.url);return{...r,img:a.sprites.front_default,...a}}),e=await Promise.all(e),e},d=async t=>{try{const e=await i(`https://pokeapi.co/api/v2/pokemon/${t}`);return console.log(e),e}catch(e){throw console.error(e),new Error("unable to fetch pokemon details;")}},p=async t=>{const r=(await i(`https://pokeapi.co/api/v2/pokemon/${t}/`))[0];return{name:r.name,img:r.sprites.front_default}},u=async t=>{const e=await m();console.log(e);for(const[r,a]of e.entries()){const{name:o,img:n}=a,s=document.createElement("li");s.style.position="relative",s.dataset.name=o,s.dataset.id=`poke-${r}`,s.innerHTML=` 
    <div data-id="poke-${r}"> 
    <h2 class="poke-name">${o}</h2>
      
      </div>
      </div>
    <img src=${n}>
    </div>`,s.addEventListener("click",()=>{y(s.dataset.name),document.querySelector(".popup").style.display="block"}),t.append(s)}},y=async t=>{const[e]=await d(t);document.querySelector(".popup-content").innerHTML=`
  <h2>${t}</h2>
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
  <div style="display:flex; gap:2rem;">
  <button  id="player-1-select" class="select">player-1</player-1></button>
  <button id="player-2-select" class="select">player-2</button>
  </div>
  `,document.querySelector("#player-1-select").addEventListener("click",r=>{let a=document.querySelector("#player-1");a.dataset.name=e.name,a.dataset.img=e.sprites.front_default,document.querySelector("#player-1").innerHTML=`
   
      <h3 style="font-weight:"bold">${e.name}</h3>
      <img src="${e.sprites.front_default}"></img>
      <button type="submit">Get Random Pokemon</button>
    
    `}),document.querySelector("#player-2-select").addEventListener("click",r=>{let a=document.querySelector("#player-2");a.dataset.name=e.name,a.dataset.img=e.sprites.front_default,document.querySelector("#player-2").innerHTML=`
      
        <h3 style="font-weight:"bold">${e.name}</h3>
        <img src="${e.sprites.front_default}"></img>
        <button type="submit">Get Random Pokemon</button>
     
      `})},l=async t=>{let e=Math.floor(Math.random()*1e3+1);const r=await p(e);t.dataset.name=r.name,t.dataset.img=r.img,t.innerHTML=`
  <h3>${r.name}</h3>
  <img src=${r.img}>
  <button type="submit">New Random Poke</button>`,list.append(li),console.log(t.dataset.name)},h=()=>{const t=document.querySelector("#battle-scene");t.style.display="flex";const e=document.querySelector("#player-1").dataset.img,r=document.querySelector("#player-1").dataset.name,a=document.querySelector("#player-2").dataset.img,o=document.querySelector("#player-2").dataset.name,n=new Audio("./src/battleMusic.mp3");n.loop=!0,n.play(),t.innerHTML=`
  <h1 style="margin-bottom:-3rem">Player 1<h1>
  <h2>${r}</h2>
  <img src="${e}" />
  `,setTimeout(()=>{t.innerHTML=`
  <img src="https://upload.wikimedia.org/wikipedia/commons/7/70/Street_Fighter_VS_logo.png"/>
  `},3e3),setTimeout(()=>{t.innerHTML=`
  <h1 style="margin-bottom:-3rem">Player 2<h1>
  <h2>${o}</h2>
  <img src="${a}" />
  `},6e3),setTimeout(()=>{t.innerHTML=`
    <img style="width:39.5rem; height:29.5rem" src="https://www.nicepng.com/png/detail/178-1784143_photo-street-fighter-fight-png.png" />
    `},9e3),setTimeout(()=>{t.innerHTML=`
    <h1>And the winner is.......</h1>
    `},12e3),setTimeout(()=>{Math.floor(Math.random()*2+1)===1?(t.innerHTML=`
      <h1>Player 1<h1>
      <h2>${r}</h2>
      <img src="${e}" />
      `,n.pause(),new Audio("./src/yay.mp3").play()):(t.innerHTML=`
      <h1>Player 2<h1>
      <h2>${o}</h2>
      <img src="${a}" />
      `,new Audio("./src/yay.mp3").play())},15e3),setTimeout(()=>{t.style.display="none",n.pause()},18e3)},g=async()=>{await u(document.querySelector("#library")),document.querySelector(".popup").addEventListener("click",()=>{document.querySelector(".popup").style.display="none"}),document.querySelector("#player-2").addEventListener("click",t=>{l(document.querySelector("#player-2")),t.target.parentNode.removeChild(t.target)}),document.querySelector("#player-1").addEventListener("click",t=>{l(document.querySelector("#player-1")),t.target.parentNode.removeChild(t.target)}),document.querySelector("#battle-button").addEventListener("click",t=>{h()})};g();
