import React from "react";
import { removeLose } from "../helperFunctions"

const LoseScreen = (props) => {


    return (
        <div id="loseScreen" className="loseScreen">
            <div className="msgHolder">
                <h1 className="loseMsg">Congratulations!!!</h1>
                <h2 className="scoreMsg">You're current best is {props.best}!</h2>
                <button className="restart" onClick={removeLose}>Restart Game</button>
            </div>
        </div>
    )
}

export default LoseScreen;