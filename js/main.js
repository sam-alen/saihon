/*
*****************************************
*   SE AGREGA LA PLANTILLA DEL PROYECTO *
*       NAVBAR Y FOOTER                 *
*****************************************

*/


import { addNavbar, addFooter, showMenu } from './plantilla.js';

const header = document.getElementById('header');
const footer = document.getElementById('footer');
const autores_uno = document.getElementById('autores-mes-uno');
const autores_dos = document.getElementById('autores-mes-dos');
const libro_anio = document.getElementById('sec-libro-año');
const populares_uno = document.getElementById('populares-uno');
const populares_dos = document.getElementById('populares-dos');
const tendencias_uno = document.getElementById('tendencias-uno');
const tendencias_dos = document.getElementById('tendencias-dos');
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

// Ejectuamos las funciones
addNavbar(header);
addFooter(footer);
showMenu();

// Cargamos los libros
cargarLibros();

// Vamos a hacer el fetch para mandar a llamar los libros
async function fetchLibros() {

  const requestOptions = {
    method: "GET",
    redirect: "follow"
  };

  try {
    const response = await fetch("http://localhost:8088/api/libros/", requestOptions);
    const libros = await response.json();
    console.log(libros); // Aquí puedes trabajar con los datos
    return libros;
  } catch (error) {
    console.error(error);
  }
}

// Función para cargar los libros en la pagina principal
async function cargarLibros() {
  const libros = await fetchLibros();
  if (libros) {
    addBooksAutoresMes1(libros);
    addBooksAutoresMes2(libros);
    addBookLibroAnio(libros, obtenerEnteroAleatorioRango(1, libros.length));
    addBooksPopulares1(libros);
    addBooksPopulares2(libros);
    addBooksTendencias1(libros);
    addBooksTendencias2(libros);
  }else{
    console.error("No se han podido cargar los libros");
  }
}

/*
FUNCION PARA OBTENER UN NUMERO ENTERO ALEATORIO ENTRE UN RANGO
*/
function obtenerEnteroAleatorioRango(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


let enteroEntre10y20 = obtenerEnteroAleatorioRango(10, 20);
console.log(enteroEntre10y20);

// Añade los libros al primer slide de Autores del mes
function addBooksAutoresMes1(libros){
    for (let index = 0; index < 4; index++) {
        const element = libros[index];
        autores_uno.insertAdjacentHTML("afterbegin",`
            <div class="card mb-3 col-12 col-lg-6" style="max-width: 540px;">
                      <div class="row g-0">
                        <div class="col-md-4">
                          <img src="${element.cover_image}" class="img-fluid rounded-start img-card" alt="...">
                        </div>
                        <div class="col-md-8">
                          <div class="card-body">
                            <h5 class="card-title">${element.title}</h5>
                            <p class="card-text">${element.description}</p>
                            <p class="card-text"><small class="text-body-secondary">${element.author}</small></p>
                          </div>
                        </div>
                      </div>
                    </div>
            `);
    }
    return
}

// Añade los libros al segundo slide de Autores del mes
function addBooksAutoresMes2(libros){
    for (let index = 4; index < 8; index++) {
        const element = libros[index];
        autores_dos.insertAdjacentHTML("afterbegin",`
            <div class="card mb-3 col-12 col-lg-6" style="max-width: 540px;">
                      <div class="row g-0">
                        <div class="col-md-4">
                          <img src="${element.cover_image}" class="img-fluid rounded-start img-card" alt="...">
                        </div>
                        <div class="col-md-8">
                          <div class="card-body">
                            <h5 class="card-title">${element.title}</h5>
                            <p class="card-text">${element.description}</p>
                            <p class="card-text"><small class="text-body-secondary">${element.author}</small></p>
                          </div>
                        </div>
                      </div>
                    </div>
            `);
    }
    return
}

//Añade el libro del año
function addBookLibroAnio(libros,id){
    libro_anio.insertAdjacentHTML("afterbegin",`
        <h3>Libro del año</h3>
          <div class="card mb-3" id="card-libro-año" style="max-width: 540px;">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="${libros[id].cover_image}" class="img-fluid rounded-start img-card" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${libros[id].title}</h5>
                  <p class="card-text">${libros[id].description}</p>
                  <p class="card-text"><small class="text-body-secondary">${libros[id].author}</small></p>
                </div>
              </div>
            </div>
          </div>
        `)
}

// Añade los libros al primer slide de Populares
function addBooksPopulares1(libros){
    for (let index = 0; index < 4; index++) {
        const element = libros[index];
        populares_uno.insertAdjacentHTML("afterbegin",`
            <div class="card mb-3 col-12 col-lg-6" style="max-width: 540px;">
                      <div class="row g-0">
                        <div class="col-md-4">
                          <img src="${element.cover_image}" class="img-fluid rounded-start img-card" alt="...">
                        </div>
                        <div class="col-md-8">
                          <div class="card-body">
                            <h5 class="card-title">${element.title}</h5>
                            <p class="card-text">${element.description}</p>
                            <p class="card-text"><small class="text-body-secondary">${element.author}</small></p>
                          </div>
                        </div>
                      </div>
                    </div>
            `);
    }
    return
}

// Añade los libros al segundo slide de Populares
function addBooksPopulares2(libros){
    for (let index = 4; index < 8; index++) {
        const element = libros[index];
        populares_dos.insertAdjacentHTML("afterbegin",`
            <div class="card mb-3 col-12 col-lg-6" style="max-width: 540px;">
                      <div class="row g-0">
                        <div class="col-md-4">
                          <img src="${element.cover_image}" class="img-fluid rounded-start img-card" alt="...">
                        </div>
                        <div class="col-md-8">
                          <div class="card-body">
                            <h5 class="card-title">${element.title}</h5>
                            <p class="card-text">${element.description}</p>
                            <p class="card-text"><small class="text-body-secondary">${element.author}</small></p>
                          </div>
                        </div>
                      </div>
                    </div>
            `);
    }
    return
}

// Añade los libros al primer slide de Tendencias
function addBooksTendencias1(libros){
    for (let index = 0; index < 4; index++) {
        const element = libros[index];
        tendencias_uno.insertAdjacentHTML("afterbegin",`
            <div class="card mb-3 col-12 col-lg-6" style="max-width: 540px;">
                      <div class="row g-0">
                        <div class="col-md-4">
                          <img src="${element.cover_image}" class="img-fluid rounded-start img-card" alt="...">
                        </div>
                        <div class="col-md-8">
                          <div class="card-body">
                            <h5 class="card-title">${element.title}</h5>
                            <p class="card-text">${element.description}</p>
                            <p class="card-text"><small class="text-body-secondary">${element.author}</small></p>
                          </div>
                        </div>
                      </div>
                    </div>
            `);
    }
    return
}

// Añade los libros al segundo slide de Tendencias
function addBooksTendencias2(libros){
    for (let index = 4; index < 8; index++) {
        const element = libros[index];
        tendencias_dos.insertAdjacentHTML("afterbegin",`
            <div class="card mb-3 col-12 col-lg-6" style="max-width: 540px;">
                      <div class="row g-0">
                        <div class="col-md-4">
                          <img src="${element.cover_image}" class="img-fluid rounded-start img-card" alt="...">
                        </div>
                        <div class="col-md-8">
                          <div class="card-body">
                            <h5 class="card-title">${element.title}</h5>
                            <p class="card-text">${element.description}</p>
                            <p class="card-text"><small class="text-body-secondary">${element.author}</small></p>
                          </div>
                        </div>
                      </div>
                    </div>
            `);
    }
    return
}