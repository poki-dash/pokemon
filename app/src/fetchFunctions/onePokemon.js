export const fetchOnePokemon = async (name) => {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await res.json();
    console.log(data)
    return data 
    } catch (err) {
        console.error(err);
        throw new Error("unable to fetch pokemon details;")
    }
   
}