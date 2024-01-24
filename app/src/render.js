import { fetchManyPokemon, fetchOnePokemon, fetchRandPoke } from "./fetchfunctions";
let active = false;

export const renderLibrary = async (library) => {
  const data = await fetchManyPokemon();
  console.log(data);
  for (const [i, poke] of data.entries()) {
    const { name, img } = poke;
    const li = document.createElement("li");
    li.style.position = "relative"
    li.dataset.id = `poke-${i}`
    li.innerHTML = ` 
    <div data-id="poke-${i}"> 
    <h2 class="poke-name">${name}</h2>
      
      </div>
      </div>
    <img src=${img}>
    </div>`;
    li.addEventListener("click", () => {
     document.querySelector(".popup").style.display = "block"
   })
    library.append(li);
    
  };
}

export const renderPokemonData = async (name, divs) => {
  const data = await fetchOnePokemon(name);
  console.log(data);
  console.log("hi");
};

export const renderRandomPoke = async (list) => {
  let id = Math.floor((Math.random() * 1000) + 1)
  const randPoke = await fetchRandPoke(id)
  const li = document.createElement('li');
  li.innerHTML = `<h3>${randPoke.name}</h3>
  <img src=${randPoke.img}>`
  list.append(li)
}
