function sumar(num1, num2) {
    return num1 + num2
}

console.log(sumar(1,2));

function corregirNombre() {
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
}


//arrow function
let sumar3 = (num1, num2) => {
    return num1 + num2
}
console.log(sumar(3, 4));

let sumar5 = num1 => num1*num1
console.log(sumar5(3));

///////////////////////
const listasFrutas = ["kiwi", "piña", "pera"]
listasFrutas.forEach(fruta, () => {
    console.log(fruta);
})


