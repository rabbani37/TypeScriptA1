
const filterEvenNumbers = (array: number[]): number[] => {
    const result = array.filter((num) => num % 2 === 0);
    return result;
}


const reverseString = (str: string) => {
    const result = str.split("").reverse().join("")
    return result;
}
