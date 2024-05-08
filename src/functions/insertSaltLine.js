//Funcion para insertar un salto de linea en un text que luego
//sera pasado a html

//Utilizado en Socialfy

export function insertSaltLine(texto) {
    let textoModificado = String(texto).replace(/([a-zA-Z])\.(?=\s)/g, '$1.<br/><br/>');
    console.log(textoModificado);
    return textoModificado;
}
