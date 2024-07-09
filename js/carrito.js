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

btnLimpiar.addEventListener("click", () => eliminarTodos());

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

//Obtener Cart del localStorage
function obtenerCarrito() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    return cart;
}

//Actualizar el LocalStorage
function actualizarCart(cart){
    localStorage.setItem('cart', JSON.stringify(cart));
}

//Agregar o modificar los elementos en la tabla
function actualizarTabla(cart) {
    let cartObtenido = obtenerCarrito();
    const cuerpoTabla = document.querySelector('.compras .tbody');
    const totalSpan = document.getElementById("total");
    cuerpoTabla.innerHTML = '';
    totalSpan.innerHTML = '';

    let total = 0;

    cartObtenido.forEach((item, index) => {
        const row = document.createElement('div');
        row.classList.add('row');

        // Insertar en celda 'titulo'
        const tituloCelda = document.createElement('div');
        tituloCelda.classList.add('col');
        tituloCelda.innerText = item.title;
        row.appendChild(tituloCelda);

        // Insertar en celda 'precio'
        const precioCelda = document.createElement('div');
        precioCelda.classList.add('col');
        precioCelda.innerText = `$${item.price.toFixed(2)}`;
        row.appendChild(precioCelda);

        // Insertar en celda 'cantidad'
        const cantidadCelda = document.createElement('div');
        cantidadCelda.classList.add('col');
        let cantidadInput = document.createElement('input');
        cantidadInput.type = 'number';
        cantidadInput.min = 1;
        cantidadInput.value = item.quantity || 1;
        cantidadInput.addEventListener('change', (event) => actualizarCantidad(event, index));
        cantidadCelda.appendChild(cantidadInput);
        row.appendChild(cantidadCelda);

        // Insertar en celda subtotal
        const subtotalCelda = document.createElement('div');
        subtotalCelda.classList.add('col');
        const subtotal = (item.price * cantidadInput.value).toFixed(2);
        subtotalCelda.innerText = `$${subtotal}`;
        row.appendChild(subtotalCelda);

        // Insertar botón de eliminar
        const btnDelete = document.createElement('div');
        btnDelete.classList.add('col');
        btnDelete.innerHTML = `<button id="btnEliminar" type="button" class="btn btn-secondary">Eliminar</button>`;
        btnDelete.querySelector('button').addEventListener("click", () => eliminarUnLibro(item.id));
        row.appendChild(btnDelete);

        cuerpoTabla.appendChild(row);
    });
    actualizarTotal();
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

//funcion para eliminar un libro de la tabla
function eliminarUnLibro(itemId){
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
   
    // Encontrar el índice del producto a eliminar
   cart = cart.filter(item => item.id !== itemId);
    
    actualizarCart(cart);
    actualizarTabla();
}


//funcion para eliminar todos los libros de la tabla
function eliminarTodos(index){
    localStorage.clear();
    actualizarCart(limpiar);
    actualizarTabla();
}

document.addEventListener('DOMContentLoaded', actualizarTabla);

//Guardar la nueva tarjeta
function agregarNuevaTarjeta() {
    const numeroTarjeta = document.getElementById("inputNumero");
    const nombreUsuario = document.getElementById("exampleInputName");
    const fechaExp = document.getElementById("fechaHelpBlock");
    const checkTarjeta = document.getElementById("checkTarjeta");

    // Crear el nuevo HTML para la tarjeta
    const nuevosDatos = `<input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
        <label class="form-check-label" for="flexRadioDefault1">
            <img src="assets/imagenes/logo/card-2.svg" id="logoTarjeta" alt="logo tarjeta">
            Tarjeta Visa terminación **${numeroTarjeta.value.slice(-2)} | ${nombreUsuario.value} | ${fechaExp.value}
        </label>`;

    // Insertar la nueva tarejta en el div
    checkTarjeta.insertAdjacentHTML('beforeend', nuevosDatos);

    // Alerta del boton
    Swal.fire({
        position: "center",
        icon: "success",
        title: "Datos guardados",
        showConfirmButton: false,
        timer: 1500
    });
    
    //Limpiar los campos del formulario 
        document.getElementById("inputNumero").value = ""; //numero de tarejta
        document.getElementById("inputFecha").value = ""; //fecha de expiración
        document.getElementById("inputCod").value = ""; //codigo seguridad
        document.getElementById("exampleInputName").value = ""; //nombre usuario
        document.getElementById("exampleInputPhone").value=""; //numero de telefono
        document.getElementById("exampleInputEmail").value="";//correo
        document.getElementById("exampleInputAddress").value="";//direcion
   
}

function ValidateForm(){

}

nuevaTarjeta.addEventListener("click", (event) => {
    event.preventDefault();
    agregarNuevaTarjeta();
});
    




