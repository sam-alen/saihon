// Elementos del DOM
const header = document.querySelector("header");// header para la navbar
const nombreLibro = document.getElementById("nombreLibro");
const autorLibro = document.getElementById("autorLibro");
const precioLibro = document.getElementById("precioLibro");
const generoLibro = document.getElementById("generoLibro");  
const cantidadLibro = document.getElementById("cantidadLibro");
const descripcionLibro = document.getElementById("descripcionLibro");
const yearLibro = document.getElementById("yearLibro");
const btnEnviar = document.getElementById("btnEnviar");

const deleteID = document.getElementById("deleteID");
const btnDelete = document.getElementById("btnDelete");

//botones de las pestañas
const btnagregar = document.getElementById("hello-tab");
const btnmodificar = document.getElementById("bye-tab");
const formularioContainer = document.getElementsByClassName("formularioContainer")[0];

btnmodificar.addEventListener("click", () => {
  formularioContainer.setAttribute("style", "display: none;");
});

btnagregar.addEventListener("click", () => {
  formularioContainer.setAttribute("style", "display: flex;");
});



// Variables REGEX
const regexA = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+([ '-][a-zA-ZÀ-ÿ\u00f1\u00d1]+)*$/;
const regexPrecio = /^(?:\$\s?)?\d+(?:\.\d{1,2})?$/;
const regexNL = /^[a-zA-Z0-9À-ÿ\u00f1\u00d1'’\-.,:;!?"() ]+$/;
const regexDes = /^[a-zA-Z0-9À-ÿ\u00f1\u00d1'’\-.,:;!?"()&%$#@*\n\r ]+$/;
const regexStock = /^\d+$/;
const regexPublication = /^\d{4}$/;

let libros = []; //lista de libros
//const regexGen = /^[a-zA-ZÀ-ÿ\u00f1\u00d1'’\-., ]+$/;
let librosLocalStorage = [];

let imageUrl = null;

addNavbar(header);

// Inicializar el widget de Cloudinary
let myWidget = cloudinary.createUploadWidget({
  cloudName: 'dckk99wpm', 
  uploadPreset: 'uw_test'
}, (error, result) => { 
  if (!error && result && result.event === "success") { 
    console.log('Imagen subida con éxito: ', result.info); 
    imageUrl = result.info.secure_url;
  } else if (error) {
    console.error('Error al subir la imagen: ', error);
  }
});

document.getElementById("upload_widget").addEventListener("click", function() {
  myWidget.open();
}, false);

function agregarLibros() {
  if (validateAutor() && validateTitulo() && validatePrecio() && validateDescripcion() && validategenero() && validateStock() && validateYear()) {
    let libro = { 
      title: nombreLibro.value,
      price: precioLibro.value,
      author: autorLibro.value,
      publication_year: yearLibro.value,
      description: descripcionLibro.value,
      id: libros.length + 1,
      genre: [generoLibro.value],
      cover_image: imageUrl,
    };
  
    libros.push(libro);

    // cada que se modifica el localStorage, se debe verificar y cargar su estado anterior
    if (localStorage.getItem("librosLocalStorage") != null){
      librosLocalStorage = JSON.parse(localStorage.getItem("librosLocalStorage"));
    }

    // Se almacena el libro en el localStorage
    librosLocalStorage.push(libro);
    localStorage.setItem("librosLocalStorage", JSON.stringify(librosLocalStorage));
    
    console.log(libros);

    nombreLibro.value = "";
    precioLibro.value = "";
    autorLibro.value = "";
    yearLibro.value = "";
    descripcionLibro.value = "";
    generoLibro.value = "";
    cantidadLibro.value = "";

    Swal.fire({
      position: "center",
      icon: "success",
      title: "El libro ha sido guardado con éxito",
      showConfirmButton: false,
      timer: 1500
    });
  } else {
    console.log("No se puede agregar este artículo");
    Swal.fire({
      icon: "error",
      title: "Error al agregar el artículo",
      text: "Favor de verificar los campos",
    });
  }

}

btnEnviar.addEventListener("click", function (event) {
  event.preventDefault();
  agregarLibros();
});

// Eliminar libros usando ID

function deletingBooks(){
let IDtoDelete = deleteID.value;
let idGet = localStorage.getItem("librosLocalStorage");

if(idGet){
  let toParse = JSON.parse(idGet);

  let indexToDelete = toParse.findIndex(toParse => toParse.id == IDtoDelete);
  if (indexToDelete !== -1){
    toParse.splice(indexToDelete, 1)

    localStorage.setItem("librosLocalStorage", JSON.stringify(toParse));
    console.log("Se eliminó el libro");

    Swal.fire({
      position: "center",
      icon: "success",
      title: "El libro se ha eliminado",
      showConfirmButton: false,
      timer: 1500
    });

  } else {
    console.log("Ese libro no se encontró");
  }

} 
}

btnDelete.addEventListener("click", function(event) {
  event.preventDefault();
  deletingBooks();
  
})

// Validaciones

function validateAutor() {
  let istrue = regexA.test(autorLibro.value);
  
  if (istrue) {
    return true;
  } else {
    return false;
  }
}

function validateTitulo() {
  let istrue = regexNL.test(nombreLibro.value);
  if (istrue) {
    return true;
  } else {
    return false;
  }
}

function validatePrecio() {
  let istrue = regexPrecio.test(precioLibro.value);
  if (istrue) {
    return true;
  } else {
    return false;
  }
}

function validateDescripcion() {
  let istrue = regexDes.test(descripcionLibro.value);
  if (istrue) {
    return true;
  } else {
    return false;
  }
}

function validategenero() {
  if (generoLibro.value == "Seleccionar") {
    return false;
  } else {
    return true;  
  }
}

function validateStock() {
  let istrue = regexStock.test(cantidadLibro.value);
  if (istrue) {
    return true;
  } else {
    return false;
  }
}

function validateYear(){
  let istrue = regexPublication.test(yearLibro.value);
  if (istrue){
    return true;
  } else {
    return false;
  }
}

function addNavbar(header) {
  console.log('se cargó navbar');

  
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
  `);
}


