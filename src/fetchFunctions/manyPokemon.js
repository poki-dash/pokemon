import { fetchData } from "../utils/utils.js"

export const fetchManyPokemon = async() => {
  const response = await fetchData('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0');
  return response;
}