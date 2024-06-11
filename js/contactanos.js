let btnReal = document.getElementById("btnEnviar"); 
let span = document.getElementById("error");

function validateForm() {
  let name = document.getElementById("exampleInputName");
  let email = document.getElementById("exampleInputEmail");
  let phone = document.getElementById("exampleInputPhone");
  let message = document.getElementById("exampleFormControlTextarea1");

  // span Errores
  let errorNombre = document.getElementById("errorNombre");
  let errorTelefono = document.getElementById("errorTelefono");
  let errorEmail = document.getElementById("errorEmail");
  let errorMensaje = document.getElementById("errorMensaje");

  // Limpiar errores
  errorNombre.innerHTML = "";
  errorTelefono.innerHTML = "";
  errorEmail.innerHTML = "";
  errorMensaje.innerHTML = "";

  let valid = true;

  // Regex
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let phoneRegex = /^[1-9][0-9]{9,}$/; // al menos 10 digitos, no comenzar en 0
  let nameRegex = /^[a-zA-Z\s]{3,}$/; // Nombre debe tener al menos 3 caracteres y solo puede contener letras y espacios

  // Validar Nombre
  if (name.value.trim() === "" || !nameRegex.test(name.value)) {
      errorNombre.innerHTML = "Please enter a valid name (at least 3 characters long)";
      valid = false;
  }

  // Validar email
  if (email.value.trim() === "" || !emailRegex.test(email.value)) {
      errorEmail.innerHTML = "Please enter a valid email";
      valid = false;
  }

  // Validar telefono
  if (phone.value.trim() === "" || !phoneRegex.test(phone.value)) {
      errorTelefono.innerHTML = "Please enter a valid number (at least 10 digits long and cannot start with 0)";
      valid = false;
  }

  // Validar mensaje
  if (message.value.trim() === "") {
      errorMensaje.innerHTML = "Please enter a valid message";
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
                alert('Formulario enviado con éxito!');
            }, function(error) {
                console.log('FAILED...', error);
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