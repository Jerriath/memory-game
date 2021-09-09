import React, { useState } from "react";
import CardHolder from "./components/CardHolder";
import Header from "./components/Header";
import "./index.css";

const App = () => {

    const [score, setScore] = useState(0);
    const [best, setBest] = useState(0);

    return (
        <div className="App">
            <Header score={score} best={best} />
            <CardHolder score={score} best={best} setScore={setScore} setBest={setBest} />
        </div>
    )
}

export default App;