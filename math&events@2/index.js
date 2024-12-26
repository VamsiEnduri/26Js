// const a=10;

// console.log(a);

// console.log(Math.round(7.88));
// console.log(Math.round(7.12));
// console.log(Math.round(7.4));
// console.log(Math.round(7));

// console.log(Math.ceil(7));
// console.log(Math.ceil(7.5));
// console.log(Math.ceil(7.01));

// console.log(Math.floor(5.466666666666666666));

// console.log(Math.floor(Math.random())); // 0 to 1 with decimal
// console.log(Math.random()); // 0 to 1 with decimal
// console.log(Math.random()); // 0 to 1 with decimal
// console.log(Math.random()); // 0 to 1 with decimal
// console.log(Math.random());


// console.log(Math.floor(Math.random() *10));
// console.log(Math.floor(Math.random() *10));
// console.log(Math.floor(Math.random() *10));
// console.log(Math.floor(Math.random() *10));

// let otp=""
// for(i=1;i<=4;i++){
// otp += Math.floor(Math.random()*10)
// }
// console.log(typeof otp);


// let otp=""
// for(i=1;i<=1;i++){
// otp += Math.floor(Math.random()*10000)
// }
// console.log(otp);
// console.log(Math.floor(Math.random()*10000));


// console.log(Math.random()*10000);

// console.log(Math.abs(555));
// console.log(Math.abs(-555));
// console.log(Math.abs(-555.12));

// console.log();
// 1.00

// console.log(Math.max(1,2,3,4,5));
// console.log(Math.min(1,2,3,4,5));
// console.log(Math.min(-1,2,3,4,5));

// console.log(Math.sqrt(82));


// let btnOtp=document.querySelector("button")
// btnOtp.addEventListener("click",()=>{
//   let otp=""
//   for(i=1;i<=4;i++){
//   otp += Math.floor(Math.random()*10)
//   }
//   console.log(otp);
// })




// let btnOtp=document.querySelector("button")
// btnOtp.addEventListener("click",otp)

// function otp(){
//   let otp=""
// for(i=1;i<=4;i++){
// otp += Math.floor(Math.random()*10)
// }
// console.log(otp);
// }

// dont disturb other events r dont call other events on specific event
//why happening like that
// ..ho wto prevent


// // /
// let grand=document.getElementById("grand");
// grand.addEventListener("click",()=>{
//   console.log("grand clicked");
//   grand.style.backgroundColor="red"
// })

// //useCapture --arg ( false/true)

// let parent=document.getElementById("parent");
// parent.addEventListener("click",()=>{
//   console.log("parent clicked");
//   parent.style.backgroundColor="blue"
// })


// let child=document.getElementById("child");
// child.addEventListener("click",()=>{
//   console.log("child clicked");
//   child.style.backgroundColor="yellow"
// })

// bubbling is event propogation in html dom tree from innermost elem to outermost element




// /
// let grand=document.getElementById("grand");
// grand.addEventListener("click",()=>{
//   console.log("grand clicked");
//   grand.style.backgroundColor="red"
// },false)

// //useCapture --arg ( false/true)

// let parent=document.getElementById("parent");
// parent.addEventListener("click",()=>{
//   console.log("parent clicked");
//   parent.style.backgroundColor="blue"
// },false)


// let child=document.getElementById("child");
// child.addEventListener("click",()=>{
//   console.log("child clicked");
//   child.style.backgroundColor="yellow"
// },false)




//event trckiling r event capturing

// /
// let grand=document.getElementById("grand");
// grand.addEventListener("click",(e)=>{
//   e.stopPropagation()
//   console.log("grand clicked");
//   grand.style.backgroundColor="red"

//   setTimeout(()=>{
//     grand.style.backgroundColor="white"
//   },1000)
// },true)

// //useCapture --arg ( false/true)

// let parent=document.getElementById("parent");
// parent.addEventListener("click",(e)=>{
//   e.stopPropagation()
//   console.log("parent clicked");
//   parent.style.backgroundColor="blue"
//   setTimeout(()=>{
//     parent.style.backgroundColor="white"
//   },2000)
// },true)


// let child=document.getElementById("child");
// child.addEventListener("click",()=>{
//   console.log("child clicked");
//   child.style.backgroundColor="yellow"
//   setTimeout(()=>{
//     child.style.backgroundColor="white"
//   },3000)
// },true)




// let grand=document.getElementById("grand");
// grand.addEventListener("click",()=>{
//   console.log("grand clicked");
//   grand.style.backgroundColor="red"
// },false)

// //useCapture --arg ( false/true)

// let parent=document.getElementById("parent");
// parent.addEventListener("click",(e)=>{
//   e.stopPropagation()
//   console.log("parent clicked");
//   parent.style.backgroundColor="blue"
// },false)


// let child=document.getElementById("child");
// child.addEventListener("click",(e)=>{
//   e.stopPropagation()
//   console.log("child clicked");
//   child.style.backgroundColor="yellow"
// },false)


let productCard=document.querySelector("div");
// let productCard2=document.querySelector("div2");
// let productCard3=document.querySelector("div3");

productCard.addEventListener("click",(e)=>{
  e.stopImmediatePropagation()
  // alert("s")
  window.location.href="./singleCrad.html"
})

let addToCart=document.getElementById("cart")
let buyNow=document.getElementById("buyNow")

addToCart.addEventListener("click",(e)=>{
  e.stopPropagation()
  alert("adedto cart")
})


buyNow.addEventListener("click",(e)=>{
  e.stopPropagation()
  alert("proceed to pay!!!!!!!!")
})