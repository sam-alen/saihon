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

//variables Datos Personales
const nombreUsuario = document.getElementById("exampleInputName");
const telefono = document.getElementById("exampleInputPhone");
const email = document.getElementById("exampleInputEmail");
const direccion =  document.getElementById("exampleInputAddress");


//variables datos tarjetas
const numeroTarjeta = document.getElementById("inputNumero");
const fechaExp = document.getElementById("inputFecha");
const codigo =document.getElementById("inputCod");

//Guardar la nueva tarjeta
function agregarNuevaTarjeta() {
    const checkTarjeta = document.getElementById("checkTarjeta");

    // Crear el nuevo HTML para la tarjeta
    const nuevosDatos = `<input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
        <label class="form-check-label" for="flexRadioDefault1">
            <img src="assets/imagenes/logo/card-2.svg" id="logoTarjeta" alt="logo tarjeta">
            Tarjeta Visa terminación **${numeroTarjeta.value.slice(-2)} | ${nombreUsuario.value} | ${fechaExp.value}
        </label>`;

    // Insertar la nueva tarejta en el div
    checkTarjeta.insertAdjacentHTML('beforeend', nuevosDatos);
}

function validateForm(){
    //error datos personales
    let errorNombre = document.getElementById("errorNombre");
    let errorTelefono = document.getElementById("errorTelefono");
    let errorEmail = document.getElementById("errorEmail");
    let errorDireccion = document.getElementById("errorDireccion");

    //error datos de tarjeta
    let errorTarjeta = document.getElementById("errorTarjeta");
    let errorFecha = document.getElementById("errorFecha");
    let errorCodigo = document.getElementById("errorCodigo");

    //limpiar errores:
    errorNombre.innerHTML = "";
    errorTelefono.innerHTML = "";
    errorEmail.innerHTML = "";
    errorDireccion.innerHTML = "";

    errorTarjeta.innerHTML = "";
    errorFecha.innerHTML = "";
    errorCodigo.innerHTML = "";
    
    clearErrors();
    let valid = true;

    //variables REGEX
    let nombrePattern = /^[a-zA-Z\s]{3,}$/; //nombre del usuario
    let emailPattern = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
    let phonePattern = /^((?!000)\d{3})[-\s]?\d{3}[-\s]?\d{4}$/
    let addressPattern = /^[a-zA-Z0-9\s\-\#\.]+$/;

    let tarjetaPattern = /^4\d{15}$/;
    let FechaPattern = /^(0[1-9]|1[0-2])\/\d{2}$/;
    let CodPattern = /^\d{3}$/;

    if(!nombrePattern.test(nombreUsuario.value.trim())){
        errorNombre.innerHTML = "Por favor ingresa un nombre válido (al menos 3 caracteres)";
        
        nombreUsuario.setAttribute("style", "background-color: #D97575;");
        valid = false;
    }//nombreUsuario

    if(!phonePattern.test(telefono.value.trim())){
        errorTelefono.innerHTML = "Por favor ingresa un teléfono válido";
        
        telefono.setAttribute("style", "background-color: #D97575;");
        valid = false;
    }//telefono

    if(!emailPattern.test(email.value.trim())){
        errorEmail.innerHTML = "Por favor ingresa un email válido";
        
        email.setAttribute("style", "background-color: #D97575;");
        valid = false;
    }//email

    if(!addressPattern.test(direccion.value.trim())){
        errorDireccion.innerHTML = "Por favor ingresa una dirección valida";
        
        direccion.setAttribute("style", "background-color: #D97575;");
        valid = false;
    }//DIRECCION

    if(!tarjetaPattern.test(numeroTarjeta.value.trim())){
        errorTarjeta.innerHTML = "Por favor ingresa un número válido de tarjeta (de 16 caracteres)";
        
        numeroTarjeta.setAttribute("style", "background-color: #D97575;");
        valid = false;
    }//Tarjeta

    if(!FechaPattern.test(fechaExp.value.trim())){
        errorFecha.innerHTML = "Por favor ingresa un fecha de expiración válida";
        
        fechaExp.setAttribute("style", "background-color: #D97575;");
        valid = false;
    }//fechaExp

    if(!CodPattern.test(codigo.value.trim())){
        errorCodigo.innerHTML = "Por favor codigo válido (3 caracteres)";
        
        codigo.setAttribute("style", "background-color: #D97575;");
        valid = false;
    }//Codigo

    return valid;
}

function clearErrors() {
    //datos personales
    nombreUsuario.setAttribute("style", "border-color: #ced4da;");
    nombreUsuario.setAttribute("style", "background-color: white;");
    email.setAttribute("style", "border-color: #ced4da;");
    email.setAttribute("style", "background-color: white;");
    telefono.setAttribute("style", "border-color: #ced4da;");
    telefono.setAttribute("style", "background-color: white;");
    direccion.setAttribute("style", "border-color: #ced4da;");
    direccion.setAttribute("style", "background-color: white;");

  //datos de tarejta
    numeroTarjeta.setAttribute("style", "border-color: #ced4da;");
    numeroTarjeta.setAttribute("style", "background-color: white;");
    fechaExp.setAttribute("style", "border-color: #ced4da;");
    fechaExp.setAttribute("style", "background-color: white;");
    codigo.setAttribute("style", "border-color: #ced4da;");
    codigo.setAttribute("style", "background-color: white;");
  
}

nuevaTarjeta.addEventListener("click", (event) => {
    event.preventDefault();
    agregarNuevaTarjeta;
    validateForm;
  

    /*if(valid){
        agregarNuevaTarjeta();
        // Alerta del boton
        Swal.fire({
        position: "center",
        icon: "success",
        title: "Datos guardados",
        showConfirmButton: false,
        timer: 1500
        });
    
        //Limpiar los campos del formulario 
        numeroTarjeta.value = ""; //numero de tarejta
        fechaExp.value = ""; //fecha de expiración
        codigo.value = ""; //codigo seguridad

        nombreUsuario.value = ""; //nombre usuario
        telefono.value=""; //numero de telefono
        email.value="";//correo
        direccion.value="";//direcion
    }else{
        clearErrors();
    }*/

    
});
    




