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

const seccionLibro_todos= document.getElementById("seccionLibro-todos");

// const defaultSection = seccionLibro_todos;
const romancesec = document.getElementById('seccionLibro-romance');
const terrorsec = document.getElementById('seccionLibro-terror');
const cienciasec = document.getElementById('seccionLibro-CF');

const containerTodos = document.getElementById("container-books-todos");
const containerRomance = document.getElementById("container-books-romance");
const containerTerror = document.getElementById("container-books-terror");
const containerCF = document.getElementById("container-books-cf");

const linkaside = document.querySelectorAll('.aside__link');
let libros = []
let categorias = []

console.log(libros);
console.log(categorias);

const requestOptions = {
  method: "GET",
  redirect: "follow"
};

function fetchLibros() {
  return fetch("http://localhost:8088/api/libros/", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      libros = result;
      console.log(libros); // Aquí puedes trabajar con los datos
      return libros;
    })
    .catch((error) => console.error(error));
}

const requestOptionsCat = {
  method: "GET",
  redirect: "follow"
};

function fetchCategorias() {
  return fetch("http://localhost:8088/api/categorias/", requestOptionsCat)
    .then((response) => response.json())
    .then((result) => {
      categorias = result;
      console.log(categorias); // Aquí puedes trabajar con los datos
      return categorias;
    })
    .catch((error) => console.error(error));
}


document.addEventListener('DOMContentLoaded', function() {

  linkaside.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      //Obtenemos la seccion 

      let section = this.getAttribute('href');
      console.log(section);
      
      //Obtenemos el div para colocar los libros en la seccion
      let targetSection = document.querySelector(section + " > div");
      console.log(targetSection);
      
      // Condición para colocar los libros en Tódos los géneros
      if (targetSection.getAttribute('id')=='container-books-todos') {
        containerRomance.parentElement.style.display = 'none';
        containerRomance.innerHTML = '';
        containerTerror.parentElement.style.display = 'none';
        containerTerror.innerHTML = '';
        containerCF.parentElement.style.display = 'none';
        containerCF.innerHTML = '';
        containerTodos.innerHTML = '';
        
        //addAllBooks(libros)

        fetchLibros().then((libros) => {
          addAllBooks(libros)
          //se le agrega evento al bton del carrito
          document.querySelectorAll('.carrito-svg-card').forEach(cartIcon => {
            cartIcon.addEventListener('click', carritoCardClick);
          })
        });

        containerTodos.parentElement.style.display = 'flex';
      } else if (targetSection.getAttribute('id')=='container-books-romance') {
        containerRomance.innerHTML = '';
        containerRomance.parentElement.style.display = 'flex';

        //addBooksByCategory(targetSection,libros,"Romance");
        //Se ocultan
        containerTerror.parentElement.style.display = 'none';
        containerTerror.innerHTML = '';
        containerCF.parentElement.style.display = 'none';
        containerCF.innerHTML = '';

        fetchLibros().then((libros) => {
          addBooksByCategory(targetSection,libros,1);
          //se le agrega evento al bton del carrito
          document.querySelectorAll('.carrito-svg-card').forEach(cartIcon => {
            cartIcon.addEventListener('click', carritoCardClick);
          })
        });

        containerTodos.parentElement.style.display = 'none';
        containerTodos.innerHTML = '';
      } else if (targetSection.getAttribute('id')=='container-books-terror') {
        containerRomance.parentElement.style.display = 'none';
        containerRomance.innerHTML = '';

        containerTerror.innerHTML = '';
        containerTerror.parentElement.style.display = 'flex';
        //addBooksByCategory(targetSection,libros,"Magical Realism");
        containerCF.parentElement.style.display = 'none';
        containerCF.innerHTML = '';
        fetchLibros().then((libros) => {
          addBooksByCategory(targetSection,libros,2);
          //se le agrega evento al bton del carrito
          document.querySelectorAll('.carrito-svg-card').forEach(cartIcon => {
            cartIcon.addEventListener('click', carritoCardClick);
          })
        });
        containerTodos.parentElement.style.display = 'none';
        containerTodos.innerHTML = '';
      } else if (targetSection.getAttribute('id')=='container-books-cf') {
        containerRomance.innerHTML = '';
        containerRomance.parentElement.style.display = 'none';
        containerTerror.innerHTML = '';
        containerTerror.parentElement.style.display = 'none';

        containerCF.innerHTML = '';
        containerCF.parentElement.style.display = 'flex';

        fetchLibros().then((libros) => {
          addBooksByCategory(targetSection,libros,3);
          //se le agrega evento al bton del carrito
          document.querySelectorAll('.carrito-svg-card').forEach(cartIcon => {
            cartIcon.addEventListener('click', carritoCardClick);
          })
        });
        
        //addBooksByCategory(targetSection,libros,"Fantasy");

        containerTodos.parentElement.style.display = 'none';
        containerTodos.innerHTML = '';
      }

    });
  });
});

