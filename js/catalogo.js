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


const main = document.getElementById("main");
const seccionLibro_todos= document.getElementById("seccionLibro-todos");

document.addEventListener('DOMContentLoaded', function() {
  const linkaside = document.querySelectorAll('.aside__link');
  const secciones = document.querySelectorAll('.row');

  linkaside.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault(); 

      
      secciones.forEach(section => {
        section.style.display = 'none';
      });

      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.style.display = 'flex';
      }

    });
  });

  // Mostrar la seccion "Todos los libros" por defecto
  const defaultSection = seccionLibro_todos;
  const romancesec = document.getElementById('seccionLibro-romance');
  const terrorsec = document.getElementById('seccionLibro-terror');
  const cienciasec = document.getElementById('seccionLibro-CF');
  if (defaultSection) {
    defaultSection.style.display = 'flex';
    romancesec.style.display = 'none';
    terrorsec.style.display = 'none';
    cienciasec.style.display = 'none';
  }
});



let librosLocalStorage = [];

let libros= [
    {
      "id": 1,
      "title": "To Kill a Mockingbird",
      "price": 200, 
      "author": "Harper Lee",
      "publication_year": 1960,
      "genre": [
        "Fiction",
        "Classic"
      ],
      "description": "A classic novel depicting racial injustice in the American South.",
      "cover_image": "assets/imagenes/imageneslibros/libro1-HL.webp"
    },
    {
      "id": 2,
      "title": "1984",
      "price": 200, 
      "author": "George Orwell",
      "publication_year": 1949,
      "genre": [
        "Dystopian",
        "Science Fiction"
      ],
      "description": "A dystopian novel portraying a totalitarian society.",
      "cover_image": "assets/imagenes/imageneslibros/libro2-GO.jpg"
    },
    {
      "id": 3,
      "title": "Pride and Prejudice",
      "price": 200, 
      "author": "Jane Austen",
      "publication_year": 1813,
      "genre": [
        "Classic",
        "Romance"
      ],
      "description": "A classic novel exploring themes of love, marriage, and social norms.",
      "cover_image": "assets/imagenes/imageneslibros/libro3-JA.webp"
    },
    {
      "id": 4,
      "title": "The Great Gatsby",
      "price": 200,
      "author": "F. Scott Fitzgerald",
      "publication_year": 1925,
      "genre": [
        "Fiction",
        "Classic"
      ],
      "description": "A tale of the American Dream, wealth, and love during the Roaring Twenties.",
      "cover_image": "assets/imagenes/imageneslibros/libro4-FSF.webp"
    },
    {
      "id": 5,
      "title": "Moby-Dick",
      "price": 200, 
      "author": "Herman Melville",
      "publication_year": 1851,
      "genre": [
        "Fiction",
        "Adventure"
      ],
      "description": "The epic tale of Captain Ahab's obsession with the white whale.",
      "cover_image": "assets/imagenes/imageneslibros/libro5-HM.webp"
    },
    {
      "id": 6,
      "title": "The Lord of the Rings",
      "price": 200, 
      "author": "J.R.R. Tolkien",
      "publication_year": 1954,
      "genre": [
        "Fantasy",
        "Adventure"
      ],
      "description": "An epic fantasy saga about the quest to destroy the One Ring.",
      "cover_image": "assets/imagenes/imageneslibros/LIBRO6-JRT.webp"
    },
    {
      "id": 7,
      "title": "The Catcher in the Rye",
      "price": 200, 
      "author": "J.D. Salinger",
      "publication_year": 1951,
      "genre": [
        "Fiction",
        "Coming-of-age"
      ],
      "description": "A classic coming-of-age novel following Holden Caulfield's journey.",
      "cover_image": "assets/imagenes/imageneslibros/LIBRO7-JDS.webp"
    },
    {
      "id": 8,
      "title": "The Hobbit",
      "price": 200, 
      "author": "J.R.R. Tolkien",
      "publication_year": 1937,
      "genre": [
        "Fantasy",
        "Adventure"
      ],
      "description": "The prequel to The Lord of the Rings, following Bilbo Baggins' journey.",
      "cover_image": "assets/imagenes/imageneslibros/LIBRO8-JRT.webp"
    },
    {
      "id": 9,
      "title": "One Hundred Years of Solitude",
      "price": 200, 
      "author": "Gabriel Garcia Marquez",
      "publication_year": 1967,
      "genre": [
        "Magical Realism",
        "Literary Fiction"
      ],
      "description": "A multi-generational saga of the Buendía family in the fictional town of Macondo.",
      "cover_image": "assets/imagenes/imageneslibros/libro9-GG,.webp"
    },
    {
      "id": 10,
      "title": "War and Peace",
      "price": 200, 
      "author": "Leo Tolstoy",
      "publication_year": 1869,
      "genre": [
        "Historical Fiction",
        "Epic"
      ],
      "description": "A monumental work depicting the events of Russian society during the Napoleonic era.",
      "cover_image": "assets/imagenes/imageneslibros/libro10-LT.webp"
    },
];


