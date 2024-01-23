import { fetchData } from "../utils/utils";

export const renderPokemonData = async(name) => {
    const div = document.querySelector("#more-info")
    const [res] = await fetchData(`https://pokeapi.co/api/v2/pokemon/${name}`)
    console.log(res)


    div.innerHTML = `
    <div></div>
    `




}