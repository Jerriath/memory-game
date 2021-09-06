import "./App.css"
import { testFunc } from "./helperFunctions.js";
import Card from "./components/Card";
import React, { useState, useEffect } from "react";


const App = () => {

  const [idk, setIdk] = useState(null);

  useEffect(() => {
    testFunc().then(result => setIdk(result))
  }, [])

  return (
    <div>
      <Card pokemon={idk}/>
    </div>
  );
}

export default App;