// vamos a tener una frase. Por ejemplo:
// Mañana sera viernes y aunque va a llover sera un dia maravilloso
// Hay que mostrar cuantas palabras contienen una letra determinada

let frase = "Mañana sera viernes y aunque va a llover sera un dia maravilloso"
let letra = "a"

let contador = 0
let fraseArray = []
fraseArray = frase.split(" ");

// if (fraseArray[i] )

for (let palabra of fraseArray) {
    console.log(palabra);
    console.log(typeof palabra);
    palabra = palabra.toLowerCase()
    if (palabra.includes(letra)) {
        contador ++
    }
}

for (palabra of fraseArray) {
    if (palabra includes letra)
}

// for (palabra of fraseArray)  {
//     for (caracter of palabra) {
//         if (caracter == letra) {
//             contador +=1
//         }
//     }
// }

console.log(`La letra '${letra}' aparece en ${contador} palabras de la frase.`)


    // for (caracter of palabra){
    //     caracter = caracter.toLowerCase()
    //     console.log(caracter);
    
    //     if (caracter == letra) {
    //         contador += 1
    //     }
    // }


// let frase = "Mañana sera viernes y aunque va a llover sera un dia maravilloso";
// let letra = "a";

// let contador = 0;
// let fraseArray = frase.split(" "); // Split the sentence into words

// for (let i = 0; i < fraseArray.length; i++) {
//     if (fraseArray[i].toLowerCase().includes(letra)) {
//         contador++;
//     }
// }

// console.log(`La letra '${letra}' aparece en ${contador} palabras de la frase.`);
