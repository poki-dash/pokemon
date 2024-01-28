import { renderFailFetch } from "./render";
import { fetchData } from "./utils/utils";

export const fetchManyPokemon = async () => {
  const [response] = await fetchData('https://pokeapi.co/api/v2/pokemon?limit=250&offset=0');
  
  let data = response.results
    
  data = await data.map(async(poke) => {
    const [res] = await fetchData(poke.url);
    let type = res.types[0].type.name;
    
    return {
      ...poke,
      img: res.sprites["front_default"],
      type,
      ...res
    }
  })
  
  data = await Promise.all(data)
  return data
}

export const fetchOnePokemon = async (name) => {
  try {
    const res = await fetchData(`https://pokeapi.co/api/v2/pokemon/${name}`);
    return res;
  } 
  catch (err) {
      console.error(err);
      throw new Error("unable to fetch pokemon details;")
  } 
}

export const fetchRandPoke = async (id) => {
  const randPokeRes = await fetchData(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  const data = randPokeRes[0]
  return {
    name: data.name, 
    img: data.sprites['front_default'],
    type: data.types[0].type.name
  }
}

export const fetchSearchPoke = async(pokeName) => {
  const pokeNameRes = await fetchData(`https://pokeapi.co/api/v2/pokemon/${pokeName.toLowerCase()}`)
  const data = pokeNameRes[0]
  if (!data) alert("pokemon not found")
  return {
    name: data.name,
    img: data.sprites['front_default'],
    ...data
  }
}


