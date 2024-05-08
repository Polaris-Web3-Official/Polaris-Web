//Funcion encargada de lanzar un error 

export function error(m) {
    try {
        throw new Error(m);
    } catch (e) {
        console.error(e.stack);
    }
}
