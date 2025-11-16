// Problem 1
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


// Problem 2
const getLength = (value: string | any[]): number => {
    if (typeof value === 'string') {
        return value.length;
    } else if (Array.isArray(value)) {
        return value.length;
    }
    return 0;
};

