// Datos de trabajo

const flores = [
  { nombre: "rosa", color: "rojo", floracion: "primavera", stock: true },
  { nombre: "rosa", color: "blanco", floracion: "verano", stock: true },
  { nombre: "jazmín", color: "blanco", floracion: "verano", stock: false },
  { nombre: "crisantemo", color: "blanco", floracion: "otoño", stock: false },
  { nombre: "cerezo", color: "blanco", floracion: "primavera", stock: false },
  { nombre: "clavel", color: "rojo", floracion: "verano", stock: true },
];

flores.sort((a, b) => {
  return a.nombre.localeCompare(b.nombre, "es-ES", { numeric: true });
});

// ==============================================================================
// EJERCICIO 1

// console.log(flores);

// Tiene que mostrarse en el HTML los datos de las flores como lista
// Flor: rosa, de color rojo, florece en primavera y tenemos stock
// Se mostrará el resultado en #ejercicio1

// for clásico
// for (let i = 0; i < flores.length; i++) {
//     console.log(flores[i]);
// }
// function mostrarFlores() {
//   const contenedor = document.getElementById("ejercicio1");
//   contenedor.innerHTML = flores.map(flor => `
//     <p>Flor: ${flor.nombre}, de color ${flor.color}, florece en ${flor.floracion} y ${flor.stock ? "tenemos stock" : "sin stock"}</p>
//   `).join("");
// }
// mostrarFlores();
////////////FERRAN
const ejercicio1 = document.getElementById("ejercicio1")

let html = "<ul>"
flores.forEach( (flor) => {
  let textoStock = ""

  if (!flor.stock) {
    textoStock = "no"
  }

  html += `<li>Flor : ${flor.nombre}, de color ${flor.color}, florece en ${flor.floracion} y ${textoStock} tenemos stock.`
})

html += "</ul>"

ejercicio1.innerHTML = html



// ==============================================================================
// EJERCICIO 2
// Listar las flores de color blanco que florecen en verano
// Modelo de mensaje de salida:
// Flor: rosa, de color blanco, florece en verano y tenemos stock
// Se mostrará el resultado en #ejercicio2
function floresBlancasVerano() {
  const contenedor = document.getElementById("ejercicio2");
  const resultado = flores.filter(flor => flor.color === "blanco" && flor.floracion === "verano");
  contenedor.innerHTML = resultado.length > 0 ? resultado.map(flor => `
    <p>Flor: ${flor.nombre}, de color ${flor.color}, florece en ${flor.floracion} y ${flor.stock ? "tenemos stock" : "sin stock"}</p>
  `).join("") : "No hay flores que cumplan los requisitos";
}
floresBlancasVerano();



// ==============================================================================
// EJERCICIO 3

// A partir del formulario incluido, hay que mostrar que datos
// corresponden a la selección realizada.
// Se mostrarán en forma de lista como los modelos anteriores.
// Si no hay ninguna flor que cumpla las condiciones, se mostrará este mensaje:
// "No hay flor que cumpla las condiciones"
// Se mostrará el resultado en #ejercicio3
document.getElementById("form-seleccion").addEventListener("change", () => {
  const color = document.querySelector("input[name='color']:checked").value;
  const floracion = document.querySelector("input[name='floracion']:checked").value;
  const stock = document.querySelector("input[name='stock']:checked").value === "true";
  
  const contenedor = document.getElementById("ejercicio3");
  const resultado = flores.filter(flor => flor.color === color && flor.floracion === floracion && flor.stock === stock);
  
  contenedor.innerHTML = resultado.length > 0 ? resultado.map(flor => `
    <p>Flor: ${flor.nombre}, de color ${flor.color}, florece en ${flor.floracion} y ${flor.stock ? "tenemos stock" : "sin stock"}</p>
  `).join("") : "No hay flor que cumpla las condiciones";
});


// ==============================================================================
// EJERCICIO 4

// Hacer un formulario para obtener una flor por su nombre.
// Se mostrará el resultado en #ejercicio4


// ==============================================================================
// EJERCICIO 5

// Crea y programa un formulario para añadir flores al array.
// Por ejemplo:
// flor: cyclamen, color:rosa, floracion: invierno, stock:true
// Tiene que actualizarse automáticamente la lista del ejercicio 1


// ============================================================================== 
/* E X T R A S */

// ==============================================================================
// EJERCICIO 6

// Crea y programa un formulario para añadir precios a las flores:
// rosa roja : 8.00€
// rosa blanca : 10.00€
// jazmin: 12.00€
// crisantemo: 5.00€
// cerezo: 25.00€
// cyclamen: 4.50€
// Tiene que actualizarse automáticamente la lista del ejercicio 1

// ==============================================================================
// EJERCICIO 7

// Crea la forma de eliminar elementos del array
// Tiene que actualizarse automáticamente la lista del ejercicio 1

// ==============================================================================
// EJERCICIO 8

// Crea la forma de editar elementos del array de flores
// Todas las propiedades deben poder ser editadas: nombre, color, floración, stock  y precio
// Tiene que actualizarse automáticamente la lista del ejercicio 1
