## Explicacion de la expresion regular para validar el Email

reguex = /[a-zA-Z0-9\s\.,;:'"?!@()]+/g;

### Se liminarion algunas  ( ` ) para que se entendiera correctamente el .md

La expresion correcta es la de arriba.

# Explicacion generada con IA ( " Se recomienda discresion xD " )

- `/` : Este es el delimitador que indica el inicio de la expresión regular.

- `[a-zA-Z0-9\s\.,;:'"?!@()]+` : Este patrón permite una o más (`+`) de las siguientes cosas:
  - Cualquier letra minúscula (`a-z`)
  - Cualquier letra mayúscula (`A-Z`)
  - Cualquier número (`0-9`)
  - Un espacio en blanco (`\s`)
  - Cualquiera de los caracteres especiales enumerados (`\.,;:'"?!@()`)

- `/g` : Este es el delimitador que indica el final de la expresión regular. La `g` después del delimitador final significa que esta expresión regular se aplicará de manera global en la cadena de entrada, es decir, buscará todas las coincidencias posibles en lugar de detenerse después de la primera coincidencia.

En resumen, esta expresión regular busca una o más ocurrencias de cualquier letra (mayúscula o minúscula), número, espacio en blanco o uno de los caracteres especiales enumerados. Se aplica de manera global a la cadena de entrada.
