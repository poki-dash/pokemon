import "./style.css";
import {
  renderLibrary,
  renderPokemonData,
  renderRandomPoke,
  renderBattle,
  renderSearchPoke,
  renderFailFetch,
} from "./render";
import { fetchSearchPoke } from "./fetchfunctions";

const main = async () => {

  const form = document.querySelector("#search");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const pokeName = formData.get("pokeName");
    const pokemonData = await fetchSearchPoke(pokeName);
    const renderDiv = document.querySelector("#render-search");
    if (!pokemonData) {
      renderFailFetch(renderDiv);
    } else {
      await renderSearchPoke(renderDiv, pokemonData);
    }
    e.target.reset();
  });
  await renderLibrary(document.querySelector("#library"));

  document.querySelector("#player-2").addEventListener("click", (e) => {
    renderRandomPoke(document.querySelector("#player-2"));
    e.target.parentNode.removeChild(e.target);
  });
  document.querySelector("#player-1").addEventListener("click", (e) => {
    renderRandomPoke(document.querySelector("#player-1"));
    e.target.parentNode.removeChild(e.target);
  });


};

main();
