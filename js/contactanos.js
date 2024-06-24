let btnReal = document.getElementById("btnEnviar");
let span = document.getElementById("error");


//Funcion para validar el formulario
function validateForm() {
  //elementos necesarios
  let name = document.getElementById("exampleInputName");
  let email = document.getElementById("exampleInputEmail");
  let phone = document.getElementById("exampleInputPhone");
  let message = document.getElementById("exampleFormControlTextarea1");

  // span para mostrar errorer 
  let errorNombre = document.getElementById("errorNombre");
  let errorTelefono = document.getElementById("errorTelefono");
  let errorEmail = document.getElementById("errorEmail");
  let errorMensaje = document.getElementById("errorMensaje");

  // Limpiar errores
  errorNombre.innerHTML = "";
  errorTelefono.innerHTML = "";
  errorEmail.innerHTML = "";
  errorMensaje.innerHTML = "";

  //bandera para la validacion
  let valid = true;

  // Regex patterns proporcionados por IHATE REGEX
  let namePattern = /^[a-zA-Z\s]{3,}$/;
  let emailPattern = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  let phonePattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  let messagePattern = /^.{20,}$/;

  if (!namePattern.test(name.value.trim())) {
    errorNombre.innerHTML = "Por favor ingresa un nombre válido (al menos 3 caracteres)";
    name.setAttribute("style", "border-color: red;");
    valid = false;
  }

  if (!emailPattern.test(email.value.trim())) {
    errorEmail.innerHTML = "Por favor ingresa un email válido";
    email.setAttribute("style", "border-color: red;");
    valid = false;
  }

  if (!phonePattern.test(phone.value.trim())) {
    errorTelefono.innerHTML = "Por favor ingresa un teléfono válido (entre 10 y 12 dígitos)";
    phone.setAttribute("style", "border-color: red;");
    valid = false;
  }

  if (!messagePattern.test(message.value.trim())) {
    errorMensaje.innerHTML = "Por favor ingresa un mensaje válido (al menos 20 caracteres)";
    message.setAttribute("style", "border-color: red;");
    valid = false;
  }

  return valid;
}

btnReal.addEventListener("click", function(e) {
    e.preventDefault();
    if (validateForm()) {
        let name = document.getElementById("exampleInputName").value;
        let email = document.getElementById("exampleInputEmail").value;
        let phone = document.getElementById("exampleInputPhone").value;
        let message = document.getElementById("exampleFormControlTextarea1").value;

        // Parámetros para enviar el correo
        let templateParams = {
            name: name,
            email: email,
            phone: phone,
            message: message
        };

        // Enviar el correo usando EmailJS
        emailjs.send('service_0xtsbph', 'template_oy49esc', templateParams)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                //alerta de exito
                Swal.fire({
                  position: "center",
                  icon: "success",
                  title: response.text,
                  showConfirmButton: false,
                  timer: 2000
                });
                // Limpiar los campos
                document.getElementById("exampleInputName").value = "";
                document.getElementById("exampleInputEmail").value = "";
                document.getElementById("exampleInputPhone").value = "";
                document.getElementById("exampleFormControlTextarea1").value = "";
        
            }, function(error) {
                console.log('FAILED...', error);

                Swal.fire({
                  position: "center",
                  icon: "error",
                  title: response.text,
                  showConfirmButton: false,
                  timer: 2000
                });
            });
    }
});


/*
****************************
*   Navbar  - Contactanos  *
****************************

*/


const header = document.getElementById('header');


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
                  <a class="nav-link otrosL" aria-current="page" href="./index.html">Inicio</a>
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
                <p class="separador">|</p>

                <li class="nav-item">
                  <a class="nav-link otrosL"  href="./inicioSesion.html">Inicia Sesión</a>
                </li>
              
                
                
              </ul>
            </div>
          </div>
        </nav>
        `)

}

addNavbar(header)