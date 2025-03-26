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

// Shopping Cart Application

// Wait for DOM to fully load before executing
document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const productItems = document.querySelectorAll('.productes div');
    const cartContainer = document.getElementById('carrito');
    const totalPriceElement = document.getElementById('preuFinal');
    
    // Cart data storage
    let cart = [];
    
    // Add click event to each product
    productItems.forEach(item => {
        item.addEventListener('click', function() {
            // Extract product info
            const productText = this.querySelector('p').textContent;
            const [name, priceInfo] = productText.split(':').map(str => str.trim());
            
            const price = parseFloat(priceInfo.split('€')[0].replace(',', '.'));
            const unit = priceInfo.includes('/kg') ? 'kg' : 'ud';
            
            // Get quantity from user
            let quantity;
            while (true) {
                quantity = prompt(`¿Cuántos ${unit} de ${name} quieres?`);
                
                // Exit if user cancels
                if (quantity === null) return;
                
                // Validate input
                quantity = quantity.replace(',', '.');
                if (!/^\d*\.?\d+$/.test(quantity)) {
                    alert('Por favor, introduce un número válido');
                    continue;
                }
                
                quantity = parseFloat(quantity);
                
                // Validate for whole numbers if sold by unit
                if (unit === 'ud' && !Number.isInteger(quantity)) {
                    alert('Para unidades, introduce un número entero');
                    continue;
                }
                
                if (quantity > 0) break;
                alert('La cantidad debe ser mayor que 0');
            }
            
            // Add to cart
            addToCart(name, quantity, price, unit);
        });
    });
    
    // Add item to cart
    function addToCart(name, quantity, price, unit) {
        // Check if item already exists in cart
        const existingIndex = cart.findIndex(item => item.name === name);
        
        if (existingIndex >= 0) {
            // Update quantity if exists
            cart[existingIndex].quantity += quantity;
        } else {
            // Add new item if doesn't exist
            cart.push({
                name,
                quantity,
                price,
                unit
            });
        }
        
        updateCartDisplay();
    }
    
    // Update cart UI
    function updateCartDisplay() {
        // Clear current cart display
        cartContainer.innerHTML = '';
        
        let total = 0;
        
        // Add each cart item to display
        cart.forEach((item, index) => {
            const itemTotal = item.quantity * item.price;
            total += itemTotal;
            
            // Create cart item element
            const itemElement = document.createElement('div');
            itemElement.className = 'cart-item';
            
            // Add delete button
            const deleteBtn = document.createElement('i');
            deleteBtn.className = 'fas fa-trash delete-btn';
            deleteBtn.title = 'Eliminar producto';
            deleteBtn.dataset.index = index;
            
            // Add item details
            itemElement.appendChild(deleteBtn);
            itemElement.innerHTML += `
                ${item.name} ${item.quantity} ${item.unit} 
                x ${item.price.toFixed(2)}€/${item.unit} 
                = ${itemTotal.toFixed(2)}€
            `;
            
            cartContainer.appendChild(itemElement);
        });
        
        // Update total price
        totalPriceElement.textContent = total.toFixed(2) + '€';
        
        // Add event listeners to delete buttons
        document.querySelectorAll('.delete-btn').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.stopPropagation();
                const index = parseInt(this.dataset.index);
                removeFromCart(index);
            });
        });
    }
    
    // Remove item from cart
    function removeFromCart(index) {
        cart.splice(index, 1);
        updateCartDisplay();
    }
    
    // Initialize cart display
    updateCartDisplay();
});