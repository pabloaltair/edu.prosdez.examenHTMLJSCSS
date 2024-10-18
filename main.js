/* *********************************
EJERCICIO 2. CREA EL CONTROLADOR DE LA PÁGINA. DEBERÁ PODER CAMBIAR LA COLUMNA DE LA IZQUIERDA PARA QUE MUESTRE LOS DATOS SOLICITADOS Y EN LA COLUMNA DE LA DERECHA LA IMAGEN QUE CORRESPONDE.
EN CONCRETO, HAY QUE MOSTRAR UNA LISTA DE PRÉSTAMOS Y UNA LISTA DE SOCIOS
************************************ */

// EJERCICIO 2.1 Importar las funciones correspondientes

import { listaPrestamos, imgPrestamos, listaSocios, imgSocios } from './funciones.js';

// EJERCICIO 2.2 Crear las funciones de control de contenidos
//      * Una función (o dos) que solicitará el listado formateado de préstamos/de socios y el nombre de la imagen correspondiente
//      * Luego colocará el listado en el bloque de la izquierda sustituyendo lo que allí aparezca
//      * Para terminar, colocará la imagen en la columna de la derecha
function listadoPrestamos() {
    
    let fotoCambio = document.getElementById("foto");
    
    /*let texto = document.getElementById("texto");
    texto.forEach(z => {
        let textElement = document.getElementById(t);
        textElement.innerHTML = '';
    });

    texto.listaPrestamos();*/

    fotoCambio.src = "prestamosbiblio.jpg";
    
}

function listadoSocios() {
    
    let fotoCambio = document.getElementById("foto");
    fotoCambio.src = "userbiblio.jpg";
}

// EJERCICIO 2.3 Enlazar las funciones del módulo main con las funciones del objeto window

window.listadoPrestamos = listadoPrestamos;
window.listadoSocios = listadoSocios;