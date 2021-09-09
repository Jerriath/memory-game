import React from "react";


const Header = (props) => {


    console.log(props);
    return (
        <header className="header">
            <h1 className="title">Pokemon Memory Game</h1>
            <div className="scoreBoard">
                <h2 className="bestScore" >{"Best Score: " + props.best}</h2>
                <h2 className="currentScore">{"Current Score: " + props.score}</h2>
            </div>
        </header>
    )
}

export default Header;