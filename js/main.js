import { addNavbar, addFooter, showMenu } from './plantilla.js';

/*
*****************************************
*   SE AGREGA LA PLANTILLA DEL PROYECTO *
*       NAVBAR Y FOOTER                 *
*****************************************

*/



const header = document.getElementById('header');
const footer = document.getElementById('footer');
const autores_uno = document.getElementById('autores-mes-uno');
const autores_dos = document.getElementById('autores-mes-dos');
const libro_anio = document.getElementById('sec-libro-año');
const populares_uno = document.getElementById('populares-uno');
const populares_dos = document.getElementById('populares-dos');
const tendencias_uno = document.getElementById('tendencias-uno');
const tendencias_dos = document.getElementById('tendencias-dos');


// Ejecutamos las funciones de la plantilla
addNavbar(header);
addFooter(footer);
showMenu();

// Cargamos los libros en la pagina principal
cargarLibros();


// Vamos a hacer el fetch para llamar a los libros
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

// Función para cargar los libros en la página principal
async function cargarLibros() {
  const libros = await fetchLibros();
  if (libros) {
    addBooksAutoresMes(libros, autores_uno);
    addBooksAutoresMes(libros, autores_dos);
    addBookLibroAnio(libros, obtenerEnteroAleatorio(libros));
    addBooksPopulares(libros, populares_uno);
    addBooksPopulares(libros, populares_dos);
    addBooksTendencias(libros, tendencias_uno);
    addBooksTendencias(libros, tendencias_dos);
  } else {
    console.error("No se han podido cargar los libros");
  }
}


// Función para generar índices aleatorios sin repetir
function generarIndicesAleatorios(cantidad, max) {
  let indices = new Array();

  while (indices.length < cantidad) {
    let numero = Math.floor(Math.random() * max);
    if (!indices.includes(numero)) {
      indices.push(numero);
    }
  }
  return indices;
}


/*
FUNCION PARA OBTENER UN NUMERO ENTERO ALEATORIO ENTRE UN RANGO
*/
function obtenerEnteroAleatorio(libros) {
  return Math.floor(Math.random() * libros.length);
}


/* 
FUNCIONES PARA INSERTAR LOS LIBROS EN LOS SLIDES
*/


// Añade los libros al primer slide de Autores del mes
function addBooksAutoresMes(libros, autoresDelMes) {
  let indicesAleatorios = generarIndicesAleatorios(4, libros.length);

  indicesAleatorios.forEach(index => {
    const element = libros[index];

    autoresDelMes.insertAdjacentHTML("afterbegin", `
            <div class="card mb-3 col-12 col-lg-6" style="max-width: 540px;">
                      <div class="row g-0">
                        <div class="col-md-4">
                          <img src="${element.portada}" class="img-fluid rounded-start img-card" alt="...">
                        </div>
                        <div class="col-md-8">
                          <div class="card-body">
                            <h5 class="card-title">${element.nombreLibro}</h5>
                            <p class="card-text">${element.descripcion}</p>
                            <p class="card-text"><small class="text-body-secondary">${element.autor}</small></p>
                          </div>
                        </div>
                      </div>
                    </div>
            `);
  });
}


// Añade el libro del año
function addBookLibroAnio(libros, id) {
  libro_anio.insertAdjacentHTML("afterbegin", `
        <h3>Libro del año</h3>
          <div class="card mb-3" id="card-libro-año" style="max-width: 540px;">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="${libros[id].portada}" class="img-fluid rounded-start img-card" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${libros[id].nombreLibro}</h5>
                  <p class="card-text">${libros[id].descripcion}</p>
                  <p class="card-text"><small class="text-body-secondary">${libros[id].autor}</small></p>
                </div>
              </div>
            </div>
          </div>
        `)
}

// Añade los libros al primer slide de Populares
function addBooksPopulares(libros, librosPopulares) {
  let indicesAleatorios = generarIndicesAleatorios(4, libros.length);
  indicesAleatorios.forEach(index => {
    const element = libros[index];
    librosPopulares.insertAdjacentHTML("afterbegin", `
            <div class="card mb-3 col-12 col-lg-6" style="max-width: 540px;">
                      <div class="row g-0">
                        <div class="col-md-4">
                          <img src="${element.portada}" class="img-fluid rounded-start img-card" alt="...">
                        </div>
                        <div class="col-md-8">
                          <div class="card-body">
                            <h5 class="card-title">${element.nombreLibro}</h5>
                            <p class="card-text">${element.descripcion}</p>
                            <p class="card-text"><small class="text-body-secondary">${element.autor}</small></p>
                          </div>
                        </div>
                      </div>
                    </div>
            `);
  });
}


// Añade los libros al primer slide de Tendencias
function addBooksTendencias(libros, tendencias) {
  let indicesAleatorios = generarIndicesAleatorios(4, libros.length);

  indicesAleatorios.forEach(index => {
    const element = libros[index];
    tendencias.insertAdjacentHTML("afterbegin", `
            <div class="card mb-3 col-12 col-lg-6" style="max-width: 540px;">
                      <div class="row g-0">
                        <div class="col-md-4">
                          <img src="${element.portada}" class="img-fluid rounded-start img-card" alt="...">
                        </div>
                        <div class="col-md-8">
                          <div class="card-body">
                            <h5 class="card-title">${element.nombreLibro}</h5>
                            <p class="card-text">${element.descripcion}</p>
                            <p class="card-text"><small class="text-body-secondary">${element.autor}</small></p>
                          </div>
                        </div>
                      </div>
                    </div>
            `);
  });
}

