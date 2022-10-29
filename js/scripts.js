//Validar el llenado de datos en el forms

// Eventos de los Inputs...
const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');


nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);


const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

// submit
const formulario = document.querySelector('.formulario');

formulario.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log(e);
    console.log('Di click y la página ya no se recarga');
    console.log(datos);

    // Validar el Formulario...

    //extraemos los valores de datos con destructuring.
    const { nombre, email, mensaje } = datos;

    if(nombre === '' || email === '' || mensaje === '' ) {
        console.log('Al menos un campo esta vacio');
        mostrarAlert('Todos los campos son obligatorios', isEmpty = true);
        return; // Detiene la ejecución de esta función
    }

    console.log('Todo bien...');
    mostrarAlert('Mensaje enviado correctamente');
});

function mostrarAlert(mensaje, isEmpty = null) {
    const alerta = document.createElement('p');
    alerta.textContent = mensaje;

    //Valida si el form está vacio o completo
    if (isEmpty){
        alerta.classList.add('error');
    } else {
        alerta.classList.add('correcto');
    }
    formulario.appendChild(alerta);

    //Después de 3 segundos quita la alerta
    setTimeout(() => {
        alerta.remove();
    }, 3000);
}


function leerTexto(e) {
    //Lee cada palabra que se va ingresando en los campos del forms, y se a asigna a cada valor especificado.
    datos[e.target.id] = e.target.value;
    console.log(datos);
}

