
//Formateamos la fecha de creacio de la cuenta/post/comentario etc
export default function formatDateHive(fechaCreacion) {
  const createdDate = new Date(fechaCreacion);
  const now = new Date();

  // Calcular el tiempo transcurrido
  const diffInMilliseconds = now - createdDate;
  const diffInSeconds = diffInMilliseconds / 1000;
  const diffInMinutes = diffInSeconds / 60;
  const diffInHours = diffInMinutes / 60;
  const diffInDays = diffInHours / 24;
  const diffInWeeks = diffInDays / 7;
  const diffInMonths = diffInDays / 30.44; // Aproximación
  const diffInYears = diffInDays / 365.25; // Aproximación

  let timeElapsed;

  if (diffInYears >= 1) {
    timeElapsed = `Created makes ${Math.floor(diffInYears)} year(s)`;
  } else if (diffInMonths >= 1) {
    timeElapsed = `Created makes ${Math.floor(diffInMonths)} month(s)`;
  } else if (diffInWeeks >= 1) {
    timeElapsed = `Created makes ${Math.floor(diffInWeeks)} week(s)`;
  } else if (diffInDays >= 1) {
    timeElapsed = `Created makes ${Math.floor(diffInDays)} day(s)`;
  } else if (diffInHours >= 1) {
    timeElapsed = `Created makes ${Math.floor(diffInHours)} hour(s)`;
  } else if (diffInMinutes >= 1) {
    timeElapsed = `Created makes ${Math.floor(diffInMinutes)} minute(s)`;
  } else {
    timeElapsed = `Created makes a few moments`;
  }
  return timeElapsed;
}
