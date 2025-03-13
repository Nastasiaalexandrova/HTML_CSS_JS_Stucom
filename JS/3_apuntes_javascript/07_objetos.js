
//diccionarios
let alumno = {}

alumno["nombre"] = "Maria"
alumno["apellido"] = "Pi"
alumno["edad"] = 25

let alumno2 = { "nombre" : "Pep", "apellido" : "Guardiola", "edad" : 55}
alumno2.cp = "08041"
alumno2["direccion familiar"] = "C/Corsega"

let clase = {
    alumnos : {
        alumno, alumno2
    }
}

for (claves in alumno) {
    console.log(claves); 
    console.log(claves, alumno[claves]);
}