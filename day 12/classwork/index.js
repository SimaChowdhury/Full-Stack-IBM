let form = document.getElementById("userForm");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let number = document.getElementById("number").value;
    let password = document.getElementById("password").value;
    let conformPassword = document.getElementById("conformPassword").value;

    let obj= {
        name,email,number,password,conformPassword
    }

    if(obj.password!==obj.conformPassword){
        return alert("password do not match")
    }
    // console.log(name);
    // console.log(email);

    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.innerText = obj.name;
    let td2 = document.createElement("td");
    td2.innerText = obj.email;
    let td3 = document.createElement("td");
    td3.innerText = obj.number;
    let td4 = document.createElement("td");
    td4.innerText = obj.password;
    let td5 = document.createElement("td");
    td5.innerText = obj.conformPassword;
    tr.append(td1,td2,td3,td4,td5);
    document.getElementById("tbody").append(tr);
});