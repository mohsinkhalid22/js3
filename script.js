// Logical Operators

let a = 4
let b = 6

console.log("cond1 || cond2 =", a > b || a == b );

console.log("cond3 && cond4 =", a < b && b > a);

console.log("!a < b", !(a < b));

// Conditional Statements 

let age = 18

if (age >= 18){
    console.log("You can vote.");
} 
if (age < 18){
    console.log("You cannot vote.");
}

let mode = "light";
let color;

if (mode === "dark"){
    color = "black";
}
if (mode === "light"){
    color = "white";
}

console.log(color);

let vehicle = "Car";

if (vehicle === "Car"){
    console.log("You can go on this road.");
}else{
    console.log("You can't go on this road.");
}

// Odd or Even

let num = 333434;

if (num % 2 === 0){
    console.log(num, "is even");
} else {
    console.log(num, "is odd");
}

let Bground = "green";
let colr;

if (Bground === "dark"){
    colr = "black";
} else if (Bground === "blue"){
    colr = "blue";
} else if (Bground === "pink"){
    colr = "pink";
} else {
    colr = "white";
}

console.log(colr);

if (colr === "green"){
    console.log(Bground);
}

// Ternary Operators 

let aage = 18

let result = aage >= 18 ? "adult" : "not adult";

console.log(result);


/*
let nam = prompt("Enter a multiple of 5");

if (nam % 5 === 0){
    console.log(nam,"is a multiple of 5");
} else {
    console.log(nam,"is not a multiple of 5");
}
*/

let number = prompt("Enter your Score(0-100)");
let Result;

if(number >= 80 && number <= 100){
    Result = "Grade A";
} else if (number >= 60 && number <= 79){
    Result = "Grade B";
} else if (number >= 40 && number <= 59){
    Result = "Grade C";
} else if (number >= 0 && number <= 39){
    Result = "Fail";
}

console.log(Result);

