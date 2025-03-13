//vamos a trabajar para un comercio que vende toda clase de articulos
//desde los mas caros a los mas baratos
//el cambio se va a devolver en metalico segun estas condiciones:
//--sera usando la minima cantidad de billetes y nonedas posible

////Primero solucion
// let cambio = [500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01]

// let cliente = 457.28 //parseFloat(prompt("Cuantos euros quieres cambiar?"))

// let cambioDevuelto = {};

// for (let unidad of cambio) {
//     let cantidad = Math.floor(cliente/unidad)
//     if (cantidad > 0) {
//         cambioDevuelto[unidad] = cantidad
//         cliente -= (cantidad * unidad)

//     }
//     // console.log(cantidad);
//     // console.log(unidad);
//     if (cantidad > 0) {
//         console.log("Recibiras: " + cantidad + " unidades de " + unidad + "papel/monedas");
//     }
// }

//////Segundo solucion


const cambio2 = 457.28
const money = [500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01]

let objetoCambio = {}
let parcialCambio = 0
for (tipoMoney of money) {
    let cantidadMoney = parseInt(cambio2 / tipoMoney)
    if (cantidadMoney == 0) continue
    else {
        parcialCambio += cantidadMoney * tipoMoney
        objetoCambio[tipoMoney] = cantidadMoney
        cambio2 = cambio2 % tipoMoney
    }
}
objetoCambio["0.01"] = cambio2 - parcialCambio
parcialCambio
objetoCambio