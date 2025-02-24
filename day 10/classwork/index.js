// let str = "SV University"
// console.log(str.length)
// console.log(str.length-1)
// console.log(str[0])
// console.log(str[str.length-1])

// let arr = [1,2,3,"aadi","",1.12,true,null,undefined];
// console.log(arr[arr.length-2]) 
// console.log(arr[3])
// // arr.push("iman");   add
// arr[4]= "shilpa"
// console.log(arr)

// arr.pop()
// console.log(arr)

// let obj = {
//     iman:{class:"btech CSE",rn:196,subject:["DBMS","NM","RM","DSA"]},
//     sunetra:{class:"btech CSE",rn:17,subject:["DBMS","NM","RM","DSA"]},1:undefined
// }
// console.log(obj.iman)
// console.log(obj)
// console.log(obj["iman"])
// console.log(obj.iman.subject[1])
// obj.iman = "susmita"
// console.log(obj)

// delete obj.iman
// console.log(obj)

// obj.shilpa = {rn:123,hobbies:["sleeping","talking","eating"]}
// obj.shilpa = {rn:143,hobbies:["sleeping","talking","eating"]}
// console.log(obj)

//object literal
//using new keyword
//constructor

// let name = "sima"
// // let class = "btech"
// let hobbies = ["singing","playing"];
// let newObj = {
//     name,hobbies
// }
// console.log(newObj)

let arr = [1,2,3,[4,5,6,[7,8,9]]]
console.log(arr[3][3][0]);

let superheros = {
    1:{
        _id: Object("521765g"),
        name:'batman',
        power:['intelligence','money'],
        health:45,
        villains:[
            {name:'rethod',health:23},
            {name:'twoface',health:30}
        ]
    }
}
console.log(superheros["1"].villains[0].health)
console.log(superheros["1"].power[0])