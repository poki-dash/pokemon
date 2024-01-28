
import {
  fetchManyPokemon,
  fetchOnePokemon,
  fetchRandPoke,
} from "./fetchfunctions";
import { getTypeIcon } from "./utils/getTypeIcon";

const battleMusic = new Audio("./app/src/music/battleMusic.mp3");
const homeMusic = new Audio("./app/src/music/homeMusic.mp3");
const victory = new Audio("./app/src/music/victory.mp3");
victory.volume = 0.5;
battleMusic.volume = 0.3;
homeMusic.volume = 0.1;
homeMusic.loop = true;

document.querySelector("#library").addEventListener("click", () => {
  homeMusic.play();
});
document.querySelector("#battle-button").addEventListener("click", (e) => {
  if (player1.dataset.name && player2.dataset.name) {
    renderBattle();
    battleMusic.play();
  } else {
    alert("please finish selecting pokemon");
  }
});
let popup = false;
const player1 = document.querySelector(".player-1-sel");
const player2 = document.querySelector(".player-2-sel");
const interval1 = setInterval(() => {
  player1.style.opacity = "0";
  setTimeout(() => {
    player1.style.opacity = "1";
  }, 500);
}, 1000);
const interval2 = setInterval(() => {
  player2.style.opacity = "0";
  setTimeout(() => {
    player2.style.opacity = "1";
  }, 500);
}, 1000);

export const renderPokemonData = async (name, div, data) => {
  div.classList =
    " scale-[120%] transition  transition duration-300  z-[10000000000] bg-white flex flex-col bg-white rounded-2xl shadow-lg p-4 items-center";
  popup = true;
  div.innerHTML = `
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
    <img src="${data.sprites["front_default"]}" class="w-[50%]"></img>
    <h2 class="font-semibold">${name[0].toUpperCase() + name.slice(1)}</h2>
    <div class="flex">
    <img src="${getTypeIcon(data.types[0].type.name)}">
  </div>
  <div >
    <div >
    </div>
  </div>
  <div class="text-[13px]" >
    <p ">${
      data.moves[0].move.name[0].toUpperCase() +
      data.moves[0].move.name.slice(1)
    }</p>
    <p >${
      data.moves[1].move.name[0].toUpperCase() +
      data.moves[1].move.name.slice(1)
    }</p>
    <p>${
      data.moves[2].move.name[0].toUpperCase() +
      data.moves[2].move.name.slice(1)
    }</p>
  </div>
  <div>
    <button  id="player-1-select" class="select text-[10px] bg-red-500 p-1 rounded-md text-white">player-1</player-1></button>
    <button id="player-2-select" class="select text-[10px]  bg-red-500 p-1 rounded-md text-white">player-2</button>
  </div>
  </div>
  `;

  

  div.addEventListener("click", (e) => {
    if (e.target.closest(".x-button")) {
      div.classList = "flex flex-col items-center transition scale-100";
      div.innerHTML = ` 
          <div class="flex flex-col bg-white rounded-2xl shadow-lg p-4 items-center " data-id="poke-${
            data.name
          }"> 
            <img src=${data.sprites["front_default"]}>
            <h2 class="poke-name font-semibold text-lg">${
              name[0].toUpperCase() + name.slice(1)
            }</h2>
            <img src=${getTypeIcon(data.types[0].type.name)} 
          </div>
        `;
      e.stopPropagation();
      popup = false;
    }
  });
  document.querySelector("#player-1-select").addEventListener("click", (e) => {
    clearInterval(interval1);
    const selectSound = new Audio("./app/src/music/selectSound.mp3");
    selectSound.volume = 0.5;
    selectSound.play();
    let player1 = document.querySelector("#player-1");
    player1.dataset.name = data.name;
    player1.dataset.img = data.sprites["front_default"];
    document.querySelector("#player-1").innerHTML = `
    <div class="flex flex-col items-center">
      <img src="${data.sprites["front_default"]}"></img>
      <h3 style="font-weight:"bold">${
        data.name[0].toUpperCase() + data.name.slice(1)
      }</h3>
      <img src=${getTypeIcon(data.types[0].type.name)}  
    </div>
    `;
    div.classList = "flex flex-col items-center transition scale-100";
    div.innerHTML = ` 
          <div class="flex flex-col bg-white rounded-2xl shadow-lg p-4 items-center " data-id="poke-${
            data.name
          }"> 
            <img src=${data.sprites["front_default"]}>
            <h2 class="poke-name font-semibold text-lg">${
              name[0].toUpperCase() + name.slice(1)
            }</h2>
            <img src=${getTypeIcon(data.types[0].type.name)} 
          </div>
        `;
    e.stopPropagation();
    popup = false;
  });

  document.querySelector("#player-2-select").addEventListener("click", (e) => {
    clearInterval(interval2);
    const selectSound = new Audio("./app/src/music/selectSound.mp3");
    selectSound.volume = 0.5;
    selectSound.play();
    let player2 = document.querySelector("#player-2");
    player2.dataset.name = data.name;
    player2.dataset.img = data.sprites["front_default"];
    document.querySelector("#player-2").innerHTML = `
      <div class="flex flex-col  items-center">
        <img src="${data.sprites["front_default"]}"></img>
        <h3 style="font-weight:"bold">${
          data.name[0].toUpperCase() + data.name.slice(1)
        }</h3>
        <img src=${getTypeIcon(data.types[0].type.name)} />
        
      </div>
      `;

    div.classList = "flex flex-col items-center transition scale-100";
    div.innerHTML = ` 
          <div class="flex flex-col bg-white rounded-2xl shadow-lg p-4 items-center " data-id="poke-${
            data.name
          }"> 
            <img src=${data.sprites["front_default"]}>
            <h2 class="poke-name font-semibold text-lg">${
              name[0].toUpperCase() + name.slice(1)
            }</h2>
            <img src=${getTypeIcon(data.types[0].type.name)} 
          </div>
        `;
    e.stopPropagation();
    popup = false;
  });
};

