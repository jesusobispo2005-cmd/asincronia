import { pokeApi } from "./Poketarea.js";



// Array de Pokémon

const pokemones = ["pikachu", "bulbasaur", "charmander", "squirtle", "eevee", "ditto"];



// Intervalo para cambiar cada 3 segundos

setInterval(() => {

    const random = Math.floor(Math.random() * pokemones.length);

    const nombre = pokemones[random];



    console.log("Mostrando Pokémon:", nombre); // Para debug

    pokeApi(nombre);

}, 3000);