addBooks(libros)
// Condiciones para el almacenamiento local
if (localStorage.getItem("librosLocalStorage") != null){
  librosLocalStorage = JSON.parse(localStorage.getItem("librosLocalStorage"));
  console.log(librosLocalStorage);
  addBooks(librosLocalStorage)
}


function addBooks(libros){
  libros.forEach(libro => {

    seccionLibro_todos.insertAdjacentHTML("beforeend", generateBooksHTML(libro));


libro.genre.forEach(g=> {
  let seccionLibro_categoria;
  switch (g.toLowerCase()){
    case 'fiction':
    case 'science fiction':
    case 'ciencia ficcion':
      seccionLibro_categoria = document.getElementById("seccionLibro-CF");
    break;
    case 'romance':
      seccionLibro_categoria = document.getElementById("seccionLibro-romance");
    break;
    case 'terror':
      seccionLibro_categoria = document.getElementById("seccionLibro-terror");
    break;
    default:
      return;
  }
  seccionLibro_categoria.insertAdjacentHTML("beforeend", generateBooksHTML(libro));

     });
  });
}

function generateBooksHTML(libro){
  return `
  <div class="card" style="width: 18rem;">
      <img src="${libro.cover_image}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${libro.title}</h5>
        <p class="card-text">${libro.author}</p>        
        <p class="card-text">$${libro.price}</p>
        <div class="container-botones-card">
          <!-- Button trigger modal -->
          <button type="button" class="btn btn-primary boton" data-bs-toggle="modal" data-bs-target="#exampleModal_${libro.id}">
            Ver más
          </button>
          <img id="carrito_${libro.id}" type="button" class="carrito-svg-card" src="assets/imagenes/logo/carrito2.svg" alt="">
        </div>
      </div>
    </div>
    <!-- Modal -->
    <div class="modal fade" id="exampleModal_${libro.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">${libro.title}</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <h3>${libro.author}</h3>
            <h3>${libro.publication_year}</h3>
            <h3>${libro.genre.join(', ')}</h3>
            <p>${libro.description}</p>
            <h4>$${libro.price}</h4>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  `;
}


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
}


//para que se guarden los datos de los libros que seleccionemos cuando hagamos click en el carrito de su card
function carritoCardClick(event){
  const libroId = event.target.id.split('_')[1]; //para cortar y dejar solo el numero del ID
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
document.querySelectorAll('.carrito-svg-card').forEach(cartIcon => {
  cartIcon.addEventListener('click', carritoCardClick);
})

document.addEventListener('DOMContentLoaded', actualizarCarrito);
const elementoCarrito = document.querySelector(`#carrito_${libroId}`);
elementoCarrito.addEventListener("click",() =>{
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Artículo agregado al carrito",
      showConfirmButton: false,
      timer: 1500
      })
  
})