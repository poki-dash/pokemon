import { fetchManyPokemon, fetchOnePokemon } from "./fetchfunctions";
let active = false;
export const renderLibrary = async (library) => {
  const data = await fetchManyPokemon();
  console.log(data);
  for (const [i, poke] of data.entries()) {
    const { name, img } = poke;
    const li = document.createElement("li");
    li.style.position = "relative"
    li.dataset.name = name;
    li.dataset.id = `poke-${i}`
    li.innerHTML = ` 
    <div data-id="poke-${i}"> 
    <h2 class="poke-name">${name}</h2>
      
      </div>
      </div>
    <img src=${img}>
    </div>`;
    li.addEventListener("click", () => {
      renderPokemonData(li.dataset.name);
     document.querySelector(".popup").style.display = "block"
   })
    library.append(li);
    
  };
}



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
  </div></div>
  <p style="font-weight: bold;margin-bottom: -.05rem ">Moves:</p>
  <div style="text-align:center; margin-top:-.4rem">
  <p style="margin-bottom:rem" >${data.moves[0].move.name}</p>
  <p style="margin-top:-1.2rem" >${data.moves[1].move.name}</p>
  <p style="margin-top:-1.2rem" >${data.moves[2].move.name}</p>
  </div>

  <button style="border: 2px solid black; padding: .5rem; border-radius:5px">Select</button>
  
  `
  
};
