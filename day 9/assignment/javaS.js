let x = "10";
let y = 15;
console.log(x == y);
console.log(x === y);

const words = ["JavaScript", "Programming", "Function", "Hoisting"];
function getLongestWordLength(arr) {
  return arr.reduce((max, word) => Math.max(max, word.length), 0);
}
console.log(getLongestWordLength(words)); // Output: 11 (Programming)

function testScope() {
    if (true) {
    var a = 10;
    let b = 20;
    const c = 30;
    }
    console.log(a);
    console.log(b);
    console.log(c);
   }
   testScope();


const name = "John";
function greet() {
 if (true) {
 const message = "Hello " + name;
 
 console.log(message);

 }
}
greet();


let a = 10;
let b = 20;
const multiply = (a, b) => {
    console.log(a * b);
};
multiply(a, b);

const obj = {
    name: "Alice",
    sayHello: function() {
    setTimeout(() => {
    console.log("Hello, " + this.name);
    }, 1000);
    }
   };
   obj.sayHello();