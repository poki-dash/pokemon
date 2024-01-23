import { fetchManyPokemon } from "../fetchFunctions/manyPokemon.js";

export const renderLibrary = async(library) => {
  const data = await fetchManyPokemon()
  console.log(data)
  for(const poke of data) {
      
    const {name, img} = poke;
      const li = document.createElement('li')
    
      li.innerHTML = `  <h2  data-name=${name} class="poke-name">${name}</h2>
      <div id="more-info"></div>
    <img src=${img}>`

    library.append(li)
  }
}