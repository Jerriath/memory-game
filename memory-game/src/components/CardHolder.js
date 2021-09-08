import "./componentStyles.css"
import { getCards, shuffle } from "../cardFunctions.js";
import { checkClicked } from "../helperFunctions.js";
import React, { useState, useEffect } from "react";


const CardHolder = () => {

  const [pokemon, setPokemon] = useState([]);
  const [clicked, setClicked] = useState([false, false, false, false]);
  const [level, setLevel] = useState(0);

  
  //This useEffect statement should only be called once when the component is mounted (since there are no dependencies)
  useEffect(() => {
    getCards(level * 2 + 4).then(result => shuffle(result)).then(array => setPokemon(array))
  }, [])

  //This useEffect is responsible for setting up event Listeners for on click events on all the pokemon cards (set card to clicked and shuffles)
  useEffect(() => {
    for (let i = 0; i < pokemon.length; i++) {
      let currentCard = document.getElementById(i);
      currentCard.addEventListener("click",() => {
        let clickedArray = clicked;
        clickedArray[i] = true;
        setClicked(clickedArray);
        let pokemonArray = pokemon;
        setPokemon([]);
        setPokemon(shuffle(pokemonArray));
        console.log(clicked);
        console.log(checkClicked(clicked));
      });
    }
  },
  [pokemon, clicked])



  return (
    <div className="cardHolder">
      {pokemon}
    </div>
  );
}

export default CardHolder;