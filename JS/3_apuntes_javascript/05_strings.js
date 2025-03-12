let palabra = "Abracadabra"

console.log(palabra.length);

console.log(palabra[3]);
console.log(palabra[-1]);

// at(posicion) 

console.log(palabra.at(-3));
console.log(palabra.at(0));

//Metodos para pasar el texto a mayusculas y minusculas
let palabraMayus = palabra.toLocaleLowerCase()

//trim()
palabra2 = "       " + palabra + "           "
console.log(palabra2.length);
palabra2 = palabra2.trim();
console.log(palabra2.length);

//replace
console.log(palabra.toLocaleLowerCase().replace("ab", "ez"));
console.log(palabra.toLocaleLowerCase().replaceAll("ab", "ez"));


let frase = "Como no estudies Javascript te vas a enterar"

//starts with caracter /es de inicio
console.log(frase.startsWith("rar")); 
console.log(frase.endsWith("rar")); 

//slice
console.log(palabra.slice(1));
console.log(palabra.slice(1, 4));

//split
console.log(frase.split(" "));

let lista = []
let nombre = "mAriA de Las merceDes y dE TOdaS lAs SantAS"

nombre = nombre.toLocaleLowerCase()
// console.log(lista[0, 3, 8])
nombre = nombre.split(" ")

let nombreCorregido = ""
for (palabra of nombre) {
    console.log(palabra);
    if (palabra != "de" && palabra != "las" && palabra != "y" && palabra != "los") {
        // console.log(palabra);
        // continue
        let inicial = palabra.at(0).toLocaleUpperCase()
        let restoNombre = palabra.slice(1)
        palabra = inicial + restoNombre
    }

    nombreCorregido += palabra + " "
}

nombreCorregido
// for (let i=0; i<nombre.length; i++){
    
    
//     switch (nombre[i]) {
//         case "maria" :
//             nombre[i].toLocaleUpperCase
//         case "mercedes" :
//             nombre[i].toLocaleUpperCase
//         case "todas" :
//             nombre[i].toLocaleUpperCase
//         case "santas" :
//             nombre[i].toLocaleUpperCase
//         default : 
//         nombre[i].toLocaleLowerCase
//     }
//     console.log(nombre);
// }
