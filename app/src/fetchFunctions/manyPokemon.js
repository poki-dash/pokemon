import { fetchData } from "../utils/utils.js"

export const fetchManyPokemon = async() => {
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

