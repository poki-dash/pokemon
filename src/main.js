import '../style.css'
import { fetchManyPokemon } from './fetchFunctions/manyPokemon'
import { fetchOnePokemon } from './fetchFunctions/onePokemon'
document.querySelector('#app').innerHTML = `
 
`

const main = () => {
// fetchOnePokemon("pikachu")
fetchManyPokemon()
}


main();
