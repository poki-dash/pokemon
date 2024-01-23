import './style.css'
import { renderDefaultLayout } from './renderFunctions/renderDefaultLayout'
import { renderLibrary } from './renderFunctions/renderLibrary'
import { renderPokemonData } from './renderFunctions/renderPokemonData'
document.querySelector('#app').innerHTML = `
 
`


const main = async() => {
  renderDefaultLayout(app)
    renderLibrary(document.querySelector("#library"))
    renderPokemonData("pikachu");
document.querySelector().addEventListener(click, )
}



main();
