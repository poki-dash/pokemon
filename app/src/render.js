import { fetchManyPokemon, fetchOnePokemon } from "./fetchfunctions";
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
      <div style="display:none" class="popup" id="poke-${i}">
      <svg id="x-${i}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 2rem; position: relative;">
      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
      </svg>
      <div>
      </div>
      </div>
    <img src=${img}>
    </div>`;
   
    library.append(li);
    document.querySelector(`#x-${i}`).addEventListener("click", (e) => {
      e.stopPropagation();
      document.querySelector(`#${li.dataset.id}`).style.display = "none"
    })
    li.addEventListener("click", (e) => {
      // Toggle the display of the popup
      const detailDiv = document.querySelector(`#poke-${i}`);
      detailDiv.style.display = detailDiv.style.display === "none" ? "block" : "none";
    })
  };
}

export const renderDefaultLayout = (div) => {
  div.innerHTML = `
    <div style="z-index: "0">
        <nav>
            <h1 id="logo">Poke Dash</h1>
        </nav>
        <div class="main">
        <ul id="library"></ul>
        </div>
        </div>
    </div>
     
    `;
};

export const renderPokemonData = async (name, divs) => {
  const data = await fetchOnePokemon(name);
  console.log(data);
  console.log("hi");
};
