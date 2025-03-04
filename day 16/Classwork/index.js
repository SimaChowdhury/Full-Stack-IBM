// //setTimeout,setInterval,setImmediate ---- macro task
// //Promise,queMicrotask --- micro task

// let name = "synchronous";
// console.log(name);

// setTimeout(()=>{
//     console.log("Asynchronously running");
// },1000);
// let surName = "code";
// console.log(surName);
// setTimeout(()=>{
//     console.log("Asynchronously syncing:-1");
// },3000);

// queueMicrotask(()=>console.log("microtask"));

// setTimeout(()=>{
//     console.log("Asynchronously syncing:-2");
// });
// for(let i=0; i<5;i++){
//     console.log(i);
//     setTimeout(()=>{
//         console.log(i);
//     },1000);
//     console.log(i);

// }


// console.log(name,surName)


// let myPromise = new Promise((resolve,reject)=>{
//     let flag = true;
//     if(flag){
//         resolve("Promise.resolve with a green flag");
//     }else{
//         reject("Promise.reject with a red flag");
//     }
// });
// console.log(myPromise);

// async function fetchData(){
//     let data = await fetch( "https://fakestoreapi.com/products");
//     let ans = await data.json();
//     console.log(ans);
// }
// fetchData();

