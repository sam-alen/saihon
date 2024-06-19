const header = document.getElementById('header');

const nombre = document.getElementById("Nombre");
const contrase = document.getElementById("exampleInputPassword");
const email = document.getElementById("exampleInputEmail1");
const telefono = document.getElementById("telefono");
const confirmacion = document.getElementById("exampleConfirm");

const btn = document.getElementsByClassName("btn");
const submitRegistro = document.getElementById("submitSupremo");

console.log(btn);
console.log(submitRegistro);

let user = [];

//Validaciones version 1

function validarNombre(){
     let reName = RegExp(/[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{3,50}$/);
     console.log(reName.test(nombre.value));
     return reName.test(nombre.value);
}

function validarEmail(){
    let reMail = RegExp(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/);
    console.log(reMail.test(email.value)); 
    return reMail.test(email.value);
 }

 // contraseña de 8 caracteres minimo, una mayus, una minus, un caracter especial y un numero
 function validarPassword(){
    let rePass = RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/);
    console.log(rePass.test(contrase.value));
     return (contrase.value === confirmacion.value && rePass.test(contrase.value));

 }

 function validarTelefono(){
    let rePhone = /(?:\+52\s?)?(\(?\d{2,3}\)?)?(\s|-)?(\d{4})(\s|-)?(\d{4})/;

    telefono.value.match(rePhone);
    console.log(telefono.value.match(rePhone));
    return telefono.value.match(rePhone);
}




function crearUsuario(){
    if (validarNombre(nombre) && validarEmail(email) && validarPassword(contrase, confirmacion) && validarTelefono()){
      let user = [];      
      
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