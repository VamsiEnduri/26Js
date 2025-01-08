let singlePdata=document.getElementById("sinelPCard");

let singlePStorage=JSON.parse(localStorage.getItem("singleP"))

singlePdata.innerHTML=`
<img src=${singlePStorage.image} alt="${singlePStorage.id}"/>
              <p>${singlePStorage.title}</p>
              <span>${singlePStorage.price}</span>
              <button>AddToCart</button>
              <button>BuyNow</button>
`