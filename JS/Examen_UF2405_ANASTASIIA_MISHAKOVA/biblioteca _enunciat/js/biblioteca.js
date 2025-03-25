// localStorage.removeItem("biblioteca")

// MINI BIBLIOTECA

// const biblioteca = JSON.parse(localStorage.getItem("biblioteca")) || [
const biblioteca = JSON.parse(localStorage.getItem("biblioteca")) || [
    { titulo: "Guerra y Paz", autor: "Lev Tolstoi", categoria: "drama", idioma: "español", epoca: "s.XIX" },
    { titulo: "Anna Karenina", autor: "Lev Tolstoi", categoria: "drama", idioma: "català", epoca: "s.XIX" },
    { titulo: "L'Odisea", autor: "Homero", categoria: "drama", idioma: "català", epoca: "clásica" },
    { titulo: "Antologia de la poesia medieval catalana", autor: "Diversos", categoria: "poesia", idioma: "català", epoca: "clásica" },
    { titulo: "La Ilíada", autor: "Homero", categoria: "drama", idioma: "español", epoca: "clásica" },
    { titulo: "Poema del Mio Cid", autor: "Anónimo", categoria: "poesia", idioma: "español", epoca: "clásica" },
    { titulo: "Veinte mil leguas de viaje submarino", autor: "Jules Verne", categoria: "aventuras", idioma: "español", epoca: "s.XIX" },
    { titulo: "De la Terra a la Lluna", autor: "Jules Verne", categoria: "aventuras", idioma: "català", epoca: "s.XIX" },
    { titulo: "Cinco semanas en globo", autor: "Jules Verne", categoria: "aventuras", idioma: "español", epoca: "s.XIX" },
    { titulo: "Robinson Crusoe", autor: "Daniel Defoe", categoria: "aventuras", idioma: "català", epoca: "clásica" },
    { titulo: "Germinal", autor: 'Émile Zola', categoria: "drama", idioma: "español", epoca: "s.XIX" },
    { titulo: "Notre Dame de Paris", autor: 'Victor Hugo', categoria: "drama", idioma: "català", epoca: "s.XIX" },
    { titulo: "Los Miserables", autor: 'Victor Hugo', categoria: "drama", idioma: "español", epoca: "s.XIX" },
    { titulo: "Yo, robot", autor: "Isaac Asimov", categoria: "ciencia-ficción", idioma: "español", epoca: "s.XX" },
    { titulo: "Fundació", autor: "Isaac Asimov", categoria: "ciencia-ficción", idioma: "català", epoca: "s.XX" },
    { titulo: "Ciberiada", autor: "Stanislaw Lem", categoria: "ciencia-ficción", idioma: "español", epoca: "s.XX" },
    { titulo: "Solaris", autor: "Stanislaw Lem", categoria: "ciencia-ficción", idioma: "català", epoca: "s.XX" },
    { titulo: "El hombre bicentenario", autor: "Isaac Asimov", categoria: "ciencia-ficción", idioma: "español", epoca: "s.XX" },
    { titulo: "Tokio Blues", autor: "Haruki Murakami", categoria: "drama", idioma: "español", epoca: "s.XX" },
    { titulo: "Romancero Gitano", autor: "Federico García Lorca", categoria: "poesia", idioma: "español", epoca: "s.XX" },
    { titulo: "Los aventuras de Sherlock Holmes", autor: 'Arthur Conan Doyle', categoria: "misterio", idioma: "español", epoca: "s.XIX" },
    { titulo: "Rebelió a la granja", autor: 'George Orwell', categoria: "drama", idioma: "català", epoca: "s.XX" },
    { titulo: "La Divina Comedia", autor: "Dante Alighieri", categoria: "drama", idioma: "español", epoca: "clásica" },
    { titulo: "Fahrenheit 451", autor: "Ray Bradbury", categoria: "ciencia-ficción", idioma: "català", epoca: "s.XX" },
    { titulo: "Cròniques Marcianes", autor: "Ray Bradbury", categoria: "ciencia-ficción", idioma: "català", epoca: "s.XX" },
]





