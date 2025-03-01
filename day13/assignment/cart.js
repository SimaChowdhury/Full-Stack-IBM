document.addEventListener("DOMContentLoaded", () => {
    const cartItems = JSON.parse(localStorage.getItem("cartData")) || [];
    // console.log(cartItems);
    const cartTable = document.getElementById("cart");
  
    cartItems.forEach((el,index) => {
    let productBox=document.createElement("div");
    productBox.className="product-box";
    let heading=document.createElement("h2");
    heading.innerText= el.category;
    let img=document.createElement("img");
    img.src= el.image ;
    let name=document.createElement("p");
    name.innerText= el.name ;
    let price=document.createElement("p");
    price.innerText= el.price ;
    let rating=document.createElement("p");
    rating.innerText= el.rating ;
    let button=document.createElement("button");
    button.innerText="Delete";
    button.addEventListener("click", () => {
        removeItem(index);
    })
  
  
    productBox.append(heading,img,name,price,rating,button);
    cartTable.append(productBox);
    });
    
   
  });
  function removeItem(index) {
    let cartItems = JSON.parse(localStorage.getItem("cartData")) || [];
    cartItems.splice(index, 1);
    localStorage.setItem("cartData", JSON.stringify(cartItems));
    location.reload();
    
  }
  
  
// // function displayMovies() {
// //     let movies = JSON.parse(localStorage.getItem("movies")) || [];
// //     let tableBody = document.getElementById("tbody");
// //     let noMoviesMessage = document.getElementById("noMoviesMessage");

// //     tableBody.innerHTML = "";
// //     noMoviesMessage.style.display = movies.length === 0 ? "block" : "none";

// //     movies.forEach((movie, index) => {
// //         let row = tableBody.insertRow();
// //         row.innerHTML = `
// //             <td>${movie.name}</td>
// //             <td>${movie.description.length > 100 ? movie.description.substring(0, 100) + '...' : movie.description}</td>
// //             <td>${movie.year}</td>
// //             <td>${movie.rating}</td>
// //             <td>${movie.genre}</td>
// //             <td><img src="${movie.poster}" alt="Poster"></td>
// //             <td><button class="delete-btn" onclick="deleteMovie(${index})">Delete</button></td>
// //         `;
// //     });
// // }

// function displayCart() {
//     let cart = JSON.parse(localStorage.getItem("cart")) || [];
//     let cartDiv = document.getElementById("cart");
//     cartDiv.innerHTML = "";
//     cart.forEach((item, index) => {
//         let div = document.createElement("div");
//         div.className = "cart-item";
//         div.innerHTML = `
//             <img src="${item.image}" width="100"> 
//             <h3>${item.name}</h3>
//             <p>Price: $${item.price}</p>
//             <button onclick="removeFromCart(${index})">Remove</button>
//         `;
//         cartDiv.appendChild(div);
//     });
// }

// displayCart();

// function removeFromCart(index) {
//     let cart = JSON.parse(localStorage.getItem("cart")) || [];
//     cart.splice(index, 1);
//     localStorage.setItem("cart", JSON.stringify(cart));
//     displayCart();
// }

// document.getElementById("purchase").addEventListener("click", function() {
//     localStorage.removeItem("cart");
//     alert("Thank you for your purchase!");
//     displayCart();
// });