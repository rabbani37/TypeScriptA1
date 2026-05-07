
const filterEvenNumbers = (array: number[]): number[] => {
    const result = array.filter((num) => num % 2 === 0);
    return result;
}





const reverseString = (str: string): string => {
    const result = str.split("").reverse().join("");
    return result;
}





type StringOrNumber = string | number
const checkType = (input: StringOrNumber): StringOrNumber => {
    if (typeof input === "string") {
        return "string"
    }
    else return "number"
}





const getProperty = <T>(obj: T, key: keyof T) => {
    return obj[key]
}






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






const getIntersection = (numOfArr1: number[], numOfArr2: number[]) => {
    const resultArray = numOfArr1.filter((element) => numOfArr2.includes(element))
    return resultArray;
}

