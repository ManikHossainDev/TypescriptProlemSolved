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