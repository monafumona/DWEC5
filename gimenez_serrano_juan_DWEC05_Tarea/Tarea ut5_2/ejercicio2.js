// Un título con tu nombre.

let titulo = document.createElement('h1');
titulo.textContent = 'Juan Giménez Serrano';
document.body.appendChild(titulo);


// Un elemento contenedor, que contendrá los artículos de la tienda.

let contenedor = document.createElement('div');
contenedor.classList.add('div');
document.body.appendChild(contenedor);

// Cada artículo contiene un nombre, una descripción, un precio y una imagen. Estos datos los leemos 

datos.forEach(item => {

    let art = document.createElement('div');
    art.classList.add('articulo');

    let nombre = document.createElement("h2");
    nombre.textContent = item.nombre;

    let desc = document.createElement("p");
    desc.textContent = item.descripcion;

    let precio = document.createElement("p");
    precio.textContent = item.precio + " €";

    let imagen = document.createElement("img");
    imagen.src = item.imagen;

    art.appendChild(nombre);
    art.appendChild(desc);
    art.appendChild(precio);
    art.appendChild(imagen);

    contenedor.appendChild(art);
})