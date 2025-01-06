// // Stage 1: Product Ordered
// const productOrdered = new Promise((resolve, reject) => {
//     const orderSuccess = true; // Set to false to simulate failure in ordering
//     setTimeout(() => {
//       if (orderSuccess) {
//         resolve("Product ordered successfully!");
//       } else {
//         reject("Failed to order the product.");
//       }
//     }, 1000); // Simulating a delay for placing an order
//   });
  
//   // Stage 2: Product Shipped
//   const productShipped = new Promise((resolve, reject) => {
//     const shippingSuccess = true; // Set to false to simulate shipping failure
//     setTimeout(() => {
//       if (shippingSuccess) {
//         resolve("Product has been shipped!");
//       } else {
//         reject("Failed to ship the product.");
//       }
//     }, 2000); // Simulating a delay for shipping
//   });
  
//   // Stage 3: Product Delivered
//   const productDelivered = new Promise((resolve, reject) => {
//     const deliverySuccess = false; // Set to false to simulate delivery failure
//     setTimeout(() => {
//       if (deliverySuccess) {
//         resolve("Product delivered successfully!");
//       } else {
//         reject("Failed to deliver the product.");
//       }
//     }, 3000); // Simulating a delay for delivery
//   });
  
//   // Chain the promises together
//   productOrdered
//     .then((result) => {
//       console.log(result); // Product ordered
//       return productShipped; // Proceed to shipping
//     })
//     .then((result) => {
//       console.log(result); // Product shipped
//       return productDelivered; // Proceed to delivery
//     })
//     .then((result) => {
//       console.log(result); // Product delivered
//     })
//     .catch((error) => {
//       console.error("Error:", error); // Handle any errors in the chain
//     });
  

const step1=new Promise((res,rej)=>{
  try{
    if(1){
      setTimeout(()=>{
 res("successful 1")
      },2000)
    }else{
      setTimeout(()=>{
        rej("failed 1")
             },2000)
    }
  }catch(err){
    console("failed 1 "+ err.message);
  }
})


const step2=new Promise((res,rej)=>{
  try{
    if(0){
      setTimeout(()=>{
 res("successful 2")
      },2000)
    }else{
      setTimeout(()=>{
        rej("failed 2")
             },2000)
    }
  }catch(err){
   console(`failed 2 + ${err.message}`);
  }
})

step1.then(output=>{
  console.log(output);
  return step2;
}).then(output2=>{
  console.log(output2);
})
.catch(err=>{
  console.log(err);
})
  