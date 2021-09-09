import "./componentStyles.css"
import { getCards, shuffle } from "../cardFunctions.js";
import { checkClicked, fillFalse, displayLoading, removeLoading, displayLose, removeLose } from "../helperFunctions.js";
import React, { useState, useEffect } from "react";
import LoadingScreen from "./LoadingScreen";
import LoseScreen from "./LoseScreen";


const CardHolder = (props) => {

  const [pokemon, setPokemon] = useState([]);
  const [clicked, setClicked] = useState([false, false, false, false]);
  const [level, setLevel] = useState(0);

  
  //This useEffect statement should only be called once when the component is mounted (since there are no dependencies)
  useEffect(() => {
    if (level === null) {
      setLevel(0);
      getCards(4).then(result => shuffle(result)).then(array => setPokemon(array)).then(() => {removeLoading()})
    }
    else {
      getCards(level * 2 + 4).then(result => shuffle(result)).then(array => setPokemon(array)).then(() => {removeLoading()})
    }
    
  }, [level])

  //This useEffect is responsible for setting up event Listeners for on click events on all the pokemon cards (set card to clicked and shuffles)
  useEffect(() => {
    for (let i = 0; i < pokemon.length; i++) {
      let currentCard = document.getElementById(i);
      currentCard.addEventListener("click",() => {
        let clickedArray = clicked;
        if (clickedArray[i] === false) {
          clickedArray[i] = true;
          let newScore = props.score + 1;
          props.setScore(newScore);
          if (newScore > props.best) {
            props.setBest(newScore);
          }
          console.log(newScore);
          setClicked(clickedArray);
          let pokemonArray = pokemon;
          setPokemon([]);
          setPokemon(shuffle(pokemonArray));
          if (checkClicked(clickedArray)) {
            displayLoading();
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
          displayLose();
          setLevel(null);
          props.setScore(0);
          setClicked([false, false, false, false]);
          console.log(0);
        }
      });
    }
  },
  [pokemon, clicked])



  return (
    <div className="cardHolder">
      <LoadingScreen />
      <LoseScreen best={props.best} />
      {pokemon}
    </div>
  );
}

export default CardHolder;