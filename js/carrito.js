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
const datosPago = document.getElementById("datosPago");
const agregarTarjeta = document.getElementById("btnTarjeta");
const nuevaTarjeta = document.getElementById("nuevaTarjeta");


btnPagar.addEventListener("click", () => {
  //datosPago.setAttribute("style", "display: flex;");
  
  //Alerta de pago
  Swal.fire({
    position: "center",
    icon: "success",
    title: "Gracias por su compra",
    showConfirmButton: false,
    timer: 1500
  });
});

//desplegar los datos para agregar tarejta
agregarTarjeta.addEventListener('click', function() {
    datosPago.style.display="flex";
    
});

function obtenerCarrito() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    return cart;
}

function actualizarTabla(cart) {
    let cartObtenido = obtenerCarrito();
    const cuerpoTabla = document.querySelector('.compras tbody');
    const totalSpan = document.getElementById("total");
    cuerpoTabla.innerHTML = '';
    totalSpan.innerHTML = '';

    let total = 0;

    cartObtenido.forEach((item, index) => {

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
        let cantidadInput = document.createElement('input');
        cantidadInput.type = 'number';
        cantidadInput.min = 1;
        cantidadInput.value = item.quantity || 1;
        cantidadInput.addEventListener('change', (event) => actualizarCantidad(event, index));
        cantidadCelda.appendChild(cantidadInput);
        row.appendChild(cantidadCelda);

        //insertar en celda subtotal
        const subtotalCelda = document.createElement('td');
        const subtotal = (item.price * cantidadInput.value).toFixed(2);
        subtotalCelda.innerText = `$${subtotal}`;
        row.appendChild(subtotalCelda);

        const btnDelete = document.createElement('td');
        btnDelete.innerHTML = `<button id="btnEliminar" type="button" class="btn btn-secondary">Eliminar</button>`;
        row.appendChild(btnDelete)

        cuerpoTabla.appendChild(row);
    })
    actualizarTotal()
}

//Las cantidades y los precios no funcionaban, me desesperé y chatGTP me recomendó estas dos funciones :'D
function actualizarCantidad(event, index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart[index].quantity = parseInt(event.target.value);
    localStorage.setItem('cart', JSON.stringify(cart));
    actualizarTabla();
}

function actualizarTotal() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalSpan = document.getElementById("total");
    let total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    totalSpan.innerText = `$${total.toFixed(2)}`;
}

document.addEventListener('DOMContentLoaded', actualizarTabla);

//Limpiar tabla ****FALTA PROBAR***
btnLimpiar.addEventListener('click', function(e){
    e.preventDefault();
    tituloCelda.value = " ";
    precioCelda.value = " ";
    cantidadCelda.value = " ";
    subtotalCelda.value = " ";
    totalSpan.value = " ";

})



//Guardar la nueva tarjeta ***falta arreglar la función y agregar validaciones REJEX
const numeroTarjeta = document.getElementById("inputNumero").value;
const nombreUsuario = document.getElementById("exampleInputName").value;
const fechaExp = document.getElementById("fechaHelpBlock").value;

const checkTarjeta = document.getElementById("checkTarjeta");
const nuevosDatos = `<input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
        <label class="form-check-label" for="flexRadioDefault1"><img src="assets/imagenes/logo/card-2.svg" id="logoTarjeta" alt="logo tarjeta">
            Tarjeta Visa terminación **${numeroTarjeta.slice(-2)} | ${nombreUsuario} | ${fechaExp}</label>`;

nuevaTarjeta.addEventListener("click", () => {
   //alerta de datos guardados
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Datos guardados",
      showConfirmButton: false,
      timer: 1500
    });

    //agregar la nueva tarjeta
    
    checkTarjeta.insertAdjacentHTML('beforeend', nuevosDatos);

    //limpiar datos ***falta implementar

  });
