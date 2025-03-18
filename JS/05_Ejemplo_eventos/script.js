
//obtener el nodo
// const cabriolet = document.getElementById("cabriolet")
const cabriolet = document.querySelector("#cabriolet")
const alquiler = document.querySelector("#alquiler")
const importe = document.querySelector("main section:nth-child(2)")


// cabriolet.addEventListener("click", function() {} )
cabriolet.addEventListener("click", () => {
    let dias = prompt("Dias de alquiler?")
    let precio = cabriolet.querySelector("ul li:last-child").textContent
    // alert(precio.textContent)
    precio = precio.split("€")[0]
    alert(precio)
    importe.style.display = "block"
    let alquilerTotal = parseFloat(precio) * parseInt(dias)
    let mensajeUsuario = `${dias} dias de alquiler * ${precio}€/dias = <span class="bold>${alquilerTotal.toFixed(2)} €</span>`
    alquiler.innerHTML = mensajeUsuario
} )