export function formatCientyfuNumbre(numero) {
    // Convierte el número a una cadena de texto
    const numeroCadena = String(numero);

    // Verificar si el número está en notación científica
    const esNotacionCientifica = numeroCadena.includes('e');

    if (esNotacionCientifica) {
        // Separa la cadena en la parte antes y después del 'e'
        const [parteEntera, parteExponente] = numeroCadena.split('e');

        // Obtén el exponente del número
        const exponente = parseInt(parteExponente);

        // Formatea el número completo
        const numeroFormateado = `0.0 ${Math.abs(exponente)}⇧  ${parteEntera.slice(0,5).replace('.', '')}`;

        return numeroFormateado;
    } else {
        // Si no es notación científica, devuelve el número tal como está
        return numero.toString().slice(0,10);
    }
}
