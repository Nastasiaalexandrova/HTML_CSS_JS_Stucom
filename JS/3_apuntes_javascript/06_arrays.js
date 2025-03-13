// Arrays
// let frutas = [1, 1.2, "hola", true, [4, 6]]
let frutas = ["kiwi", "pera", "fresa", "pomelo"]
//
//el tamaño de un array. En python era len
frutas[3] = "limon"
console.log(frutas);

let arraySize = frutas.length
console.log(arraySize);

console.log(frutas.at(-1));
console.log(frutas[frutas.length]);
 
frutas.push("melocoton")





console.log(frutas);
// Eliminar el ultimo
let frutaEliminada = frutas.pop()
console.log(frutas);
console.log(frutaEliminada);
// Añadir elemento al principio
frutas.unshift("mandarina")
console.log(frutas);
// Eliminar el elemento inicial
frutaEliminada = frutas.shift()
console.log(frutas);
console.log(frutaEliminada);

// Pasar el array al texto
console.log(frutas.toString());
console.log(frutas.join(" - "));

// Obtener la posicion de un elemento indexOf(elemento)
console.log(frutas.indexOf("kiwi"));
console.log(frutas.indexOf("mandarina"));
frutas.push("fresa")
console.log(frutas);
console.log(frutas.indexOf("fresa"));
console.log(frutas.lastIndexOf("fresa"));

// revertir el array
frutas.reverse()
console.log(frutas);

// revertir una copia de array
let arrayAlReves = frutas.toReversed()

//cortar el array
let extraccion = frutas.slice(1,3)
console.log(extraccion);
console.log(frutas);

// ordenar un array original
frutas.sort()
console.log(frutas);

//ordenar un array y guardarlo en una copia
let frutasOrdenadas = frutas.toSorted()
console.log(frutasOrdenadas);

//destructing
let [fruta1, fruta2, fruta3, fruta4, fruta5] = frutas
console.log(fruta1);