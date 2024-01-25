import "./style.css";
import {
  renderLibrary,
  renderPokemonData,
  renderRandomPoke,
  renderBattle,
  renderSearchPoke,
  renderFailFetch
} from "./render";
import { fetchOnePokemon, fetchSearchPoke } from "./fetchFunctions.js";


const main = async () => {
  await renderLibrary(document.querySelector("#library"));

  document.querySelector(".popup").addEventListener("click", () => {
    document.querySelector(".popup").style.display = "none";
    document.querySelector;
  });
  document.querySelector("#player-2").addEventListener("click", (e) => {
    renderRandomPoke(document.querySelector("#player-2"));
    e.target.parentNode.removeChild(e.target);
  });
  document.querySelector("#player-1").addEventListener("click", (e) => {
    renderRandomPoke(document.querySelector("#player-1"));
    e.target.parentNode.removeChild(e.target);
  });

  document.querySelector("#battle-button").addEventListener("click", (e) => {
      renderBattle();
  });
  
  const form = document.querySelector('#search');
  form.addEventListener('submit', async(e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const pokeName = formData.get('pokeName');
    const pokemonData = await fetchSearchPoke(pokeName);
    const renderDiv = document.querySelector('#render-search')
    if(!pokemonData){
      renderFailFetch(renderDiv)
    } else {
      await renderSearchPoke(renderDiv, pokemonData);
    }
    e.target.reset();
  })
}

main();
