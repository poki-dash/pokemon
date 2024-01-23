import '../style.css'


import { renderDefaultLayout } from './renderFunctions/renderDefaultLayout'
import { renderLibrary } from './renderFunctions/renderLibrary'
document.querySelector('#app').innerHTML = `
 
`

const main = async() => {
  renderDefaultLayout(app)
  renderLibrary(document.querySelector("#library"))

}


main();
