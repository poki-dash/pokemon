(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const l of n)if(l.type==="childList")for(const m of l.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&a(m)}).observe(document,{childList:!0,subtree:!0});function t(n){const l={};return n.integrity&&(l.integrity=n.integrity),n.referrerPolicy&&(l.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?l.credentials="include":n.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(n){if(n.ep)return;n.ep=!0;const l=t(n);fetch(n.href,l)}})();const u=async(s,e={})=>{try{const t=await fetch(s,e);if(!t.ok)throw new Error(`Fetch failed. ${t.status} ${t.statusText}`);return[(t.headers.get("content-type")||"").includes("application/json")?await t.json():await t.text(),null]}catch(t){return console.error(t.message),[null,t]}},I=async()=>{const[s]=await u("https://pokeapi.co/api/v2/pokemon?limit=250&offset=0");let e=s.results;return e=await e.map(async t=>{const[a]=await u(t.url);let n=a.types[0].type.name;return{...t,img:a.sprites.front_default,type:n,...a}}),e=await Promise.all(e),e},b=async s=>{try{return await u(`https://pokeapi.co/api/v2/pokemon/${s}`)}catch(e){throw console.error(e),new Error("unable to fetch pokemon details;")}},M=async s=>{const t=(await u(`https://pokeapi.co/api/v2/pokemon/${s}/`))[0];return{name:t.name,img:t.sprites.front_default,type:t.types[0].type.name}},_=async s=>{const t=(await u(`https://pokeapi.co/api/v2/pokemon/${s.toLowerCase()}`))[0];return t||alert("pokemon not found"),{name:t.name,img:t.sprites.front_default,...t}},i=s=>{switch(s.toLowerCase()){case"normal":return"https://archives.bulbagarden.net/media/upload/3/39/NormalIC_Big.png";case"fighting":return"https://archives.bulbagarden.net/media/upload/6/67/FightingIC_Big.png";case"flying":return"https://archives.bulbagarden.net/media/upload/c/cb/FlyingIC_Big.png";case"poison":return"https://archives.bulbagarden.net/media/upload/3/3d/PoisonIC_Big.png";case"ground":return"https://archives.bulbagarden.net/media/upload/8/8f/GroundIC_Big.png";case"rock":return"https://archives.bulbagarden.net/media/upload/c/ce/RockIC_Big.png";case"bug":return"https://archives.bulbagarden.net/media/upload/c/c8/BugIC_Big.png";case"steel":return"https://archives.bulbagarden.net/media/upload/d/d4/SteelIC_Big.png";case"fire":return"https://archives.bulbagarden.net/media/upload/2/26/FireIC_Big.png";case"water":return"https://archives.bulbagarden.net/media/upload/5/56/WaterIC_Big.png";case"grass":return"https://archives.bulbagarden.net/media/upload/7/74/GrassIC_Big.png";case"electric":return"https://archives.bulbagarden.net/media/upload/4/4a/ElectricIC_Big.png";case"psychic":return"https://archives.bulbagarden.net/media/upload/6/60/PsychicIC_Big.png";case"dark":return"https://archives.bulbagarden.net/media/upload/5/56/DarkIC_Big.png";case"ghost":return"https://archives.bulbagarden.net/media/upload/7/73/GhostIC_Big.png";default:return"https://archives.bulbagarden.net/media/upload/3/3c/UnknownIC_Big.png"}},p=new Audio("./src/music/battleMusic.mp3"),c=new Audio("./src/music/homeMusic.mp3"),y=new Audio("./src/music/victory.mp3");y.volume=.5;p.volume=.3;c.volume=.1;c.loop=!0;document.querySelector("#library").addEventListener("click",()=>{c.play()});document.querySelector("#battle-button").addEventListener("click",s=>{x.dataset.name&&w.dataset.name?(E(),p.play()):alert("please finish selecting pokemon")});let d=!1;const x=document.querySelector(".player-1-sel"),w=document.querySelector(".player-2-sel"),$=setInterval(()=>{x.style.opacity="0",setTimeout(()=>{x.style.opacity="1"},500)},1e3),S=setInterval(()=>{w.style.opacity="0",setTimeout(()=>{w.style.opacity="1"},500)},1e3),B=async(s,e,t)=>{e.classList=" scale-[120%] transition  transition duration-300  z-[10000000000] bg-white flex flex-col bg-white rounded-2xl shadow-lg p-4 items-center",d=!0,e.innerHTML=`
  <div  class="flex flex-col items-center justify-center " id="li-container1">
  <div   class="x-button absolute top-2 left-2  bg-white">
  <svg 
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    style="width: 1.5rem; position: relative; ">
    <path
    stroke-linecap="round"
    stroke-linejoin="round"
    d="M6 18 18 6M6 6l12 12" />
    </svg>
  </div>
    <img src="${t.sprites.front_default}" class="w-[50%]"></img>
    <h2 class="font-semibold">${s[0].toUpperCase()+s.slice(1)}</h2>
    <div class="flex">
    <img src="${i(t.types[0].type.name)}">
  </div>
  <div >
    <div >
    </div>
  </div>
  <div class="text-[13px]" >
    <p ">${t.moves[0].move.name[0].toUpperCase()+t.moves[0].move.name.slice(1)}</p>
    <p >${t.moves[1].move.name[0].toUpperCase()+t.moves[1].move.name.slice(1)}</p>
    <p>${t.moves[2].move.name[0].toUpperCase()+t.moves[2].move.name.slice(1)}</p>
  </div>
  <div>
    <button  id="player-1-select" class="select text-[10px] bg-red-500 p-1 rounded-md text-white">player-1</player-1></button>
    <button id="player-2-select" class="select text-[10px]  bg-red-500 p-1 rounded-md text-white">player-2</button>
  </div>
  </div>
  `,e.addEventListener("click",a=>{a.target.closest(".x-button")&&(e.classList="flex flex-col items-center transition scale-100",e.innerHTML=` 
          <div class="flex flex-col bg-white rounded-2xl shadow-lg p-4 items-center " data-id="poke-${t.name}"> 
            <img src=${t.sprites.front_default}>
            <h2 class="poke-name font-semibold text-lg">${s[0].toUpperCase()+s.slice(1)}</h2>
            <img src=${i(t.types[0].type.name)} 
          </div>
        `,a.stopPropagation(),d=!1)}),document.querySelector("#player-1-select").addEventListener("click",a=>{clearInterval($);const n=new Audio("./src/music/selectSound.mp3");n.volume=.5,n.play();let l=document.querySelector("#player-1");l.dataset.name=t.name,l.dataset.img=t.sprites.front_default,document.querySelector("#player-1").innerHTML=`
    <div class="flex flex-col items-center">
      <img src="${t.sprites.front_default}"></img>
      <h3 style="font-weight:"bold">${t.name[0].toUpperCase()+t.name.slice(1)}</h3>
      <img src=${i(t.types[0].type.name)}  
    </div>
    `,e.classList="flex flex-col items-center transition scale-100",e.innerHTML=` 
          <div class="flex flex-col bg-white rounded-2xl shadow-lg p-4 items-center " data-id="poke-${t.name}"> 
            <img src=${t.sprites.front_default}>
            <h2 class="poke-name font-semibold text-lg">${s[0].toUpperCase()+s.slice(1)}</h2>
            <img src=${i(t.types[0].type.name)} 
          </div>
        `,a.stopPropagation(),d=!1}),document.querySelector("#player-2-select").addEventListener("click",a=>{clearInterval(S);const n=new Audio("./src/music/selectSound.mp3");n.volume=.5,n.play();let l=document.querySelector("#player-2");l.dataset.name=t.name,l.dataset.img=t.sprites.front_default,document.querySelector("#player-2").innerHTML=`
      <div class="flex flex-col  items-center">
        <img src="${t.sprites.front_default}"></img>
        <h3 style="font-weight:"bold">${t.name[0].toUpperCase()+t.name.slice(1)}</h3>
        <img src=${i(t.types[0].type.name)} />
        
      </div>
      `,e.classList="flex flex-col items-center transition scale-100",e.innerHTML=` 
          <div class="flex flex-col bg-white rounded-2xl shadow-lg p-4 items-center " data-id="poke-${t.name}"> 
            <img src=${t.sprites.front_default}>
            <h2 class="poke-name font-semibold text-lg">${s[0].toUpperCase()+s.slice(1)}</h2>
            <img src=${i(t.types[0].type.name)} 
          </div>
        `,a.stopPropagation(),d=!1})},H=async s=>{const e=await I();console.log(e);for(const[t,a]of e.entries()){const{name:n,img:l,type:m}=a,[f]=await b(n),o=document.createElement("li");o.dataset.aos="flip-left",o.style.position="relative",o.dataset.name=n,o.dataset.id=`poke-${t}`,o.classList="flex flex-col items-center  w-[128px] h-[172px]  scale-100 ",o.innerHTML=` 
    <div  id="li-container" class="flex flex-col bg-white rounded-2xl shadow-lg p-4 items-center " data-id="poke-${t}"> 
      <img src=${l}>
      <h2 class="poke-name font-semibold text-lg">${n[0].toUpperCase()+n.slice(1)}</h2>
      <img src=${i(m)} 
    </div>
    `,o.addEventListener("click",()=>{d||B(o.dataset.name,o,f),r}),s.append(o)}},g=async s=>{let e=Math.floor(Math.random()*1e3+1);const t=new Audio("./src/music/selectSound.mp3");t.volume=.5,t.play();const a=await M(e);s.dataset.name=a.name,s.dataset.img=a.img,s.innerHTML=`
  <div class="flex flex-col font-semibold items-center">
    <img src=${a.img}>
    <h3>${a.name[0].toUpperCase()+a.name.slice(1)}</h3>
    <img src="${i(a.type)}"/>
  </div>`};document.querySelector("#random-button1").addEventListener("click",()=>{clearInterval($),c.play(),g(document.querySelector("#player-1"))});document.querySelector("#random-button2").addEventListener("click",()=>{clearInterval(S),c.play(),g(document.querySelector("#player-2"))});const E=()=>{const s=document.querySelector("#battle-scene");c.pause(),p.play();const e=document.querySelector("#player-1").dataset.img,t=document.querySelector("#player-1").dataset.name,a=document.querySelector("#player-2").dataset.img,n=document.querySelector("#player-2").dataset.name;let l=0;const m=()=>{s.style.height="100vh",s.style.display="flex",document.querySelector("#app").style.display="none",console.log(e),s.innerHTML=`
    <div class="flex flex-col items-center ">
      <h3 class="text-xl mb-10 font-semibold">Player-1<h3>
      <img class="w-[10rem]" src="${e}" />
      <h3 class="text-xl font-semibold">${t}</h3>
    </div>
    `,setTimeout(()=>{s.innerHTML=`
    <div class="flex flex-col items-center ">
      <h3 class="text-xl mb-10 font-semibold">Player-2<h3>
      <img class="w-[10rem]" src="${a}" />
      <h3 class="text-xl font-semibold">${n}</h3>
    </div>
    `},5e3);let o=0;setTimeout(()=>{let L=0,q=setInterval(()=>{L===3&&closeInterval(q),L++,s.innerHTML=`
    <div class="flex  items-center gap-96 ">
      <img class="w-[10rem]" src="${e}" />
      <img class="w-[10rem]" src="${a}" />
    </div>
    `,setTimeout(()=>{s.innerHTML=`
        <div class="flex  items-center gap-40 ">
          <img class="w-[10rem]" src="${e}" />
          <img class="w-[10rem]" src="${a}" />
        </div>
        `},1e3),setTimeout(()=>{s.innerHTML=`
        <div class="flex  items-center gap-20 ">
          <img class="w-[10rem]" src="${e}" />
          <img class="w-[10rem]" src="${a}" />
        </div>
        `},2e3),setTimeout(()=>{const k=new Audio("./src/music/hitSound.mp3");k.volume=.5,k.play(),o++,o===3&&(p.pause(),p.currentTime=0),s.innerHTML=`
        <div class="flex  items-center hit ">
          <img class="mr-[-2.5rem] w-[10rem] img1"  src="${e}" />
          <img class="w-[7rem] opacity-50 " src="https://www.freeiconspng.com/uploads/explosion-icon-15.png" />
          <img class="ml-[-2.5rem] img2 w-[10rem]" src="${a}" />
        </div>
        `;let C=setInterval(()=>{o===3&&clearInterval(C),document.querySelector(".hit").style.opacity=0,setTimeout(()=>{document.querySelector(".hit").style.opacity=1},200)},500)},3e3)},5e3);const T=Math.floor(Math.random()*2+1);let h,v;T===1?(h=e,v=t):(h=a,v=n),setTimeout(()=>{y.play(),s.innerHTML=`
        <div class="flex flex-col  items-center hit ">
          <h3 class="font-semibold text-xl">${v} won!</h3>
          <img class="w-[10rem]" src="${h}" />
      </div>
        `,setTimeout(()=>{s.style.height="0vh",s.style.display="none",document.querySelector("#app").style.display="block",y.pause(),y.currentTime=0,c.currentTime=0,c.play()},6e3)},21e3)},5e3)};document.body.style.opacity="0",setTimeout(()=>{document.body.style.opacity="1"},300);const f=setInterval(()=>{if(l===4){clearInterval(f),m(),l++;return}l++,document.body.style.opacity="0",setTimeout(()=>{document.body.style.opacity="1"},300)},600)},N=async(s,e)=>{s.style.display="flex",s.dataset.name=e.name,s.dataset.img=e.img,s.innerHTML=`
  <div class="flex flex-col items-center">
    <div class="flex flex-col items-center">
      <img src=${e.img}>
      <h3 class="font-semibold">${e.name[0].toUpperCase()+e.name.slice(1)}</h3>
      <img src="${i(e.types[0].type.name)}">
    </div>
    <div class="flex  gap-5 mt-10">
      <button class="bg-red-500 p-1 text-white rounded-md hover:scale-105 transition-all ease-in select" id="search-SelectP1">player-1</button>
      <button id="search-SelectP2" class="bg-red-500 p-1 text-white rounded-md hover:scale-105 transition-all select ease-in" >player-2</button>
    </div>
  </div>`,document.querySelector("#search-SelectP1").addEventListener("click",async t=>{clearInterval($),s.style.display="none";const a=new Audio("./src/music/selectSound.mp3");a.volume=.5,a.play();const[n]=await b(e.name);let l=document.querySelector("#player-1");c.play(),l.dataset.name=n.name,l.dataset.img=n.sprites.front_default,document.querySelector("#player-1").innerHTML=`
      <div class="flex flex-col items-center">
        <div class="flex flex-col items-center">
          <img src=${e.img}>
          <h3 class="font-semibold">${e.name[0].toUpperCase()+e.name.slice(1)}</h3>
        <img src="${i(e.types[0].type.name)}">
        </div>
      </div>`}),document.querySelector("#search-SelectP2").addEventListener("click",async t=>{clearInterval(S),c.play(),s.style.display="none";const a=new Audio("./src/music/selectSound.mp3");a.volume=.5,a.play();const[n]=await b(e.name);let l=document.querySelector("#player-2");l.dataset.name=n.name,l.dataset.img=n.sprites.front_default,document.querySelector("#player-2").innerHTML=`
      <div class="flex flex-col items-center">
        <div class="flex flex-col items-center">
          <img src=${e.img}>
          <h3 class="font-semibold">${e.name[0].toUpperCase()+e.name.slice(1)}</h3>
          <img src="${i(e.types[0].type.name)}">
        </div>
      </div>`})},U=s=>{s.innerHTML=`
  <p>Pokemon Not Found</p>`},P=async()=>{document.querySelector("#search").addEventListener("submit",async e=>{e.preventDefault();const a=new FormData(e.target).get("pokeName"),n=await _(a),l=document.querySelector("#render-search");n?await N(l,n):U(l),e.target.reset()}),await H(document.querySelector("#library")),document.querySelector("#player-2").addEventListener("click",e=>{g(document.querySelector("#player-2")),e.target.parentNode.removeChild(e.target)}),document.querySelector("#player-1").addEventListener("click",e=>{g(document.querySelector("#player-1")),e.target.parentNode.removeChild(e.target)})};P();
