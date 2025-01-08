const url="https://fakestoreapi.com/products";

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


let allData=document.getElementById("data")

// let btn=document.getElementById("btn");
let mens=document.getElementById("mens");
let womens=document.getElementById("womens");
let elec=document.getElementById("elec");
let je=document.getElementById("je");
// btn.addEventListener("click",getData())

mens.addEventListener("click",()=>{
    getData("men's clothing")
})
womens.addEventListener("click",()=>{
    getData("women's clothing")
})
elec.addEventListener("click",()=>{
    getData("electronics")
})
je.addEventListener("click",()=>{
    getData("jewelery")
})
// cat="electronics"
async function getData(cat=null){
    const data= await fetch(url)
    const res=await data.json()
    
    console.log(res)
    allData.innerHTML=""
    //    cat="electronics"
  const filteredData= cat ?  res.filter(x=>x.category === cat)  : res
  console.log(filteredData);
  

  filteredData.forEach((x,index)=>{
              let card=document.createElement("div");
              card.className="card"
              card.innerHTML=`
              <img src=${x.image} alt="${x.index}"/>
              <p>${x.title}</p>
              <span>${x.price}</span>
              <button id="addToCart">AddToCart</button>
              <button id="buy">BuyNow</button>
              `
              allData.append(card)

              card.addEventListener("click",()=>{
                location.href="./singleP.html"
                localStorage.setItem("singleP",JSON.stringify(x))
              })

              card.querySelector("#addToCart").addEventListener("click",(e)=>{
                e.stopPropagation()
                alert("added to cart successfully")
               const cartData= JSON.parse(localStorage.getItem("cartItems")) || []
               cartData.push(x)
                localStorage.setItem("cartItems",JSON.stringify(cartData))
              })

              card.querySelector("#buy").addEventListener("click",(e)=>{
                e.stopPropagation()
                window.location.href="./cart.html"
                
              })

  })
    // // console.log(typeof data);
    // // console.log(data.json());
    //     const response=await data.json()
    //     // console.log(response);
        // data.forEach(x=>{
        //     if(x.category === "men's clothing"){
        //         // allData.innerHTML=""
        //         let card=document.createElement("div")
        //     card.innerHTML=`
        //     <img src=${x.image} alt="" width="300"/>
        //     `
        //     allData.append(card)
        //     }else if(x.category === "women's clothing"){
        //         // allData.innerHTML=""
              

        //         let card=document.createElement("div")
        //         card.innerHTML=`
        //         <img src=${x.image} alt="" width="300"/>
        //         `
        //         allData.append(card)
        //     }else if(x.category === "electronics"){
        //         // allData.innerHTML=""
              

        //         let card=document.createElement("div")
        //         card.innerHTML=`
        //         <img src=${x.image} alt="" width="300"/>
        //         `
        //         allData.append(card)
        //     }else {
        //         // allData.innerHTML=""
        //         let card=document.createElement("div")
        //         card.innerHTML=`
        //         <img src=${x.image} alt="" width="300"/>
        //         `
        //         allData.append(card)
        //     }
        // })
}
getData()


// function a(){
//   function b(){
//     {
//         id:1
//        }
//   }
    
// }
// console.log(a);

