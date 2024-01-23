import '../style.css'
import { fetchOnePokemon } from './fetchFunctions/onePokemon'
document.querySelector('#app').innerHTML = `
 
`

const main = () => {
fetchOnePokemon("pikachu")
}


main();
