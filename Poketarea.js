export function pokeApi(nombre) {
    const poke = document.getElementById("poke");
    const nombreH2 = document.getElementById("nombre");

    fetch("https://pokeapi.co/api/v2/pokemon/" + nombre)
        .then(response => {
            if (!response.ok) throw new Error("Pokémon no encontrado");
            return response.json();
        })
        .then(data => {
            // 1. Accedemos a la imagen (front_default es la clásica)
            poke.src = data.sprites.front_default;
            
            // 2. Bonus: Mostrar el nombre en el HTML
            nombreH2.innerText = data.name;
        })
        .catch(error => console.error("Error al obtener el Pokémon:", error));
}