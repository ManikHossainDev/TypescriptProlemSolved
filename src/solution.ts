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


// Problem 3
type PersonParams = {
  name: string;
  age: number;
};
class Person {
  name: string;
  age: number;
  constructor({ name, age }: PersonParams) {
    this.name = name;
    this.age = age;
  }
  getDetails(): string  {
    const person = `'Name: ${this.name}, Age: ${this.age}'`;
    return person;
  }
}
const person1 = new Person({ name: 'John Doe', age: 30 });
const person2 = new Person({ name: 'Alice', age: 25 });



