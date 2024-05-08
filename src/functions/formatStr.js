//Funcion para formatear un str a una cantidad x de caracteres

export default function formatStr(str, maxlength) {
  const newSTR = String(str);
  if (newSTR.length > maxlength) {
    return newSTR.substring(0, maxlength) + "..";
  } else {
    return str;
  }
}
