var pokemonList = [{ name: "Bulbasaur", height: 0.7, type: ["grass", "poison"] },
{ name: "Ivysaur", height: 1, type: ["grass", "poison"] },
{ name: "Venusaur", height: 2.2, type: ["grass", "poison"] },
{ name: "Charmander", height: 0.6, type: ["fire", "dragon"] }]



for (let i = 0; i < pokemonList.length; i++){
    document.write(pokemonList[i].name + " " + (pokemonList[i].height));
    if (pokemonList[i].height >2 ) {
        document.write(" - This is big");     // If the height is greater than 2, print a message
        }
        document.write("<br>");               // Move to next line after each Pokémon
    }


let myArray = [1,2,3,4,5,6,7,8,9,10,11,12];

for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]); }






let pokemonList = [
  { name: "Bulbasaur", height: 0.7, types: ["grass"] },
  { name: "Charmander", height: 0.6, types: ["fire"] },
  { name: "Golbat", height: 1.6, types: ["flying", "poison"] },
  { name: "Alakazam", height: 1.5, types: ["psychic"] },
];

let pokemonList2 = [
  { name: "bird", height: 0.7, types: ["grass"] },
  { name: "cat", height: 0.6, types: ["fire"] },
  { name: "dog", height: 1.6, types: ["flying", "poison"] },
];

function printArrayDetails (list){
  for (let i = 0; i < list.length; i++){
    document.write("<p>" + list[i].name + "</p>" )
    console.log(list[i].name);
  }
}

printArrayDetails (pokemonList2);



    
// function print(){
// document.write ("<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>"); 
// }

// print();


// let day = "Sunday";

// if  (day === "Sunday") {
//     console.log("It's Sunday!");}
// else if (day === "Saturday") {
//     console.log("It's Saturday!");} 
// else {
//     console.log("t’s not the weekend! Boo!");}    


// let personAge = [
//     {name: "person1", age: 16}, 
//     {name: "person2", age: 10}, 
//     {name: "person3", age: 25},
//     ];

// for (let i=0; i < personAge.length; i++){
//     if (personAge[i].age <19 && personAge[i].age >13){
//         console.log(personAge[i].name + " is a teenager")
//     }else if (personAge[i].age <13) {
//         console.log(personAge[i].name + " is a child")
//     }else {
//         console.log(personAge[i].name + ' is an adult');
//     }
// }



//  let text = "";
//  let i = 0;

//  do {
//     text = text + " " + i;
//     i++;
//  }
//  while (i < 10);
//  console.log(text);


// let fruits = ["apple", "banana", "cherry", "elderberry"]
// let text = "";
// let i = 0;

// while (fruits[i]) {
//     text = text + " " + fruits[i];
//     i++;
// }

// console.log(text);
    
// let fruits = ["apple", "banana", "cherry", "elderberry"]
// let text = "";
// let i = 0;
// for (;fruits[i];) {
//     text = text + " " + fruits[i];
//     i++;
// }

// console.log(text);


