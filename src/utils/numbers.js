export const numberWithSuffix = (num) => {
  const asStr = num.toString();
  const lastDigit = asStr[asStr.length - 1];

  let suffix = '';
  switch (lastDigit) {
    case '1': suffix = 'st';
    break;
    case '2': suffix = 'nd';
    break;
    case '3': suffix = 'rd';
    break;
    default: suffix = 'th';
  }

  return `${num}${suffix}`
}
