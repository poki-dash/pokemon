import "./style.css";
import { renderLibrary, renderPokemonData, renderRandomPoke } from "./render";
import { fetchRandPoke } from "./fetchfunctions";



const main = async () => {
await  renderLibrary(document.querySelector("#library"))
  renderPokemonData("pikachu", document.querySelectorAll(".more-info"));

  document.querySelector(".popup").addEventListener("click",() => {
    document.querySelector(".popup").style.display = "none"
  }
  )
  renderRandomPoke(document.querySelector('#randomPoke'))
};

main();
