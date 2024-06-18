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

    // Validar Nombre
    if (name.value.trim() === "") {
        errorNombre.innerHTML = "Please enter a valid name";
        valid = false;
    } else if (name.value.length < 3) {
        errorNombre.innerHTML = "Name must be at least 3 characters long";
        valid = false;
    }

    // Validar email
    if (email.value.trim() === "") {
        errorEmail.innerHTML = "Please enter a valid email";
        valid = false;
    } else if (!email.value.includes('@')) {
        errorEmail.innerHTML = "Please enter a valid email";
        valid = false;
    }

    // Validar telefono
    if (phone.value.trim() === "") {
        errorTelefono.innerHTML = "Please enter a valid number";
        valid = false;
    } else if (phone.value.length < 3) {
        errorTelefono.innerHTML = "Number must be at least 3 digits long";
        valid = false;
    } else if (isNaN(phone.value)) {
        errorTelefono.innerHTML = "Please enter a valid number";
        valid = false;
    } else if (phone.value <= 0) {
        errorTelefono.innerHTML = "Please enter a valid number";
        valid = false;
    }

    // validar mensaje
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
                
                
              </ul>
            </div>
          </div>
        </nav>
        `)

}

addNavbar(header)