export const renderLibrary = async (library) => {
  const data = await fetchManyPokemon();
  console.log(data);
  for (const [i, poke] of data.entries()) {
    const { name, img, type } = poke;
    const [data2] = await fetchOnePokemon(name);
    const li = document.createElement("li");
    li.dataset.aos = "flip-left"
    li.style.position = "relative";
    li.dataset.name = name;
    li.dataset.id = `poke-${i}`;
    li.classList = "flex flex-col items-center  w-[128px] h-[172px]  scale-100 ";
    li.innerHTML = ` 
    <div  id="li-container" class="flex flex-col bg-white rounded-2xl shadow-lg p-4 items-center " data-id="poke-${i}"> 
      <img src=${img}>
      <h2 class="poke-name font-semibold text-lg">${
        name[0].toUpperCase() + name.slice(1)
      }</h2>
      <img src=${getTypeIcon(type)} 
    </div>
    `;

    li.addEventListener("click", () => {
      if (!popup) {
        renderPokemonData(li.dataset.name, li, data2);
      }
      r;
    });
    library.append(li);
  }
};

export const renderRandomPoke = async (div) => {
  let id = Math.floor(Math.random() * 1000 + 1);
  const selectSound = new Audio("./app/src/music/selectSound.mp3");
  selectSound.volume = 0.5;
  selectSound.play();
  const randPoke = await fetchRandPoke(id);
  div.dataset.name = randPoke.name;
  div.dataset.img = randPoke.img;
  div.innerHTML = `
  <div class="flex flex-col font-semibold items-center">
    <img src=${randPoke.img}>
    <h3>${randPoke.name[0].toUpperCase() + randPoke.name.slice(1)}</h3>
    <img src="${getTypeIcon(randPoke.type)}"/>
  </div>`;
};
document.querySelector("#random-button1").addEventListener("click", () => {
  clearInterval(interval1);
  homeMusic.play();
  renderRandomPoke(document.querySelector("#player-1"));
});
document.querySelector("#random-button2").addEventListener("click", () => {
  clearInterval(interval2);
  homeMusic.play();
  renderRandomPoke(document.querySelector("#player-2"));
});

