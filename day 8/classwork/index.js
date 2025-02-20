document.getElementById("parent").style.backgroundColor="blue"
document.getElementById("parent").style.border="2px solid black"
document.getElementById("parent").style.height="300px"
document.getElementById("parent").style.width="80%"
let element=document.createElement("button")
element.innerText="submit"
element.style.backgroundColor="green"
element.style.padding="10px"
element.style.margin="10px"
element.style.marginLeft="100px"
element.style.border="2px solid black"
document.getElementById("parent").append(element)

// let num=10;
// console.log(num);
//  num=15;
// console.log(num);

function myFunction(){
    var num=10;
    console.log(num)
}
myFunction()
console.log(num)




