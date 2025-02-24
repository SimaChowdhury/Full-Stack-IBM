// let x = "10";
// let y = 15;
// console.log(x == y);
// console.log(x === y);

// const words = ["JavaScript", "Programming", "Function", "Hoisting"];
// function getLongestWordLength(arr) {
//   return arr.reduce((max, word) => Math.max(max, word.length), 0);
// }
// console.log(getLongestWordLength(words)); // Output: 11 (Programming)

// function testScope() {
//     if (true) {
//     var a = 10;
//     let b = 20;
//     const c = 30;
//     }
//     console.log(a);
//     console.log(b);
//     console.log(c);
//    }
//    testScope();


// const name = "John";
// function greet() {
//  if (true) {
//  const message = "Hello " + name;
 
//  console.log(message);

//  }
// }
// greet();


// let a = 10;
// let b = 20;
// const multiply = (a, b) => {
//     console.log(a * b);
// };
// multiply(a, b);

// const obj = {
//     name: "Alice",
//     sayHello: function() {
//     setTimeout(() => {
//     console.log("Hello, " + this.name);
//     }, 1000);
//     }
//    };
//    obj.sayHello();

// let x = 5;
// let y = 2;
// let z = x + y;
// console.log(z)

// let a = 3;
// let x = (100 + 50) * a;
// console.log(x)

// let text1 = "A";
// let text2 = "B";
// let result = text1 < text2;
// console.log(result)

// let text1 = "aadi";
// let text2 = "chowdhury";
// let text3 = text1 + " " + text2;
// console.log(text3)

// let x = 5 + 5;
// let y = "5" + 5;
// let z = "Hello" + 5;
// console.log(x)
// console.log(y)
// console.log(z)

console.log(typeof a);
console.log(typeof b);
console.log(a+=a);
if(a===+b){
    console.log("a is equal to b");
 }else{
    console.log("a is not equal to b");
}
let a = 10;
let b = 20;

const num=(a,b)=>{
    console.log(a+b);
}
num(a,b);