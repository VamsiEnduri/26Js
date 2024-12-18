// let div=document.createElement("div")
// let divContainer=document.getElementById("divContainer")
// divContainer.style.backgroundColor="yellow"
// divContainer.style.width="200px"
// divContainer.style.height="200px"
// let pTags=document.getElementsByClassName("p"); 4

// // pTags[0].style.backgroundColor="yellow"
// for(let i=0;i<pTags.length;i++){
//     pTags[i].style.backgroundColor="red"
//     pTags[i].style.fontSize="50px"
//     divContainer.append(pTags[i])
//     // console.log(divContainer,"container")
//     // console.log(pTags,"pTags")
// }
// console.log(pTags);

// console.log(div,"div container")



// let elems=document.getElementsByTagName("p");
// // console.log(elems)
// for(let i=0;i<elems.length;i++){
//     // console.log(elems[i])
//    divContainer.appendChild(elems[i])
// }
// console.log(divContainer,"container")


// let pTags=document.querySelectorAll(".p");
// // let divContainer=document
// console.log(pTags)
// for(let i=0;i<pTags.length;i++){
//     pTags[i].style.color="red"
//     document.body.appendChild(pTags[i])
//     // divContainer.append(pTags[i])
// }


// let a=[1,2,3,4,5,6];
// console.log(a.filter(vamsi=>vamsi>=3 && vamsi % 3 ==0));
// console.log(a);

// let a=[1,2,3,4,5,6] // [2 4 6 8 10 12]
// console.log(a.map(x=>x >2));
// console.log(a);


// let a=[1,2,3,4,5];
// // console.log(a.forEach(x=>console.log(x *2)));
// console.log(a.forEach(x=>x));


// console.log(a);


let data=[
    {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": {
      "rate": 3.9,
      "count": 120
    }
  },
  {
    "id": 2,
    "title": "Mens Casual Premium Slim Fit T-Shirts ",
    "price": 22.3,
    "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    "category": "electronics",
    "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    "rating": {
      "rate": 4.1,
      "count": 259
    }
  },
]


// console.log(data.filter(x=>x.category === "electronics"));
// console.log(data.map(x=>x.category === "electronics"));
data.forEach(x=>{
    console.log(x)
});


