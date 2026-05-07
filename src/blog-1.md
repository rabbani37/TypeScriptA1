# How to keeps your code DRY(Don't Repeat Yourself) using Pick and Omit Utility 

Pick and Omit borth are utilitys of TypeScript. It help us to write smaller interface of a big interface without writing the repated code. To use this, We don't write same code again again. We should to aboid writing same code reptly . For this resone We need to use Pick and Omit utilitys of TypeScript. 

Now we will see how to aboid repetitive code using Pick and Omit.

1. How to use Pick

interface User {
    id: number;
    name: string;
    email: string;
    password: string;
}

Here, If we need our name and email internally, we won't repeat it.
like of:

interface UserInfo extends User {
    name: string;
    email: string;
}

We will use the Pick utility as opposed to writing UserInfo.
example:
type UserInfo = Pick<User, "email" | "password">;

2. How to use Omit
Omit, this will also save you from writing code again and again.

Imagine you have a user interface. like 

interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    role:string
}

If you don't need the role property from the above User interface. But need all the user properties, then you will write the interfaces again except the role property? No, You can use here Omit Utilitis 

example:
type UserInfo2 = Omit<User, "role">;

Using only Omit you will get all properties except the roll property here.

like of : 
UserInfo2 = {
   id: number;
   name: string;
   email: string;
}


Here we can write very nice clean code without repeated code just using Pick and Omit utilities.
So, Pick and Omit help us from write repated code.