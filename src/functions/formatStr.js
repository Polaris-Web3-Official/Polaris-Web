export default function formatStr(str, maxlength) {
  const newSTR = String(str);
  if (newSTR.length > maxlength) {
    return newSTR.substring(0, maxlength) + "..";
  } else {
    return str;
  }
}
