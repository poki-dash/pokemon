import {
  fetchManyPokemon,
  fetchOnePokemon,
  fetchRandPoke,
} from "./fetchfunctions";
let active = false;

export const renderLibrary = async (library) => {
  const data = await fetchManyPokemon();
  console.log(data);
  for (const [i, poke] of data.entries()) {
    const { name, img } = poke;
    const li = document.createElement("li");
    li.style.position = "relative";
    li.dataset.name = name;
    li.dataset.id = `poke-${i}`;
    li.innerHTML = ` 
    <div data-id="poke-${i}"> 
    <h2 class="poke-name">${name}</h2>
      
      </div>
      </div>
    <img src=${img}>
    </div>`;
    li.addEventListener("click", () => {
      renderPokemonData(li.dataset.name);
      document.querySelector(".popup").style.display = "block";
    });
    library.append(li);
  }
};

export const renderPokemonData = async (name) => {
  const [data] = await fetchOnePokemon(name);

  document.querySelector(".popup-content").innerHTML = `
  <h2>${name}</h2>
  <img src="${data.sprites["front_default"]}" style="width:10vw"></img>
  <div style="display:flex">
    <p style="font-weight:bold; margin-right:5px">type:</p>
    <p>${data.types[0].type.name}</p>
  </div>
  <div style="margin-top:-1rem">
    <div style="display:flex; margin-top:-.5rem">
    </div>
  </div>
  <p style="font-weight: bold;margin-bottom: -.05rem ">Moves:</p>
  <div style="text-align:center; margin-top:-.4rem">
    <p style="margin-bottom:rem" >${data.moves[0].move.name}</p>
    <p style="margin-top:-1.2rem" >${data.moves[1].move.name}</p>
    <p style="margin-top:-1.2rem" >${data.moves[2].move.name}</p>
  </div>
  <div style="display:flex; gap:2rem;">
  <button  id="player-1-select" class="select">player-1</player-1></button>
  <button id="player-2-select" class="select">player-2</button>
  </div>
  `;

  document.querySelector("#player-1-select").addEventListener("click", (e) => {
    
    let div = document.querySelector("#player-1");
    div.dataset.name = data.name;
    div.dataset.img = data.sprites["front_default"];
    document.querySelector("#player-1").innerHTML = `
   
      <h3 style="font-weight:"bold">${data.name}</h3>
      <img src="${data.sprites["front_default"]}"></img>
      <button type="submit">Get Random Pokemon</button>
    
    `;
  });

  document.querySelector("#player-2-select").addEventListener("click", (e) => {
    
    let div = document.querySelector("#player-2");
    div.dataset.name = data.name;
    div.dataset.img = data.sprites["front_default"];
    document.querySelector("#player-2").innerHTML = `

        <h3 style="font-weight:"bold">${data.name}</h3>
        <img src="${data.sprites["front_default"]}"></img>
        <button type="submit">Get Random Pokemon</button>
     
      `;
  });
};

export const renderRandomPoke = async (div) => {
  let id = Math.floor(Math.random() * 1000 + 1);
  const randPoke = await fetchRandPoke(id);
  div.dataset.name = randPoke.name;
  div.dataset.img = randPoke.img;
  div.innerHTML = `
  <h3>${randPoke.name}</h3>
  <img src=${randPoke.img}>
  <button type="submit">New Random Poke</button>`;
  list.append(li);
  console.log(div.dataset.name);
};

export const renderBattle = () => {
  const battleScene = document.querySelector("#battle-scene");
  battleScene.style.display = "flex";
  const player1Img = document.querySelector("#player-1").dataset.img;
  const player1Name = document.querySelector("#player-1").dataset.name;
  const player2Img = document.querySelector("#player-2").dataset.img;
  const player2Name = document.querySelector("#player-2").dataset.name;
  const music = new Audio("./src/battleMusic.mp3");
  music.loop = true;
  music.play();
  document.querySelector(".besides-battle").style.display = "none";
  


  battleScene.innerHTML = `
  <h1 style="margin-bottom:-3rem">Player 1<h1>
  <h2>${player1Name}</h2>
  <img src="${player1Img}" />
  `;

  setTimeout(() => {
    battleScene.innerHTML = `
  <img src="https://upload.wikimedia.org/wikipedia/commons/7/70/Street_Fighter_VS_logo.png"/>
  `;
  }, 3000);

  setTimeout(() => {
    battleScene.innerHTML = `
  <h1 style="margin-bottom:-3rem">Player 2<h1>
  <h2>${player2Name}</h2>
  <img src="${player2Img}" />
  `;
  }, 6000);

  setTimeout(() => {
    battleScene.innerHTML = `
    <img style="width:60rem; height:30rem" src="https://www.nicepng.com/png/detail/178-1784143_photo-street-fighter-fight-png.png" />
    `;
  }, 9000);

  setTimeout(() => {
    battleScene.innerHTML = `
    <h1>And the winner is.......</h1>
    `;
  }, 12000);

  setTimeout(() => {
    let winner = Math.floor(Math.random() * 2 + 1);
    if (winner === 1) {
      battleScene.innerHTML = `
      <h1>Player 1<h1>
      <h2>${player1Name}</h2>
      <img src="${player1Img}" />
      `;
      music.pause();
      const yay = new Audio("./src/yay.mp3");
      yay.play();
    } else {
      battleScene.innerHTML = `
      <h1>Player 2<h1>
      <h2>${player2Name}</h2>
      <img src="${player2Img}" />
      `;
      const yay = new Audio("./src/yay.mp3");
      yay.play();
    }
  }, 15000);

  setTimeout(() => {
    battleScene.style.display = "none";
    music.pause();
    document.querySelector(".besides-battle").style.display = "flex";
  }, 18000);
};
