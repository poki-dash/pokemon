(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const c=n=>{console.log("whats up"),n.innerHTML=`
    <div >
        <nav>
            <h1 id="logo">Poke Dash</h1>
        </nav>
        <div class="main">
        <ul id="library"></ul>
        </div>
        </div>
    </div>
     
    `},a=async(n,o={})=>{try{const e=await fetch(n,o);if(!e.ok)throw new Error(`Fetch failed. ${e.status} ${e.statusText}`);return[(e.headers.get("content-type")||"").includes("application/json")?await e.json():await e.text(),null]}catch(e){return console.error(e.message),[null,e]}},l=async()=>{const[n]=await a("https://pokeapi.co/api/v2/pokemon?limit=35&offset=0");let o=n.results;return o=await o.map(async e=>{const[s]=await a(e.url);return{...e,img:s.sprites.front_default,...s}}),o=await Promise.all(o),o},d=async n=>{const o=await l();console.log(o);for(const e of o){const{name:s,img:t}=e,r=document.createElement("li");r.innerHTML=`  <h2  data-name=${s} class="poke-name">${s}</h2>
      <div id="more-info"></div>
    <img src=${t}>`,n.append(r)}},u=async n=>{const o=document.querySelector("#more-info"),[e]=await a(`https://pokeapi.co/api/v2/pokemon/${n}`);console.log(e),o.innerHTML=`
    <div></div>
    `};document.querySelector("#app").innerHTML=`
 
`;const p=async()=>{c(app),d(document.querySelector("#library")),u("pikachu"),document.querySelector().addEventListener(click)};p();
