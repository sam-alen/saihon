


//Función para agregar el navbar
export function addNavbar(header){
  
  //en la clase de nav-link de Inicio, era "nav-link active otrosL", sin embargo esto impedia que agarrara el color blanco del css
    header.insertAdjacentHTML('afterbegin', `
        <nav class="navbar">
        <div class="navbar-brand"><h1>Saihon</h1></div>
        <div class="navbar-links">
          <a href="./index.html">Inicio</a>
          <a href="./catalogo.html">Catálogo</a>
          <a href="./contactanos.html">Contáctanos</a>
          <a href="./nosotros.html">Nosotros</a>
        </div>
        <div class="navbar-icons">
          <a href=""><img src="./assets/imagenes/logo/mb-cart-96x96.svg" alt="icon"></a>
          <a href="inicioSesion.html"><img src="./assets/imagenes/logo/5e973f49-4043-4115-a901-36baa53fcc14.jpeg" alt="icon"></a>
        </div>
        
        <label class="bar" for="check">
          <input type="checkbox" id="check">
          <span class="top"></span>
          <span class="middle"></span>
          <span class="bottom"></span>
      </label>

      <div class ="menu" id ="menu-display">
        <div class="other-links">
          <a href="./index.html">Inicio</a>
          <a href="./catalogo.html">Catálogo</a>
          <a href="./contactanos.html">Contáctanos</a>
          <a href="./nosotros.html">Nosotros</a>
        </div>
        <div class="other-icons">
          <a href=""><img src="./assets/imagenes/logo/mb-cart-96x96.svg" alt="icon"></a>
          <a href="inicioSesion.html"><img src="./assets/imagenes/logo/5e973f49-4043-4115-a901-36baa53fcc14.jpeg" alt="icon"></a>
        </div>
      </div>

      </nav>
        `)
    

    console.log('se cargó navbar')
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

export function showMenu(){
  document.addEventListener('DOMContentLoaded', () => {
    const menuDisplay = document.getElementById('menu-display');
    const burgerMenu = document.getElementById('check');
    
    
    function windowmenu(){
      if (window.innerWidth>=860) {
        menuDisplay.style.display='none';
        burgerMenu.checked=false;
        
      }
    };

    window.addEventListener("resize",windowmenu);

    // Cambiar 'Check' por 'change' para detectar cambios en el checkbox
    burgerMenu.addEventListener('change', () => {
      if (burgerMenu.checked) {
        menuDisplay.style.display = 'block';
      } else {
        menuDisplay.style.display = 'none';
      }
    });
  });
}
