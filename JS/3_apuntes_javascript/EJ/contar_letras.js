// hay que mostrar un mensaje indicando cuantas veces aparece esa letra. por ejemplo
// la letra a aparece 2 veces en marta
//la letra r aparece 1 vez en marta
//la letra z no esta en marta

const palabra = "Marta"
const letra = "a"

let contador = 0
for (caracter of palabra){
    caracter = caracter.toLowerCase()
    console.log(caracter);

    if (caracter == letra) {
        contador += 1
    }
}

if (contador == 0) {
    console.log("La letra " + letra + " no esta en la palabra " + palabra);
}

console.log(contador);


// let palabra = prompt("Escribe la palabra");
// let letra = prompt("¿Qué letra quieres contar?");

// let contador = 0;

// for (let i = 0; i < palabra.length; i++) {
//     if (palabra[i] === letra) {
//         contador++;
//     }
// }

// if (contador > 0) {
//     console.log(`La letra '${letra}' aparece ${contador} vez/veces en la palabra '${palabra}'.`);
// } else {
//     console.log(`La letra '${letra}' no está en la palabra '${palabra}'.`);
// }
