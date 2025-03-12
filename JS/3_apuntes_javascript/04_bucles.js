const palabra = "Abracadabra"

for (let i = 0; i < palabra.length; i++) {
    // palabra[i] = palabra[i].toLocaleLowerCase()
    // console.log(palabra);
    if (palabra[i].toLocaleLowerCase() == "a") {
        // break
        continue
    }
    console.log(palabra[i]);
}

// for .. of
for (letra of palabra) console.log(letra);

// while

let control = true
let i = 0
while (control) {
    console.log("hola");
    if (i == 3) {
        control = false
    }
    i += 1
}

let condicion = "jueves"

do {
    console.log("Espero el viernes");
} while (condicion == "miercoles")