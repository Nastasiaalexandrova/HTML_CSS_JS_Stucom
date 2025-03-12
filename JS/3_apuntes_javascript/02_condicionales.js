const edad = 20

if (edad >= 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("Aun no puedes votar")
}

let curso = "Javascript"
let prueba = true

if (prueba) {
    let curso = "PHP"
    console.log(curso);
} else {
    console.log("No me hagas perder el tiempo");
}
console.log(curso);

switch (curso) {
    case "PHP" : 
        console.log("PHP? Si");
        break;
    default :
        console.log("Y que estudias?");
}

const diaSemana = "miercoles"
switch(diaSemana) {
    case "lunes" :
        console.log("El lunes estamos en clase");
    case "martes" :
        console.log("El martes estamos en clase");
    case "miercoles" :
        console.log("El " + diaSemana + " estamos en clase");
        break
    default :
        console.log("Pregunta tu profesor");
}