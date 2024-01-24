import { fetchData } from "./utils/utils";

export const fetchManyPokemon = async () => {
  const [response] = await fetchData('https://pokeapi.co/api/v2/pokemon?limit=35&offset=0');
  
  let data = response.results
    
  data = await data.map(async(poke) => {
    const [res] = await fetchData(poke.url);
    return {
      ...poke,
      img: res.sprites["front_default"],
      ...res
    }
  })
  
  data = await Promise.all(data)
  return data
}

export const fetchOnePokemon = async (name) => {
  try {
    const res = await fetchData(`https://pokeapi.co/api/v2/pokemon/${name}`);
    console.log(res)
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
    img: data.sprites['front_default']
  }
}

 