export const renderBattle = () => {
  const battleScene = document.querySelector("#battle-scene");
  homeMusic.pause();
  battleMusic.play();
  const player1Img = document.querySelector("#player-1").dataset.img;

  const player1Name = document.querySelector("#player-1").dataset.name;
  const player2Img = document.querySelector("#player-2").dataset.img;
  const player2Name = document.querySelector("#player-2").dataset.name;
  let count = 0;
  const battle = () => {
    battleScene.style.height = "100vh";
    battleScene.style.display = "flex";
    document.querySelector("#app").style.display = "none";
    console.log(player1Img);
    battleScene.innerHTML = `
    <div class="flex flex-col items-center ">
      <h3 class="text-xl mb-10 font-semibold">Player-1<h3>
      <img class="w-[10rem]" src="${player1Img}" />
      <h3 class="text-xl font-semibold">${player1Name}</h3>
    </div>
    `;
    setTimeout(() => {
      battleScene.innerHTML = `
    <div class="flex flex-col items-center ">
      <h3 class="text-xl mb-10 font-semibold">Player-2<h3>
      <img class="w-[10rem]" src="${player2Img}" />
      <h3 class="text-xl font-semibold">${player2Name}</h3>
    </div>
    `;
    }, 5000);
    let hits = 0;
    setTimeout(() => {
      let intervals = 0;
      let fightInt = setInterval(() => {
        if (intervals === 3) {
          closeInterval(fightInt);
        }
        intervals++;
        battleScene.innerHTML = `
    <div class="flex  items-center gap-96 ">
      <img class="w-[10rem]" src="${player1Img}" />
      <img class="w-[10rem]" src="${player2Img}" />
    </div>
    `;
        setTimeout(() => {
          battleScene.innerHTML = `
        <div class="flex  items-center gap-40 ">
          <img class="w-[10rem]" src="${player1Img}" />
          <img class="w-[10rem]" src="${player2Img}" />
        </div>
        `;
        }, 1000);
        setTimeout(() => {
          battleScene.innerHTML = `
        <div class="flex  items-center gap-20 ">
          <img class="w-[10rem]" src="${player1Img}" />
          <img class="w-[10rem]" src="${player2Img}" />
        </div>
        `;
        }, 2000);
        setTimeout(() => {
          const hit = new Audio("./app/src/music/hitSound.mp3");
          hit.volume = 0.5;
          hit.play();
          hits++;
          if (hits === 3) {
            battleMusic.pause();

            battleMusic.currentTime = 0;
          }
          battleScene.innerHTML = `
        <div class="flex  items-center hit ">
          <img class="mr-[-2.5rem] w-[10rem] img1"  src="${player1Img}" />
          <img class="w-[7rem] opacity-50 " src="https://www.freeiconspng.com/uploads/explosion-icon-15.png" />
          <img class="ml-[-2.5rem] img2 w-[10rem]" src="${player2Img}" />
        </div>
        `;

          let hitting = setInterval(() => {
            if (hits === 3) {
              clearInterval(hitting);
            }
            if (intervals === 3) {
            }

            document.querySelector(".hit").style.opacity = 0;
            setTimeout(() => {
              document.querySelector(".hit").style.opacity = 1;
            }, 200);
          }, 500);
        }, 3000);
      }, 5000);
      const winningNumber = Math.floor(Math.random() * 2 + 1);
      let winner;
      let winnerName;
      if (winningNumber === 1) {
        winner = player1Img;
        winnerName = player1Name;
      } else {
        winner = player2Img;
        winnerName = player2Name;
      }
      setTimeout(() => {
        victory.play();
        battleScene.innerHTML = `
        <div class="flex flex-col  items-center hit ">
          <h3 class="font-semibold text-xl">${winnerName} won!</h3>
          <img class="w-[10rem]" src="${winner}" />
      </div>
        `;
        setTimeout(() => {
          battleScene.style.height = "0vh";
          battleScene.style.display = "none";
          document.querySelector("#app").style.display = "block";
          victory.pause();
          victory.currentTime = 0;
          homeMusic.currentTime = 0;
          homeMusic.play();
        }, 6000);
      }, 21000);
    }, 5000);
  };
  document.body.style.opacity = "0";
  setTimeout(() => {
    document.body.style.opacity = "1";
  }, 300);
  const flash = setInterval(() => {
    if (count === 4) {
      clearInterval(flash);
      battle();
      count++;
      return;
    }
    count++;
    document.body.style.opacity = "0";
    setTimeout(() => {
      document.body.style.opacity = "1";
    }, 300);
  }, 600);
};

