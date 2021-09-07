import "./componentStyles.css";


const Card = (pokemon, key) => {

    let name = null;
    let imgSrc = null;
    if (pokemon.pokemon === null) {
        name = "";
        imgSrc = "";
    }
    else {
        console.log(pokemon);
        name = pokemon.pokemon.name;
        imgSrc = pokemon.pokemon.img;
    }
    

    return (
        <div key={key} className="card">
            <h1 className="cardTitle">{name}</h1>
            <img className="cardImg" alt="your mom" src={imgSrc} />
        </div>
    )
    
}

export default Card;