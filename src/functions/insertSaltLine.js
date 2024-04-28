export function insertSaltLine(texto) {
    let textoModificado = String(texto).replace(/([a-zA-Z])\.(?=\s)/g, '$1.<br/><br/>');
    console.log(textoModificado);
    return textoModificado;
}
