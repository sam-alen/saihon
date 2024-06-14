const header = document.getElementById('header');

const main = document.getElementById("main");

const seccionLibro= document.getElementById("seccionLibro")

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

let librosLocalStorage = [];
let catalogoLocalStorage = [];
librosLocalStorage = JSON.parse(localStorage.getItem("libros"));
catalogoLocalStorage = libros.concat(librosLocalStorage);
localStorage.setItem("catalogoLocalStorage",JSON.stringify(catalogoLocalStorage))

libros = libros.concat(catalogoLocalStorage);

function addBooks(libros){
  libros.forEach(libro => {
    seccionLibro.insertAdjacentHTML("afterbegin", `<div class="card" style="width: 18rem;">
      <img src=${libro.cover_image} class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${libro.title}</h5>
        <p class="card-text"> ${libro.author}</p>        
        <p class="card-text"> ${libro.price}$</p>
        <!-- Button trigger modal -->
        <button type="button" class="btn btn-primary boton" data-bs-toggle="modal" data-bs-target="#exampleModal_${libro.id}">
          Ver más
        </button>

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
          <div class="modal-body ">
            <h3>${libro.author}</h3>
            <h3>${libro.publication_year}</h3> 
            <h3>${libro.genre}</h3>
            <p>${libro.description}</p>
            <h4>${libro.price}$</h4>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
    `)

    
  });
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
addBooks(libros)