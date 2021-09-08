import "./componentStyles.css";
import React from "react";


const Card = (props) => {

    let name = null;
    let imgSrc = null;
    if (props.pokemon === null) {
        name = "";
        imgSrc = "";
    }
    else {
        name = props.pokemon.name;
        imgSrc = props.pokemon.img;
    }

    let newCard = (
        <div id={props.id} className="card" >
            <h1 className="cardTitle">{name}</h1>
            <img className="cardImg" alt="your mom" src={imgSrc} />
        </div>
    );

    return newCard;
    
}

export default Card;