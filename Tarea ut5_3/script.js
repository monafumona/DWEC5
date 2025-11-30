// Referencias a los elementos del DOM
const inputNombre = document.getElementById('input-nombre');
const inputApellido = document.getElementById('input-apellido');
const btnAnadir = document.getElementById('btn-anadir');
const btnEliminar = document.getElementById('btn-eliminar');
const personList = document.getElementById('person-list');
const errorMessage = document.getElementById('error-message');
 
function showMessage(message, type = 'error') {
    errorMessage.textContent = message;
    
    // Colores para fallos 
    errorMessage.style.color = type === 'error' ? 'red' : 'green';
    errorMessage.style.fontWeight = 'bold';
}


function borrarMensaje() {
    inputNombre.value = '';
    inputApellido.value = '';
    // Limpiamos el mensaje después de una acción exitosa para que no permanezca
    setTimeout(() => {
        errorMessage.textContent = '';
        errorMessage.style.color = 'red'; // Restablecer color por defecto para el siguiente error
        errorMessage.style.fontWeight = 'bold';
    }, 3000); // El mensaje se borra después de 3 segundos
}


function normalizarTexto(text) {
    return text.trim().toLowerCase();
}


function crearKeyUnica(nombre, apellido) {
    return nombre + ' ' + apellido;
}


function findPersonRow(key) {
    // Buscamos directamente el elemento por su atributo data-full-name
    return personList.querySelector(`p[data-full-name="${key}"]`);
}


function addPerson() {
    const nombre = inputNombre.value.trim();
    const apellido = inputApellido.value.trim();

    // Ambos campos deben estar rellenos
    if (!nombre || !apellido) {
        showMessage('ERROR: Por favor, rellena ambos campos (Nombre y Apellido).');
        return;
    }

    const normalizedNombre = normalizarTexto(nombre);
    const normalizedApellido = normalizarTexto(apellido);
    const uniqueKey = crearKeyUnica(normalizedNombre, normalizedApellido);

    // Comprobar si la persona ya existe
    if (findPersonRow(uniqueKey)) {
        showMessage('ERROR: Esta persona ya existe en la lista.');
        return;
    }

    // Crear y añadir la nueva línea (elemento <p>)
    const newRow = document.createElement('p');

    // Añadimos el atributo para facilitar la búsqueda y eliminación
    newRow.setAttribute('data-full-name', uniqueKey);

    // Usamos un espacio fijo para alinear visualmente, simulando columnas
    newRow.innerHTML = `${nombre}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${apellido}`;

    personList.appendChild(newRow);

    showMessage(`Persona "${nombre} ${apellido}" añadida correctamente.`, 'success');
    borrarMensaje();
}


function deletePerson() {
    const nombre = inputNombre.value.trim();
    const apellido = inputApellido.value.trim();

    // Ambos campos deben estar rellenos
    if (!nombre || !apellido) {
        showMessage('ERROR: Por favor, rellena ambos campos (Nombre y Apellido) para eliminar.');
        return;
    }

    const normalizedNombre = normalizarTexto(nombre);
    const normalizedApellido = normalizarTexto(apellido);
    const uniqueKey = crearKeyUnica(normalizedNombre, normalizedApellido);

    // Buscar la línea a eliminar
    const rowToDelete = findPersonRow(uniqueKey);

    if (rowToDelete) {
        personList.removeChild(rowToDelete);
        showMessage(`Persona "${nombre} ${apellido}" eliminada correctamente.`, 'success');
    } else {
        // Mensaje de error si no existe
        showMessage('ERROR: La persona especificada no se encuentra en la lista.');
        return;
    }

    borrarMensaje();
}

btnAnadir.addEventListener('click', addPerson);
btnEliminar.addEventListener('click', deletePerson);