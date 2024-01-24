import "./style.css";
import { renderLibrary, renderPokemonData } from "./render";



const main = async () => {
await  renderLibrary(document.querySelector("#library"))
  renderPokemonData("pikachu", document.querySelectorAll(".more-info"));

  document.querySelector(".popup").addEventListener("click",() => {
    document.querySelector(".popup").style.display = "none"
  }
  )
};

main();
