import * as UI from './interfaz.js';

class API{
    constructor(artista, cancion){
        this.artista = artista;
        this.cancion = cancion;
    }
    consultarAPI(){
        console.log('desde api')
        const url = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`;
        

            UI.divResultado.textContent = 'Lo siento no funciona la API';
            UI.headingResultado.textContent = `Letra de la cancion: ${this.cancion} de ${this.artista}`;

        }

        /* fetch(url)
            .then( respuesta => respuesta.json())
            .then( resultado => {
                console.log(resultado)
                if(resultado.lyrics){
                    const { lyrics } = resultado;
                    UI.divResultado.textContent = lyrics;
                    UI.headingResultado.textContent = `Letra de la cancion: ${this.cancion} de ${this.artista}`;
    
                }else{
                    UI.headingResultado.textContent = `La cancion no existe, prueba con otra busqueda`;
                    UI.divMensajes.classList.add('error');

                    setTimeout(() => {
                                UI.divMensajes.textContent = '';
                                UI.divMensajes.classList.remove('error');
                    }, 2000);
                }
            })
            .catch(
                console.log('error:')
            ) */
    }
}
export default API;