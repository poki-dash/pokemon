import "./style.css";
import { renderLibrary, renderPokemonData, renderRandomPoke } from "./render";
import { fetchRandPoke } from "./fetchfunctions";



const main = async () => {
await  renderLibrary(document.querySelector("#library"))
  

  document.querySelector(".popup").addEventListener("click", () => {
    document.querySelector(".popup").style.display = "none";
    document.querySelector
  }
  )
  renderRandomPoke(document.querySelector('#randomPoke'))
};

main();
