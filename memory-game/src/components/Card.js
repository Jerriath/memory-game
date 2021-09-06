


const Card = (pokemon) => {

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
        <div>
            <h1>{name}</h1>
            <img alt="your mom" src={imgSrc} />
        </div>
    )
    
}

export default Card;