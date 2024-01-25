import "./style.css";
import {
  renderLibrary,
  renderPokemonData,
  renderRandomPoke,
  renderBattle,
} from "./render";
import { fetchRandPoke } from "./fetchfunctions";

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
  

  
}

main();
