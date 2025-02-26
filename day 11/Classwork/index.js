
// console.log(this)
// let obj = {
//     name:"Aadish chowdhury",
//     class:"btech",
//     myFunction :function(){
//         console.log(this.name,this.class);
//         console.log("i am method inside object")
//     },
//     subjects:["DBMS","CN","AI","DSA"],
//     newObj:{                                                
//         1:80,
//         nestedFunction:function(){
//             console.log(this);
//             console.log("nested function called")
//         },
//         nestednewObj:{
//             myMethod:function(){
//                 // console.log(this);
//                 console.log("nested method")
//             }
            
//         }
//     }
// }
// // console.log(obj.myFunction())
// // console.log(obj)
// obj.myFunction()
// obj.newObj.nestedFunction()


//CONDITIONS

// let num1 = 10;
// let num2 = 20;
// if(num1<num2){
//     console.log(`${num1} is less than ${num2}`);
// }
// else if(num1==num2){
//     console.log(`${num1} is equal than ${num2}`);
// }
// else{
//     console.log(`${num2} is less than ${num1}`);
// }

//Let suppose you have one number and you have to check for number like :

// let num = 9;
// if(num%3==0 && num%5==0 ){
//     console.log(`Fizz buzz`)
// }
// else if(num%5==0){
//     console.log(`buzz`)
// }
// else if(num%3==0){
//     console.log(`Fizz`)
// }
// else{
//     console.log(`none`)
// }

//for loop
//for(start;condition;inc/dec){
//        logic
//}

// let num = 20;
// for(let i=2;i<=num;i=i+2){
//     console.log(i)
// }

// let arr = [1,2,3,4,5,6,7,8,9]
// for(let i = 0;i<arr.length;i++){
//     console.log(arr[i],i)
// }

// let str = "sima chowdhury"
// for(let i = 0;i<str.length;i++){
//     console.log("a"+str[i])
// }

// let arr = ["a","b","c","d","e","f","g","h"];
// for(let num of arr){
//     console.log(num)
// }

//while loop

// let num= 5;
// while(num<10){
//     //logic
//     num++;
// }

let arr = [1,2,3,4,5,6,7,8,9,10]
for(let i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        console.log(`${arr[i]} is even`)
    }
    else{
        console.log(`${arr[i]} is odd`)
    }
}