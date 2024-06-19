const header = document.getElementById('header');

const nombre = document.getElementById("Nombre");
const contrase = document.getElementById("exampleInputPassword");
const email = document.getElementById("exampleInputEmail1");
const telefono = document.getElementById("telefono");
const confirmacion = document.getElementById("exampleConfirm");

const btn = document.getElementsByClassName("btn");
const submitRegistro = document.getElementById("submitSupremo");

const errorCampos = document.getElementById("errorCampos");
errorCampos.style.color = "crimson";
let user = [];

const reName = RegExp(/[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{3,50}$/);
const reMail = RegExp(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/);
const rePass = RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/);
const rePhone = /(?:\+52\s?)?(\(?\d{2,3}\)?)?(\s|-)?(\d{4})(\s|-)?(\d{4})/;

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
      errorString += " Contraseña incorrecta <br>";
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
    errorString += " Telefono incorrecto <br>";
    telefono.style.border = "2px solid crimson";
    telefonoValido = false;
  }

    // if (validarNombre() && validarEmail() && validarPassword() && validarTelefono()){
    if (nombreValido && emailValido && contraValida && telefonoValido && contraIguales){ 
      
      if (localStorage.getItem("user") != null){
        user = JSON.parse(localStorage.getItem("user"));
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
    } else {
      errorCampos.innerHTML= errorString;
    }
}

//EventListener
submitRegistro.addEventListener("click", function(event){
    event.preventDefault();
    crearUsuario()
})


//HEADER 
function addNavbar(header){
    console.log('se cargó navbar')
  
  
    header.insertAdjacentHTML('afterbegin', `
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <a class="navbar-brand" href="#"><h2 id="logo">Saihon</h2></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active otrosL" aria-current="page" href="./index.html">Inicio</a>
                </li>
                <p class="separador">|</p>
                
                <li class="nav-item">
                  <a class="nav-link otrosL" href="./catalogo.html">Catálogo</a>
                </li>
                <p class="separador">|</p>
                
                <li class="nav-item">
                  <a class="nav-link otrosL" href="./contactanos.html">Contáctanos</a>
                </li>
                <p class="separador">|</p>
                
                <li class="nav-item">
                  <a class="nav-link otrosL"  href="./nosotros.html">Nosotros</a>
                </li>
                
                
              </ul>
            </div>
          </div>
        </nav>
        `)
  
  }
  
  addNavbar(header)