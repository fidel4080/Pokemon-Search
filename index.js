// Pokemone Search

async function fetchData(){

    try{

        const pokemonName = document.getElementById("pokemonName").value.toLowerCase().trim();//puts the name to lowercase and remove any spaces

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!response.ok){
            throw new Error("Invalid Name!!");
        }
   
        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";

    }
    catch(error){
        console.error(error);
    }
    
}


