import "./App.css"
import { getCards } from "./helperFunctions.js";
import React, { useState, useEffect } from "react";


const App = () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    getCards(4).then(result => setPokemon(result))
  }, [])

  return (
    <div className="cardHolder">
      {pokemon}
    </div>
  );
}

export default App;