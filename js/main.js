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

