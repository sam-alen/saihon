
const nombreLibro = document.getElementById("nombreLibro");
const autorLibro = document.getElementById("autorLibro");
const precioLibro = document.getElementById("precioLibro");
const generoLibro = document.getElementById("generoLibro");  
const cantidadLibro = document.getElementById("cantidadLibro");
const btnEnviar= document.getElementById ("btnEnviar");
const descripcionLibro = document.getElementById("descripcionLibro");

//Variables REGEX
const regexA = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+([ '-][a-zA-ZÀ-ÿ\u00f1\u00d1]+)*$/;
const regexPrecio = /^(?:\$\s?)?\d+(?:\.\d{1,2})?$/;
const regexNL = /^[a-zA-Z0-9À-ÿ\u00f1\u00d1'’\-.,:;!?"() ]+$/;
const regexDes = /^[a-zA-Z0-9À-ÿ\u00f1\u00d1'’\-.,:;!?"()&%$#@*\n\r ]+$/;
//const regexStock = /^\d+$/;
//const regexGen = /^[a-zA-ZÀ-ÿ\u00f1\u00d1'’\-., ]+$/;

let Libros= []; //lista de libros

function agregarLibros(){
  if(validateAutor () && validateTitulo () && validatePrecio () && validateDescripcion ()){
    let libro = { 
      title: nombreLibro.value,
      price: precioLibro.value,
      author: autorLibro.value,
      description: descripcionLibro.value,
      id: null,
      genre: null,
      cover_image: null,
    };
  Libros.push(libro); //se agregan los datos del libro
  console.log(Libros);
  }
}


btnEnviar,addEventListener("click", function (event) {
  event.preventDefault();
  agregarLibros();
})


function validateAutor (){
  let istrue = regexA.test(autorLibro.value);
  
  if (istrue){
  return true;
  }else{
    return false;
  }
}

function validateTitulo (){
  let istrue = regexNL.test(nombreLibro.value);
  if (istrue){
    return true;
    }else{
      return false;
    }
}

function validatePrecio (){
  let istrue = regexPrecio.test(precioLibro.value);
  if (istrue){
    return true;
    }else{
      return false;
    }
}

function validateDescripcion (){
  let istrue = regexDes.test(descripcionLibro.value);
  if (istrue){
    return true;
    }else{
      return false;
    }

}



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