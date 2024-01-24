import "./style.css";
import { renderLibrary, renderDefaultLayout, renderPokemonData } from "./render";



const main = async () => {
  Promise.all(renderDefaultLayout(app),
await  renderLibrary(document.querySelector("#library")),
  renderPokemonData("pikachu",document.querySelectorAll(".more-info")))
  
  
};

main();
