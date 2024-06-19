const header = document.getElementById('header');

const nombre = document.getElementById("Nombre");
const contrase = document.getElementById("exampleInputPassword");
const email = document.getElementById("exampleInputEmail1");
const telefono = document.getElementById("telefono");
const confirmacion = document.getElementById("exampleConfirm");

const btn = document.getElementsByClassName("btn");
const submitRegistro = document.getElementById("submitSupremo");

const errorCampos = document.getElementById("errorCampos");

let errorString = "Error: ";
errorString = errorString.concat("Haola");
let user = [];

const reName = RegExp(/[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{3,50}$/);
const reMail = RegExp(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/);
const rePass = RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/);
const rePhone = /(?:\+52\s?)?(\(?\d{2,3}\)?)?(\s|-)?(\d{4})(\s|-)?(\d{4})/;

//Validaciones version 1

// function validarNombre(){
//      let reName = RegExp(/[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{3,50}$/);
//      if (!reName.test(nombre.value)){
//         nombre.style.border = "2px solid crimson";
//         errorString = errorString.concat(`Nombre no váilido <br>`);
//      }
//      return reName.test(nombre.value);
// }

// function validarEmail(){
//     let reMail = RegExp(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/);
//     if (!reMail.test(email.value)){
//       email.style.border = "2px solid crimson";
//       errorString = errorString.concat(`Correo no váilido <br>`);
//    }
//     return reMail.test(email.value);
//  }

//  // contraseña de 8 caracteres minimo, una mayus, una minus, un caracter especial y un numero
//  function validarPassword(){
//     let rePass = RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/);
//     if (!rePass.test(contrase.value)){
//       contrase.style.border = "2px solid crimson";
//       errorString = errorString.concat(`Correo no váilido <br>`);
//    }
//      return (contrase.value === confirmacion.value && rePass.test(contrase.value));

//  }

//  function validarTelefono(){
//     let rePhone = /(?:\+52\s?)?(\(?\d{2,3}\)?)?(\s|-)?(\d{4})(\s|-)?(\d{4})/;
//     if (!rePhone.test(telefono.value)){
//       telefono.style.border = "2px solid crimson";
//       errorString = errorString.concat(`Correo no váilido <br>`);
//    }
//     return telefono.value.match(rePhone);
// }


function crearUsuario(){
  errorCampos.innerHTML = "";



  // Validar Nombre
  let nombreValido = true;
  if(!reName.test(nombre.value)){
    nombre.style.border = "2px solid crimson";
    errorString = errorString.concat(`Nombre no váilido <br>`);
    nombreValido = false;
  }

  // Validar Email
  let emailValido = true;
  if(!reName.test(nombre.value)){
    
    emailValido = false;
  }


  // Validar Password

  // Validar Telefono

    if (validarNombre() && validarEmail() && validarPassword() && validarTelefono()){
      // let user = [];      
      
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
      errorCampos.insertAdjacentHTML("beforebegin",errorString);
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