import "./componentStyles.css"
import { getCards, shuffle } from "../cardFunctions.js";
import { checkClicked, fillFalse } from "../helperFunctions.js";
import React, { useState, useEffect } from "react";


const CardHolder = () => {

  const [pokemon, setPokemon] = useState([]);
  const [clicked, setClicked] = useState([false, false, false, false]);
  const [level, setLevel] = useState(0);
  const [score, setScore] = useState(0);

  
  //This useEffect statement should only be called once when the component is mounted (since there are no dependencies)
  useEffect(() => {
    getCards(level * 2 + 4).then(result => shuffle(result)).then(array => setPokemon(array))
  }, [level])

  //This useEffect is responsible for setting up event Listeners for on click events on all the pokemon cards (set card to clicked and shuffles)
  useEffect(() => {
    for (let i = 0; i < pokemon.length; i++) {
      let currentCard = document.getElementById(i);
      currentCard.addEventListener("click",() => {
        let clickedArray = clicked;
        if (clickedArray[i] === false) {
          clickedArray[i] = true;
          let newScore = score + 1;
          setScore(newScore);
          console.log(newScore);
          setClicked(clickedArray);
          let pokemonArray = pokemon;
          setPokemon([]);
          setPokemon(shuffle(pokemonArray));
          if (checkClicked(clickedArray)) {
            let newLevel = level + 1;
            setLevel(newLevel);
            let length = newLevel * 2 + 4;
            let newClicked = new Array(length)
            fillFalse(newClicked);
            console.log(newClicked);
            setClicked(newClicked);
          }    
        }
        else {
          setLevel(0);
          setScore(0);
          setClicked([false, false, false, false]);
          console.log(0);
        }
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