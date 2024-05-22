//Buscamos el texto mas largo (que solo contenga letras y pocos caracteres)
//en el body del post y sacamos la preview que se vera en socialFi

export function searshTextinBody(str) {
    // eslint-disable-next-line no-useless-escape
    var regex = /[a-zA-Z0-9\s\.;:'"()]+/g; //mas informacion en la carpeta /src/reguex
    var textoMasLargo = '';
    var palabras = str.match(regex);
    if (palabras) {
        palabras.forEach(function(palabra) {
            if (palabra.length > textoMasLargo.length) {
                textoMasLargo = palabra;
            }
        });
    }

    return textoMasLargo;
}