const url = "https://fakestoreapi.com/products";

//what is api//
// axios
//fetch():-- patch() -- to uofate the data
//  post :-- to post the data / add the data
// delete:-- to delete the data
// get :-- to get the data
// async function getData(){
//     const data= await fetch(url);
//     // console.log(typeof data);
//     // console.log(data.json());
//         const response=await data.json()
//         // console.log(response);
//         response.forEach(x=>{
//             let card=document.createElement("div")
//             card.innerHTML=`
//             <img src=${x.image} alt=""/>
//             `
//             document.body.append(card)
//         })

// }
// getData()
// Swal.fire('Good job!', 'You clicked the button!', 'success');

let allData = document.getElementById("data");

let btn = document.getElementById("btn");
let mens = document.getElementById("mens");
let womens = document.getElementById("womens");
let elec = document.getElementById("elec");
let je = document.getElementById("je");
btn.addEventListener("click", getData());

mens.addEventListener("click", () => getData("men's clothing"));
womens.addEventListener("click", () => getData("women's clothing"));
elec.addEventListener("click", () => getData("electronics"));
je.addEventListener("click", () => getData("jewelery"));

async function getData(category = null) {
  const data = await fetch(url);
  const res = await data.json();

  allData.innerHTML = "";

  const filteredData = category
    ? res.filter((x) => x.category === category)
    : res;

  if (filteredData == 0) {
    allData.innerHTML = "no data found ";
  } else {
    filteredData.forEach((x) => {
      let card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
             <img src=${x.image} alt="image" width="300" class="img"/>
             <p>${x.title}</p>
             <span>${x.price}</span>
             <button id="addCart">addToCart</button>
             <button id="buyNow">BUyNow</button>
             `;
      allData.append(card);
      card.addEventListener("click", () => {
        location.href = "./clearCode/singlePage.html";
        localStorage.setItem("singleP", JSON.stringify(x));
      });
      card.querySelector("#addCart").addEventListener("click", (e) => {
        e.stopPropagation();
        // alert("item added to cart");
// Swal.fire('Good job!', 'item added to the cart!', 'success');
Swal.fire({
  title: "This item added to cart",
  text: "you can see item in cart page",
  imageUrl: `${x.image}`,
  imageWidth: 400,
  imageHeight: 200,
  imageAlt: ""
});

        let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        cartItems.push(x);
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
      });
      card.querySelector("#buyNow").addEventListener("click", (e) => {
        e.stopPropagation();
        let timerInterval;
Swal.fire({
  title: "Redirecting to cart page",
  html: "I will navigate in <b></b> milliseconds.",
  timer: 1000,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading();
    const timer = Swal.getPopup().querySelector("b");
    timerInterval = setInterval(() => {
      timer.textContent = `${Swal.getTimerLeft()}`;
    }, 100);
  },
  willClose: () => {
    clearInterval(timerInterval);
  }
}).then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log("I was closed by the timer");
      location.href="./clearCode/cartItems.html"
  }
});
      
      });
    });
  }
}
// getData()

// function a(){
//   function b(){
//     {
//         id:1
//        }
//   }

// }
// console.log(a);
