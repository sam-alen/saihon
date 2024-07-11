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
  //let max = obtenerEnteroAleatorioRango(1, libros.length/2);
    for (let index = 0; index < 4; index++) {
        const element = libros[index];
        autores_uno.insertAdjacentHTML("afterbegin",`
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
                          <img src="${element.portada}" class="img-fluid rounded-start img-card" alt="...">
                        </div>
                        <div class="col-md-8">
                          <div class="card-body">
                            <h5 class="card-title">${element.nombreLibro}</h5>
                            <p class="card-text">${element.descripcion}</p>
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
                <img src="${libros[id].portada}" class="img-fluid rounded-start img-card" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${libros[id].nombreLibro}</h5>
                  <p class="card-text">${libros[id].descripcion}</p>
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
                          <img src="${element.portada}" class="img-fluid rounded-start img-card" alt="...">
                        </div>
                        <div class="col-md-8">
                          <div class="card-body">
                            <h5 class="card-title">${element.nombreLibro}</h5>
                            <p class="card-text">${element.descripcion}</p>
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
                          <img src="${element.portada}" class="img-fluid rounded-start img-card" alt="...">
                        </div>
                        <div class="col-md-8">
                          <div class="card-body">
                            <h5 class="card-title">${element.nombreLibro}</h5>
                            <p class="card-text">${element.descripcion}</p>
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
                          <img src="${element.portada}" class="img-fluid rounded-start img-card" alt="...">
                        </div>
                        <div class="col-md-8">
                          <div class="card-body">
                            <h5 class="card-title">${element.nombreLibro}</h5>
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
                          <img src="${element.portada}" class="img-fluid rounded-start img-card" alt="...">
                        </div>
                        <div class="col-md-8">
                          <div class="card-body">
                            <h5 class="card-title">${element.nombreLibro}</h5>
                            <p class="card-text">${element.descripcion}</p>
                            <p class="card-text"><small class="text-body-secondary">${element.author}</small></p>
                          </div>
                        </div>
                      </div>
                    </div>
            `);
    }
    return
}