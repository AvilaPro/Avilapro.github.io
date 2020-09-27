

window.onload = function() {
const TIEMPO_INTERVALO_MILESIMAS_SEG = 7000;
let posicionActual = 0;
// let $botonRetroceder = document.getElementById('retroceder');
// let $botonAvanzar = document.getElementById('avanzar');
// let $imagen = document.getElementById('imagen');
// let $botonPlay = document.getElementById('play');
// let $botonStop = document.getElementById('stop');
let intervalo;
let $carousel = document.getElementById('carousel');
let $imagen1 = document.getElementById('imagen1');
let $imagen2 = document.getElementById('imagen2');
let $imagen3 = document.getElementById('imagen3');
let $imagen4 = document.getElementById('imagen4');
let $c2 = document.getElementById('c2');
const IMAGENES = [
  $imagen1,
  $imagen2,
  $imagen3,
  $imagen4
];

/**
   * Activa el autoplay de la imagen
   */
function playIntervalo() {
  console.log('activado playIntervalo');
  intervalo = setInterval(pasarFoto, TIEMPO_INTERVALO_MILESIMAS_SEG);
  // Desactivamos los botones de control
  $carousel.removeEventListener("mouseover", playIntervalo, false);
}

/**
 * Funcion que cambia la foto en la siguiente posicion
 */
function pasarFoto() {
  console.log('Activado PasarFoto');
    
    if(posicionActual >= IMAGENES.length - 1) {
      renderizarImagen();
      posicionActual = -1;
      if(posicionActual <= 0){
        IMAGENES[IMAGENES.length - 1].style.display = 'none';
      }
    } 
    if(posicionActual < IMAGENES.length) {
      posicionActual++;
      renderizarImagen();
    }
    
}

/**
 * Funcion que actualiza la imagen de imagen dependiendo de posicionActual
 */
function renderizarImagen () {
    // $imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
    console.log('Activado Renderizar');
    console.log(posicionActual);
    console.log(IMAGENES.length);

    if(posicionActual > 0) {
      IMAGENES[posicionActual - 1].style.display = 'none';
      IMAGENES[posicionActual].style.display = 'block';
    }else {
      IMAGENES[posicionActual].style.display = 'block';
    }
    
}




/**
 * Para el autoplay de la imagen
 */
function stopIntervalo() {
  console.log('Activado Stop intervalo');
    clearInterval(intervalo);
    
}

// Eventos
// $botonAvanzar.addEventListener('click', pasarFoto);
// $botonRetroceder.addEventListener('click', retrocederFoto);
// $botonPlay.addEventListener('click', playIntervalo);
// $botonStop.addEventListener('click', stopIntervalo);
// Iniciar



  // posicionActual = 0;
  renderizarImagen();
  $carousel.addEventListener("mouseover", playIntervalo, false);
  $c2.addEventListener("mouseover", stopIntervalo, false);
}
// } 