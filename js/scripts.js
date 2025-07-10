var pokemonList = [{ name: "Bulbasaur", height: 0.7, type: ["grass", "poison"] },
{ name: "Ivysaur", height: 1, type: ["grass", "poison"] },
{ name: "Venusaur", height: 2.2, type: ["grass", "poison"] },
{ name: "Charmander", height: 0.6, type: ["fire", "dragon"] }]



for (let i = 0; i < pokemonList.length; i++){
    document.write(pokemonList[i].name + " " + (pokemonList[i].height));
    if (pokemonList[i].height >2 ) {
        document.write(" - This is big");    
        }
        document.write("<br>");           
        }




function myLoopFunction(pokemon) {
    console.log(pokemon.name + " is " + pokemon.height + " meters tall and " + pokemon.type);
    }
    pokemonList.forEach(myLoopFunction);
