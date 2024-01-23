import { fetchManyPokemon } from "../fetchFunctions/manyPokemon.js";

export const renderLibrary = async(library) => {
  const data = await fetchManyPokemon()
  console.log(data)
  for(const poke of data) {
    console.log(poke)
    const {name, img} = poke;
    const li = document.createElement('li')
    li.innerHTML = `<h2 class="name">${name}</h2>
    <img src=${img}>`

    library.append(li)
  }
}