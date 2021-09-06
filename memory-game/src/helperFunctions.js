


export async function testFunc() {
    const Pokedex = require("pokeapi-js-wrapper");
    const P = new Pokedex.Pokedex();

    try{
        let pokemon = await P.getPokemonByName(15);
        let idk = {
            name: pokemon.name,
            img: pokemon.sprites.front_default,

        }
        return idk;    
    }
    catch(error){
        console.log(error);
        return null;
    }

}