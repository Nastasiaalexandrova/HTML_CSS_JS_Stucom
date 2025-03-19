
// Control del nombre y apellido del cliente

const nombreForm = document.querySelector('#nombre')
const apellidoForm = document.querySelector('#apellido')

nombreForm.addEventListener("change", () => {

    let nombreRevisado = nombreForm.value.trim()
    const errorNombre = document.querySelector('#errorNombre')

    errorNombre.textContent = ""
    if (nombreRevisado.length < 2) {        
        errorNombre.textContent = "El nombre debe tener al menos dos caracteres"
        nombreForm.focus()
    }
})

// Control de la fecha
let today = new Date()
let tomorrow = new Date(today)
tomorrow.setDate(tomorrow.getDate() + 1)
today = today.toISOString().split('T')[0]
// console.log(today);
tomorrow = tomorrow.toISOString().split('T')[0]

let entrada = document.querySelector('#entrada')
entrada.setAttribute("min",today)
entrada.setAttribute("value",today)

let salida = document.querySelector('#salida')
salida.setAttribute("min",tomorrow)
salida.setAttribute("value",tomorrow)

entrada.addEventListener('change', () => {
    salida = new Date(entrada.value)
    salida.setDate(salida.getDate() + 1)
    salida = salida.toISOString().split('T')[0]

    let fechaSalida = document.querySelector("#salida")
    fechaSalida.setAttribute("min", salida)
    fechaSalida.setAttribute("value", salida)
})
 


// Ventana emergente

const dialog = document.querySelector('#resumen')
const cierraVentana = document.querySelector('#cierraVentana')

cierraVentana.addEventListener('click', () => {
    dialog.close()
})


// Obtener los datos del formulario

const formReserva = document.forms['formReserva']

formReserva.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(formReserva['nombre'].value);
    console.log(formReserva['estancia'].value);

    let resumenReserva = `<p>Reserva realizada a nombre de <span class="textoPrincipal">${formReserva['nombre'].value} ${formReserva['apellido'].value}</span></p>`

    const textoResumen = document.querySelector('#textoResumen')

    textoResumen.innerHTML = resumenReserva

    dialog.showModal()
    formReserva.reset()
})
// // Control del nombre y apellido del cliente

// const nombreForm = document.querySelector('#nombre')
// const apellidoForm = document.querySelector('#apellido')

// nombreForm.addEventListener("change", () => {

//     let nombreRevisado = nombreForm.value.trim()
//     const errorNombre = document.querySelector('#errorNombre')

//     errorNombre.textContent = ""
//     if (nombreRevisado.length < 2) {        
//         errorNombre.textContent = "El nombre debe tener al menos dos caracteres"
//         nombreForm.focus()
//     }
// })

// // Control de la fecha
// let today = new Date()
// let tomorrow = new Date(today)
// tomorrow.setDate(tomorrow.getDate() + 1)
// today = today.toISOString().split("T")[0]
// // console.log(today);
// tomorrow = tomorrow.toISOString().split("T")[0]

// const entrada = document.querySelector("#entrada")
// entrada.setAttribute("min",today)
// entrada.setAttribute("value",today)

// const salida = document.querySelector("#salida")
// salida.setAttribute("min",tomorrow)
// salida.setAttribute("value",tomorrow)

// entrada.addEventListener("change", () => {
//     salida = new Date(entrada.value)
//     salida.setDate(salida.getDate() + 1)
//     salida = salida.toISOString().split("T")[0]

//     let fechaSalida = document.querySelector("#salida")
//     fechaSalida.setAttribute("min", salida)
//     fechaSalida.setAttribute("value", salida)

// }
// )

// // Ventana emergente

// const dialog = document.querySelector("#resumen")
// const cierraVentana = document.querySelector("#cierraVentana")
// cierraVentana.addEventListener("click", () => {
//     dialog.closest()
// })

// //Obtener los datos del formulario

// const formReserva = document.forms['formReserva']

// formReserva.addEventListener("submit", () => {
//     // alert("Submit: ok")
//     e.preventDefault()
//     console.log(formReserva['nombre'].value);
//     console.log(formReserva['estancia'].value);

//     dialog.showModal()
// })

// // // Control del nomber y apellido del cliente

// // const nombreForm = document.querySelector("#nombre")
// // const apellidoForm = document.querySelector("#apellido")

// // nombreForm.addEventListener("change", () => {

// //     let nombreRevisado = nombreForm.ariaValueMax.trim()

// //     const errorNombre = document.querySelector("#errorNombre")

// //     errorNombre.textContent = ""
// //     if (nombreRevisado.length < 2) {
        
// //         errorNombre.textContent = "El nombre debe tener al menos 2 caracteres"
// //         nombreForm.focus()
// //     }
// // })