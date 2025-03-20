/*
Hay que programar un carrito de compra de fruta.

El cliente eligirá que fruta quiere haciendo click sobre la imagen.
Un mensaje emergente le preguntará qué cantidad quiere.

Esta información se mostrará a la derecha, bajo "Total carrito", 
en <p id="carrito"></p>, de esta forma:
 Kiwi 2 kg x 4,20€/kg = 8,40 €

El total se actualizará con cada compra
 Total Compra: 8,40€
 
Se dará la opción de añadir o no más productos que se mostrarán
a continuación de los anteriores, y se sumará todo en el total. 
Por ejemplo:  
 Kiwi 2 kg x 4, 20€/kg = 8, 40€
 Pomelo 1 kg x 2,50€/kg = 2,50€
 Total Compra: 10,90€

Puedes modificar el código facilitado si ello te ayuda con el ejercicio,
pero deberás justificarlo.

Recuerda la importancia comentar con detalle el código.

 Lo importante es el cálculo, no los estilos css
 */

//  let producto = document.querySelector(".imatges")
//  producto[i].addEventListener("click", () => {
//     let cantidad = prompt("¿Que cantidad de " + producto[i] + " desea?")
//     let precio = document.querySelector("p.imatges").split(" : ")
//     let carrito = carrito.getElementById("carrito").textContext
//     carrito = cantidad * precio

//  })

const products = document.querySelectorAll(".productes div"); // Recibimos los elementos de productos
const cartElement = document.getElementById("carrito"); // Creamos la variable para una linea del carrito
const totalElement = document.getElementById("preuFinal"); // Creamos la variable para mostrar el total
let cart = []; // la lista del carrito

// Добавляем обработчик событий для каждого фрукта
products.forEach(product => {
    product.addEventListener("click", function () {
        const name = product.querySelector("p").textContent.split(":")[0].trim(); // Получаем название фрукта
        const priceText = product.querySelector("p").textContent.split(":")[1].trim(); // Получаем цену
        const price = parseFloat(priceText.replace(',', '.')); // Преобразуем цену в число
        const unit = priceText.includes("€/kg") ? "kg" : "ud"; // Определяем единицу измерения

        let quantity;
        while (true) {
            quantity = prompt(`¿Cuántos ${unit} de ${name} quieres?`); // Запрашиваем количество у пользователя
            quantity = quantity.replace(',', '.'); // Заменяем запятую на точку для корректного парсинга

            if (!/^\d+(\.\d+)?$/.test(quantity)) {
                alert("Por favor, introduce un número válido.");
                continue;
            }
            
            quantity = parseFloat(quantity);
            
            if (unit === "ud" && !Number.isInteger(quantity)) {
                alert("Para unidades enteras, por favor introduce un número entero.");
                continue;
            }
            
            if (quantity > 0) {
                break;
            } else {
                alert("La cantidad debe ser mayor que 0.");
            }
        }

        addToCart(name, quantity, price, unit); // Добавляем товар в корзину
    });
});

// La funccion para añadir items al carrito
function addToCart(name, quantity, price, unit) {//con los siguientes argumentos
    const existingItem = cart.find(item => item.name === name); // buscamos si el elemento ya existe en el carrito para no añadir la linea separada para el producto que ya existe
    if (existingItem) { //si ya existe =>
        existingItem.quantity += quantity; // => subimos la cantidad
    } else {
        cart.push({ name, quantity, price, unit }); // Si no añadimos la linea con el producto nuevo
    }
    updateCart(); // 
}

// La funccion para 
function updateCart() {
    cartElement.innerHTML = ""; // Очищаем содержимое корзины
    let total = 0;
    cart.forEach((item, index) => {
        const itemTotal = (item.quantity * item.price).toFixed(2); // Рассчитываем стоимость товара
        total += parseFloat(itemTotal); // Обновляем итоговую сумму

        const cartItem = document.createElement("p"); // Создаем элемент для отображения товара в корзине
        
        const deleteButton = document.createElement("i"); // Создаем иконку удаления
        deleteButton.classList.add("fas", "fa-trash");
        deleteButton.style.cursor = "pointer";
        deleteButton.style.marginRight = "10px";
        deleteButton.addEventListener("click", function () {
            removeFromCart(index); // Добавляем обработчик удаления товара
        });
        
        cartItem.appendChild(deleteButton); // Добавляем иконку удаления перед текстом
        cartItem.innerHTML += `${item.name} ${item.quantity} ${item.unit} x ${item.price.toFixed(2)}€/ ${item.unit} = ${itemTotal}€ `;
        
        cartElement.appendChild(cartItem); // Добавляем товар в корзину
    });
    totalElement.textContent = total.toFixed(2) + "€"; // Обновляем итоговую сумму
}

// Функция удаления товара из корзины
function removeFromCart(index) {
    cart.splice(index, 1); // Удаляем товар по индексу
    updateCart(); // Обновляем корзину
}
