const header = document.getElementById('header');

let nombre = document.getElementById("Nombre");
let contraseña = document.getElementById("exampleInputPassword");
let email = document.getElementById("exampleInputEmail1");
let telefono = document.getElementById("telefono");
let confirmacion = document.getElementById("exampleConfirm");

let btn = document.getElementsByClassName("btn");
let submitRegistro = btn.item(1);

console.log(btn);

let user = [];

//RegExp
/*
Username: https://ihateregex.io/expr/username
Email: https://emailregex.com/
Password: https://ihateregex.io/expr/password
*/

//Validaciones version 1

function validarNombre(nombre){
     let reName = RegExp(/^[a-z0-9_-]{3,15}$/);
     console.log(reName.test(nombre));
     return reName.test(nombre);
}

function validarEmail(email){
    let reMail = RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    console.log(reMail.test(email)); 
    return reMail.test(email);
 }

 function validarPassword(contraseña){
 // let valid = true;
     let rePass = RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/);
     console.log(rePass.test(contraseña));

     if((contraseña.value === confirmacion.value) && rePass.test(contraseña)){
      console.log("La contraseña es igual");
      return true;
     } else {
      console.log("La contraseña es diferente");
      return false;
     }
 }

 function validarTelefono(telefono){
    let rePhone = RegExp(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/);
    console.log(rePhone.test(telefono));
    return rePhone.test(telefono);
}




function crearUsuario(){
    if (validarNombre() && validarEmail() && validarPassword() && validarTelefono()){
      
      if (localStorage.getItem("user") != null){
        user = JSON.parse(localStorage.getItem("user"));
      }

      
      
      let Usuario = {
            UserName: nombre.value,
            Email: email.value,
            Password: pass.value,
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
    console.log(event);
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