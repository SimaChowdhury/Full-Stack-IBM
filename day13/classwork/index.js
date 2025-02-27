//for each

// let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// arr.forEach((el,index)=>{
//     console.log(el,index)
// });
// let ans = arr.forEach((el,index)=>{                        //foreach -- return undefined
//     return el
// });
// console.log(ans)

// let ans = arr.map((el,index)=>{                                  //map-- return array
//     return el*10
// });
// console.log(ans)

// let output = arr.filter((el,i)=>{
//     // // return el%2==0 && el!=6
//     // return typeof el == "string" || el%5==0
//     
// })
// console.log(output)

//reduce
// let output = arr.reduce((acc,el)=>{
//     return acc*el
// });
// console.log(output);


// let output = arr.filter((el,i)=>{
//     return el%5==0;
// }).map((el,i)=>{
//     return el*2;
// }).reduce((acc,el)=>{
//     return acc+el;
// })
// console.log(output);

// let arr = [30,28,2,90,32,4,10,55,32,6];
// let ans = arr.sort((a,b)=>{return a-b});
// console.log(ans);

let data = [
    {name:"watch",price:2000,decs:"Good watch",reting:4},
    {name:"shoes",price:12000,decs:"Good shoes",reting:4.5},
    {name:"bag",price:500,decs:"Good bag",reting:5},
    {name:"laptop",price:1500,decs:"Good laptop",reting:5.5},
    {name:"tv",price:40000,decs:"Good tv",reting:6},
    {name:"makeup",price:10000,decs:"Good makeup",reting:6.5},
    {name:"car",price:100000,decs:"Good car",reting:7}
]
// data.sort((a,b)=>{
//     return a.price-b.price
// });

data.sort((a,b)=>{
    let nameA = a.name.toLowerCase();
    let nameB = b.name.toLowerCase();
    if(nameA<nameB){
        return -1;
    }
    if(nameA>nameB){
        return 1;
    }
}
)
console.log(data)