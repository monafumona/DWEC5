
// CAMBIAR TITULO POR NOMBRE

let titulo = document.getElementById('titulo');
titulo.textContent = 'Juan Giménez Serrano';

// MODIFICAR IMAGEN DEL SEGUNDO ARTÍCULO

let articulos = document.querySelectorAll('article');
let imagen = articulos[1].querySelector('img');
imagen.src = 'noticia1.jpg';

// OCULTAR EL ULTIMO ARTICULO

let ultArt = articulos[articulos.length - 1];
ultArt.style.display = 'none';

// Recorre los artículos y añade al inicio de la cabecera el número de noticia (1- Hospitalizado...)

articulos.forEach((articulo, index) => { // index tiene que empezar en 1 (index+1)
    let primerDiv = articulo.querySelector('div');
    primerDiv.textContent = (index + 1) + '-' + primerDiv.textContent; // Se le añade el numero con un bucle

    // Añade la clase cabecera (ya esta declarada en los estilos), al primer div de cada artículo.

    primerDiv.classList.add('cabecera');

    // Busca en todos los artículos donde aparece la cadena "Servicio Murciano de Salud", y sustitúyela por "S.M.S" (¿método replace de cadenas?).

    let cuerpo = articulo.querySelector('.cuerpo');
    cuerpo.innerHTML = cuerpo.innerHTML.replace("Servicio Murciano de Salud", "S.M.S"); // REEMPLAZO
});




