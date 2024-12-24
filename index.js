const banda = document.querySelector('#banda');
const cancion = document.querySelector('#cancion');
const enviar = document.querySelector('#enviar');

if(banda === '' || cancion === ''){
   const mensaje = document.createElement('p');
    mensaje.innerHTML('Ingrese todos los campos')
    cancion.appendChild(mensaje)
}