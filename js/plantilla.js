const header = document.getElementById('header');

//Función para agregar el navbar
export function addNavbar(header){
    console.log('se cargó navbar')
  
  //en la clase de nav-link de Inicio, era "nav-link active otrosL", sin embargo esto impedia que agarrara el color blanco del css
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
              
              
              <li class="nav-item">
                <a class="nav-link otrosL" href="./catalogo.html">Catálogo</a>
              </li>
              
              
              <li class="nav-item">
                <a class="nav-link otrosL" href="./contactanos.html">Contáctanos</a>
              </li>
              
              
              <li class="nav-item" id="nosotros-nav">
                <a class="nav-link otrosL"  href="./nosotros.html">Nosotros</a>
              </li>
            </ul>
                <div id="container-iconos">
                  <a class="nav-link"  href="#">
                    <div id="container-carrito">
                      <img id="carritosvg" src="assets/imagenes/logo/mb-cart-96x96.svg" alt="">
                    </div>
                  </a>
                  <a class="nav-link"  href="./inicioSesion.html">
                    <div id="container-logo">
                      <img src="assets/imagenes/logo/Image20240624131039.jpg" alt="">
                    </div>
                  </a>
                </div>
              
          </div>
        </div>
      </nav>
        `)
  
  }


//función para agregar el footer

export function addFooter(footer){
    footer.insertAdjacentHTML('beforeend', `
        <div class = "div-container">
          <div class="footer-title">
            <h2 class="footer-title">Saihon</h2>
          </div>
          <div class="Redes">
            <img src="./src/Facebook logo.jpg" class="social-logo">
            <img src="./src/linkdin logo.jpg" class="social-logo">
            <img src="./src/youtube logo.jpg" class="social-logo">
            <img src="./src/Instagram logo.jpg" class="social-logo">
          </div>
        </div>
  
        <div class="div-container div-container2">
          <div><h3 class="footer-infotation">Información</h3></div>
          <div><p><strong class="footer-info">Dirección corporativa</strong><br>Ciudad de México</p></div>
          <p class="footer-info">Teléfono: 5589345677</p>
          <p class="footer-info">Correo electrónico: saihon.bookstore@gmail.com</p>
        </div>
        `
    );
    console.log('se cargó footer')
}