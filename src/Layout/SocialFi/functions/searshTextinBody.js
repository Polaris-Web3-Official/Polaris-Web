export function searshTextinBody(str) {
    var regex = /[a-zA-Z0-9\s\.,;:'"?!@()]+/g;
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