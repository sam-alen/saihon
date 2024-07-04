/*
*****************************************
*   SE AGREGA LA PLANTILLA DEL PROYECTO *
*       NAVBAR Y FOOTER                 *
*****************************************

*/

import { addNavbar, addFooter, showMenu } from './plantilla.js';

const header = document.getElementById('header');
const footer = document.getElementById('footer');


addNavbar(header);
addFooter(footer);
showMenu();

//ocultar info de tarjetas
const btnPagar = document.getElementById("pagar");
const btnLimpiar = document.getElementById("limpiar");
const datosPago = document.getElementsByClassName("addTarjeta");

btnPagar.addEventListener("click", () => {
  datosPago.setAttribute("style", "display: flex;");
});




//Cargar elementos del LocalStorage

function cartInicio(){
    let cart = JSON.parse(localStorage.getItem('cart'))

    if (cart ==null){
        cart=[];
        localStorage.setItem('cart', JSON.stringify(cart))
    }

    actualizarCarrito(cart);
}

function actualizarCarrito(cart) {
    const cuerpoTabla = document.querySelector('.compras tbody');
    const totalSpan = document.getElementsById("total");
    cuerpoTabla.innerHTML = '';
    totalSpan.innerHTML = '';

    let total = 0;

    cart.forEach((item, index) => {

        const row = document.createElement('tr');

        //insertar en celda 'titulo'
        const tituloCelda = document.createElement('td');
        tituloCelda.innerText = item.title;
        row.appendChild(tituloCelda);

        //insertar en celda 'precio'
        const precioCelda = document.createElement('td');
        precioCelda.innerText = `$${item.price.toFixed(2)}`;
        row.appendChild(precioCelda);

        //insertar en celda 'cantidad'
        const cantidadCelda = document.createElement('td');
        const cantidadInput = document.createElement('input');
        cantidadInput.type = 'number';
        cantidadInput.min = 1;
        cantidadInput.value = item.quantity || 1;
        cantidadInput.addEventListener('change', (event) => actualizarCantidad(event, index));
        cantidadCelda.appendChild(cantidadInput);
        row.appendChild(cantidadCelda);

        //insertar en celda subtotal
        const subtotalCelda = document.createElement('td');
        const subtotal = (item.price * cantidadInput.value).toFixed(2);
        subtotalCelda.appendChild(row);

        cuerpoTabla.appendChild(row);

        //actualizar el total
        totalSpan.appendChild(total += parseFloat(subtotal));
    })
}

function actualizarCantidad(event, index){

    let cart = JSON.parse(localStorage.getItem('cart'));

    cart[index].quantity = parseInt(event.target.value); //event: cuando el usuario cambia la cantidad

    localStorage.setItem('cart', JSON.stringify(cart));

    actualizarCarrito(cart);
}

document.addEventListener('DOMContentLoaded', cartInicio);