// ==========================================================================================================
// EJERCICIO 1
// Libros disponibleS
// Mostrar la lista de obras alfabéticamente según el título, en forma de lista ordenada

// Llista del llibres
// const listaLibros = document.getElementById("listaLibros");

function mostrarLibros() {
    // Seleccionamos el contenedor donde mostraremos la lista de libros
    const contenedor = document.getElementById("ejer1");
    contenedor.innerHTML = "";

    // Creamos una lista ordenada
    const lista = document.createElement("ol");
    lista.style.fontSize = "12px";

    // Ordenamos los libros alfabéticamente por título antes de mostrarlos
    biblioteca.sort((a, b) => a.titulo.localeCompare(b.titulo));

    // Recorremos la biblioteca y agregamos cada libro a la lista
    biblioteca.forEach(libro => {
        const item = document.createElement("li");
        item.textContent = libro.titulo;
        lista.appendChild(item);
    });

    // Agregamos la lista al contenedor
    contenedor.appendChild(lista);
}

// Llamamos a la función para mostrar los libros al cargar la página
mostrarLibros();


// ==========================================================================================================
// EJERCICIO 2
// Filtrar las obras según los criterios indicados en el formulario.
// Las obras que cumplan las condiciones se mostrarán dentro del div con id salidaFiltrada
// Las obras se mostrarán según aparece en la imagen modelo1.png
// Hay que aplicar algunos estilos que ya están definidos en el css


const formFiltrado = document.getElementById("form-filtrado");
const ejer2 = document.getElementById("ejer2");

// Ocultamos la sección de resultados al inicio
ejer2.style.display = "none";

formFiltrado.addEventListener("change", () => {
    // Capturamos los valores seleccionados en el formulario
    const categoria = formFiltrado.categoria.value;
    const idioma = formFiltrado.idioma.value;
    const epoca = formFiltrado.epoca.value;

    // Filtramos la biblioteca según los valores seleccionados
    const filtrados = biblioteca.filter(libro =>
        (categoria === "todo" || libro.categoria === categoria) &&
        (idioma === "todo" || libro.idioma === idioma) &&
        (epoca === "todo" || libro.epoca === epoca)
    );

    // Mostramos los resultados filtrados
    if (filtrados.length) {
        ejer2.innerHTML = filtrados.map(libro => 
            `<p>${libro.titulo} - ${libro.autor} (${libro.epoca}, ${libro.idioma})</p>`
        ).join('');
        ejer2.style.display = "block"; // Mostramos la sección si hay resultados
    } else {
        ejer2.innerHTML = "<p>No hay resultados.</p>";
        ejer2.style.display = "block"; // Aseguramos que el mensaje se vea
    }
});


// ==========================================================================================================
// EJERCICIO 3
// Filtrar por autor
// Selección de obras según el nombre o parte del nombre de un autor.
// Al hacer clic sobre el botón buscar se mostrarán las obras cuyos autores cumplen los requisitos.
// La salida por pantalla será en este formato:
// Isaac Asimov : Yo, robot (ciencia-ficción, idioma : español, época : s.XX) 

const formAutor = document.getElementById("form-autor");
const ejer3 = document.getElementById("ejer3");

// Ocultamos la sección de resultados al inicio
ejer3.style.display = "none";

formAutor.addEventListener("submit", (event) => {
    event.preventDefault();
    
    // Capturamos el nombre del autor ingresado por el usuario
    const nombreAutor = document.getElementById("autor").value.toLowerCase();

    // Filtramos los libros cuyos autores contengan el texto ingresado
    const resultados = biblioteca.filter(libro => 
        libro.autor.toLowerCase().includes(nombreAutor)
    );

    // Mostramos los resultados en el formato adecuado
    if (resultados.length) {
        ejer3.innerHTML = resultados.map(libro => 
            `<p>${libro.autor} : ${libro.titulo} (${libro.categoria}, idioma: ${libro.idioma}, época: ${libro.epoca})</p>`
        ).join('');
        ejer3.style.display = "block";
    } else {
        ejer3.innerHTML = "<p>No se encontraron resultados.</p>";
        ejer3.style.display = "block";
    }
});



