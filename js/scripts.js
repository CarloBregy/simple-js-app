let pokemonRepository = (function () {
    
  let pokemonList = [
   { name: "Bulbasaur", height: 0.7, type: ["grass", "poison"] },
   { name: "Ivysaur", height: 1, type: ["grass", "poison"] },
   { name: "Venusaur", height: 2.2, type: ["grass", "poison"] },
   { name: "Charmander", height: 0.6, type: ["fire", "dragon"] }
   ];

  function getAll() {
    return pokemonList;
  }

  return {
    add: add,
    getAll: getAll
  };

})();



function myLoopFunction(pokemon) {
    console.log(pokemon.name + " is " + pokemon.height + " meters tall and " + pokemon.type);
    }
    pokemonRepository.getAll().forEach(myLoopFunction);


    