type TValue  = string | number | boolean ;
const formatValue = (value:TValue ):TValue => {
  if (typeof value === 'string') {
    const UpperCase = value.toUpperCase();
    return UpperCase;
  } else if (typeof value === 'number') {
    const Number = value * 10;
    return Number;
  } else {
    return !value;
  }
}
