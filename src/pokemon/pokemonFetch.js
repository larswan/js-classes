const fetchPokemon = async (pokemonName) => {
    let req = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    let res = await req.json()
    return res
    // console.log(res)
    // console.log(res.sprites.front_default)
}

export default fetchPokemon