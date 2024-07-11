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



const nombre = document.getElementById("Nombre");
const contrase = document.getElementById("exampleInputPassword");
const email = document.getElementById("exampleInputEmail1");
const telefono = document.getElementById("telefono");
const confirmacion = document.getElementById("exampleConfirm");

const CampoResgitro = document.getElementById("CampoResgitro");
const CampoInicioSesion = document.getElementById("CampoInicioSesion");

const formularioInicioSesion = document.getElementById("formularioInicioSesion");
const formularioRegistro = document.getElementById("formularioRegistro");
const emailDos = document.getElementById("exampleInputEmail2");
const passwordDos = document.getElementById("exampleInputPassword2");
const submitSesion = document.getElementById("submit");

const btn = document.getElementsByClassName("btn");
const submitRegistro = document.getElementById("submitSupremo");

const errorCampos = document.getElementById("errorCampos");
errorCampos.style.color = "crimson";
let user = [];

const reName = RegExp(/[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{3,50}$/);
const reMail = RegExp(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/);
const rePass = RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/);
const rePhone = /(?:\+52\s?)?(\(?\d{2,3}\)?)?(\s|-)?(\d{4})(\s|-)?(\d{4})/;
const terminosCheckbox = document.getElementById("acepto-terminos");
const privacidadCheckbox = document.getElementById("acepto-privacidad");


const termino = document.getElementById("Termino");
//Validaciones version 1

// function validarNombre(){
//      let reName = RegExp(/[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{3,50}$/);
//      return reName.test(nombre.value.trim());
// }

// function validarEmail(){
//     let reMail = RegExp(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/);
//     return reMail.test(email.value.trim());
//  }

//  // contraseña de 8 caracteres minimo, una mayus, una minus, un caracter especial y un numero
//  function validarPassword(){
//     let rePass = RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/);
//      return (contrase.value.trim() === confirmacion.value.trim() && rePass.test(contrase.value.trim()));

//  }

//  function validarTelefono(){
//     let rePhone = /(?:\+52\s?)?(\(?\d{2,3}\)?)?(\s|-)?(\d{4})(\s|-)?(\d{4})/;
//     return telefono.value.trim().match(rePhone);
// }

//Funcion para mostrar el registro
function ocultar(){
  formularioInicioSesion.style.display="none";
  formularioRegistro.style.display="block";
  termino.style.display="block";
}

function mostrar() {
  formularioInicioSesion.style.display="block";
  formularioRegistro.style.display="none";
  termino.style.display="none";
}

