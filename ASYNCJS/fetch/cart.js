let cartItemsContainer=document.getElementById("cartItemsContainer")

let allCartData=JSON.parse(localStorage.getItem("cartItems"))

allCartData.forEach(x=>{
    let card=document.createElement("div")
    card.className="card"
    card.innerHTML= `
    <img src=${x.image} alt="${x.id}"/>
                  <p>${x.title}</p>
                  <span>${x.price}</span>
                  <button id="rm">Remove</button>
    `
    cartItemsContainer.append(card)

    card.querySelector("#rm").addEventListener("click",()=>{
        cartItemsContainer.removeChild(card)
    })

})