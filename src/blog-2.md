## Why 'any' is Callded a *"Type seft hold"* and why *"unknown"* is the Safer Choice in TypeScript

Type safety means TypeScript checks our code before running it and helps prevent many common bugs. 
When we write any type. TypeScript actually don't unserstand. What type is this? . But When we use unknow key word Then typescript doesn't allow you to write any type of valu before checking it.
Then you have to check the type and give it a new type and it is called type narrow.

If we write this 
like of: 
    const num1: any = "Hello";
    num1.toFixed(100);

Even then, TypeScript will not given any error here. This will give an error after run time, that's why we will use the type **unknown** instead of **any**. 

Now we will try to rewrite the code using the **unknown** type.
like of:
    const str: unknown = "Hello";
    str.toUpperCase();

We have written a varible as a string, but if we use the string method, it will give us an error because the TypeSript cannot recognize it as a string type. Because We have used an unknown type.
To solve this problem, first we need to check the type of any value we pass and then define the type.

Let's see how to do it.
    let str: unknown = "Hello";
    if (typeof str === "string") {
        console.log(value.toUpperCase());
    }

What is happening here is that first we are checking the type then we are using the method according to the type but it is not giving any error which means our type **narrow** method is being used correctly.


So we understood the difference between **any** and **unknown** methods and also cleared up how to write code by typing.