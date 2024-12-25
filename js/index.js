import * as UI from './interfaz.js';
import API from './api.js'

UI.formularioBuscar.addEventListener('submit', buscarCancion);


function buscarCancion(e){
    e.preventDefault();

    const banda = document.querySelector('#banda').value;
    const cancion = document.querySelector('#cancion').value;

    if(banda === '' || cancion === ''){

        UI.divMensajes.textContent='Todos los campos son obligatorios';
        UI.divMensajes.classList.add('error');

        setTimeout(() => {
            UI.divMensajes.textContent = '';
            UI.divMensajes.classList.remove('error');
        }, 2000);

        return;
    }
    //consultar la API
    const busqueda = new API(banda,cancion);
    busqueda.consultarAPI();

}

