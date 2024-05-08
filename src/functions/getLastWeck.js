//Funcion para tomar la semana pasada de una fecha
//especificada

//Normalmnte utilizado para graficas de la libreria lightweight

export function getLasWeck(date) {
  date.setDate(date.getDate() - 7);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}
