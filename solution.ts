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
// console.log(formatValue("hello"));
// console.log(formatValue(5));
// console.log(formatValue(true));

// Problem 2
const getLength = (value: string | any[]): number => {
    if (typeof value === 'string') {
        return value.length;
    } else if (Array.isArray(value)) {
        return value.length;
    }
    return 0;
};
// console.log(getLength("typescript"));
// console.log(getLength([10, 20, 30, 40]));


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
// console.log(person1.getDetails());
// console.log(person1.getDetails());



// Problem 4
type Item = {
  title: string;
  rating: number;
};
const filterByRating = (items: Item[]): Item[] => {
  return items.reduce((acc: Item[], item) => {
    if (item.rating >= 4) {
      acc.push(item);
    }
    return acc;
  }, []);
}
const books = [
  { title: 'Book A', rating: 4.5 },
  { title: 'Book B', rating: 3.2 },
  { title: 'Book C', rating: 5.0 },
];
// console.log(filterByRating(books))



// Problem 5
interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};
const filterActiveUsers = (users: User[]): User[] => {
  return users.filter((user) => user.isActive);
}
const users = [
  { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
  { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
  { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];
// console.log(filterActiveUsers(users));



// Problem 6
type TBook = {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean
}
const printBookDetails = (book: TBook): void  => {
  const availability = book.isAvailable ? 'Yes' : 'No';
  console.log(
    `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`
  );
}
const itIsBook: TBook = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  publishedYear: 1925,
  isAvailable: true
};
// printBookDetails(itIsBook);



// Problem 7
type Value = string | number;
type ValueArray = Value[];
const getUniqueValues = (array1: ValueArray, array2: ValueArray): ValueArray => {
  const Combined: ValueArray = [];
  for (let i = 0; i < array1.length; i++) {
    const box = array1[i];
    if (box !== undefined) {
      Combined[Combined.length] = box;
    }
  }
  for (let i = 0; i < array2.length; i++) {
    const box = array2[i];
    if (box !== undefined) {
      Combined[Combined.length] = box;
    }
  }
  const Unique: ValueArray = [];
  for (let i = 0; i < Combined.length; i++) {
    const value = Combined[i];
    if (value === undefined) continue
    let exists = false;
    for (let j = 0; j < Unique.length; j++) {
      if (Unique[j] === value) {
        exists = true;
        break;
      }
    }
    if (!exists) {
      Unique[Unique.length] = value;
    }
  }
  return Unique;
};
const array1: ValueArray = [1, 2, 3, 4, 5];
const array2: ValueArray = [3, 4, 5, 6, 7];
// console.log(getUniqueValues(array1, array2))



// Problem 8 
interface TProduct  {
  name: string;
  price: number;
  quantity: number;
  discount?: number; 
};
const calculateTotalPrice = (products: TProduct[]): number => {
  if (products.length === 0) return 0;
  return products
    .map((p) => {
      const total = p.price * p.quantity;
      const discountAmount = p.discount ? total * (p.discount / 100) : 0;
      return total - discountAmount;
    })
    .reduce((sum, current) => sum + current, 0);
}
const products = [
  { name: "Pen", price: 10, quantity: 2 },
  { name: "Notebook", price: 25, quantity: 3, discount: 10 },
  { name: "Bag", price: 50, quantity: 1, discount: 20 },
];
// console.log(calculateTotalPrice(products));