// ==========================================================================================================
// EJERCICIO 4
// Añadir obra a la biblioteca
// A partir del formulario, añadir obras a la biblioteca
// Conseguir permanencia con LocalStorage
// Actualizar automáticamente el listado de obras del ejercicio 1



function agregarObra() {
    // Capturamos los valores ingresados en el formulario
    const titulo = document.getElementById("incluir-titulo").value.trim();
    const autor = document.getElementById("incluir-autor").value.trim();
    const categoria = document.getElementById("incluir-categoria").value;
    const idioma = document.getElementById("incluir-idioma").value;
    const epoca = document.getElementById("incluir-epoca").value;

    // Verificamos que los campos obligatorios no estén vacíos
    if (titulo && autor) {
        // Agregamos el nuevo libro a la biblioteca
        biblioteca.push({ titulo, autor, categoria, idioma, epoca });

        // Guardamos la biblioteca actualizada en localStorage
        localStorage.setItem("biblioteca", JSON.stringify(biblioteca));

        // Actualizamos la lista de libros y el selector de eliminación
        mostrarLibros();
        actualizarSelectQuitar();
    }
}

// Modificamos la función mostrarLibros para que ordene antes de mostrar
function mostrarLibros() {
    const contenedor = document.getElementById("ejer1");
    contenedor.innerHTML = "";
    
    const lista = document.createElement("ol");
    lista.style.fontSize = "12px";

    // Ordenar antes de mostrar
    biblioteca.sort((a, b) => a.titulo.localeCompare(b.titulo));

    biblioteca.forEach(libro => {
        const item = document.createElement("li");
        item.textContent = libro.titulo;
        lista.appendChild(item);
    });

    contenedor.appendChild(lista);
}

// Asignar la función al botón
document.querySelector(".boton-incluir").onclick = agregarObra;




// ==========================================================================================================
// EJERCICIO 5
// Quitar obras de la biblioteca. Crea en un formulario una etiqueta select con las obras de la biblioteca.
// Al seleccionar una obra y enviar el formulario, se eliminará la obra de la biblioteca.
// Actualizar automáticamente el listado de obras del ejercicio 1
// Actualizar el LocalStorage



// Obtener la referencia al elemento <select> donde se mostrarán los libros disponibles para eliminar
const selectQuitar = document.getElementById("selectQuitarObra"); 

// Obtener la referencia al formulario que gestionará la eliminación de libros
const formQuitar = document.getElementById("formQuitarObra");

// Llenar el elemento <select> con las opciones correspondientes a los libros en la biblioteca
// Se crea dinámicamente un <select> con un <option> para cada libro, usando su índice como valor
selectQuitar.innerHTML = `<select id="libroAEliminar">${biblioteca.map((libro, i) => `<option value="${i}">${libro.titulo}</option>`).join('')}</select>`;

// Agregar un evento al formulario para manejar la eliminación de libros cuando el usuario lo envíe
formQuitar.addEventListener("submit", (event) => {
    event.preventDefault(); // Evitar el comportamiento predeterminado del formulario (recargar la página)

    // Obtener el índice del libro seleccionado en el <select>
    const index = document.getElementById("libroAEliminar").value;

    // Eliminar el libro de la biblioteca según su índice
    biblioteca.splice(index, 1);

    // Guardar la biblioteca actualizada en el localStorage para mantener los cambios persistentes
    localStorage.setItem("biblioteca", JSON.stringify(biblioteca));

    // Recargar la página para reflejar los cambios en la lista de libros
    location.reload();
});
