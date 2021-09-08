import Card from "./components/Card";
import uniqId from "uniqid";


export async function getCards(quantity) {
    try{
        let values = getRandNums(quantity);
        let pokemonArray = [];
        for (let i = 0; i < quantity; i++) {
            let newPokemon = await getPokemon(values[i]);
            pokemonArray.push(newPokemon);
        }
        let cardsArray = generateCards(pokemonArray);
        return cardsArray;     
    }
    catch(error) {
        console.log(error);
        return null;
    }
}

async function getPokemon(index) {
    const Pokedex = require("pokeapi-js-wrapper");
    const P = new Pokedex.Pokedex();
    try{
        let pokemon = await P.getPokemonByName(index);
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

function generateCards(pokemonArray) {
    let cardsArray = [];
    for (let i = 0; i < pokemonArray.length; i++) {
        let newCard = createCard(pokemonArray[i], i);
        cardsArray.push(newCard);
    }
    return cardsArray;
}

function createCard(pokemon, i) {
    let newKey = uniqId();
    let newCard = <Card pokemon={pokemon} key={newKey} id={i} />;
    return newCard;
}

function getRandNums(quantity) {
    let maxArray = [];
    for (let j of range(1, 898)) {
        maxArray.push(j);
    }
    let returnArray = [];
    for (let i = 0; i < quantity; i ++) {
        let randIndex = Math.floor(Math.random() * 898);
        returnArray.push(...maxArray.splice(randIndex, 1));
    }
    return returnArray;
}

function range(start, end) {
    return Array(end - start + 1).fill().map((_, idx) => start + idx)
}

export function shuffle(array) {
    if (array) {
        var currentIndex = array.length,  randomIndex;
    
        // While there remain elements to shuffle...
        while (currentIndex !== 0) {
    
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
    
        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }        
    }
    return array;
}