export const renderSearchPoke = async (div, searchPoke) => {
  div.style.display = "flex";
  div.dataset.name = searchPoke.name;
  div.dataset.img = searchPoke.img;

  div.innerHTML = `
  <div class="flex flex-col items-center">
    <div class="flex flex-col items-center">
      <img src=${searchPoke.img}>
      <h3 class="font-semibold">${
        searchPoke.name[0].toUpperCase() + searchPoke.name.slice(1)
      }</h3>
      <img src="${getTypeIcon(searchPoke.types[0].type.name)}">
    </div>
    <div class="flex  gap-5 mt-10">
      <button class="bg-red-500 p-1 text-white rounded-md hover:scale-105 transition-all ease-in select" id="search-SelectP1">player-1</button>
      <button id="search-SelectP2" class="bg-red-500 p-1 text-white rounded-md hover:scale-105 transition-all select ease-in" >player-2</button>
    </div>
  </div>`;

  document
    .querySelector("#search-SelectP1")
    .addEventListener("click", async (e) => {
      clearInterval(interval1);
      div.style.display = "none";
      const selectSound = new Audio("./app/src/music/selectSound.mp3");
      selectSound.volume = 0.5;
      selectSound.play();
      const [pokemonData] = await fetchOnePokemon(searchPoke.name);
      let player2 = document.querySelector("#player-1");
      homeMusic.play();
      player2.dataset.name = pokemonData.name;
      player2.dataset.img = pokemonData.sprites["front_default"];
      document.querySelector("#player-1").innerHTML = `
      <div class="flex flex-col items-center">
        <div class="flex flex-col items-center">
          <img src=${searchPoke.img}>
          <h3 class="font-semibold">${
            searchPoke.name[0].toUpperCase() + searchPoke.name.slice(1)
          }</h3>
        <img src="${getTypeIcon(searchPoke.types[0].type.name)}">
        </div>
      </div>`;
    });

  document
    .querySelector("#search-SelectP2")
    .addEventListener("click", async (e) => {
      clearInterval(interval2);
      homeMusic.play();
      div.style.display = "none";
      const selectSound = new Audio("./app/src/music/selectSound.mp3");
      selectSound.volume = 0.5;
      selectSound.play();
      const [pokemonData] = await fetchOnePokemon(searchPoke.name);
      let player2 = document.querySelector("#player-2");
      player2.dataset.name = pokemonData.name;
      player2.dataset.img = pokemonData.sprites["front_default"];
      document.querySelector("#player-2").innerHTML = `
      <div class="flex flex-col items-center">
        <div class="flex flex-col items-center">
          <img src=${searchPoke.img}>
          <h3 class="font-semibold">${
            searchPoke.name[0].toUpperCase() + searchPoke.name.slice(1)
          }</h3>
          <img src="${getTypeIcon(searchPoke.types[0].type.name)}">
        </div>
      </div>`;
    });
};

export const renderFailFetch = (div) => {
  div.innerHTML = `
  <p>Pokemon Not Found</p>`;
};
