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


// Elementos del DOM
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
    let librosLocalStorage = JSON.parse(localStorage.getItem("librosLocalStorage"));
    if (librosLocalStorage == null) {
      librosLocalStorage = [];
    }
    let nextId = 1;
    if (librosLocalStorage.length > 0 ) {
      const ids = librosLocalStorage.map(libro => libro.id);
      nextId = Math.max(...ids) + 1;
    } 

    console.log(librosLocalStorage);


    let libro = { 
      title: nombreLibro.value,
      price: precioLibro.value,
      author: autorLibro.value,
      publication_year: yearLibro.value,
      description: descripcionLibro.value,
      id: nextId,
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

function fillFields() {
  let idBuscado = document.getElementById("idLibro").value;
  let librosLocalStorage = JSON.parse(localStorage.getItem("librosLocalStorage"));
  
  if(idBuscado === ""){
    alert("Inserta un ID para buscar");
    return;
  }

  if (librosLocalStorage) {
    let libroEncontrado = librosLocalStorage.find(libro => libro.id == idBuscado);

    if (libroEncontrado) {
      document.getElementById("nombreLibro2").value = libroEncontrado.title;
      
      // Buscar el índice del género en el select
      let generoSelect = document.getElementById("generoLibro2");
      let generoIndex = Array.from(generoSelect.options).findIndex(option => option.value === libroEncontrado.genre[0]);

      if (generoIndex !== -1) {
        generoSelect.selectedIndex = generoIndex;
      }

      document.getElementById("autorLibro2").value = libroEncontrado.author;
      document.getElementById("yearLibro2").value = libroEncontrado.publication_year;
      document.getElementById("precioLibro2").value = libroEncontrado.price;
      document.getElementById("descripcionLibro2").value = libroEncontrado.description;
      document.getElementById("cantidadLibro2").value = libroEncontrado.cantidad_libro;
    } else {
      console.log("No hay un libro con ese ID");
    }
  } else {
    console.log("No hay libros en el Sistema");
  }
}

//Funcion Para Actualizar cambios
function updateFields() {
  let idBuscado = document.getElementById("idLibro").value;
  let librosLocalStorage = JSON.parse(localStorage.getItem("librosLocalStorage"));

  if (idBuscado === "") {
    alert("Inserta un ID para actualizar");
    return;
  }

  if (librosLocalStorage) {
    let libroEncontrado = librosLocalStorage.find(libro => libro.id == idBuscado);
    
    if (libroEncontrado) {
      let nuevoTitulo = document.getElementById("nombreLibro2").value;
      let nuevoGenero = document.getElementById("generoLibro2").value;
      let nuevoAutor = document.getElementById("autorLibro2").value;
      let nuevoYear = document.getElementById("yearLibro2").value;
      let nuevoPrecio = document.getElementById("precioLibro2").value;
      let nuevaDescripcion = document.getElementById("descripcionLibro2").value;
      let nuevaCantidadLibro = document.getElementById("cantidadLibro2").value;

      //bandera para cambios
      let hayCambios = false;

      if (libroEncontrado.title !== nuevoTitulo) {
        libroEncontrado.title = nuevoTitulo;
        hayCambios = true;
      }
      if (libroEncontrado.genre[0] !== nuevoGenero) {
        libroEncontrado.genre[0] = nuevoGenero;
        hayCambios = true;
      }
      if (libroEncontrado.author !== nuevoAutor) {
        libroEncontrado.author = nuevoAutor;
        hayCambios = true;
      }
      if (libroEncontrado.publication_year !== nuevoYear) {
        libroEncontrado.publication_year = nuevoYear;
        hayCambios = true;
      }
      if (libroEncontrado.price !== nuevoPrecio) {
        libroEncontrado.price = nuevoPrecio;
        hayCambios = true;
      }
      if (libroEncontrado.description !== nuevaDescripcion) {
        libroEncontrado.description = nuevaDescripcion;
        hayCambios = true;
      }
      if (libroEncontrado.cantidad_libro !== nuevaCantidadLibro) {
        libroEncontrado.cantidad_libro = nuevaCantidadLibro;
        hayCambios = true;
      }

      // Si hubo cambios, actualizar el localStorage
      if (hayCambios) {
        localStorage.setItem("librosLocalStorage", JSON.stringify(librosLocalStorage));
        alert("Los campos han sido actualizados exitosamente.");
      } else {
        alert("No hay cambios para actualizar.");
      }
    } else {
      alert("No hay un libro con ese ID");
    }
  } else {
    alert("No hay libros en el Sistema");
  }
}



//Conseguir el boton de buscar
const btnBuscarLibro = document.getElementById("btnFindId"); 

btnBuscarLibro.addEventListener("click", function(event) {
  event.preventDefault(); 
  fillFields();
});

const btnActualizarLibro = document.getElementById("btnUpdateId");

btnActualizarLibro.addEventListener("click", function(event) {
  event.preventDefault();
  updateFields();
});