function crearUsuario(){
  // Limpiamos los errores 
  let errorString = "";
  errorCampos.innerHTML = " ";
  nombre.style.border = "none";
  email.style.border = "none";
  contrase.style.border = "none";
  telefono.style.border = "none";
  confirmacion.style.border = "none";

  let nombreValido = true;
  if (!reName.test(nombre.value.trim())) {
    // errorNombre.innerHTML = "Por favor ingresa un nombre válido (al menos 3 caracteres)";
    errorString += " Nombre incorrecto <br>";
    nombre.style.border = "2px solid crimson";
    nombreValido = false;
  }

  let emailValido = true;
  if (!reMail.test(email.value.trim())) {
      // errorEmail.innerHTML = "Por favor ingresa un email válido";
      errorString += " Correo incorrecto <br>";
      email.style.border = "2px solid crimson";
      emailValido = false;
  }

  let contraValida = true;
  if (!rePass.test(contrase.value.trim())) {
      // errorTelefono.innerHTML = "Por favor ingresa un teléfono válido (entre 10 y 12 dígitos)";
      errorString += " Contraseña incorrecta: Contraseña incorrecta: Tu contraseña debe incluir al menos: una letra minúscula, una letra mayúscula, un dígito, un carácter especial de entre @, $, !, %, *, ?, & y tener una longitud mínima de 8 caracteres <br>";
      contrase.style.border = "2px solid crimson";
      contraValida = false;
  }

  let contraIguales = true;
  if (contrase.value.trim() != confirmacion.value.trim()){
    errorString += " Las contraseñas no coinciden <br>";
    confirmacion.style.border = "2px solid crimson";
    contraIguales = false;
  }

  console.log(contrase.value.trim());
  console.log(confirmacion.value.trim());
  let telefonoValido = true;
  if (!telefono.value.trim().match(rePhone)) {
    // errorTelefono.innerHTML = "Por favor ingresa un teléfono válido (entre 10 y 12 dígitos)";
    errorString += " Teléfono incorrecto <br>";
    telefono.style.border = "2px solid crimson";
    telefonoValido = false;
  }
  //validacion de terminos
  let terminosAceptados = terminosCheckbox.checked;
  let privacidadAceptada = privacidadCheckbox.checked;

  if (!terminosAceptados) {
      errorString += " Debes aceptar los términos y condiciones <br>";
      terminosCheckbox.style.outline = "2px solid crimson";
  } else {
      terminosCheckbox.style.outline = "none";
  }

  if (!privacidadAceptada) {
      errorString += " Debes aceptar la política de privacidad <br>";
      privacidadCheckbox.style.outline = "2px solid crimson";
  } else {
      privacidadCheckbox.style.outline = "none";
  }

  
  if (nombreValido && emailValido && contraValida && telefonoValido && contraIguales && terminosAceptados && privacidadAceptada) {
    let users = JSON.parse(localStorage.getItem("user")) || [];

    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqYWxpbEBnbWFpbC5jb20iLCJyb2xlIjoidXNlciIsImlhdCI6MTcyMDU0NDE3NSwiZXhwIjoxNzIwNTgwMTc1fQ.le13emOZj0ue4zmTQMe0A61BCON1fE2O6BESILufSSg");
    myHeaders.append("Content-Type", "application/json");
  
    const raw = JSON.stringify({
      nombre: nombre.value.trim(),
      email: email.value.trim(),
      password: contrase.value.trim(),
    });
  
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
  
    fetch("http://localhost:8088/api/usuarios/", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error("Error:", error));
      
    // Verificar si el usuario ya está registrado
    let userExists = users.some(user => user.Email === email.value.trim());
    
    if (userExists) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "El usuario ya está registrado",
        showConfirmButton: true
      });
      return;
    }

      let Usuario = {
            UserName: nombre.value,
            Email: email.value,
            Password: contrase.value,
            Telefono: telefono.value,
        }

      user.push(Usuario);
      console.log(Usuario);
      console.log(user);
      localStorage.setItem("user", JSON.stringify(user));

      Swal.fire({
        position: "center",
        icon: "success",
        title: "El usuario ha sido registrado con éxito",
        showConfirmButton: false,
        timer: 1500
      });
      setTimeout(() => {
        window.location.href = "inicioSesion.html";
      }, 1000);
    } else {
      errorCampos.style.display="block";
      errorCampos.innerHTML= errorString;
    }
}

// Función para validar inicio de sesión
async function validarOpcion() {
  let email = document.getElementById("exampleInputEmail2").value;
  let password = document.getElementById("exampleInputPassword2").value;

  let userError = document.getElementById("userError");

  const usuario = {
      email: email,
      password: password
  };

  try {
      const response = await fetch('http://localhost:8088/api/login/', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(usuario)
      });

      if (response.ok) {
          const data = await response.json();
          console.log('token:', data.accessToken);
          localStorage.setItem('token', data.accessToken);
          window.location.href = "index.html";
      } else {
          userError.style.display = "block";
          userError.innerHTML = "El usuario y/o contraseña son incorrectos";
          userError.style.color = "red";
      }
  } catch (error) {
      console.error('Error:', error);
      userError.style.display = "block";
      userError.innerHTML = "Ocurrió un error durante el login";
      userError.style.color = "red";
  }
}

//EventListener Registro
submitRegistro.addEventListener("click", function(event){
    event.preventDefault();
    crearUsuario();
})

//EventListener Ocultar 
CampoResgitro.addEventListener("click", function(event){
  event.preventDefault();
  userError.style.display="none";
  ocultar();
})


//EventListener regresoInicio de sesion
CampoInicioSesion.addEventListener("click", function(event){
  event.preventDefault();
  userError.style.display="none";
  mostrar();
})

//Event iniciar sesion
submitSesion.addEventListener("click", function(event){
  event.preventDefault();
  validarOpcion();
})


// Funciones de términos y condiciones y política de privacidad
document.getElementById('btn-terminos').addEventListener('click', function() {
  document.getElementById('modal-terminos').style.display = 'block';
});

document.getElementById('btn-privacidad').addEventListener('click', function() {
  document.getElementById('modal-privacidad').style.display = 'block';
});

const closeButtons = document.querySelectorAll('.close');
closeButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    let modal = button.parentElement.parentElement;
    modal.style.display = 'none';
  });
});



