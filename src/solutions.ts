// Problem 1:
const filterEvenNumbers = (array: number[]): number[] => {
    const result = array.filter((num) => num % 2 === 0);
    return result;
}

// Problem 2:
const reverseString = (str: string) => {
    const result = str.split("").reverse().join("");
    return result;
}

// Problem 3:
type StringOrNumber = string | number
const checkType = (input: StringOrNumber): StringOrNumber => {
    if (typeof input === "string") {
        return "string"
    }
    else return "number"

}
// Problem 4:
const getProperty = <T>(obj: T, key: keyof T) => {
    return obj[key]
}

// Problem 5:
interface Book {
    title: string;
    author: string;
    publishedYear: number;
}
const toggleReadStatus = (bookObj: Book) => {
    return {
        ...bookObj,
        isRead: true
    }
}


// Problem: 6
class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}
class Student extends Person {
    grade: string;
    constructor(name: string, age: number, grade: string) {
        super(name, age)
        this.grade = grade
    }
    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    }
}
