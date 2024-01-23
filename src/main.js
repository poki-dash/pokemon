import '../style.css'
import { fetchOnePokemon } from './fetchFunctions/onePokemon'
import { renderDefaultLayout } from './renderFunctions/renderDefaultLayout'
document.querySelector('#app').innerHTML = `
 
`

const main = () => {
    const app = document.querySelector('#app');
    renderDefaultLayout(app)

    
}


main();
