//Funcion para formatear un dominio
//input( https://www.cusoft.tech ~ https://cusoft.tech/post#4etc )
//output(cusoft.tech)

export function getDomainName(url) {
    try {
        const hostname = new URL(url).hostname;
        const domain = hostname.replace(/^www\./, ''); // Eliminar 'www.' si está presente
        return domain;
    } catch (error) {
        console.error("Error al obtener el nombre de dominio:", error);
        return null;
    }
}
