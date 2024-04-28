export default function formatNumber(num){
  const str = String(num);
  let formattedNumber = "";
  let count = 0;
  let decimalPart = "";
  let hasDecimal = false;

  const parts = str.split(".");
  const integerPart = parts[0];
  if (parts.length > 1) {
    decimalPart = "." + parts[1];
    hasDecimal = true;
  }

  for (let i = integerPart.length - 1; i >= 0; i--) {
    count++;
    formattedNumber = integerPart[i] + formattedNumber;
    if (count % 3 === 0 && i !== 0) {
      formattedNumber = "," + formattedNumber;
    }
  }

  return hasDecimal ? formattedNumber + decimalPart : formattedNumber;
};