//Primero se coloca la categroría de Todos por defecto

romancesec.style.display = 'none';
terrorsec.style.display = 'none';
cienciasec.style.display = 'none';
fetchLibros().then((libros) => {
  addAllBooks(libros)
  document.querySelectorAll('.carrito-svg-card').forEach(cartIcon => {
    cartIcon.addEventListener('click', carritoCardClick);
  })
});

//addAllBooks(libros)
function addAllBooks(libros){
    libros.forEach(libro => {
      containerTodos.insertAdjacentHTML("beforeend", generateBookHTML(libro));
    });
  return
}

function addBooksByCategory(seccion,libros,cat){
  libros.forEach(libro => {

    if(libro.categoria == cat){
      seccion.insertAdjacentHTML("beforeend",generateBookHTML(libro));
    }
  });
    return
}


function generateBookHTML(libro){
    //validacion de categoria
    let txtCat = "";
    if(libro.categoria == 1){
      txtCat = "Romance"
      //Se puede hacer un GET a /api/categoria/ definiendo bien las tres primeras categorias
    } else if(libro.categoria == 2){
      txtCat = "Terror"
    } else if (libro.categoria == 3){
      txtCat = "Ciencia Ficción"
    }  

  return `
  <div class="card card_modal_${libro.idLibros}" style="width: 18rem;">
      <img src="${libro.portada}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${libro.nombreLibro}</h5>
        <p class="card-text">${libro.autor}</p>        
        <p class="card-text">$${libro.precio}</p>
        <div class="container-botones-card">
          <!-- Button trigger modal -->
          <button type="button" class="btn btn-primary boton" data-bs-toggle="modal" data-bs-target="#exampleModal_${libro.idLibros}">
            Ver más
          </button>
          <img id="carrito_${libro.idLibros}" type="button" class="carrito-svg-card" src="assets/imagenes/logo/carrito2.svg" alt="">
        </div>
      </div>
    </div>
    <!-- Modal -->
    <div class="modal fade" id="exampleModal_${libro.idLibros}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">${libro.nombreLibro}</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
          </div>
          <div class="modal-body">
            <h3>${libro.autor}</h3>
            <h3>${libro.year}</h3>
            <h3>${txtCat}</h3>
            <p>${libro.descripcion}</p>
            <h4>$${libro.precio}</h4>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
          </div>
        </div>
      </div>
    </div>
  `;
} //Función que crea un libro con su modal


//CARRITO 

//Para obtener o crear el cart en el localstorage
let cart = JSON.parse(localStorage.getItem('cart'));
if (!cart) {
  cart = [];
} else if (!Array.isArray(cart)) {
  cart = [];
} 

//Agregar los elementos seleccionados al localstorage y sumarlos
function agregarAlCart(libro){
  const libroExist = cart.find(item => item.id == libro.id);

  if(libroExist){
    libroExist.quantity++;
  } else {
    libro.quantity = 1;
    cart.push(libro);
  }

  //cargar en el localstorage
  localStorage.setItem('cart', JSON.stringify(cart));

  actualizarCarrito();
} //Función para agregar libro al Cart

//Para actualizar el número que se mostrará en el carrito
function actualizarCarrito(){
  const conteoCart = cart.reduce((total, item) => total + item.quantity, 0);
  document.getElementById('cart-contador').innerText = conteoCart;  //se va agregar este contador en un span en el carrito del navbar
    Swal.fire({
    position: "center",
    icon: "success",
    title: "Artículo agregado al carrito",
    showConfirmButton: false,
    timer: 1500
    })
}


//para que se guarden los datos de los libros que seleccionemos cuando hagamos click en el carrito de su card
function carritoCardClick(event){
  console.log("Se dio un click a un carrito");
  const libroId = event.target.id.split('_')[1]; //para cortar y dejar solo el numero del ID
  console.log(libroId);
  const elementoCarrito = document.querySelector(`#carrito_${libroId}`);

  if(!elementoCarrito){
    console.log("No se encontró elemento con ese ID");
    return;
  }

  const elementoLibro = elementoCarrito.closest('.card');

  if(!elementoLibro){
    console.error("No se encontró ancestro (closest) con la clase .card");
    return;
  }

  const libroSelected = {
    id: libroId,
    title: elementoLibro.querySelector('.card-title').innerText,
    author: elementoLibro.querySelector('.card-text:nth-child(2)').innerText,
    price: parseFloat(elementoLibro.querySelector('.card-text:nth-child(3)').innerText.replace('$', '')), //quitamos el simbolo de $
    cover_image: elementoLibro.querySelector('.card-img-top').src
  };
  agregarAlCart(libroSelected);
}

//se le agrega evento al bton del carrito
/*
document.querySelectorAll('.carrito-svg-card').forEach(cartIcon => {
  cartIcon.addEventListener('click', carritoCardClick);
})
  */