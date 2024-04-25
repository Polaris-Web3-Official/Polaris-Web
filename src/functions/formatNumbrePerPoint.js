export default function FormatStrPerPoint(str) {
  const str2 = String(str)
  const indexPunto = str2.indexOf(".");
  if (indexPunto !== -1) {
    const primerParte = str2.substring(0, indexPunto + 2);
    return primerParte;
  }
  return str;
}