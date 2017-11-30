let myName: string;

myName = "Nizar";
myName = "Dapper Dan";

// These error because "myName" is supposed to be a string
// myName = 99;
// myName = [];


//  name   type  value
//    |     |      |
let blah: number = 42;

blah = 99;

// These error because "blah" is supposed to be a number
// blah = "hello?";
// blah = true;



let isHungry: boolean = true;
isHungry = Boolean(1);

// Use "any" sparingly because it defeats the purpose of TypeScript.
let x: any = {};
x = true;
x = "hello";


// you can declare the type of things inside an array
const myArray1: string[]      = [];
const myArray2: Array<string> = [ "thor", "scarlet witch" ];


myArray1.push("hot dog", "pizza", "banana smoothie");

// Error because "myArray1" can only contain strings
// myArray1.push(99);



//        "x" must be a number
//                       |
function quadruple (x: number): number {
                           //     |
    return x * x * x * x;  // "quadruple()" must return a number
}


console.log( quadruple(20) );

// Errors because the "x" parameter must be a number
// console.log( quadruple("sup") );


                       // "myNumbers" must be an array of numbers
                       //               |
function calculateAverage (myNumbers: number[]) {
    let total = 0;

    myNumbers.forEach((x) => {
        total += x;
    });

    return total / myNumbers.length;
}

const names: string[] = [ "a", "b", "c" ];
const myTestScores = [ 85, 73, 57, 100 ];

console.log( calculateAverage(myTestScores) );

// Errors because "names" is an array of strings
// console.log( calculateAverage(names) );
