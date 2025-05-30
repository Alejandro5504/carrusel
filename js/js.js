const IMG = document.getElementById('imagen');
const NOMBRE = document.getElementById('nombreImagen');
const RUTA = "./img/";
const imagenes = ["inicio.jpg","barcelona.jpg", "paris.jpg", "newyork.jpg"];
let posicion = 0;
mostrarImagen();


function mostrarImagen() {

    let imagen = RUTA + imagenes[posicion];
    IMG.src = imagen;
    NOMBRE.innerHTML = imagen;

}

function avanzar() {
    posicion++;
    if (posicion >= imagenes.length) {

        alert('Es la ultima imagen');
        posicion--;

    }

    mostrarImagen();

}

function retroceder() {


    posicion--;
    if (posicion <0) {

        alert('Es la primera imagen');
        posicion++;

    } 

 mostrarImagen();

} 

